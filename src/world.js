import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

const ROAD_HALF = 8.4
const SHOULDER = 2.8
const TRACK_POINTS = [
  [0, 180], [76, 173], [137, 145], [173, 92], [181, 22],
  [169, -54], [134, -119], [73, -157], [-8, -168], [-87, -151],
  [-149, -108], [-182, -49], [-187, 27], [-167, 94], [-121, 144], [-61, 173],
]

const SAND = 0xd9b984
const GRASS = 0x6e7b42
const FOG = 0xe6a57f

const rand = mulberry32(82621)
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function smoothstep(a, b, x) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
function colorSpace(tex) {
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  return c
}

function asphaltTexture() {
  const c = makeCanvas(512, 512)
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#54575d'
  ctx.fillRect(0, 0, 512, 512)
  for (let i = 0; i < 18000; i++) {
    const v = 50 + Math.random() * 70
    ctx.fillStyle = `rgba(${v},${v},${v},${0.15 + Math.random() * 0.25})`
    const s = Math.random() * 2 + 0.4
    ctx.fillRect(Math.random() * 512, Math.random() * 512, s, s)
  }
  for (let i = 0; i < 28; i++) {
    ctx.fillStyle = `rgba(24,24,28,${0.03 + Math.random() * .04})`
    ctx.beginPath()
    ctx.ellipse(Math.random() * 512, Math.random() * 512, 18 + Math.random() * 65, 6 + Math.random() * 20, Math.random() * Math.PI, 0, Math.PI * 2)
    ctx.fill()
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.anisotropy = 8
  return colorSpace(t)
}

function checkerTexture() {
  const c = makeCanvas(512, 96)
  const ctx = c.getContext('2d')
  const n = 16, m = 3
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      ctx.fillStyle = (x + y) % 2 ? '#151515' : '#f4f2e8'
      ctx.fillRect(x * (512 / n), y * (96 / m), 512 / n + 1, 96 / m + 1)
    }
  }
  return colorSpace(new THREE.CanvasTexture(c))
}

function textTexture({ text, sub = '', align = 'center', bg = 'rgba(9,13,18,.92)', fg = '#ffffff', accent = '#ff5b22', w = 1024, h = 256, border = true }) {
  const c = makeCanvas(w, h)
  const ctx = c.getContext('2d')
  if (bg) {
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, w, h)
  }
  if (border) {
    ctx.strokeStyle = 'rgba(255,255,255,.15)'
    ctx.lineWidth = 2
    ctx.strokeRect(1, 1, w - 2, h - 2)
  }
  const x = align === 'left' ? 52 : align === 'right' ? w - 52 : w / 2
  ctx.textAlign = align
  ctx.textBaseline = 'middle'
  if (sub) {
    ctx.fillStyle = accent
    ctx.font = `600 ${Math.round(h * .105)}px Inter, sans-serif`
    ctx.letterSpacing = `${Math.round(h * .02)}px`
    ctx.fillText(sub.toUpperCase(), x, h * .29)
  }
  ctx.fillStyle = fg
  ctx.font = `italic 900 ${Math.round(h * .38)}px "Barlow Condensed", sans-serif`
  ctx.letterSpacing = '3px'
  ctx.fillText(text.toUpperCase(), x, sub ? h * .6 : h * .52)
  const t = new THREE.CanvasTexture(c)
  t.anisotropy = 8
  return colorSpace(t)
}

function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,120,60,0)') {
  const c = makeCanvas(256, 256)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  g.addColorStop(0, inner)
  g.addColorStop(.16, inner)
  g.addColorStop(.42, 'rgba(255,160,80,.35)')
  g.addColorStop(1, outer)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 256, 256)
  return colorSpace(new THREE.CanvasTexture(c))
}

function cloudTexture() {
  const c = makeCanvas(512, 256)
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 512, 256)
  for (let i = 0; i < 22; i++) {
    const x = 60 + rand() * 390, y = 90 + rand() * 90, r = 25 + rand() * 55
    const g = ctx.createRadialGradient(x, y, 1, x, y, r)
    g.addColorStop(0, 'rgba(255,228,210,.36)')
    g.addColorStop(.7, 'rgba(255,200,180,.12)')
    g.addColorStop(1, 'rgba(255,190,170,0)')
    ctx.fillStyle = g
    ctx.fillRect(x - r, y - r, r * 2, r * 2)
  }
  return colorSpace(new THREE.CanvasTexture(c))
}

function envTexture() {
  const c = makeCanvas(1024, 512)
  const ctx = c.getContext('2d')
  const grad = ctx.createLinearGradient(0, 0, 0, 512)
  grad.addColorStop(0, '#07142a')
  grad.addColorStop(.37, '#5a6680')
  grad.addColorStop(.5, '#f4a06d')
  grad.addColorStop(.57, '#7c5b54')
  grad.addColorStop(.72, '#263237')
  grad.addColorStop(1, '#0b1117')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 1024, 512)
  const sun = ctx.createRadialGradient(710, 260, 5, 710, 260, 180)
  sun.addColorStop(0, 'rgba(255,245,210,1)')
  sun.addColorStop(.06, 'rgba(255,196,104,.95)')
  sun.addColorStop(.28, 'rgba(255,105,50,.25)')
  sun.addColorStop(1, 'rgba(255,100,40,0)')
  ctx.fillStyle = sun
  ctx.fillRect(0, 0, 1024, 512)
  const t = new THREE.CanvasTexture(c)
  t.mapping = THREE.EquirectangularReflectionMapping
  return colorSpace(t)
}

function ribbonGeometry(samples, leftOffset, rightOffset, y, texRepeat = 1) {
  const positions = [], uvs = [], indices = []
  let dist = 0
  for (let i = 0; i < samples.length; i++) {
    const s = samples[i]
    if (i > 0) dist += s.point.distanceTo(samples[i - 1].point)
    const l = leftOffset
    const r = rightOffset
    positions.push(
      s.point.x + s.normal.x * l, y, s.point.z + s.normal.z * l,
      s.point.x + s.normal.x * r, y, s.point.z + s.normal.z * r,
    )
    uvs.push(0, dist / 8 * texRepeat, 1, dist / 8 * texRepeat)
  }
  const n = samples.length
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n
    const a = i * 2, b = i * 2 + 1, c = j * 2, d = j * 2 + 1
    indices.push(a, b, c, b, d, c)
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  g.setIndex(indices)
  g.computeVertexNormals()
  return g
}

function mergeBoxes(boxes) {
  const geos = boxes.map(({ w, h, d, x, y, z, ry = 0, rz = 0 }) => {
    const g = new THREE.BoxGeometry(w, h, d)
    if (rz) g.rotateZ(rz)
    if (ry) g.rotateY(ry)
    g.translate(x, y, z)
    return g
  })
  return mergeGeometries(geos, false)
}

function makeCurve() {
  return new THREE.CatmullRomCurve3(
    TRACK_POINTS.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    true,
    'centripetal',
    0.5,
  )
}

