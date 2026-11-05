export class GameAudio {
  constructor() {
    this.ctx = null
    this.started = false
    this.muted = false
    this.master = null
    this.engineGain = null
    this.engineFilter = null
    this.engineA = null
    this.engineB = null
    this.windGain = null
    this.screechGain = null
    this.boosting = false
    this.gear = 1
  }

  init() {
    if (this.started) {
      this.ctx?.resume()
      return
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    const ctx = this.ctx = new AC()
    this.started = true

    const comp = ctx.createDynamicsCompressor()
    comp.threshold.value = -16
    comp.knee.value = 22
    comp.ratio.value = 5
    comp.attack.value = 0.004
    comp.release.value = 0.2
    comp.connect(ctx.destination)

    this.master = ctx.createGain()
    this.master.gain.value = this.muted ? 0 : 0.72
    this.master.connect(comp)

    // Engine
    this.engineFilter = ctx.createBiquadFilter()
    this.engineFilter.type = 'lowpass'
    this.engineFilter.frequency.value = 620
    this.engineFilter.Q.value = 3.2
    this.engineGain = ctx.createGain()
    this.engineGain.gain.value = 0
    this.engineFilter.connect(this.engineGain)
    this.engineGain.connect(this.master)

    this.engineA = ctx.createOscillator()
    this.engineA.type = 'sawtooth'
    this.engineA.frequency.value = 55
    this.engineA.connect(this.engineFilter)
    this.engineA.start()

    this.engineB = ctx.createOscillator()
    this.engineB.type = 'square'
    this.engineB.frequency.value = 27.5
    const bGain = ctx.createGain()
    bGain.gain.value = 0.32
    this.engineB.connect(bGain)
    bGain.connect(this.engineFilter)
    this.engineB.start()

    // Wind / road noise
    const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
    const nd = noise.getChannelData(0)
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1
    this.noiseBuffer = noise

    const wind = ctx.createBufferSource()
    wind.buffer = noise
    wind.loop = true
    const windFilter = ctx.createBiquadFilter()
    windFilter.type = 'bandpass'
    windFilter.frequency.value = 800
    windFilter.Q.value = 0.55
    this.windGain = ctx.createGain()
    this.windGain.gain.value = 0
    wind.connect(windFilter)
    windFilter.connect(this.windGain)
    this.windGain.connect(this.master)
    wind.start()

    // Tyre screech
    const screech = ctx.createBufferSource()
    screech.buffer = noise
    screech.loop = true
    const sf = ctx.createBiquadFilter()
    sf.type = 'bandpass'
    sf.frequency.value = 2100
    sf.Q.value = 6
    this.screechGain = ctx.createGain()
    this.screechGain.gain.value = 0
    screech.connect(sf)
    sf.connect(this.screechGain)
    this.screechGain.connect(this.master)
    screech.start()
  }

  setMuted(muted) {
    this.muted = muted
    if (this.master) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime)
      this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.72, this.ctx.currentTime + 0.12)
    }
  }

  update({ speed = 0, throttle = 0, drifting = 0, boosting = false, offroad = false, playing = false }) {
    if (!this.started) return
    const t = this.ctx.currentTime
    const kmh = Math.abs(speed) * 3.6
    const gear = Math.max(1, Math.min(7, Math.ceil(kmh / 42)))
    this.gear = gear
    const rpm = ((kmh % 42) / 42 + gear * 0.4) / 7
    const freq = 32 + rpm * 125 + (boosting ? 22 : 0)
    this.engineA.frequency.setTargetAtTime(freq, t, 0.035)
    this.engineB.frequency.setTargetAtTime(freq * 0.501, t, 0.035)
    this.engineFilter.frequency.setTargetAtTime(380 + rpm * 1050 + throttle * 520, t, 0.05)
    const vol = playing ? (0.012 + Math.min(kmh / 290, 1) * 0.045 + throttle * 0.012) : 0.004
    this.engineGain.gain.setTargetAtTime(vol, t, 0.08)
    this.windGain.gain.setTargetAtTime(playing ? Math.min(kmh / 300, 1) ** 1.7 * 0.032 + (offroad ? 0.012 : 0) : 0, t, 0.1)
    this.screechGain.gain.setTargetAtTime(playing ? Math.min(drifting * 0.035, 0.03) : 0, t, 0.045)
  }

  blip(freq = 440, duration = 0.08, type = 'square', volume = 0.05) {
    if (!this.started || this.muted) return
    const t = this.ctx.currentTime
    const o = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    o.type = type
    o.frequency.value = freq
    g.gain.setValueAtTime(volume, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration)
    o.connect(g)
    g.connect(this.master)
    o.start(t)
    o.stop(t + duration + 0.02)
  }

  countdown(n) {
    if (n <= 0) {
      this.blip(880, 0.32, 'sawtooth', 0.07)
      this.blip(1320, 0.28, 'sine', 0.045)
    } else {
      this.blip(330 + (3 - n) * 30, 0.12, 'square', 0.045)
    }
  }

  collect() {
    this.blip(740, 0.1, 'sine', 0.06)
    setTimeout(() => this.blip(1110, 0.16, 'sine', 0.05), 70)
    setTimeout(() => this.blip(1480, 0.2, 'sine', 0.035), 150)
  }

  checkpoint() {
    this.blip(660, 0.09, 'sine', 0.045)
    setTimeout(() => this.blip(990, 0.12, 'sine', 0.04), 60)
  }

  finish() {
    const notes = [523, 659, 784, 1047]
    notes.forEach((f, i) => setTimeout(() => this.blip(f, 0.4, 'sawtooth', 0.045), i * 110))
  }

  ui() {
    this.blip(520, 0.045, 'sine', 0.025)
  }

  impact() {
    if (!this.started || this.muted) return
    const t = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.noiseBuffer
    const f = this.ctx.createBiquadFilter()
    f.type = 'lowpass'
    f.frequency.value = 420
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.14, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22)
    src.connect(f); f.connect(g); g.connect(this.master)
    src.start(t); src.stop(t + 0.24)
  }
}
