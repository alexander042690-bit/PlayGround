import * as THREE from 'three'
import './styles.css'
import { createWorld } from './world.js'
import { createCar } from './car.js'
import { GameAudio } from './audio.js'

const $ = (id) => document.getElementById(id)
const clamp = THREE.MathUtils.clamp
const TAU = Math.PI * 2

const events = [
  { id: 'sprint', name: 'HORIZON SPRINT', sub: 'Costa del Sol · 1 Lap', laps: 1, aiBase: 42, reward: 4500, xp: 650 },
  { id: 'circuit', name: 'COASTAL CIRCUIT', sub: 'Costa del Sol · 2 Laps', laps: 2, aiBase: 48, reward: 9000, xp: 1100 },
  { id: 'showdown', name: 'SUNSET SHOWDOWN', sub: 'Costa del Sol · 2 Laps', laps: 2, aiBase: 54, reward: 16000, xp: 1800 },
]

const STORAGE_KEY = 'horizon6-costa-del-sol-v1'
const defaultSave = { credits: 12500, completed: [], best: {}, boards: [], xp: 0, muted: false }
let save = loadSave()

function loadSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultSave }
    return { ...defaultSave, ...JSON.parse(raw) }
  } catch {
    return { ...defaultSave }
  }
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(save)) } catch {}
}

const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
if (isTouch) document.body.classList.add('is-touch')

const keys = new Set()
const touch = { left: false, right: false, gas: false, brake: false, nitro: false, drift: false }
const input = { throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false }
const audio = new GameAudio()
audio.muted = save.muted

let renderer, scene, camera, world, playerCar
let mode = 'loading'
let previousMode = 'free'
let currentEvent = 0
let race = null
let countdown = 0
let countdownLast = 4
let goTimer = 0
let clock = 0
let resultsTimer = null
let titleAngle = -2.08
let cameraMode = 0
let toastTimer = null
let announcementTimer = null
let lastGround = null
let racePlace = 1
let resultsShown = false
let driftIdle = 0

const player = {
  pos: new THREE.Vector3(),
  heading: 0,
  speed: 0,
  steer: 0,
  slip: 0,
  boost: 100,
  boosting: false,
  drifting: false,
  driftTime: 0,
  driftScore: 0,
  driftMultiplier: 1,
  distance: 0,
  offroad: false,
  topSpeed: 0,
  gear: 1,
  waterTimer: 0,
  wrongWay: 0,
}

const ais = []
const aiColors = [0x48d8c8, 0xf1cc68, 0x5477d8, 0xe8e1d5, 0xa94739]
const ui = {}

function cacheUI() {
  const ids = [
    'hud', 'title-screen', 'race-strip', 'lap-value', 'time-value', 'pos-value',
    'objective-kicker', 'objective-title', 'objective-meta', 'credits-value',
    'sound-btn', 'pause-btn', 'checkpoint-callout', 'checkpoint-arrow', 'checkpoint-distance',
    'drift-readout', 'drift-value', 'drift-multiplier', 'minimap', 'toast', 'toast-icon', 'toast-text',
    'speed-value', 'rpm-path', 'gear-value', 'nitro-fill', 'surface-label', 'drive-mode',
    'event-prompt', 'prompt-title', 'prompt-meta', 'prompt-kicker', 'countdown', 'countdown-label',
    'announcement', 'announcement-kicker', 'announcement-title', 'results', 'results-kicker',
    'results-position', 'results-title', 'results-subtitle', 'results-stars', 'result-time',
    'result-lap', 'result-speed', 'result-reward', 'result-xp', 'continue-btn', 'retry-btn',
    'pause', 'resume-btn', 'pause-roam-btn', 'pause-title-btn', 'loading', 'loading-bar',
    'loading-number', 'transition-flash', 'race-btn', 'roam-btn', 'touch-controls',
  ]
  for (const id of ids) ui[id.replaceAll('-', '_')] = $(id)
  ui.mapCtx = ui.minimap.getContext('2d')
  ui.rpm_path.setAttribute('pathLength', '100')
}

async function init() {
  cacheUI()
  ui.loading_bar.style.width = '8%'
  ui.loading_number.textContent = '08'
  await nextFrame()
  await Promise.race([
    document.fonts.ready,
    new Promise((r) => setTimeout(r, 2400)),
  ])

  const canvas = $('scene')
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
  const pixelRatio = Math.min(window.devicePixelRatio || 1, isTouch ? 1.25 : 1.7)
  renderer.setPixelRatio(pixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.12
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(56, window.innerWidth / window.innerHeight, 0.1, 3600)

  ui.loading_bar.style.width = '30%'
  ui.loading_number.textContent = '30'
  await nextFrame()

  world = createWorld(scene, renderer)
  ui.loading_bar.style.width = '68%'
  ui.loading_number.textContent = '68'
  await nextFrame()

  playerCar = createCar({ color: 0xff4b18, accent: 0x12151a, player: true })
  scene.add(playerCar.group)

  for (let i = 0; i < aiColors.length; i++) {
    const car = createCar({ color: aiColors[i], accent: 0x15181d, player: false })
    scene.add(car.group)
    ais.push({
      car,
      index: i,
      distance: i * 45,
      speed: 12,
      baseLane: [-4.4, 4.4, -1.7, 1.7, -4.8][i],
      lane: 0,
      phase: Math.random() * 10,
      finished: false,
      finishHold: 0,
      cruise: 15 + i * 1.5,
      target: 20,
    })
  }

  hideCollectedBoards()
  updateWallet()
  bindUI()
  setMuted(save.muted, false)
  ui.loading_bar.style.width = '100%'
  ui.loading_number.textContent = '100'
  await wait(450)
  ui.loading.classList.add('is-done')

  spawnShowcase()
  mode = 'title'
  titleAngle = -2.08
  updateTitleCamera(0)
  window.__horizon = {
    scene, camera, renderer, world, playerCar, ais, player,
    get mode() { return mode },
  }
  requestAnimationFrame(loop)
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
function wait(ms) { return new Promise((r) => setTimeout(r, ms)) }

function bindUI() {
  $('race-btn').addEventListener('click', () => { audio.init(); startFestival() })
  $('roam-btn').addEventListener('click', () => { audio.init(); startFreeRoam(true) })
  $('continue-btn').addEventListener('click', () => continueFromResults())
  $('retry-btn').addEventListener('click', () => startRace(currentEvent))
  $('resume-btn').addEventListener('click', () => resumeGame())
  $('pause-roam-btn').addEventListener('click', () => returnToRoam())
  $('pause-title-btn').addEventListener('click', () => goToTitle())
  $('pause-btn').addEventListener('click', () => togglePause())
  $('sound-btn').addEventListener('click', () => setMuted(!audio.muted))
  document.querySelectorAll('[data-control]').forEach((btn) => {
    const control = btn.dataset.control
    const down = (e) => {
      e.preventDefault()
      btn.classList.add('is-down')
      if (control === 'gas' || control === 'brake' || control === 'nitro' || control === 'drift') touch[control] = true
      else touch[control] = true
    }
    const up = (e) => {
      e.preventDefault()
      btn.classList.remove('is-down')
      touch[control] = false
    }
    btn.addEventListener('pointerdown', down)
    btn.addEventListener('pointerup', up)
    btn.addEventListener('pointercancel', up)
    btn.addEventListener('pointerleave', (e) => { if (e.buttons === 0) up(e) })
    btn.addEventListener('contextmenu', (e) => e.preventDefault())
  })

  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  window.addEventListener('blur', () => { keys.clear(); clearTouch() })
  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && (mode === 'free' || mode === 'race' || mode === 'countdown')) togglePause()
  })
}