export function createWorld(scene, renderer) {
  const group = new THREE.Group()
  group.name = 'Costa del Sol'
  scene.add(group)

  const curve = makeCurve()
  curve.arcLengthDivisions = 1200
  const trackLength = curve.getLength()
  const SAMPLE_COUNT = 760
  const samples = []
  for (let i = 0; i < SAMPLE_COUNT; i++) {
    const u = i / SAMPLE_COUNT
    const point = curve.getPointAt(u)
    const tangent = curve.getTangentAt(u).normalize()
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x)
    samples.push({ u, point, tangent, normal })
  }

  const env = envTexture()
  scene.environment = env
  scene.environmentIntensity = 0.9
  scene.fog = new THREE.Fog(FOG, 230, 1250)
  scene.background = new THREE.Color(0x6e7686)

  // ---------------- sky ----------------
  const sunDir = new THREE.Vector3(0.26, 0.16, 1).normalize()
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uSun: { value: sunDir },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform vec3 uSun;
      varying vec3 vDir;
      void main() {
        float h = clamp(vDir.y, -0.12, 1.0);
        vec3 top = vec3(0.035, 0.085, 0.19);
        vec3 mid = vec3(0.43, 0.43, 0.49);
        vec3 horizon = vec3(1.02, 0.49, 0.28);
        vec3 low = vec3(0.17, 0.08, 0.10);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.30, h));
        col = mix(col, top, smoothstep(0.25, 0.88, h));
        col = mix(low, col, smoothstep(-0.09, 0.02, h));
        float sd = max(dot(normalize(vDir), normalize(uSun)), 0.0);
        col += vec3(1.0, 0.38, 0.10) * pow(sd, 12.0) * 0.40;
        col += vec3(1.0, 0.72, 0.36) * pow(sd, 180.0) * 1.5;
        col += vec3(1.0, 0.94, 0.76) * smoothstep(0.99955, 0.9998, sd) * 4.0;
        float band = sin(vDir.y * 115.0 + vDir.x * 7.0) * 0.5 + 0.5;
        col += vec3(0.10, 0.05, 0.035) * band * smoothstep(0.02, 0.2, h) * (1.0 - smoothstep(0.2, 0.4, h)) * 0.24;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
  const sky = new THREE.Mesh(new THREE.SphereGeometry(2600, 48, 28), skyMat)
  sky.frustumCulled = false
  sky.renderOrder = -1000
  scene.add(sky)

  // sun glow sprite
  glowTex = glowTexture('rgba(255,255,255,1)', 'rgba(255,100,40,0)')
  const sunGlowTex = glowTexture('rgba(255,248,220,1)', 'rgba(255,90,40,0)')
  const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: sunGlowTex,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    opacity: .88,
  }))
  sunGlow.position.copy(sunDir).multiplyScalar(2200)
  sunGlow.scale.set(900, 900, 1)
  scene.add(sunGlow)

  const cloudTex = cloudTexture()
  const clouds = []
  for (let i = 0; i < 12; i++) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({
      map: cloudTex,
      transparent: true,
      opacity: 0.3 + Math.random() * 0.28,
      depthWrite: false,
      color: new THREE.Color().setHSL(0.045 + Math.random() * 0.04, 0.45, 0.7),
    }))
    const angle = Math.random() * Math.PI * 2
    const radius = 700 + Math.random() * 900
    m.position.set(Math.cos(angle) * radius, 90 + Math.random() * 220, Math.sin(angle) * radius)
    m.scale.set(320 + Math.random() * 380, 110 + Math.random() * 120, 1)
    m.userData.speed = 0.4 + Math.random() * 0.8
    scene.add(m)
    clouds.push(m)
  }

  // ---------------- lighting ----------------
  const hemi = new THREE.HemisphereLight(0xffc9a2, 0x27352f, 1.15)
  scene.add(hemi)
  const sun = new THREE.DirectionalLight(0xffb070, 3.1)
  sun.position.set(180, 190, 240)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.near = 6
  sun.shadow.camera.far = 420
  sun.shadow.camera.left = -85
  sun.shadow.camera.right = 85
  sun.shadow.camera.top = 85
  sun.shadow.camera.bottom = -85
  sun.shadow.bias = -0.0007
  sun.shadow.normalBias = 0.05
  scene.add(sun)
  scene.add(sun.target)

  // ---------------- terrain ----------------
  const terrainHeight = (x, z, dist) => {
    const fall = smoothstep(12, 58, dist)
    const hills = Math.sin(x * 0.018 + z * 0.003 + 1.2) * 2.8
      + Math.cos(z * 0.021 - x * 0.002) * 2.1
      + Math.sin((x + z) * 0.045) * 0.55
    let h = hills * fall
    if (z > 196) h *= 0.08
    if (z < -180) h *= 1.8
    if (z > 282) return -5.5 - (z - 282) * 0.08
    return h
  }

  const groundGeo = new THREE.PlaneGeometry(1080, 900, 132, 112)
  groundGeo.rotateX(-Math.PI / 2)
  const gp = groundGeo.attributes.position
  const groundColors = []
  for (let i = 0; i < gp.count; i++) {
    const x = gp.getX(i)
    const z = gp.getZ(i) - 35
    let min = Infinity
    for (let j = 0; j < samples.length; j += 2) {
      const s = samples[j]
      const dx = x - s.point.x, dz = z - s.point.z
      const d = dx * dx + dz * dz
      if (d < min) min = d
    }
    const dist = Math.sqrt(min)
    const y = terrainHeight(x, z, dist)
    gp.setZ(i, z)
    gp.setY(i, y)
    const sandAmount = smoothstep(180, 240, z) + Math.max(0, 1 - smoothstep(10, 18, dist)) * 0.35
    const dry = 0.5 + 0.5 * Math.sin(x * 0.12 + z * 0.13)
    const base = new THREE.Color(GRASS).lerp(new THREE.Color(0x9c7c48), dry * 0.45)
    base.lerp(new THREE.Color(SAND), Math.min(1, sandAmount))
    const shade = 0.86 + Math.random() * 0.2
    base.multiplyScalar(shade)
    groundColors.push(base.r, base.g, base.b)
  }
  groundGeo.setAttribute('color', new THREE.Float32BufferAttribute(groundColors, 3))
  groundGeo.computeVertexNormals()
  const groundMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.98,
    metalness: 0,
    envMapIntensity: 0.2,
  })
  const ground = new THREE.Mesh(groundGeo, groundMat)
  ground.receiveShadow = true
  group.add(ground)

  // beach strip
  const beach = new THREE.Mesh(
    new THREE.PlaneGeometry(1050, 78, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xd7b47e, roughness: 0.92, metalness: 0 }),
  )
  beach.rotation.x = -Math.PI / 2
  beach.position.set(0, 0.015, 239)
  beach.receiveShadow = true
  group.add(beach)

  // ocean
  const oceanUniforms = { uTime: { value: 0 }, uSun: { value: sunDir } }
  const oceanMat = new THREE.ShaderMaterial({
    uniforms: oceanUniforms,
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec3 p = position;
        float w1 = sin(p.x * 0.08 + uTime * 1.2) * 0.16;
        float w2 = cos(p.y * 0.11 - uTime * 0.9) * 0.12;
        p.z += w1 + w2;
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorld = wp.xyz;
        vNormal = normalize(mat3(modelMatrix) * vec3(
          -0.08 * 0.16 * cos(p.x * 0.08 + uTime * 1.2) - 0.11 * 0.12 * sin(p.y * 0.11 - uTime * 0.9),
          0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform vec3 uSun;
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 N = normalize(vec3(vNormal.x, 0.32, vNormal.z));
        float fres = pow(1.0 - max(dot(N, V), 0.0), 2.2);
        vec3 deep = vec3(0.016, 0.145, 0.19);
        vec3 shallow = vec3(0.11, 0.44, 0.48);
        vec3 sky = vec3(0.84, 0.49, 0.35);
        vec3 col = mix(deep, shallow, 0.35 + 0.25 * sin(vWorld.x * 0.011 + vWorld.z * 0.02));
        col = mix(col, sky, fres * 0.65);
        vec3 R = reflect(-uSun, N);
        float spec = pow(max(dot(R, V), 0.0), 90.0);
        col += vec3(1.0, 0.57, 0.26) * spec * 2.7;
        float glint = pow(max(0.0, sin(vWorld.x * 0.34 + vWorld.z * 0.19) * sin(vWorld.x * 0.07 - vWorld.z * 0.42)), 18.0);
        col += vec3(1.0, 0.66, 0.34) * glint * 0.3;
        float foam = smoothstep(268.0, 278.0, vWorld.z) * (0.25 + 0.2 * sin(vWorld.x * 0.12 + vWorld.z));
        col = mix(col, vec3(0.91, 0.84, 0.72), foam * 0.22);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
  const ocean = new THREE.Mesh(new THREE.PlaneGeometry(2400, 1500, 100, 60), oceanMat)
  ocean.rotation.x = -Math.PI / 2
  ocean.position.set(0, -1.3, 900)
  group.add(ocean)

  // shore foam
  const foamTex = (() => {
    const c = makeCanvas(512, 32)
    const ctx = c.getContext('2d')
    const grad = ctx.createLinearGradient(0, 0, 0, 32)
    grad.addColorStop(0, 'rgba(255,255,255,0)')
    grad.addColorStop(.45, 'rgba(255,255,255,.7)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 512, 32)
    return colorSpace(new THREE.CanvasTexture(c))
  })()
  for (let i = 0; i < 3; i++) {
    const foam = new THREE.Mesh(
      new THREE.PlaneGeometry(1050, 7 + i * 3),
      new THREE.MeshBasicMaterial({ map: foamTex, transparent: true, opacity: 0.26 - i * 0.05, depthWrite: false }),
    )
    foam.rotation.x = -Math.PI / 2
    foam.position.set(0, 0.03, 278 + i * 5)
    foam.userData.phase = i * 1.7
    group.add(foam)
    if (i === 0) ocean.userData.foam = foam
  }

  // distant headlands + mountains
  const mountMat = new THREE.MeshStandardMaterial({ color: 0x5c5848, roughness: 1, flatShading: true })
  const farMountMat = new THREE.MeshStandardMaterial({ color: 0x6e6555, roughness: 1, flatShading: true })
  const mountains = []
  const mountainDefs = [
    [-620, -610, 300, 260], [-330, -700, 360, 320], [20, -760, 400, 290],
    [390, -680, 320, 250], [670, -600, 300, 280], [-760, -260, 260, 190],
    [760, -210, 280, 200], [-800, 60, 240, 160], [820, 20, 250, 180],
  ]
  for (const [x, z, r, h] of mountainDefs) {
    const geo = new THREE.ConeGeometry(r, h, 9, 5, true)
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i)
      const n = (Math.sin(px * .051 + pz * .032) + Math.cos(px * .022 - pz * .04)) * .08
      pos.setX(i, px * (1 + n))
      pos.setZ(i, pz * (1 + n * .8))
      pos.setY(i, py + Math.sin(px * .03) * 5)
    }
    geo.computeVertexNormals()
    const m = new THREE.Mesh(geo, z < -400 ? farMountMat : mountMat)
    m.position.set(x, h / 2 - 12, z)
    m.rotation.y = Math.random() * Math.PI
    group.add(m)
    mountains.push(m)
  }

  // ---------------- road ----------------
  const roadMat = new THREE.MeshStandardMaterial({
    map: asphaltTexture(),
    color: 0xa6a8ab,
    roughness: 0.82,
    metalness: 0.04,
  })
  const shoulderMat = new THREE.MeshStandardMaterial({ color: 0x6f6c60, roughness: 1 })
  group.add(new THREE.Mesh(ribbonGeometry(samples, -(ROAD_HALF + SHOULDER), ROAD_HALF + SHOULDER, 0.035, 1), shoulderMat))
  group.add(new THREE.Mesh(ribbonGeometry(samples, -ROAD_HALF, ROAD_HALF, 0.075, 4), roadMat))

  const edgeMat = new THREE.MeshBasicMaterial({ color: 0xf6eee0, transparent: true, opacity: 0.66 })
  for (const off of [-ROAD_HALF + .42, ROAD_HALF - .42]) {
    group.add(new THREE.Mesh(ribbonGeometry(samples, off - .12, off + .12, 0.084, 1), edgeMat))
  }

  // dashed centre line
  const dashGeo = new THREE.BoxGeometry(0.15, 0.012, 2.7)
  const dashMat = new THREE.MeshBasicMaterial({ color: 0xf4e7c8, transparent: true, opacity: 0.5 })
  const dashCount = Math.floor(trackLength / 9)
  const dashes = new THREE.InstancedMesh(dashGeo, dashMat, dashCount)
  const m4 = new THREE.Matrix4()
  const q = new THREE.Quaternion()
  const up = new THREE.Vector3(0, 1, 0)
  for (let i = 0; i < dashCount; i++) {
    const u = (i * 9) / trackLength
    const p = curve.getPointAt(u)
    const t = curve.getTangentAt(u)
    q.setFromAxisAngle(up, Math.atan2(t.x, t.z))
    m4.compose(new THREE.Vector3(p.x, 0.09, p.z), q, new THREE.Vector3(1, 1, 1))
    dashes.setMatrixAt(i, m4)
  }
  group.add(dashes)

  // red/white kerbs on bends
  const kerbRed = new THREE.MeshStandardMaterial({ color: 0xc53d2a, roughness: .8 })
  const kerbWhite = new THREE.MeshStandardMaterial({ color: 0xf2e5d3, roughness: .8 })
  const kerbGeo = new THREE.BoxGeometry(1.3, 0.09, 0.85)
  const redMats = [], whiteMats = []
  for (let i = 2; i < samples.length - 2; i += 2) {
    const s = samples[i]
    const a = samples[i - 2].tangent
    const b = samples[i + 2].tangent
    const curveAmount = a.angleTo(b)
    if (curveAmount < 0.008) continue
    for (const side of [-1, 1]) {
      const off = side * (ROAD_HALF + .65)
      const mat = new THREE.Matrix4()
      const quat = new THREE.Quaternion().setFromAxisAngle(up, Math.atan2(s.tangent.x, s.tangent.z))
      mat.compose(
        new THREE.Vector3(s.point.x + s.normal.x * off, 0.07, s.point.z + s.normal.z * off),
        quat,
        new THREE.Vector3(1, 1, 1),
      )
      if ((i / 2) % 2 === 0) redMats.push(mat.clone())
      else whiteMats.push(mat.clone())
    }
  }
  if (redMats.length) {
    const red = new THREE.InstancedMesh(kerbGeo, kerbRed, redMats.length)
    redMats.forEach((m, i) => red.setMatrixAt(i, m))
    group.add(red)
    const white = new THREE.InstancedMesh(kerbGeo, kerbWhite, whiteMats.length)
    whiteMats.forEach((m, i) => white.setMatrixAt(i, m))
    group.add(white)
  }

  // ---------------- guardrails ----------------
  const outerSamples = []
  for (const s of samples) {
    const outward = s.point.dot(s.normal) > 0 ? 1 : -1
    const off = outward * (ROAD_HALF + 1.5)
    outerSamples.push(new THREE.Vector3(s.point.x + s.normal.x * off, 0.02, s.point.z + s.normal.z * off))
  }
  // split into sections, skip festival side and beaches
  const railMat = new THREE.MeshStandardMaterial({ color: 0xb9b8b1, metalness: .85, roughness: .38 })
  const postMat = new THREE.MeshStandardMaterial({ color: 0x4f5354, metalness: .6, roughness: .55 })
  const railSections = []
  let current = []
  for (let i = 0; i < outerSamples.length; i++) {
    const p = outerSamples[i]
    const isBeach = p.z > 150 && p.x > -90 && p.x < 130
    if (!isBeach) current.push(p.clone())
    else if (current.length > 3) {
      railSections.push(current); current = []
    } else current = []
  }
  if (current.length > 3) railSections.push(current)
  for (const section of railSections) {
    const c = new THREE.CatmullRomCurve3(section, false, 'centripetal', 0.5)
    const rail = new THREE.Mesh(new THREE.TubeGeometry(c, Math.max(10, section.length), 0.09, 4, false), railMat)
    rail.position.y = 0.63
    group.add(rail)
    const postGeo = new THREE.BoxGeometry(.08, .65, .08)
    const posts = new THREE.InstancedMesh(postGeo, postMat, Math.floor(section.length / 3))
    for (let i = 0; i < posts.count; i++) {
      const t = i / Math.max(1, posts.count - 1)
      const p = c.getPointAt(t)
      const mat = new THREE.Matrix4().makeTranslation(p.x, 0.33, p.z)
      posts.setMatrixAt(i, mat)
    }
    group.add(posts)
  }

  // ---------------- palms ----------------
  const palmCount = 78
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.34, 6.4, 6, 4)
  trunkGeo.translate(0, 3.2, 0)
  // slight taper curve
  const tp = trunkGeo.attributes.position
  for (let i = 0; i < tp.count; i++) {
    const y = tp.getY(i)
    tp.setX(i, tp.getX(i) + Math.sin(y * .55) * .22)
  }
  trunkGeo.computeVertexNormals()
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6e5436, roughness: .95, flatShading: true })
  const crownGeo = makeFrondGeometry()
  const crownMat = new THREE.MeshStandardMaterial({ color: 0x3d6531, roughness: .85, flatShading: true, side: THREE.DoubleSide })
  const trunkInst = new THREE.InstancedMesh(trunkGeo, trunkMat, palmCount)
  const crownInst = new THREE.InstancedMesh(crownGeo, crownMat, palmCount)
  const palmSpots = []
  for (let i = 0; i < palmCount; i++) {
    let x, z
    if (i < 38) {
      const u = (i / 38) * 1
      const s = samples[Math.floor(u * samples.length) % samples.length]
      const side = i % 2 ? 1 : -1
      const off = side * (12 + Math.random() * 16)
      x = s.point.x + s.normal.x * off
      z = s.point.z + s.normal.z * off
    } else {
      x = -330 + Math.random() * 670
      z = 202 + Math.random() * 62
    }
    // keep palms out of road and festival centre
    if (Math.abs(x) < 95 && z > 198 && z < 250) continue
    const scale = .72 + Math.random() * .55
    const rot = Math.random() * Math.PI * 2
    const matrix = new THREE.Matrix4().compose(
      new THREE.Vector3(x, 0, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot),
      new THREE.Vector3(scale, scale, scale),
    )
    trunkInst.setMatrixAt(palmSpots.length, matrix)
    crownInst.setMatrixAt(palmSpots.length, matrix)
    palmSpots.push({ x, z, scale })
  }
  trunkInst.count = palmSpots.length
  crownInst.count = palmSpots.length
  trunkInst.castShadow = false
  crownInst.castShadow = true
  group.add(trunkInst, crownInst)

  function makeFrondGeometry() {
    const fronds = []
    const count = 9
    for (let i = 0; i < count; i++) {
      const segs = 5
      const positions = [], indices = []
      for (let s = 0; s <= segs; s++) {
        const t = s / segs
        const len = 4.1 * t
        const width = Math.sin(t * Math.PI) * .62 + .04
        const droop = -1.55 * t * t
        const y = 6.4 + droop
        positions.push(len, y + width * .1, -width)
        positions.push(len, y - .06, width)
      }
      for (let s = 0; s < segs; s++) {
        const a = s * 2, b = a + 1, c = a + 2, d = a + 3
        indices.push(a, b, c, b, d, c)
      }
      const g = new THREE.BufferGeometry()
      g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
      g.setIndex(indices)
      g.computeVertexNormals()
      g.rotateY((i / count) * Math.PI * 2 + (Math.random() - .5) * .2)
      fronds.push(g)
    }
    return mergeGeometries(fronds, false)
  }

  // bushes / rocks
  const bushGeo = new THREE.IcosahedronGeometry(1, 0)
  const bushMat = new THREE.MeshStandardMaterial({ color: 0x556d3d, roughness: 1, flatShading: true })
  const bushCount = 110
  const bushes = new THREE.InstancedMesh(bushGeo, bushMat, bushCount)
  for (let i = 0; i < bushCount; i++) {
    let x, z, tries = 0
    do {
      x = -430 + Math.random() * 860
      z = -300 + Math.random() * 470
      tries++
    } while (distanceToTrack(x, z) < 14 && tries < 30)
    const s = .6 + Math.random() * 1.8
    const mat = new THREE.Matrix4().compose(
      new THREE.Vector3(x, terrainHeight(x, z, distanceToTrack(x, z)) + s * .45, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6),
      new THREE.Vector3(s * 1.4, s * .75, s),
    )
    bushes.setMatrixAt(i, mat)
  }
  group.add(bushes)

  const rockGeo = new THREE.DodecahedronGeometry(1, 0)
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x746f60, roughness: .95, flatShading: true })
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, 55)
  for (let i = 0; i < 55; i++) {
    let x, z, tries = 0
    do {
      x = -460 + Math.random() * 920
      z = -350 + Math.random() * 500
      tries++
    } while (distanceToTrack(x, z) < 19 && tries < 30)
    const s = .4 + Math.random() * 1.9
    const mat = new THREE.Matrix4().compose(
      new THREE.Vector3(x, terrainHeight(x, z, distanceToTrack(x, z)) + s * .25, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.random(), Math.random() * 6, Math.random())),
      new THREE.Vector3(s, s * .7, s * 1.2),
    )
    rocks.setMatrixAt(i, mat)
  }
  group.add(rocks)

  // ---------------- festival ----------------
  const festival = new THREE.Group()
  group.add(festival)

  // Ferris wheel on the sand
  const ferris = createFerrisWheel()
  ferris.group.position.set(44, 0.1, 225)
  festival.add(ferris.group)

  // Main stage
  const stage = createStage()
  stage.position.set(-9, 0.1, 222)
  festival.add(stage)

  // tents
  const tentColors = [0xf05a2a, 0xe8e3d7, 0x1b2a32, 0xf3a23c]
  const tentSpots = [[-68, 217, .7], [20, 236, .8], [85, 230, .7], [104, 214, .9], [-52, 238, .65]]
  tentSpots.forEach(([x, z, s], i) => {
    const tent = createTent(tentColors[i % tentColors.length])
    tent.position.set(x, 0.1, z)
    tent.scale.setScalar(s)
    festival.add(tent)
  })

  // festival entry sign
  const festivalSign = makeBillboard('HORIZON', 'FESTIVAL 2026', '#ff5b22')
  festivalSign.position.set(-118, 8.5, 216)
  festivalSign.scale.set(18, 4.5, 1)
  festival.add(festivalSign)
  const signPosts = new THREE.Group()
  for (const x of [-7, 7]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(.35, 7, .35), new THREE.MeshStandardMaterial({ color: 0x22272a, metalness: .7, roughness: .4 }))
    post.position.set(x, 3.5, 0)
    signPosts.add(post)
  }
  signPosts.position.set(-118, 0, 215.4)
  festival.add(signPosts)

  // crowd
  const crowdGeo = new THREE.CapsuleGeometry(.14, .42, 3, 5)
  const crowdMat = new THREE.MeshStandardMaterial({ vertexColors: false, roughness: .8 })
  const crowd = new THREE.InstancedMesh(crowdGeo, crowdMat, 85)
  const crowdColors = [0xff5b22, 0xffd2a8, 0x48f2dc, 0xf4efe4, 0x2b3a49, 0xd34a3f]
  for (let i = 0; i < crowd.count; i++) {
    const x = -48 + Math.random() * 175
    const z = 211 + Math.random() * 35
    const mat = new THREE.Matrix4().makeTranslation(x, .35, z)
    crowd.setMatrixAt(i, mat)
    crowd.setColorAt(i, new THREE.Color(crowdColors[i % crowdColors.length]))
  }
  festival.add(crowd)

  // bunting between stage and ferris
  const buntingMat = new THREE.MeshBasicMaterial({ color: 0xffb36b, side: THREE.DoubleSide })
  const bunting = new THREE.Group()
  for (let line = 0; line < 3; line++) {
    const start = new THREE.Vector3(-18 + line * 18, 8 + line, 224)
    const end = new THREE.Vector3(32 + line * 7, 12 + line * 2, 226)
    for (let i = 0; i < 12; i++) {
      const t = (i + .5) / 12
      const p = start.clone().lerp(end, t)
      p.y += Math.sin(t * Math.PI) * -1.2
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(.55, .42), buntingMat)
      flag.position.copy(p)
      flag.rotation.y = Math.PI / 2
      bunting.add(flag)
    }
  }
  festival.add(bunting)

  // hot air balloons
  const balloons = []
  for (let i = 0; i < 3; i++) {
    const b = createBalloon([0xff6a32, 0x48d8c6, 0xf6d28b][i])
    b.position.set(-90 + i * 100, 55 + i * 15, 80 - i * 100)
    group.add(b)
    balloons.push(b)
  }

  // birds
  const birdMat = new THREE.MeshBasicMaterial({ color: 0x2b2a28, side: THREE.DoubleSide })
  const birds = new THREE.Group()
  for (let i = 0; i < 8; i++) {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute([-.55, 0, 0, 0, .05, 0, 0, 0, 0, .55, 0, 0, 0, .05, 0, 0, 0, 0], 3))
    const m = new THREE.Mesh(g, birdMat)
    m.position.set(-80 + Math.random() * 250, 32 + Math.random() * 22, 80 + Math.random() * 150)
    m.userData.phase = Math.random() * 6
    birds.add(m)
  }
  group.add(birds)

  // ---------------- buildings ----------------
  const villas = [
    [-244, 126, .6, 1.35], [-278, 82, 1.9, 1.1], [-232, 42, .2, 1.5],
    [242, 82, 2.5, 1.35], [284, 126, .6, 1.2], [228, 168, 1.7, 1.5],
    [152, -222, 1.2, 1.2], [92, -246, .3, 1.5], [-5, -235, 2.8, 1.1],
    [-108, -238, 1.2, 1.4], [-247, -82, .4, 1.3], [-258, -162, 2.2, 1.15],
    [206, -168, 1.6, 1.3], [300, -52, .9, 1.2],
  ]
  for (const [x, z, rot, scale] of villas) {
    const v = createVilla(0xf1e6d4, 0xb55b3b)
    v.position.set(x, terrainHeight(x, z, distanceToTrack(x, z)) + .02, z)
    v.rotation.y = rot
    v.scale.setScalar(scale)
    group.add(v)
  }

  const hotel = createHotel()
  hotel.position.set(212, .02, 207)
  hotel.rotation.y = -.4
  group.add(hotel)

  const lighthouse = createLighthouse()
  lighthouse.position.set(-312, 0, 242)
  group.add(lighthouse)

  // beach umbrellas
  const umbSpots = [[-170, 255], [-120, 260], [130, 258], [178, 254], [208, 262], [-32, 264]]
  for (const [x, z] of umbSpots) {
    const u = createUmbrella(Math.random() > .5 ? 0xf3a53b : 0xea4a32)
    u.position.set(x, .02, z)
    group.add(u)
  }

  // ---------------- start / finish / events ----------------
  const startPoint = curve.getPointAt(0)
  const startTan = curve.getTangentAt(0)
  const startHeading = Math.atan2(startTan.x, startTan.z)

  const startGate = createStartGate(startHeading)
  startGate.position.set(startPoint.x, 0.1, startPoint.z)
  group.add(startGate)

  const eventMarker = createEventMarker()
  eventMarker.position.set(startPoint.x, 11.6, startPoint.z)
  group.add(eventMarker)

  const checkpointGates = []
  const gateUs = [0.19, 0.39, 0.59, 0.79]
  gateUs.forEach((u, i) => {
    const p = curve.getPointAt(u)
    const t = curve.getTangentAt(u)
    const h = Math.atan2(t.x, t.z)
    const gate = createCheckpointGate(i, h)
    gate.group.position.set(p.x, 0.08, p.z)
    gate.group.visible = false
    group.add(gate.group)
    checkpointGates.push({ ...gate, u, point: p.clone(), heading: h })
  })

  // ---------------- collectibles ----------------
  const collectibleSpots = [
    [0.08, -14], [0.18, 16], [0.30, -17], [0.44, 18], [0.57, -15],
    [0.68, 16], [0.82, -17], [0.92, 18], [0.37, 38], [0.63, 42],
  ]
  const collectibles = []
  const collectibleMat = new THREE.MeshStandardMaterial({
    color: 0xffae45,
    emissive: 0xff6b1a,
    emissiveIntensity: 2.2,
    metalness: .5,
    roughness: .2,
  })
  for (const [u, off] of collectibleSpots) {
    const p = curve.getPointAt(u)
    const n = new THREE.Vector3(-curve.getTangentAt(u).z, 0, curve.getTangentAt(u).x)
    const x = p.x + n.x * off
    const z = p.z + n.z * off
    const g = new THREE.Group()
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(.75, 0), collectibleMat)
    gem.rotation.z = Math.PI / 4
    g.add(gem)
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.25, .035, 5, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd29c, transparent: true, opacity: .75 }),
    )
    ring.rotation.x = Math.PI / 2
    g.add(ring)
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: .55,
    }))
    glow.scale.set(4, 4, 1)
    g.add(glow)
    g.position.set(x, 1.4, z)
    g.userData.phase = Math.random() * 8
    g.userData.spin = .8 + Math.random() * .8
    group.add(g)
    collectibles.push(g)
  }

  // ---------------- roadside details ----------------
  // streetlights
  const poleGeo = new THREE.CylinderGeometry(.075, .11, 5.8, 6)
  poleGeo.translate(0, 2.9, 0)
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x353b3d, metalness: .7, roughness: .4 })
  const lampGeo = new THREE.BoxGeometry(.42, .12, .18)
  const lampMat = new THREE.MeshBasicMaterial({ color: 0xffd9a5 })
  const lampCount = 38
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, lampCount)
  const lamps = new THREE.InstancedMesh(lampGeo, lampMat, lampCount)
  for (let i = 0; i < lampCount; i++) {
    const u = (i / lampCount + .013) % 1
    const s = sampleAt(u)
    const side = i % 2 ? 1 : -1
    const off = side * (ROAD_HALF + 3.7)
    const x = s.point.x + s.normal.x * off
    const z = s.point.z + s.normal.z * off
    const mat = new THREE.Matrix4().makeTranslation(x, 0, z)
    poles.setMatrixAt(i, mat)
    const lampMat4 = new THREE.Matrix4().compose(
      new THREE.Vector3(x, 5.85, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(s.tangent.x, s.tangent.z)),
      new THREE.Vector3(1, 1, 1),
    )
    lamps.setMatrixAt(i, lampMat4)
  }
  group.add(poles, lamps)

  // road signs
  const signSpots = [
    [0.06, 13, 'HORIZON', 'FESTIVAL AHEAD', '#ff5b22'],
    [0.31, -13, 'COSTA', 'DEL SOL', '#48f2dc'],
    [0.66, 14, 'SUMMIT', '1.2 KM', '#ffb36b'],
  ]
  for (const [u, off, text, sub, accent] of signSpots) {
    const s = sampleAt(u)
    const sign = makeBillboard(text, sub, accent)
    sign.position.set(s.point.x + s.normal.x * off, 3.6, s.point.z + s.normal.z * off)
    sign.scale.set(7.2, 1.8, 1)
    group.add(sign)
  }

  // boats
  const boats = []
  for (const [x, z, rot] of [[-190, 360, .4], [120, 430, -1.1], [320, 500, .8]]) {
    const b = createBoat()
    b.position.set(x, -1.05, z)
    b.rotation.y = rot
    group.add(b)
    boats.push(b)
  }

  // flags at start
  const flagMat = new THREE.MeshBasicMaterial({ color: 0xff5b22, side: THREE.DoubleSide })
  for (let i = 0; i < 12; i++) {
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(.65, 1.2), flagMat)
    flag.position.set(startPoint.x - 12 + i * 2.1, 4 + Math.sin(i) * .2, startPoint.z + 9)
    flag.rotation.y = startHeading
    group.add(flag)
  }

  // ---------------- API ----------------
  function sampleAt(u) {
    const uu = ((u % 1) + 1) % 1
    const idx = Math.floor(uu * SAMPLE_COUNT) % SAMPLE_COUNT
    return samples[idx]
  }

  function distanceToTrack(x, z) {
    let min = Infinity
    for (let i = 0; i < samples.length; i += 2) {
      const s = samples[i]
      const dx = x - s.point.x, dz = z - s.point.z
      const d = dx * dx + dz * dz
      if (d < min) min = d
    }
    return Math.sqrt(min)
  }

  function nearestTrack(x, z) {
    let min = Infinity, best = 0
    for (let i = 0; i < samples.length; i++) {
      const s = samples[i]
      const dx = x - s.point.x, dz = z - s.point.z
      const d = dx * dx + dz * dz
      if (d < min) { min = d; best = i }
    }
    const s = samples[best]
    return { ...s, dist: Math.sqrt(min), index: best }
  }

  function groundAt(x, z) {
    const n = nearestTrack(x, z)
    const road = n.dist <= ROAD_HALF + .1
    const y = road ? 0.09 : terrainHeight(x, z, n.dist)
    return { y, dist: n.dist, u: n.u, normal: n.normal, tangent: n.tangent, point: n.point, road }
  }

  function setSunFor(position) {
    sun.position.set(position.x + 150, 195, position.z + 205)
    sun.target.position.set(position.x, 0, position.z)
    sun.target.updateMatrixWorld()
  }

  let oceanTime = 0
  let elapsed = 0
  function update(dt, time) {
    elapsed += dt
    oceanTime += dt
    oceanUniforms.uTime.value = oceanTime
    for (const f of group.children) {
      if (f.userData.phase !== undefined && f.material?.map === foamTex) {
        f.position.z = 278 + f.userData.phase * 3 + Math.sin(time * .35 + f.userData.phase) * 1.8
      }
    }
    ferris.update(dt)
    for (const b of balloons) b.userData.update(time)
    for (const c of clouds) {
      c.position.x += c.userData.speed * dt
      if (c.position.x > 1700) c.position.x = -1700
    }
    for (const b of boats) {
      b.position.y = -1.05 + Math.sin(time * .8 + b.position.x) * .08
      b.rotation.z = Math.sin(time * .6 + b.position.z) * .025
    }
    eventMarker.rotation.y = time * .7
    eventMarker.position.y = 11.6 + Math.sin(time * 1.4) * .28
    for (const c of collectibles) {
      if (!c.visible) continue
      c.rotation.y = time * c.userData.spin
      c.position.y = 1.4 + Math.sin(time * 1.8 + c.userData.phase) * .18
    }
    for (const g of checkpointGates) {
      if (!g.group.visible) continue
      g.group.children.forEach((c) => {
        if (c.material && c.material.userData.baseOpacity !== undefined) {
          const pulse = g.active ? .72 + Math.sin(time * 4.2) * .24 : 1
          c.material.opacity = c.material.userData.baseOpacity * pulse
        }
      })
    }
    for (const b of birds.children) {
      b.position.x += dt * 2.5
      if (b.position.x > 250) b.position.x = -150
      b.position.y += Math.sin(time * 2 + b.userData.phase) * .002
      b.rotation.z = Math.sin(time * 7 + b.userData.phase) * .14
    }
    if (ocean.userData.foam) ocean.userData.foam.material.opacity = .2 + Math.sin(time * .5) * .05
  }

  return {
    group,
    curve,
    samples,
    trackLength,
    roadHalfWidth: ROAD_HALF,
    startPoint,
    startHeading,
    startGate,
    eventMarker,
    checkpointGates,
    collectibles,
    sun,
    update,
    sampleAt,
    nearestTrack,
    groundAt,
    distanceToTrack,
    setSunFor,
    setCheckpointActive(index) {
      checkpointGates.forEach((g, i) => {
        g.active = i === index
        const color = i === index ? 0xff6b2a : i < index ? 0x48f2dc : 0x708089
        g.group.traverse((o) => {
          if (o.material && o.material.userData.gate) {
            o.material.color.setHex(color)
            o.material.userData.baseOpacity = i === index ? .95 : (i < index ? .3 : .44)
            o.material.opacity = o.material.userData.baseOpacity
          }
        })
      })
    },
    hideCheckpoints() {
      checkpointGates.forEach((g) => { g.group.visible = false })
    },
    showCheckpoints() {
      checkpointGates.forEach((g) => { g.group.visible = true })
    },
  }
}

// ---------- builders ----------
function makeBillboard(text, sub, accent) {
  const c = makeCanvas(1024, 256)
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 1024, 256)
  ctx.fillStyle = 'rgba(7,11,16,.84)'
  ctx.beginPath()
  ctx.moveTo(12, 0); ctx.lineTo(1012, 0); ctx.lineTo(1024, 12); ctx.lineTo(1024, 244)
  ctx.lineTo(1012, 256); ctx.lineTo(12, 256); ctx.lineTo(0, 244); ctx.lineTo(0, 12); ctx.closePath()
  ctx.fill()
  ctx.strokeStyle = accent
  ctx.lineWidth = 6
  ctx.beginPath(); ctx.moveTo(0, 244); ctx.lineTo(0, 12); ctx.lineTo(12, 0); ctx.lineTo(420, 0); ctx.stroke()
  ctx.fillStyle = accent
  ctx.font = '600 37px Inter, sans-serif'
  ctx.letterSpacing = '8px'
  ctx.textAlign = 'left'
  ctx.fillText(sub.toUpperCase(), 62, 82)
  ctx.fillStyle = '#fff'
  ctx.font = 'italic 900 110px "Barlow Condensed", sans-serif'
  ctx.letterSpacing = '5px'
  ctx.fillText(text.toUpperCase(), 56, 176)
  const tex = colorSpace(new THREE.CanvasTexture(c))
  return new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, transparent: true, depthWrite: false, depthTest: true, sizeAttenuation: true,
  }))
}