function clearTouch() {
  for (const k of Object.keys(touch)) touch[k] = false
  document.querySelectorAll('[data-control]').forEach((b) => b.classList.remove('is-down'))
}

function onKeyDown(e) {
  const code = e.code
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(code)) e.preventDefault()
  if (keys.has(code)) return
  keys.add(code)

  if (code === 'KeyM') { setMuted(!audio.muted); return }
  if (mode === 'title') {
    if (code === 'Enter' || code === 'Space') { audio.init(); startFestival() }
    else if (code === 'KeyF') { audio.init(); startFreeRoam(true) }
    return
  }
  if (mode === 'results') {
    if (code === 'Enter') continueFromResults()
    else if (code === 'KeyR') startRace(currentEvent)
    return
  }
  if (mode === 'paused') {
    if (code === 'Escape') resumeGame()
    return
  }
  if (code === 'Escape' || code === 'KeyP') { togglePause(); return }
  if (mode === 'free' && code === 'KeyE') tryStartEvent()
  if (code === 'KeyR') resetPlayer()
  if (code === 'KeyC') {
    cameraMode = (cameraMode + 1) % 3
    showToast('CAMERA', ['CHASE', 'HOOD', 'WIDE'][cameraMode])
  }
}

function onKeyUp(e) { keys.delete(e.code) }

function onResize() {
  if (!renderer || !camera) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.25 : 1.7))
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function readInput() {
  const left = keys.has('KeyA') || keys.has('ArrowLeft') || touch.left
  const right = keys.has('KeyD') || keys.has('ArrowRight') || touch.right
  input.steer = (left ? 1 : 0) - (right ? 1 : 0)
  input.throttle = (keys.has('KeyW') || keys.has('ArrowUp') || touch.gas) ? 1 : 0
  input.brake = (keys.has('KeyS') || keys.has('ArrowDown') || touch.brake) ? 1 : 0
  input.handbrake = keys.has('Space') || touch.drift
  input.nitro = keys.has('ShiftLeft') || keys.has('ShiftRight') || touch.nitro

  const pads = navigator.getGamepads ? navigator.getGamepads() : []
  const gp = pads && pads[0]
  if (gp) {
    const ax = gp.axes[0] || 0
    if (Math.abs(ax) > 0.15) input.steer = -Math.sign(ax) * Math.min(1, Math.abs(ax))
    if (gp.buttons[7]?.pressed) input.throttle = 1
    if (gp.buttons[6]?.pressed) input.brake = 1
    if (gp.buttons[5]?.pressed) input.nitro = true
    if (gp.buttons[0]?.pressed) input.handbrake = true
  }
}

function spawnShowcase() {
  const s = world.sampleAt(0.978)
  const p = s.point.clone().addScaledVector(s.normal, -3.1)
  const g = world.groundAt(p.x, p.z)
  player.pos.set(p.x, g.y + 0.03, p.z)
  player.heading = Math.PI + 0.14
  player.speed = 0
  player.steer = 0
  player.slip = 0
  player.drifting = false
  playerCar.group.visible = true
  playerCar.group.position.copy(player.pos)
  playerCar.group.rotation.y = player.heading
  playerCar.update(0, 0, 0, 0, 0, false, false)
}

function placeAtTrack(u, lane = -3.2, forwardOffset = 0) {
  const s = world.sampleAt(u)
  const p = s.point.clone().addScaledVector(s.normal, lane).addScaledVector(s.tangent, forwardOffset)
  const g = world.groundAt(p.x, p.z)
  player.pos.set(p.x, g.y + 0.03, p.z)
  player.heading = Math.atan2(s.tangent.x, s.tangent.z)
  player.speed = 0
  player.steer = 0
  player.slip = 0
  player.boost = 100
  player.distance = 0
  player.topSpeed = 0
  player.drifting = false
  player.driftScore = 0
  player.driftTime = 0
  playerCar.group.position.copy(player.pos)
  playerCar.group.rotation.y = player.heading
  playerCar.update(0, 0, 0, 0, 0, false, false)
  lastGround = g
}

function startFestival() {
  const idx = nextEventIndex()
  startRace(idx)
}

function nextEventIndex() {
  const idx = events.findIndex((e) => !save.completed.includes(e.id))
  return idx === -1 ? events.length - 1 : idx
}

function hideCollectedBoards() {
  if (!world) return
  world.collectibles.forEach((c, i) => {
    c.visible = !save.boards.includes(i)
  })
}

function updateWallet() {
  if (ui.credits_value) ui.credits_value.textContent = Math.floor(save.credits).toLocaleString('en-US')
}

function setMuted(muted, doPersist = true) {
  audio.setMuted(muted)
  save.muted = muted
  if (ui.sound_btn) ui.sound_btn.classList.toggle('is-muted', muted)
  if (doPersist) persist()
}