function createStartGate(heading) {
  const group = new THREE.Group()
  group.rotation.y = heading
  const trussMat = new THREE.MeshStandardMaterial({ color: 0x252a2e, metalness: .8, roughness: .35 })
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xff5b22, metalness: .3, roughness: .55 })
  const boxes = []
  for (const x of [-10.7, 10.7]) {
    boxes.push({ w: .42, h: 7.2, d: .42, x, y: 3.6, z: 0 })
    for (let j = 0; j < 4; j++) {
      boxes.push({ w: 1.4, h: .12, d: .12, x: x + (x > 0 ? -.5 : .5), y: 1.4 + j * 1.6, z: .18 })
    }
  }
  boxes.push({ w: 22, h: .55, d: .55, x: 0, y: 7.1, z: 0 })
  boxes.push({ w: 22, h: .24, d: .24, x: 0, y: 6.25, z: 0 })
  group.add(new THREE.Mesh(mergeBoxes(boxes), trussMat))

  const signMat = new THREE.MeshBasicMaterial({
    map: textTexture({ text: 'HORIZON', sub: 'START / FINISH', accent: '#ff5b22', w: 1024, h: 220 }),
    transparent: false,
    side: THREE.DoubleSide,
  })
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(17.2, 3.2), signMat)
  sign.position.set(0, 8.6, 0)
  sign.rotation.y = Math.PI
  group.add(sign)

  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(15.8, 1.3),
    new THREE.MeshBasicMaterial({
      map: textTexture({ text: 'COSTA DEL SOL', sub: '', accent: '#ff5b22', w: 1024, h: 128, bg: 'rgba(8,12,17,.95)' }),
      side: THREE.DoubleSide,
    }),
  )
  banner.position.set(0, 6.75, 0)
  banner.rotation.y = Math.PI
  group.add(banner)

  // start lights
  const lightMat = new THREE.MeshBasicMaterial({ color: 0x2a0d08 })
  const lights = []
  for (let i = 0; i < 5; i++) {
    const l = new THREE.Mesh(new THREE.CircleGeometry(.2, 12), lightMat.clone())
    l.position.set(-1.6 + i * .8, 5.65, .3)
    group.add(l)
    lights.push(l)
  }

  // flags
  const flagMat = new THREE.MeshBasicMaterial({ color: 0xff5b22, side: THREE.DoubleSide })
  for (let i = 0; i < 8; i++) {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(.65, 1.15), flagMat)
    f.position.set(-8.4 + i * 2.4, 8.1, .4)
    group.add(f)
  }

  // finish line
  const finish = new THREE.Mesh(
    new THREE.PlaneGeometry(17.2, 3.2),
    new THREE.MeshBasicMaterial({ map: checkerTexture() }),
  )
  finish.rotation.x = -Math.PI / 2
  finish.position.set(0, .1, 0)
  group.add(finish)

  group.userData.lights = lights
  return group
}

function createCheckpointGate(index, heading) {
  const group = new THREE.Group()
  group.rotation.y = heading
  const gateMaterials = []
  const base = new THREE.MeshBasicMaterial({
    color: 0x48f2dc, transparent: true, opacity: .55, depthWrite: false,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  })
  base.userData.gate = true
  base.userData.baseOpacity = .55
  gateMaterials.push(base)

  const archCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-9.4, 0, 0),
    new THREE.Vector3(-9.4, 5.1, 0),
    new THREE.Vector3(-4.8, 6.2, 0),
    new THREE.Vector3(0, 6.5, 0),
    new THREE.Vector3(4.8, 6.2, 0),
    new THREE.Vector3(9.4, 5.1, 0),
    new THREE.Vector3(9.4, 0, 0),
  ])
  const arch = new THREE.Mesh(new THREE.TubeGeometry(archCurve, 40, .12, 5, false), base)
  group.add(arch)

  const fill = new THREE.Mesh(
    new THREE.PlaneGeometry(18.8, 6.5),
    new THREE.MeshBasicMaterial({
      color: 0x48f2dc, transparent: true, opacity: .035, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
  )
  fill.position.y = 3.25
  group.add(fill)
  gateMaterials.push(fill.material)

  const labelTex = textTexture({
    text: 'CHECKPOINT', sub: `${String(index + 1).padStart(2, '0')} / 04`,
    accent: '#48f2dc', w: 1024, h: 170, bg: 'rgba(5,12,15,.65)', border: false,
  })
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(5.4, .9),
    new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, side: THREE.DoubleSide, depthWrite: false }),
  )
  label.position.y = 7.1
  label.rotation.y = Math.PI
  group.add(label)

  group.traverse((o) => {
    if (o.material) {
      o.material.userData.gate = true
      o.material.userData.baseOpacity = o.material.opacity
    }
  })
  return { group, materials: gateMaterials }
}