function formatTime(seconds) {
  if (!isFinite(seconds)) return '--:--.--'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  const cs = Math.floor((seconds % 1) * 100)
  return `${m}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
}
function formatRaceTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  const cs = Math.floor((seconds % 1) * 100)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
}
function ordinal(n) {
  return n === 1 ? '1ST' : n === 2 ? '2ND' : n === 3 ? '3RD' : `${n}TH`
}

function startRace(index) {
  audio.init()
  currentEvent = index
  const ev = events[index]
  clearTimeout(resultsTimer)
  resultsShown = false
  driftIdle = 0
  document.body.classList.remove('paused', 'results-open')
  ui.title_screen.classList.add('is-hidden')
  ui.results.classList.add('is-hidden')
  ui.pause.classList.add('is-hidden')
  ui.event_prompt.classList.add('is-hidden')
  ui.hud.classList.remove('is-hidden')
  ui.race_strip.classList.remove('is-hidden')
  ui.touch_controls.style.display = ''
  document.body.classList.add('playing')

  race = {
    event: ev,
    laps: ev.laps,
    lap: 1,
    nextGate: 0,
    time: 0,
    lapStart: 0,
    bestLap: Infinity,
    lastLap: 0,
    topSpeed: 0,
    place: 1,
    finished: false,
    finishTime: 0,
  }
  mode = 'countdown'
  countdown = 3.05
  countdownLast = 3
  goTimer = 0
  previousMode = 'countdown'

  placeAtTrack(0.978, -3.2)
  player.distance = -0.022 * world.trackLength
  player.boost = 100
  player.offroad = false
  lastGround = world.groundAt(player.pos.x, player.pos.z)
  resetAIsForRace()
  world.showCheckpoints()
  world.setCheckpointActive(0)
  world.eventMarker.visible = false
  ui.countdown.classList.remove('is-hidden')
  ui.countdown_label.textContent = '3'
  ui.countdown_label.style.animation = 'none'
  void ui.countdown_label.offsetWidth
  ui.countdown_label.style.animation = ''
  ui.checkpoint_callout.classList.remove('is-hidden')
  ui.drift_readout.classList.add('is-hidden')
  ui.announcement.classList.add('is-hidden')
  setStartLights(0)
  snapCamera()
  updateRaceHUD()
  showToast('EVENT', ev.name)
  audio.countdown(3)
}

function resetAIsForRace() {
  ais.forEach((ai, i) => {
    ai.distance = -(6.5 + i * 4.2)
    ai.baseLane = [4.2, -0.6, 1.8, -4.6, 3.4][i]
    ai.lane = ai.baseLane
    ai.speed = 0
    ai.finished = false
    ai.finishHold = 0
    ai.target = events[currentEvent].aiBase + i * 0.9
    ai.car.group.visible = true
    ai.car.group.position.y = 0.11
    placeAI(ai, 0)
  })
}

function placeAI(ai, dt) {
  const L = world.trackLength
  const u = ((ai.distance / L) % 1 + 1) % 1
  const p = world.curve.getPointAt(u)
  const tangent = world.curve.getTangentAt(u)
  const normal = new THREE.Vector3(-tangent.z, 0, tangent.x)
  const lane = ai.baseLane + Math.sin(ai.distance * 0.013 + ai.phase) * 1.25
  const x = p.x + normal.x * lane
  const z = p.z + normal.z * lane
  ai.car.group.position.set(x, 0.11, z)
  ai.car.group.rotation.y = Math.atan2(tangent.x, tangent.z)
  ai.car.update(dt, ai.speed, Math.sin(ai.phase + clock * 2) * 0.03, 0, 0, false, false)
}

function updateAIs(dt) {
  for (const ai of ais) {
    if (ai.finished) {
      ai.finishHold -= dt
      if (ai.finishHold <= 0) ai.car.group.visible = false
      continue
    }
    let target
    if (mode === 'countdown') {
      target = 0
      ai.speed = 0
    } else if (mode === 'race' || mode === 'finished' || mode === 'paused') {
      if (mode === 'paused' || mode === 'finished') target = ai.speed
      else {
        const u = ((ai.distance / world.trackLength) % 1 + 1) % 1
        const t0 = world.curve.getTangentAt(u)
        const t1 = world.curve.getTangentAt((u + 0.015) % 1)
        const turn = t0.angleTo(t1)
        target = ai.target - clamp(turn * 170, 0, 8)
        if (player.distance - ai.distance > 85) target += 6
        else if (ai.distance - player.distance > 85) target -= 4
      }
    } else {
      target = mode === 'title' ? ai.cruise * 1.25 : ai.cruise
    }
    ai.speed += (target - ai.speed) * Math.min(1, dt * 1.55)
    if (mode !== 'paused' && mode !== 'finished' && mode !== 'countdown') ai.distance += ai.speed * dt
    if (mode === 'race' && ai.distance >= world.trackLength * race.laps) {
      ai.finished = true
      ai.finishHold = 0.7
      ai.speed = 0
      continue
    }
    placeAI(ai, dt)
  }
}

function setStartLights(count) {
  const lights = world.startGate.userData.lights || []
  lights.forEach((l, i) => {
    const on = i < count
    l.material.color.setHex(on ? 0xff2b10 : 0x25120e)
  })
}
function setGoLights() {
  const lights = world.startGate.userData.lights || []
  lights.forEach((l) => l.material.color.setHex(0x4dff8c))
}

function startFreeRoam(fromTitle = false) {
  clearTimeout(resultsTimer)
  if (fromTitle) {
    audio.init()
    ui.title_screen.classList.add('is-hidden')
    document.body.classList.add('playing')
  }
  document.body.classList.remove('paused', 'results-open')
  ui.hud.classList.remove('is-hidden')
  ui.results.classList.add('is-hidden')
  ui.pause.classList.add('is-hidden')
  ui.race_strip.classList.add('is-hidden')
  ui.checkpoint_callout.classList.add('is-hidden')
  ui.drift_readout.classList.add('is-hidden')
  ui.countdown.classList.add('is-hidden')
  ui.announcement.classList.add('is-hidden')
  ui.touch_controls.style.display = ''
  mode = 'free'
  race = null
  currentEvent = nextEventIndex()
  world.hideCheckpoints()
  world.eventMarker.visible = true
  placeAtTrack(0.962, -3.2)
  snapCamera()
  updateFreeHUD()
  if (fromTitle) {
    showToast('WELCOME TO THE FESTIVAL', 'Follow the coast to the start gate')
    setTimeout(() => {
      if (mode === 'free') showToast('EVENT AHEAD', events[currentEvent].name)
    }, 2600)
  }
}

function updateRaceHUD() {
  if (!race) return
  ui.lap_value.innerHTML = `${race.lap}<span>/${race.laps}</span>`
  ui.time_value.textContent = formatRaceTime(race.time)
  ui.pos_value.innerHTML = `${race.place}<span>/${ais.length + 1}</span>`
}

function updateFreeHUD() {
  const ev = events[currentEvent]
  const d = Math.round(distanceToStart())
  const done = save.completed.length
  ui.objective_kicker.textContent = done === events.length ? 'FESTIVAL COMPLETE' : 'NEXT FESTIVAL EVENT'
  ui.objective_title.textContent = ev.name
  ui.objective_meta.textContent = `${d} M TO THE START GATE · ${save.boards.length}/10 BOARDS`
}

function distanceToStart() {
  const dx = player.pos.x - world.startPoint.x
  const dz = player.pos.z - world.startPoint.z
  return Math.hypot(dx, dz)
}

function tryStartEvent() {
  if (mode !== 'free') return
  if (distanceToStart() > 32) {
    showToast('EVENT GATE', 'Drive to the Horizon start arch')
    return
  }
  startRace(currentEvent)
}

function updatePlayer(dt) {
  readInput()
  if (mode === 'title') {
    playerCar.update(dt, 0, 0, 0, 0, false, false)
    return
  }
  if (mode === 'countdown') {
    player.speed = 0
    playerCar.update(dt, 0, 0, 0, 0, false, false)
    return
  }
  if (mode === 'finished') {
    player.speed *= 1 - Math.min(0.95, dt * 2.4)
    const forward = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading))
    player.pos.addScaledVector(forward, player.speed * dt)
    playerCar.update(dt, player.speed, 0, 0, 0, false, false)
    playerCar.group.position.copy(player.pos)
    playerCar.group.rotation.y = player.heading
    audio.update({ speed: player.speed, throttle: 0, drifting: 0, boosting: false, offroad: player.offroad, playing: true })
    return
  }

  const oldX = player.pos.x, oldZ = player.pos.z
  const gBefore = world.groundAt(player.pos.x, player.pos.z)
  const onRoad = gBefore.dist <= world.roadHalfWidth + 1.2
  player.offroad = !onRoad
  lastGround = gBefore

  player.steer += (input.steer - player.steer) * Math.min(1, dt * 7.5)
  const handbrake = input.handbrake
  const absSpeed = Math.abs(player.speed)

  const boostWanted = input.nitro && player.boost > 1 && input.throttle > 0 && player.speed > 3 && !player.offroad
  player.boosting = boostWanted
  if (boostWanted) {
    player.boost = Math.max(0, player.boost - 25 * dt)
    player.speed += 30 * dt
  } else {
    player.boost = Math.min(100, player.boost + (player.drifting ? 5.2 : 1.35) * dt)
  }

  if (input.throttle > 0 && player.speed >= 0) {
    const drag = player.offroad ? 0.42 : 1
    player.speed += 19.5 * (1 - Math.min(player.speed / 112, 0.96)) * dt * drag
  }
  if (input.brake > 0) {
    if (player.speed > 0.15) player.speed -= (player.offroad ? 45 : 34) * dt
    else player.speed = Math.max(-11, player.speed - 6.5 * dt)
  }
  if (input.throttle === 0 && input.brake === 0) {
    player.speed -= Math.sign(player.speed) * (1.0 + absSpeed * 0.043) * dt
    if (Math.abs(player.speed) < 0.2) player.speed = 0
  }

  if (!player.boosting) {
    const maxNormal = player.offroad ? 39 : 84
    if (player.speed > maxNormal) player.speed -= (player.offroad ? 25 : 8) * dt
    if (player.speed > 108) player.speed = 108
  }
  if (player.offroad) player.speed -= Math.sign(player.speed) * Math.min(absSpeed * 0.1, 1.6) * dt
  if (handbrake) player.speed -= Math.sign(player.speed) * 9 * dt
  player.speed = clamp(player.speed, -11, 108)

  const turnGrip = player.offroad ? 0.63 : 1
  const speedFactor = Math.min(1, absSpeed / 6)
  const turnRate = player.steer * 1.58 * (1 - Math.min(absSpeed / 112, 0.7)) * speedFactor * turnGrip * (handbrake ? 1.58 : 1)
  player.heading += turnRate * dt * (player.speed >= 0 ? 1 : -1)

  const wantDrift = handbrake && absSpeed > 11 && Math.abs(player.steer) > 0.18
  const targetSlip = wantDrift ? player.steer * 0.3 : player.steer * 0.025
  player.slip += (targetSlip - player.slip) * Math.min(1, dt * (wantDrift ? 7.5 : 5))
  player.drifting = Math.abs(player.slip) > 0.055 && absSpeed > 10

  const forward = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading))
  const side = new THREE.Vector3(Math.cos(player.heading), 0, -Math.sin(player.heading))
  player.pos.addScaledVector(forward, player.speed * dt)
  player.pos.addScaledVector(side, player.slip * player.speed * dt * 0.62)

  if (player.pos.z > 273) {
    player.pos.z = 273
    player.speed *= 0.45
    player.waterTimer += dt
    if (player.waterTimer > 1.5) {
      player.waterTimer = 0
      resetPlayer(true)
      showToast('SALTWATER', 'Back to the asphalt')
    }
  } else {
    player.waterTimer = 0
  }
  if (player.pos.x < -500 || player.pos.x > 500 || player.pos.z < -400) {
    resetPlayer(true)
  }

  const g = world.groundAt(player.pos.x, player.pos.z)
  player.offroad = g.dist > world.roadHalfWidth + 1.2
  lastGround = g
  player.pos.y = g.y + 0.03
  const dx = player.pos.x - oldX
  const dz = player.pos.z - oldZ
  if (mode === 'race' && race) {
    player.distance += dx * g.tangent.x + dz * g.tangent.z
    race.topSpeed = Math.max(race.topSpeed, Math.abs(player.speed) * 3.6)
  }
  player.topSpeed = Math.max(player.topSpeed, Math.abs(player.speed) * 3.6)

  const accel = input.throttle - input.brake
  playerCar.group.position.copy(player.pos)
  playerCar.group.rotation.y = player.heading + player.slip * 0.9
  playerCar.update(dt, player.speed, player.steer, player.slip, accel, player.boosting, input.brake > 0)
  playerCar.lights?.forEach((l) => { l.intensity = player.offroad ? 160 : 220 })

  player.gear = Math.max(1, Math.min(7, Math.ceil(Math.abs(player.speed) * 3.6 / 43)))
  const kmh = Math.abs(player.speed) * 3.6
  audio.update({
    speed: player.speed,
    throttle: input.throttle,
    drifting: player.drifting ? Math.abs(player.slip) * 2.4 : 0,
    boosting: player.boosting,
    offroad: player.offroad,
    playing: true,
  })

  if (player.drifting && !player.offroad) {
    player.driftTime += dt
    player.driftMultiplier = 1 + Math.min(4, player.driftTime * 0.42)
    player.driftScore += Math.abs(player.speed) * dt * 13 * player.driftMultiplier
    driftIdle = 0
    player.boost = Math.min(100, player.boost + 3.2 * dt)
  } else {
    player.driftTime = 0
    if (player.driftScore > 0) {
      driftIdle += dt
      if (driftIdle > 0.85) {
        const banked = Math.floor(player.driftScore)
        if (banked > 40) {
          save.credits += Math.floor(banked / 18)
          save.xp += Math.floor(banked / 25)
          persist()
          updateWallet()
          showToast('DRIFT BANK', `+${banked.toLocaleString('en-US')} PTS · +${Math.floor(banked / 18)} CR`)
          audio.collect()
        }
        player.driftScore = 0
        player.driftTime = 0
        player.driftMultiplier = 1
        driftIdle = 0
      }
    }
  }

  collectNearbyBoards()

  if (mode === 'race' && race) {
    checkRaceProgress()
  }
}

function collectNearbyBoards() {
  if (!world) return
  world.collectibles.forEach((c, i) => {
    if (!c.visible) return
    const dx = c.position.x - player.pos.x
    const dz = c.position.z - player.pos.z
    if (dx * dx + dz * dz < 12.5) {
      c.visible = false
      if (!save.boards.includes(i)) save.boards.push(i)
      save.credits += 350
      save.xp += 100
      persist()
      updateWallet()
      audio.collect()
      showToast('HORIZON BOARD', `${save.boards.length} / ${world.collectibles.length} FOUND · +350 CR`)
      if (save.boards.length === world.collectibles.length) {
        setTimeout(() => showToast('COLLECTION COMPLETE', 'Every Horizon board discovered'), 1700)
      }
    }
  })
}

function checkRaceProgress() {
  if (!race || mode !== 'race') return
  if (race.nextGate < world.checkpointGates.length) {
    const gate = world.checkpointGates[race.nextGate]
    const dx = player.pos.x - gate.point.x
    const dz = player.pos.z - gate.point.z
    if (Math.hypot(dx, dz) < 14.5) {
      race.nextGate++
      audio.checkpoint()
      if (race.nextGate < world.checkpointGates.length) {
        world.setCheckpointActive(race.nextGate)
        showToast('CHECKPOINT', `${race.nextGate} / ${world.checkpointGates.length} · KEEP PUSHING`)
      } else {
        world.setCheckpointActive(99)
        showToast('FINAL SECTOR', 'Hit the finish line')
      }
    }
  }

  if (race.nextGate >= world.checkpointGates.length) {
    const dist = distanceToStart()
    const lapThreshold = world.trackLength * (race.lap - 0.22)
    if (dist < 15 && player.distance > lapThreshold) {
      const lapTime = race.time - race.lapStart
      race.lastLap = lapTime
      race.bestLap = Math.min(race.bestLap, lapTime)
      if (race.lap >= race.laps) {
        finishRace()
      } else {
        race.lap++
        race.nextGate = 0
        race.lapStart = race.time
        world.setCheckpointActive(0)
        audio.checkpoint()
        showAnnouncement('LAP COMPLETE', `${race.lap} / ${race.laps}`)
        showToast('LAP', `${formatTime(lapTime)} · FINAL LAP`)
        updateRaceHUD()
      }
    }
  }
}

function finishRace() {
  if (!race || race.finished) return
  race.finished = true
  mode = 'finished'
  race.time = race.time
  racePlace = 1 + ais.filter((a) => a.finished).length
  race.place = racePlace
  setGoLights()
  world.hideCheckpoints()
  ui.checkpoint_callout.classList.add('is-hidden')
  ui.drift_readout.classList.add('is-hidden')

  const ev = events[currentEvent]
  const factor = racePlace === 1 ? 1 : racePlace <= 3 ? 0.62 : 0.36
  const reward = Math.round(ev.reward * factor)
  const xp = Math.round(ev.xp * factor)
  save.credits += reward
  save.xp += xp
  if (!save.completed.includes(ev.id)) save.completed.push(ev.id)
  const prev = save.best[ev.id]
  save.best[ev.id] = {
    time: Math.min(prev?.time ?? Infinity, race.time),
    place: Math.min(prev?.place ?? 99, racePlace),
    lap: Math.min(prev?.lap ?? Infinity, race.bestLap),
  }
  race.reward = reward
  race.xp = xp
  persist()
  updateWallet()
  updateRaceHUD()
  audio.finish()
  flashTransition()
  showAnnouncement(`FINISH · ${ordinal(racePlace)}`, ev.name)
  resultsTimer = setTimeout(() => showResults(racePlace), 1900)
}

function showResults(place) {
  if (resultsShown || mode === 'title') return
  resultsShown = true
  mode = 'results'
  document.body.classList.add('results-open')
  ui.touch_controls.style.display = 'none'
  const ev = events[currentEvent]
  const stars = place === 1 ? 3 : place <= 3 ? 2 : 1
  const allDone = save.completed.length >= events.length
  ui.results_kicker.textContent = allDone ? 'FESTIVAL COMPLETE' : 'EVENT COMPLETE'
  ui.results_position.innerHTML = `${place}<small>${place === 1 ? 'ST' : place === 2 ? 'ND' : place === 3 ? 'RD' : 'TH'}</small>`
  ui.results_title.textContent = allDone ? 'COSTA DEL SOL CHAMPION' : ev.name
  ui.results_subtitle.textContent = allDone ? 'Every festival event conquered · Season 01' : `${ev.sub} · ${place === 1 ? 'FLAWLESS VICTORY' : 'EVENT FINISHED'}`
  ui.results_stars.innerHTML = [0, 1, 2].map((i) => `<span class="star ${i < stars ? 'is-on' : ''}">★</span>`).join('')
  ui.result_time.textContent = formatTime(race.time)
  ui.result_lap.textContent = formatTime(race.bestLap)
  ui.result_speed.innerHTML = `${Math.round(race.topSpeed)}<span> KM/H</span>`
  ui.result_reward.textContent = `+ ${race.reward.toLocaleString('en-US')} CR`
  ui.result_xp.textContent = `+${race.xp.toLocaleString('en-US')} FESTIVAL XP`
  ui.continue_btn.querySelector('span').textContent = allDone ? 'EXPLORE COSTA DEL SOL' : 'CONTINUE FESTIVAL'
  ui.results.classList.remove('is-hidden')
  updateWallet()
}

function continueFromResults() {
  if (mode !== 'results') return
  clearTimeout(resultsTimer)
  ui.results.classList.add('is-hidden')
  document.body.classList.remove('results-open')
  startFreeRoam(false)
  if (save.completed.length >= events.length) {
    showToast('FESTIVAL COMPLETE', 'Costa del Sol is yours · Keep exploring')
  } else {
    const ev = events[currentEvent]
    showToast('NEXT EVENT UNLOCKED', ev.name)
  }
  audio.ui()
}

function togglePause() {
  if (mode === 'paused') { resumeGame(); return }
  if (!['free', 'race', 'countdown', 'finished'].includes(mode)) return
  previousMode = mode
  mode = 'paused'
  document.body.classList.add('paused')
  ui.pause.classList.remove('is-hidden')
  keys.clear()
  clearTouch()
  audio.ui()
}

function resumeGame() {
  if (mode !== 'paused') return
  mode = previousMode
  document.body.classList.remove('paused')
  ui.pause.classList.add('is-hidden')
  audio.ui()
}

function returnToRoam() {
  document.body.classList.remove('paused', 'results-open')
  ui.pause.classList.add('is-hidden')
  ui.results.classList.add('is-hidden')
  startFreeRoam(false)
  showToast('FREE ROAM', 'Costa del Sol is yours to explore')
}

function goToTitle() {
  clearTimeout(resultsTimer)
  resultsShown = false
  mode = 'title'
  race = null
  document.body.classList.remove('playing', 'paused', 'results-open')
  ui.hud.classList.add('is-hidden')
  ui.results.classList.add('is-hidden')
  ui.pause.classList.add('is-hidden')
  ui.event_prompt.classList.add('is-hidden')
  ui.countdown.classList.add('is-hidden')
  ui.announcement.classList.add('is-hidden')
  ui.title_screen.classList.remove('is-hidden')
  world.hideCheckpoints()
  world.eventMarker.visible = true
  ui.touch_controls.style.display = 'none'
  spawnShowcase()
  titleAngle = -2.08
  clock = 0
  setStartLights(0)
  audio.update({ speed: 0, throttle: 0, drifting: 0, boosting: false, offroad: false, playing: false })
}

function resetPlayer(silent = false) {
  if (!world || !['free', 'race', 'countdown'].includes(mode)) return
  const n = world.nearestTrack(player.pos.x, player.pos.z)
  const g = world.groundAt(n.point.x, n.point.z)
  player.pos.set(n.point.x, g.y + 0.03, n.point.z)
  player.heading = Math.atan2(n.tangent.x, n.tangent.z)
  player.speed = 0
  player.steer = 0
  player.slip = 0
  playerCar.group.position.copy(player.pos)
  playerCar.group.rotation.y = player.heading
  snapCamera()
  if (!silent) showToast('RESET', 'Back on the racing line')
  flashTransition()
}

function snapCamera() {
  if (!camera) return
  const forward = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading))
  const dist = cameraMode === 2 ? 13 : cameraMode === 1 ? 0.2 : 8.4
  const height = cameraMode === 2 ? 5.2 : cameraMode === 1 ? 1.55 : 3.1
  camera.position.set(player.pos.x - forward.x * dist, player.pos.y + height, player.pos.z - forward.z * dist)
  camera.lookAt(player.pos.x + forward.x * 8, player.pos.y + 1.2, player.pos.z + forward.z * 8)
  camera.fov = cameraMode === 1 ? 67 : 58
  camera.updateProjectionMatrix()
}

function updateCamera(dt) {
  if (mode === 'title') { updateTitleCamera(dt); return }
  if (mode === 'paused') return
  const forward = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading))
  const side = new THREE.Vector3(Math.cos(player.heading), 0, -Math.sin(player.heading))
  const speedAbs = Math.abs(player.speed)
  const speedNorm = Math.min(1, speedAbs / 86)
  let desired
  let look

  if (cameraMode === 1) {
    desired = new THREE.Vector3(
      player.pos.x + forward.x * 0.65 + side.x * 0.15,
      player.pos.y + 1.48,
      player.pos.z + forward.z * 0.65 + side.z * 0.15,
    )
    look = new THREE.Vector3(
      player.pos.x + forward.x * 28,
      player.pos.y + 1.35,
      player.pos.z + forward.z * 28,
    )
  } else if (cameraMode === 2) {
    desired = new THREE.Vector3(
      player.pos.x - forward.x * (12.5 + speedNorm * 2),
      player.pos.y + 5.2,
      player.pos.z - forward.z * (12.5 + speedNorm * 2),
    )
    look = new THREE.Vector3(player.pos.x + forward.x * 5, player.pos.y + 1.2, player.pos.z + forward.z * 5)
  } else {
    const back = 8.2 + speedNorm * 3.2
    const height = 2.9 + speedNorm * 0.5
    desired = new THREE.Vector3(
      player.pos.x - forward.x * back - side.x * player.slip * 2.2,
      player.pos.y + height,
      player.pos.z - forward.z * back - side.z * player.slip * 2.2,
    )
    look = new THREE.Vector3(
      player.pos.x + forward.x * (7.5 + speedNorm * 6),
      player.pos.y + 1.18,
      player.pos.z + forward.z * (7.5 + speedNorm * 6),
    )
  }

  const groundY = world.groundAt(desired.x, desired.z).y
  desired.y = Math.max(desired.y, groundY + 1.2)
  const lerpFactor = 1 - Math.exp(-dt * (cameraMode === 1 ? 14 : 6.5))
  camera.position.lerp(desired, lerpFactor)

  if (player.offroad && speedAbs > 14) {
    const shake = Math.min((speedAbs - 14) / 90, 1) * 0.055
    camera.position.x += (Math.random() - 0.5) * shake
    camera.position.y += (Math.random() - 0.5) * shake
  }

  camera.lookAt(look)
  const targetFov = (cameraMode === 1 ? 68 : cameraMode === 2 ? 55 : 58) + speedNorm * 10 + (player.boosting ? 3 : 0)
  camera.fov += (targetFov - camera.fov) * Math.min(1, dt * 3.5)
  camera.updateProjectionMatrix()
}

function updateTitleCamera(dt) {
  if (!playerCar) return
  const sway = Math.sin(clock * 0.09) * 0.32
  const breathe = Math.sin(clock * 0.13) * 0.08
  camera.position.set(
    player.pos.x + 1.55 + sway,
    player.pos.y + 2.15 + breathe,
    player.pos.z - 8.35,
  )
  camera.lookAt(player.pos.x + 0.1, player.pos.y + 1.05, player.pos.z + 10)
  camera.fov = 43
  camera.updateProjectionMatrix()
}

function showToast(icon, text) {
  if (!ui.toast) return
  clearTimeout(toastTimer)
  ui.toast_icon.textContent = icon === 'EVENT' ? '◆' : icon === 'DRIFT BANK' ? '⟡' : icon === 'HORIZON BOARD' ? '◈' : '✦'
  ui.toast_text.textContent = text
  ui.toast.classList.remove('is-hidden')
  ui.toast.style.animation = 'none'
  void ui.toast.offsetWidth
  ui.toast.style.animation = ''
  toastTimer = setTimeout(() => ui.toast.classList.add('is-hidden'), 2900)
}

function showAnnouncement(kicker, title, duration = 1700) {
  clearTimeout(announcementTimer)
  ui.announcement_kicker.textContent = kicker
  ui.announcement_title.textContent = title
  ui.announcement.classList.remove('is-hidden')
  ui.announcement.style.animation = 'none'
  void ui.announcement.offsetWidth
  ui.announcement.style.animation = ''
  announcementTimer = setTimeout(() => ui.announcement.classList.add('is-hidden'), duration)
}

function flashTransition() {
  ui.transition_flash.classList.remove('flash')
  void ui.transition_flash.offsetWidth
  ui.transition_flash.classList.add('flash')
}

function updateHUD() {
  if (!world || mode === 'title' || mode === 'loading') return
  const kmh = Math.round(Math.abs(player.speed) * 3.6)
  ui.speed_value.textContent = String(kmh)
  player.gear = Math.max(1, Math.min(7, Math.ceil(kmh / 43) || 1))
  ui.gear_value.textContent = String(player.gear)
  const span = 310 / 7
  const rpm = clamp(((kmh - (player.gear - 1) * span) / span) * 0.86 + 0.14, 0.03, 1)
  ui.rpm_path.style.strokeDashoffset = String(100 - rpm * 100)
  ui.nitro_fill.style.height = `${player.boost}%`
  ui.nitro_fill.parentElement.parentElement?.classList.toggle('is-active', player.boosting)
  ui.surface_label.textContent = player.offroad ? 'OFF-ROAD' : 'ASPHALT'
  ui.drive_mode.textContent = player.boosting ? 'NITRO' : 'AWD'

  if (player.driftScore > 30 && (player.drifting || driftIdle < 0.85)) {
    ui.drift_readout.classList.remove('is-hidden')
    ui.drift_value.textContent = Math.floor(player.driftScore).toLocaleString('en-US')
    ui.drift_multiplier.textContent = `x${player.driftMultiplier.toFixed(1)}`
  } else {
    ui.drift_readout.classList.add('is-hidden')
  }

  if (mode === 'race' || mode === 'countdown' || mode === 'finished') {
    if (race) {
      race.place = 1 + ais.filter((a) => a.distance > player.distance).length
      updateRaceHUD()
      ui.objective_kicker.textContent = 'EVENT IN PROGRESS'
      ui.objective_title.textContent = race.event.name
      ui.objective_meta.textContent = `CHECKPOINT ${Math.min(race.nextGate + 1, 4)} / 4 · ${ordinal(race.place)} PLACE`
      updateCheckpointCallout()
    }
  } else if (mode === 'free') {
    updateFreeHUD()
  }

  if (mode === 'free') {
    const d = distanceToStart()
    if (d < 32) {
      ui.event_prompt.classList.remove('is-hidden')
      ui.prompt_kicker.textContent = save.completed.length >= events.length ? 'FESTIVAL EVENT · REPLAY' : 'FESTIVAL EVENT'
      ui.prompt_title.textContent = events[currentEvent].name
      ui.prompt_meta.textContent = `${events[currentEvent].laps} ${events[currentEvent].laps === 1 ? 'LAP' : 'LAPS'} · ${ais.length} RIVALS`
    } else {
      ui.event_prompt.classList.add('is-hidden')
    }
  } else {
    ui.event_prompt.classList.add('is-hidden')
  }

  drawMinimap()
}

function updateCheckpointCallout() {
  if (!race) return
  const target = race.nextGate < world.checkpointGates.length
    ? world.checkpointGates[race.nextGate].point
    : world.startPoint
  const dx = target.x - player.pos.x
  const dz = target.z - player.pos.z
  const dist = Math.hypot(dx, dz)
  const forward = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading))
  const right = new THREE.Vector3(-Math.cos(player.heading), 0, Math.sin(player.heading))
  const localRight = dx * right.x + dz * right.z
  const localForward = dx * forward.x + dz * forward.z
  const angle = Math.atan2(localRight, localForward)
  ui.checkpoint_arrow.style.transform = `rotate(${angle}rad)`
  ui.checkpoint_distance.innerHTML = `${Math.round(dist)}<span> M</span>`
  ui.checkpoint_callout.querySelector('small').textContent =
    race.nextGate >= world.checkpointGates.length ? 'FINISH LINE' : `CHECKPOINT ${race.nextGate + 1} / 4`
}

function mapPoint(x, z) {
  return [160 + x * 0.655, 164 + z * 0.655]
}

let minimapPath = null
function buildMinimapPath() {
  minimapPath = new Path2D()
  for (let i = 0; i < world.samples.length; i += 3) {
    const s = world.samples[i]
    const [x, y] = mapPoint(s.point.x, s.point.z)
    if (i === 0) minimapPath.moveTo(x, y)
    else minimapPath.lineTo(x, y)
  }
  minimapPath.closePath()
}

function drawMinimap() {
  if (!world || !ui.mapCtx) return
  if (!minimapPath) buildMinimapPath()
  const ctx = ui.mapCtx
  const W = 320, H = 320
  ctx.clearRect(0, 0, W, H)
  ctx.save()
  ctx.beginPath()
  ctx.arc(160, 160, 158, 0, TAU)
  ctx.clip()
  ctx.fillStyle = 'rgba(8, 17, 22, 0.42)'
  ctx.fillRect(0, 0, W, H)

  // subtle grid
  ctx.strokeStyle = 'rgba(255,255,255,.035)'
  ctx.lineWidth = 1
  for (let i = 30; i < W; i += 48) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke()
  }

  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = 'rgba(255,246,231,.12)'
  ctx.lineWidth = 11
  ctx.stroke(minimapPath)
  ctx.strokeStyle = 'rgba(255,102,40,.9)'
  ctx.lineWidth = 2.3
  ctx.stroke(minimapPath)

  world.collectibles.forEach((c) => {
    if (!c.visible) return
    const [x, y] = mapPoint(c.position.x, c.position.z)
    ctx.fillStyle = '#ffc36a'
    ctx.beginPath(); ctx.arc(x, y, 2.2, 0, TAU); ctx.fill()
  })

  if (mode === 'race' || mode === 'countdown' || mode === 'finished') {
    world.checkpointGates.forEach((g, i) => {
      if (!race) return
      const [x, y] = mapPoint(g.point.x, g.point.z)
      ctx.fillStyle = i === race.nextGate ? '#48f2dc' : 'rgba(255,255,255,.28)'
      ctx.beginPath(); ctx.arc(x, y, i === race.nextGate ? 4 : 2.2, 0, TAU); ctx.fill()
    })
    if (race?.nextGate >= 4) {
      const [x, y] = mapPoint(world.startPoint.x, world.startPoint.z)
      ctx.fillStyle = '#ff5b22'
      ctx.beginPath(); ctx.arc(x, y, 4.5, 0, TAU); ctx.fill()
    }
  } else {
    const [x, y] = mapPoint(world.startPoint.x, world.startPoint.z)
    const pulse = 5 + Math.sin(clock * 3.5) * 2
    ctx.strokeStyle = 'rgba(255,91,34,.85)'
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(x, y, pulse, 0, TAU); ctx.stroke()
    ctx.fillStyle = '#ff7a35'
    ctx.beginPath(); ctx.arc(x, y, 3.2, 0, TAU); ctx.fill()
  }

  for (const ai of ais) {
    if (!ai.car.group.visible) continue
    const u = ((ai.distance / world.trackLength) % 1 + 1) % 1
    const p = world.curve.getPointAt(u)
    const [x, y] = mapPoint(p.x, p.z)
    ctx.fillStyle = 'rgba(255,255,255,.7)'
    ctx.beginPath(); ctx.arc(x, y, 2.1, 0, TAU); ctx.fill()
  }

  const [px, py] = mapPoint(player.pos.x, player.pos.z)
  ctx.save()
  ctx.translate(px, py)
  ctx.rotate(Math.PI - player.heading)
  ctx.fillStyle = '#ff5b22'
  ctx.strokeStyle = '#fff2e4'
  ctx.lineWidth = 1.3
  ctx.beginPath()
  ctx.moveTo(0, -8.5)
  ctx.lineTo(5.5, 6)
  ctx.lineTo(0, 3.2)
  ctx.lineTo(-5.5, 6)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  // compass
  ctx.fillStyle = 'rgba(255,255,255,.5)'
  ctx.font = '700 15px "Barlow Condensed", sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('N', 160, 26)
  ctx.restore()
}

let lastFrame = 0
function loop(now) {
  if (!lastFrame) lastFrame = now
  const dt = Math.min((now - lastFrame) / 1000, 0.05)
  lastFrame = now
  clock += dt

  world.update(dt, clock)

  if (mode === 'title') {
    updatePlayer(dt)
    updateAIs(dt)
    updateTitleCamera(dt)
    audio.update({ speed: 0, throttle: 0, drifting: 0, boosting: false, offroad: false, playing: false })
  } else if (mode === 'countdown') {
    updatePlayer(dt)
    updateAIs(dt)
    updateCamera(dt)
    countdown -= dt
    const n = Math.ceil(countdown)
    if (n !== countdownLast && n >= 1 && n <= 3) {
      countdownLast = n
      ui.countdown_label.textContent = String(n)
      ui.countdown_label.style.animation = 'none'
      void ui.countdown_label.offsetWidth
      ui.countdown_label.style.animation = ''
      setStartLights(5 - n)
      audio.countdown(n)
    }
    if (countdown <= 0) beginRace()
    updateHUD()
  } else if (mode === 'race') {
    race.time += dt
    if (goTimer > 0) {
      goTimer -= dt
      if (goTimer <= 0) ui.countdown.classList.add('is-hidden')
    }
    updatePlayer(dt)
    updateAIs(dt)
    updateCamera(dt)
    updateHUD()
  } else if (mode === 'free') {
    updatePlayer(dt)
    updateAIs(dt)
    updateCamera(dt)
    updateHUD()
  } else if (mode === 'finished') {
    updatePlayer(dt)
    updateAIs(dt)
    updateCamera(dt)
    updateHUD()
  } else if (mode === 'results') {
    updateCamera(dt)
  } else if (mode === 'paused') {
    audio.update({ speed: 0, throttle: 0, drifting: 0, boosting: false, offroad: false, playing: false })
  }

  if (playerCar) world.setSunFor(player.pos)
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}

function beginRace() {
  mode = 'race'
  race.time = 0
  race.lapStart = 0
  countdownLast = 0
  goTimer = 0.9
  ui.countdown_label.textContent = 'GO'
  ui.countdown.classList.remove('is-hidden')
  ui.countdown_label.style.animation = 'none'
  void ui.countdown_label.offsetWidth
  ui.countdown_label.style.animation = ''
  setGoLights()
  audio.countdown(0)
  showAnnouncement('LIGHTS OUT', 'GO GO GO', 950)
  updateRaceHUD()
}

init().catch((err) => {
  console.error(err)
  const loading = $('loading')
  if (loading) {
    loading.querySelector('.loading__text span').textContent = 'SOMETHING WENT OFF TRACK'
    loading.querySelector('.loading__text small').textContent = 'REFRESH TO TRY AGAIN'
  }
})