function createEventMarker() {
  const group = new THREE.Group()
  const mat = new THREE.MeshBasicMaterial({ color: 0xff6b2a, transparent: true, opacity: .9 })
  const dia = new THREE.Mesh(new THREE.OctahedronGeometry(1.2, 0), mat)
  group.add(dia)
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.2, .055, 6, 40),
    new THREE.MeshBasicMaterial({ color: 0xffd7b7, transparent: true, opacity: .8 }),
  )
  ring.rotation.x = Math.PI / 2
  group.add(ring)
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .7,
  }))
  glow.scale.set(10, 10, 1)
  group.add(glow)
  return group
}

let glowTex
function createFerrisWheel() {
  const group = new THREE.Group()
  const wheel = new THREE.Group()
  wheel.position.y = 21
  group.add(wheel)
  const metal = new THREE.MeshStandardMaterial({ color: 0xe7e2d8, metalness: .6, roughness: .45 })
  const neon = new THREE.MeshBasicMaterial({ color: 0xff7a35 })
  const rim = new THREE.Mesh(new THREE.TorusGeometry(16, .28, 6, 64), metal)
  wheel.add(rim)
  const rim2 = new THREE.Mesh(new THREE.TorusGeometry(15.1, .07, 4, 64), neon)
  wheel.add(rim2)
  const spokes = []
  for (let i = 0; i < 16; i++) {
    const g = new THREE.CylinderGeometry(.055, .055, 32, 4)
    g.rotateZ(Math.PI / 2)
    const m = new THREE.Mesh(g, metal)
    m.rotation.z = (i / 16) * Math.PI
    wheel.add(m)
  }
  const gondolas = []
  const cabinMat = [0xff6b35, 0x48d8c6, 0xf1e4cb, 0x263a4c]
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2
    const holder = new THREE.Group()
    holder.position.set(Math.cos(a) * 16, Math.sin(a) * 16, 0)
    const cabin = new THREE.Group()
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.45, 1.1, 1.4), new THREE.MeshStandardMaterial({
      color: cabinMat[i % 4], roughness: .6, metalness: .2,
    }))
    body.position.y = -.75
    cabin.add(body)
    const glass = new THREE.Mesh(new THREE.BoxGeometry(1.1, .42, 1.05), new THREE.MeshStandardMaterial({
      color: 0x172a33, metalness: .3, roughness: .1,
    }))
    glass.position.y = -.73
    cabin.add(glass)
    holder.add(cabin)
    wheel.add(holder)
    gondolas.push(cabin)
  }
  const legs = []
  for (const side of [-1, 1]) {
    const g = new THREE.CylinderGeometry(.32, .5, 22, 5)
    g.translate(0, 10.8, 0)
    const m = new THREE.Mesh(g, metal)
    m.position.set(side * 5, 0, 0)
    m.rotation.z = side * .29
    group.add(m)
    legs.push(m)
  }
  const base = new THREE.Mesh(new THREE.BoxGeometry(15, .8, 7), new THREE.MeshStandardMaterial({ color: 0x32373a, roughness: .8 }))
  base.position.y = .4
  group.add(base)
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 3.4, 12), metal)
  hub.rotation.x = Math.PI / 2
  hub.position.y = 21
  group.add(hub)
  let a = 0
  return {
    group,
    update(dt) {
      a += dt * .17
      wheel.rotation.z = a
      gondolas.forEach((g) => { g.rotation.z = -a })
    },
  }
}

function createStage() {
  const g = new THREE.Group()
  const dark = new THREE.MeshStandardMaterial({ color: 0x1d242b, metalness: .4, roughness: .55 })
  const orange = new THREE.MeshBasicMaterial({ color: 0xff5b22 })
  const platform = new THREE.Mesh(new THREE.BoxGeometry(28, 1.2, 13), dark)
  platform.position.y = .6
  g.add(platform)
  const back = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 8),
    new THREE.MeshBasicMaterial({
      map: textTexture({ text: 'HORIZON', sub: 'LIVE ON THE COAST', accent: '#ff5b22', w: 1024, h: 384, bg: 'rgba(10,15,22,.92)' }),
      side: THREE.FrontSide,
    }),
  )
  back.position.set(0, 6.5, -5.2)
  back.rotation.y = Math.PI
  g.add(back)
  const roof = new THREE.Mesh(new THREE.BoxGeometry(28, .6, 13), dark)
  roof.position.set(0, 11, 0)
  g.add(roof)
  for (const x of [-13, 13]) for (const z of [-5.5, 5.5]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(.45, 10.4, .45), dark)
    post.position.set(x, 5.4, z)
    g.add(post)
  }
  for (let i = 0; i < 7; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(9 + i * 1.3, .12, .12), orange)
    bar.position.set(0, 10.8, -6.55)
    g.add(bar)
  }
  for (const x of [-9, -4.5, 0, 4.5, 9]) {
    const speaker = new THREE.Mesh(new THREE.BoxGeometry(2, 3.5, 1.3), dark)
    speaker.position.set(x, 2.4, 5.8)
    g.add(speaker)
  }
  for (const side of [-1, 1]) {
    const truss = new THREE.Mesh(new THREE.BoxGeometry(.25, 12, .25), dark)
    truss.position.set(side * 14, 6, 0)
    g.add(truss)
  }
  const glow = new THREE.PointLight(0xff6a2a, 80, 70, 2)
  glow.position.set(0, 5, 8)
  g.add(glow)
  return g
}

function createTent(color) {
  const g = new THREE.Group()
  const cloth = new THREE.MeshStandardMaterial({ color, roughness: .85, side: THREE.DoubleSide })
  const roof = new THREE.Mesh(new THREE.ConeGeometry(7, 4.4, 4, 1), cloth)
  roof.rotation.y = Math.PI / 4
  roof.position.y = 5
  g.add(roof)
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x505658, metalness: .5, roughness: .5 })
  for (const x of [-4.9, 4.9]) for (const z of [-4.9, 4.9]) {
    const pole = new THREE.Mesh(new THREE.BoxGeometry(.12, 3.4, .12), poleMat)
    pole.position.set(x, 1.7, z)
    g.add(pole)
  }
  const table = new THREE.Mesh(new THREE.BoxGeometry(4.2, .2, 1.3), new THREE.MeshStandardMaterial({ color: 0x6b4c34, roughness: .9 }))
  table.position.set(0, 1.2, 1.5)
  g.add(table)
  return g
}

function createBalloon(color) {
  const g = new THREE.Group()
  const envelope = new THREE.Mesh(
    new THREE.SphereGeometry(7, 12, 10),
    new THREE.MeshStandardMaterial({ color, roughness: .55, metalness: .08, side: THREE.DoubleSide }),
  )
  envelope.scale.set(1, 1.12, 1)
  envelope.position.y = 12
  g.add(envelope)
  const stripe = new THREE.Mesh(
    new THREE.TorusGeometry(7.02, .16, 4, 24),
    new THREE.MeshStandardMaterial({ color: 0xf7e8cc, roughness: .7 }),
  )
  stripe.rotation.x = Math.PI / 2
  stripe.position.y = 12
  g.add(stripe)
  const basket = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.6, 2.2), new THREE.MeshStandardMaterial({ color: 0x745233, roughness: .9 }))
  basket.position.y = 2.3
  g.add(basket)
  for (const x of [-.8, .8]) for (const z of [-.8, .8]) {
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, 5.2, 3), new THREE.MeshBasicMaterial({ color: 0x302d29 }))
    rope.position.set(x, 5.5, z)
    g.add(rope)
  }
  const baseY = g.position.y
  g.userData.update = (time) => {
    g.position.y = baseY + Math.sin(time * .35 + color) * 2.5
    g.rotation.y = Math.sin(time * .08) * .3
  }
  return g
}

function createVilla(wallColor, roofColor) {
  const g = new THREE.Group()
  const wall = new THREE.MeshStandardMaterial({ color: wallColor, roughness: .9 })
  const roof = new THREE.MeshStandardMaterial({ color: roofColor, roughness: .9, flatShading: true })
  const windowMat = new THREE.MeshStandardMaterial({ color: 0x1d3037, metalness: .2, roughness: .25 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(9, 4.4, 7), wall)
  body.position.y = 2.2
  g.add(body)
  const upper = new THREE.Mesh(new THREE.BoxGeometry(6.5, 2.5, 5.4), wall)
  upper.position.set(-1, 5.55, 0)
  g.add(upper)
  const roof1 = new THREE.Mesh(new THREE.ConeGeometry(6.5, 2.3, 4), roof)
  roof1.rotation.y = Math.PI / 4
  roof1.position.set(-1, 7.95, 0)
  g.add(roof1)
  const roof2 = new THREE.Mesh(new THREE.ConeGeometry(4.7, 1.4, 4), roof)
  roof2.rotation.y = Math.PI / 4
  roof2.position.set(2.8, 5.0, 1)
  g.add(roof2)
  for (let i = 0; i < 3; i++) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, .08), windowMat)
    win.position.set(-1 + i * 1.8, 5.4, 2.72)
    g.add(win)
  }
  for (let i = 0; i < 2; i++) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.5, .08), windowMat)
    win.position.set(-2.2 + i * 2.1, 2.6, 3.53)
    g.add(win)
  }
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.1, .08), new THREE.MeshStandardMaterial({ color: 0x73533b, roughness: .8 }))
  door.position.set(2.9, 1.05, 3.53)
  g.add(door)
  return g
}

function createHotel() {
  const g = new THREE.Group()
  const wall = new THREE.MeshStandardMaterial({ color: 0xe8ddc9, roughness: .82 })
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x1a3038, metalness: .4, roughness: .1, clearcoat: 1 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(17, 22, 10), wall)
  body.position.y = 11
  g.add(body)
  for (let f = 1; f < 7; f++) {
    const slab = new THREE.Mesh(new THREE.BoxGeometry(18.4, .28, 11.2), wall)
    slab.position.y = f * 3
    g.add(slab)
    for (let i = 0; i < 5; i++) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.8, .12), glass)
      win.position.set(-6.2 + i * 3.1, f * 3 + 1.35, 5.06)
      g.add(win)
    }
  }
  const roof = new THREE.Mesh(new THREE.BoxGeometry(18, .7, 11), new THREE.MeshStandardMaterial({ color: 0x7d5f45, roughness: .9 }))
  roof.position.y = 22.5
  g.add(roof)
  const sign = makeBillboard('MAR AZUL', 'HOTEL & SPA', '#48f2dc')
  sign.position.set(0, 19, 6.1)
  sign.scale.set(10, 2.5, 1)
  g.add(sign)
  return g
}

function createLighthouse() {
  const g = new THREE.Group()
  const white = new THREE.MeshStandardMaterial({ color: 0xf1e8d8, roughness: .8 })
  const red = new THREE.MeshStandardMaterial({ color: 0xc74732, roughness: .8 })
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 3.1, 15, 12), white)
  tower.position.y = 7.5
  g.add(tower)
  const band = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.5, 3.2, 12), red)
  band.position.y = 10
  g.add(band)
  const top = new THREE.Mesh(new THREE.CylinderGeometry(2.25, 2.25, 1.2, 12), new THREE.MeshStandardMaterial({ color: 0x26343c, metalness: .6, roughness: .3 }))
  top.position.y = 15.4
  g.add(top)
  const lantern = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 1.8, 12), new THREE.MeshBasicMaterial({ color: 0xffd7a0 }))
  lantern.position.y = 16.8
  g.add(lantern)
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.9, 1.4, 12), red)
  cap.position.y = 18.3
  g.add(cap)
  return g
}

function createUmbrella(color) {
  const g = new THREE.Group()
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, 3.2, 5), new THREE.MeshStandardMaterial({ color: 0x8d8474, metalness: .3, roughness: .6 }))
  pole.position.y = 1.6
  g.add(pole)
  const top = new THREE.Mesh(new THREE.ConeGeometry(2.3, .8, 10), new THREE.MeshStandardMaterial({ color, roughness: .8, side: THREE.DoubleSide }))
  top.position.y = 3.15
  g.add(top)
  return g
}

function createBoat() {
  const g = new THREE.Group()
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(1.2, 5, 4, 8), new THREE.MeshStandardMaterial({ color: 0xf0ece2, roughness: .45, metalness: .15 }))
  hull.rotation.z = Math.PI / 2
  hull.scale.set(.6, 1, 1)
  hull.position.y = .8
  g.add(hull)
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.1, 1.7), new THREE.MeshStandardMaterial({ color: 0x21333e, roughness: .3, metalness: .3 }))
  cabin.position.set(0, 1.8, 0)
  g.add(cabin)
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(.04, .04, 7, 4), new THREE.MeshStandardMaterial({ color: 0xded8cb }))
  mast.position.set(0, 5.4, 0)
  g.add(mast)
  return g
}
