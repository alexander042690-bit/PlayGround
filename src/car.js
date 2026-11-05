import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

function shadowTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(128, 128, 10, 128, 128, 128)
  g.addColorStop(0, 'rgba(0,0,0,.78)')
  g.addColorStop(0.35, 'rgba(0,0,0,.52)')
  g.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 256, 256)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

let SHADOW_TEX = null

function paintTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#05070a'
  ctx.fillRect(0, 0, 128, 128)
  ctx.fillStyle = '#f2f0e8'
  ctx.font = '700 54px Inter, Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('SOL', 64, 68)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

let PLATE_TEX = null

/**
 * Build a smooth closed profile (longitudinal Z / vertical Y) and extrude it
 * across the car's width. This gives the shell a far more organic silhouette
 * than stacked boxes while keeping the model fully procedural.
 */
function profileMesh(points, width, bevel, material, segments = 18) {
  const shape = new THREE.Shape()
  shape.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) shape.lineTo(points[i][0], points[i][1])
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: width,
    steps: 1,
    curveSegments: segments,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
  })
  geo.translate(0, 0, -width / 2)
  geo.rotateY(-Math.PI / 2)
  geo.computeVertexNormals()
  const mesh = new THREE.Mesh(geo, material)
  return mesh
}

function barBetween(a, b, w, d, material) {
  const dir = new THREE.Vector3().subVectors(b, a)
  const len = dir.length()
  const geo = new THREE.BoxGeometry(w, len, d)
  const mesh = new THREE.Mesh(geo, material)
  mesh.position.copy(a).add(b).multiplyScalar(0.5)
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
  return mesh
}

export function createCar({ color = 0xff4d18, accent = 0x101217, player = false } = {}) {
  const root = new THREE.Group()
  const body = new THREE.Group()
  root.add(body)

  const paint = new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.55,
    roughness: 0.24,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    envMapIntensity: 1.9,
    sheen: 0.18,
    sheenRoughness: 0.55,
  })
  const carbon = new THREE.MeshStandardMaterial({ color: 0x0c0e12, metalness: 0.5, roughness: 0.42 })
  const blackTrim = new THREE.MeshStandardMaterial({ color: 0x07090b, metalness: 0.22, roughness: 0.68 })
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x06101a,
    metalness: 0.35,
    roughness: 0.045,
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    transparent: true,
    opacity: 0.9,
    envMapIntensity: 2.4,
  })
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x0a0b0d, roughness: 0.92, metalness: 0.02, envMapIntensity: 0.18 })
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x202329, metalness: 0.98, roughness: 0.22, envMapIntensity: 1.5 })
  const chrome = new THREE.MeshStandardMaterial({ color: 0xc6cbd0, metalness: 1, roughness: 0.14, envMapIntensity: 1.8 })
  const discMat = new THREE.MeshStandardMaterial({ color: 0x6c6f73, metalness: 0.9, roughness: 0.38 })
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xe9f1ff,
    emissive: 0xdce9ff,
    emissiveIntensity: 2.4,
    roughness: 0.1,
    metalness: 0.2,
    envMapIntensity: 1.4,
  })
  const tailMat = new THREE.MeshStandardMaterial({
    color: 0xff2010,
    emissive: 0xff1508,
    emissiveIntensity: 3.2,
    roughness: 0.22,
    metalness: 0.1,
  })
  const indicatorMat = new THREE.MeshStandardMaterial({
    color: 0xff9a2a,
    emissive: 0xff7a10,
    emissiveIntensity: 1.6,
    roughness: 0.3,
  })
  const accentMat = new THREE.MeshStandardMaterial({ color: 0xffb16d, metalness: 0.7, roughness: 0.32 })

  function part(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, cast = player) {
    const m = new THREE.Mesh(geo, mat)
    m.position.set(x, y, z)
    m.rotation.set(rx, ry, rz)
    m.castShadow = cast
    m.receiveShadow = false
    body.add(m)
    return m
  }

  // ---------------- main shell ----------------
  const shell = profileMesh([
    [-2.24, 0.31], [-2.32, 0.52], [-2.24, 0.77], [-1.78, 0.88],
    [-0.92, 0.95], [0.28, 0.94], [1.18, 0.87], [1.86, 0.77],
    [2.18, 0.65], [2.27, 0.47], [2.18, 0.32],
  ], 1.82, 0.07, paint)
  shell.castShadow = player
  body.add(shell)

  // underbody / floor
  part(new RoundedBoxGeometry(1.62, 0.16, 3.75, 2, 0.04), carbon, 0, 0.3, -0.05, 0, 0, 0, player)

  // ---------------- greenhouse ----------------
  const canopy = profileMesh([
    [-1.52, 0.9], [-1.32, 1.13], [-1.0, 1.33], [-0.54, 1.43],
    [0.12, 1.45], [0.6, 1.34], [0.94, 1.11], [1.1, 0.9],
  ], 1.42, 0.075, glass)
  canopy.castShadow = player
  body.add(canopy)

  // painted roof + pillars so the canopy doesn't read as a glass bubble
  part(new RoundedBoxGeometry(1.2, 0.055, 0.86, 3, 0.035), paint, 0, 1.455, -0.2, 0, 0, 0, player)
  for (const s of [-1, 1]) {
    body.add(barBetween(
      new THREE.Vector3(s * 0.7, 1.05, 1.0),
      new THREE.Vector3(s * 0.63, 1.42, 0.3),
      0.065, 0.06, paint,
    ))
    body.add(barBetween(
      new THREE.Vector3(s * 0.71, 1.12, -1.22),
      new THREE.Vector3(s * 0.63, 1.44, -0.48),
      0.075, 0.065, paint,
    ))
    part(new THREE.BoxGeometry(0.035, 0.22, 0.5), carbon, s * 0.735, 1.18, -0.02, 0, 0, 0, player)
    part(new THREE.BoxGeometry(0.055, 0.045, 2.25), blackTrim, s * 0.705, 0.905, -0.28, 0, 0, 0, player)
  }

  // ---------------- fenders / haunches ----------------
  const fenderGeo = new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2)
  for (const [x, z] of [[0.9, 1.42], [-0.9, 1.42], [0.92, -1.44], [-0.92, -1.44]]) {
    const fender = new THREE.Mesh(fenderGeo, paint)
    fender.position.set(x, 0.37, z)
    fender.scale.set(0.23, 0.48, 0.8)
    fender.castShadow = player
    body.add(fender)
  }

  // ---------------- front end ----------------
  part(new RoundedBoxGeometry(1.88, 0.3, 0.22, 3, 0.05), paint, 0, 0.42, 2.16, 0, 0, 0, player)
  part(new THREE.BoxGeometry(1.18, 0.15, 0.055), blackTrim, 0, 0.47, 2.27, -0.06, 0, 0, player)
  part(new THREE.BoxGeometry(1.24, 0.028, 0.035), chrome, 0, 0.53, 2.29, -0.06, 0, 0, player)
  part(new THREE.BoxGeometry(1.24, 0.028, 0.035), chrome, 0, 0.42, 2.29, -0.06, 0, 0, player)
  part(new THREE.BoxGeometry(1.9, 0.055, 0.46), carbon, 0, 0.295, 2.08, 0, 0, 0, player)
  for (const s of [-1, 1]) {
    part(new THREE.BoxGeometry(0.34, 0.17, 0.055), blackTrim, s * 0.72, 0.41, 2.27, -0.06, 0, 0, player)
    part(new THREE.BoxGeometry(0.3, 0.04, 0.035), carbon, s * 0.72, 0.34, 2.28, -0.06, 0, 0, player)
    // slim matrix headlights
    part(new THREE.BoxGeometry(0.52, 0.13, 0.075), blackTrim, s * 0.64, 0.71, 2.19, -0.16, 0, 0, player)
    part(new THREE.BoxGeometry(0.47, 0.065, 0.04), headMat, s * 0.64, 0.72, 2.225, -0.16, 0, 0, player)
    part(new THREE.BoxGeometry(0.46, 0.022, 0.04), headMat, s * 0.64, 0.665, 2.235, -0.12, 0, 0, player)
    // hood vent
    part(new THREE.BoxGeometry(0.28, 0.022, 0.5), carbon, s * 0.38, 0.943, 1.42, 0, 0, 0, player)
    // mirrors
    body.add(barBetween(
      new THREE.Vector3(s * 0.78, 1.01, 0.72),
      new THREE.Vector3(s * 0.94, 1.06, 0.68),
      0.035, 0.035, carbon,
    ))
    part(new RoundedBoxGeometry(0.2, 0.095, 0.24, 2, 0.03), paint, s * 0.98, 1.075, 0.67, 0, 0, 0, player)
    part(new THREE.BoxGeometry(0.012, 0.07, 0.19), glass, s * 0.885, 1.075, 0.67, 0, 0, 0, player)
    // side skirts and intakes
    part(new THREE.BoxGeometry(0.09, 0.1, 2.2), carbon, s * 0.99, 0.3, 0.02, 0, 0, 0, player)
    part(new THREE.BoxGeometry(0.05, 0.26, 0.68), blackTrim, s * 0.975, 0.63, -0.86, 0, 0, 0, player)
    part(new THREE.BoxGeometry(0.025, 0.05, 1.0), accentMat, s * 1.0, 0.81, -0.22, 0, 0, 0, player)
    // door seam
    part(new THREE.BoxGeometry(0.012, 0.46, 0.016), blackTrim, s * 0.955, 0.67, 0.42, 0, 0, 0, player)
    part(new THREE.BoxGeometry(0.012, 0.46, 0.016), blackTrim, s * 0.955, 0.67, -0.72, 0, 0, 0, player)
    // front fender vent
    part(new THREE.BoxGeometry(0.03, 0.19, 0.46), blackTrim, s * 0.955, 0.67, 0.97, 0, 0, 0, player)
    for (let i = 0; i < 3; i++) {
      part(new THREE.BoxGeometry(0.02, 0.022, 0.4), chrome, s * 0.972, 0.6 + i * 0.058, 0.97, 0.05, 0, 0, player)
    }
    // front canard
    part(new THREE.BoxGeometry(0.22, 0.022, 0.14), carbon, s * 0.86, 0.4, 2.12, 0.1, s * 0.2, 0, player)
  }

  // ---------------- rear end ----------------
  part(new RoundedBoxGeometry(1.88, 0.4, 0.3, 3, 0.06), paint, 0, 0.55, -2.2, 0, 0, 0, player)
  // full-width light housing with a bright LED bar
  part(new THREE.BoxGeometry(1.68, 0.15, 0.045), blackTrim, 0, 0.745, -2.37, 0, 0, 0, player)
  part(new THREE.BoxGeometry(1.52, 0.048, 0.022), tailMat, 0, 0.748, -2.398, 0, 0, 0, player)
  for (const s of [-1, 1]) {
    part(new THREE.BoxGeometry(0.3, 0.1, 0.028), tailMat, s * 0.71, 0.735, -2.392, 0, 0, 0, player)
    part(new THREE.BoxGeometry(0.13, 0.038, 0.03), indicatorMat, s * 0.56, 0.695, -2.395, 0, 0, 0, player)
    part(new THREE.BoxGeometry(0.12, 0.04, 0.03), headMat, s * 0.34, 0.69, -2.396, 0, 0, 0, player)
  }
  // black mesh centre panel + plate
  part(new THREE.BoxGeometry(1.42, 0.24, 0.035), blackTrim, 0, 0.52, -2.355, 0, 0, 0, player)
  for (let i = 0; i < 4; i++) {
    part(new THREE.BoxGeometry(1.3, 0.012, 0.012), carbon, 0, 0.44 + i * 0.052, -2.376, 0, 0, 0, player)
  }
  const plate = new THREE.Mesh(
    new THREE.PlaneGeometry(0.4, 0.12),
    new THREE.MeshStandardMaterial({
      map: PLATE_TEX || (PLATE_TEX = paintTexture()),
      roughness: 0.52,
      metalness: 0.05,
      emissive: 0xffffff,
      emissiveIntensity: 0.04,
    }),
  )
  plate.position.set(0, 0.535, -2.378)
  plate.rotation.y = Math.PI
  body.add(plate)
  // diffuser + fins
  part(new THREE.BoxGeometry(1.7, 0.11, 0.3), carbon, 0, 0.27, -2.2, -0.08, 0, 0, player)
  for (let i = -2; i <= 2; i++) {
    part(new THREE.BoxGeometry(0.035, 0.2, 0.28), carbon, i * 0.31, 0.27, -2.22, -0.08, 0, 0, player)
  }
  // exhaust tips
  for (const s of [-1, 1]) {
    part(new THREE.CylinderGeometry(0.062, 0.07, 0.22, 16), chrome, s * 0.42, 0.33, -2.4, Math.PI / 2, 0, 0, player)
    part(new THREE.CylinderGeometry(0.045, 0.045, 0.23, 14), blackTrim, s * 0.42, 0.33, -2.41, Math.PI / 2, 0, 0, player)
  }
  // rear quarter vents
  for (const s of [-1, 1]) {
    part(new THREE.BoxGeometry(0.02, 0.16, 0.34), blackTrim, s * 0.97, 0.68, -1.63, 0, 0, 0, player)
    for (let i = 0; i < 3; i++) {
      part(new THREE.BoxGeometry(0.012, 0.12, 0.012), chrome, s * 0.984, 0.68, -1.75 + i * 0.1, 0, 0, 0, player)
    }
  }
  // engine cover slats
  for (let i = 0; i < 3; i++) {
    part(new THREE.BoxGeometry(0.86, 0.018, 0.1), carbon, 0, 1.03 - i * 0.018, -1.35 - i * 0.18, 0.16, 0, 0, player)
  }
  // shark fin and fuel filler
  part(new THREE.BoxGeometry(0.035, 0.07, 0.2), paint, 0, 1.49, -0.74, -0.12, 0, 0, player)
  part(new THREE.CylinderGeometry(0.065, 0.065, 0.014, 16), chrome, -0.962, 0.72, -1.12, 0, 0, Math.PI / 2, player)
  part(new THREE.CylinderGeometry(0.045, 0.045, 0.016, 16), blackTrim, -0.966, 0.72, -1.12, 0, 0, Math.PI / 2, player)
  // nose badge
  part(new THREE.CylinderGeometry(0.075, 0.075, 0.014, 20), chrome, 0, 0.63, 2.285, Math.PI / 2, 0, 0, player)
  part(new THREE.CylinderGeometry(0.05, 0.05, 0.017, 20), accentMat, 0, 0.63, 2.29, Math.PI / 2, 0, 0, player)
  // wiper at rest
  part(new THREE.BoxGeometry(0.56, 0.012, 0.025), carbon, -0.1, 1.09, 1.02, 0, -0.25, 0, player)
  // rear wing
  for (const s of [-1, 1]) {
    part(new THREE.BoxGeometry(0.065, 0.29, 0.2), carbon, s * 0.61, 1.0, -1.99, 0, 0, 0, player)
  }
  part(new THREE.BoxGeometry(1.76, 0.055, 0.4), carbon, 0, 1.17, -2.02, 0.13, 0, 0, player)
  part(new THREE.BoxGeometry(1.78, 0.018, 0.4), paint, 0, 1.2, -2.02, 0.13, 0, 0, player)
  for (const s of [-1, 1]) {
    part(new THREE.BoxGeometry(0.035, 0.2, 0.42), carbon, s * 0.875, 1.09, -2.01, 0.13, 0, 0, player)
  }

  // ---------------- wheels ----------------
  function buildWheel(radius, width, front, side) {
    const steer = new THREE.Group()
    const spin = new THREE.Group()
    steer.add(spin)

    const tireGeo = new THREE.CylinderGeometry(radius, radius, width, 32, 2)
    tireGeo.rotateZ(Math.PI / 2)
    const tire = new THREE.Mesh(tireGeo, tireMat)
    tire.castShadow = player
    spin.add(tire)

    // subtle shoulder ring so the tyre reads as rubber rather than a cylinder
    const sidewallGeo = new THREE.TorusGeometry(radius * 0.88, radius * 0.045, 6, 32)
    sidewallGeo.rotateY(Math.PI / 2)
    for (const s of [-1, 1]) {
      const sidewall = new THREE.Mesh(sidewallGeo, tireMat)
      sidewall.position.x = s * (width / 2 - 0.006)
      spin.add(sidewall)
    }

    // rim face and polished lip
    const faceGeo = new THREE.CylinderGeometry(radius * 0.64, radius * 0.64, 0.018, 32)
    faceGeo.rotateZ(Math.PI / 2)
    const barrelGeo = new THREE.CylinderGeometry(radius * 0.625, radius * 0.625, width * 0.82, 32, 1)
    barrelGeo.rotateZ(Math.PI / 2)
    spin.add(new THREE.Mesh(barrelGeo, rimMat))
    const lipGeo = new THREE.TorusGeometry(radius * 0.64, 0.015, 5, 32)
    lipGeo.rotateY(Math.PI / 2)

    const spokeGeo = new THREE.BoxGeometry(0.038, radius * 0.46, 0.075)
    for (const s of [-1, 1]) {
      const face = new THREE.Mesh(faceGeo, blackTrim)
      face.position.x = s * (width * 0.43)
      spin.add(face)
      const lip = new THREE.Mesh(lipGeo, chrome)
      lip.position.x = s * (width * 0.44)
      spin.add(lip)
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        const g = spokeGeo.clone()
        g.translate(0, radius * 0.3, 0)
        g.rotateX(a)
        const spoke = new THREE.Mesh(g, i % 2 ? rimMat : chrome)
        spoke.position.x = s * (width * 0.46)
        spin.add(spoke)
      }
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.15, radius * 0.15, 0.022, 14),
        chrome,
      )
      hub.geometry.rotateZ(Math.PI / 2)
      hub.position.x = s * (width * 0.47)
      spin.add(hub)
      const nut = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.065, radius * 0.065, 0.03, 6),
        accentMat,
      )
      nut.geometry.rotateZ(Math.PI / 2)
      nut.position.x = s * (width * 0.49)
      spin.add(nut)
    }

    // brake disc (spins) and caliper (doesn't)
    const discGeo = new THREE.CylinderGeometry(radius * 0.56, radius * 0.56, 0.024, 28)
    discGeo.rotateZ(Math.PI / 2)
    const disc = new THREE.Mesh(discGeo, discMat)
    disc.position.x = 0.04
    spin.add(disc)
    const caliper = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.17, 0.11),
      new THREE.MeshStandardMaterial({ color: front ? 0xe0491c : 0x202226, metalness: 0.45, roughness: 0.5 }),
    )
    caliper.position.set(side * 0.11, radius * 0.4, -0.03)
    steer.add(caliper)

    return { steer, spin }
  }

  const wheels = []
  const frontWheels = []
  const wheelDefs = [
    [-0.99, 1.42, 0.375, 0.34, true],
    [0.99, 1.42, 0.375, 0.34, true],
    [-1.0, -1.44, 0.395, 0.37, false],
    [1.0, -1.44, 0.395, 0.37, false],
  ]
  for (const [x, z, radius, width, front] of wheelDefs) {
    const { steer, spin } = buildWheel(radius, width, front, Math.sign(x))
    steer.position.set(x, radius, z)
    root.add(steer)
    wheels.push(spin)
    if (front) frontWheels.push(steer)
  }

  // subtle ambient-occlusion blob under every car
  const blob = new THREE.Mesh(
    new THREE.PlaneGeometry(2.7, 5.2),
    new THREE.MeshBasicMaterial({
      map: SHADOW_TEX || (SHADOW_TEX = shadowTexture()),
      transparent: true,
      opacity: player ? 0.52 : 0.44,
      depthWrite: false,
      blending: THREE.NormalBlending,
    }),
  )
  blob.rotation.x = -Math.PI / 2
  blob.position.y = 0.018
  blob.renderOrder = 2
  root.add(blob)

  // Headlights
  const lights = []
  if (player) {
    for (const x of [-0.62, 0.62]) {
      const light = new THREE.SpotLight(0xffe2b8, 180, 70, 0.34, 0.72, 1.3)
      light.position.set(x, 0.76, 2.05)
      const target = new THREE.Object3D()
      target.position.set(x * 0.4, 0.1, 28)
      root.add(light, target)
      light.target = target
      lights.push(light)
    }
  }

  // Nitro flames
  const flameMat = new THREE.MeshBasicMaterial({
    color: 0x8ff9ff,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const flames = []
  for (const x of [-0.4, 0.4]) {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.8, 7, 1, true), flameMat)
    f.position.set(x, 0.35, -2.24)
    f.rotation.x = -Math.PI / 2
    root.add(f)
    flames.push(f)
  }

  let wheelSpin = 0
  let bodyRoll = 0
  let bodyPitch = 0
  let boostVis = 0

  return {
    group: root,
    body,
    paint,
    wheels,
    frontWheels,
    tailMat,
    headMat,
    lights,
    update(dt, speed = 0, steer = 0, drift = 0, accel = 0, boosting = false, braking = false) {
      wheelSpin -= speed * dt / 0.39
      for (const w of wheels) w.rotation.x = wheelSpin
      for (const w of frontWheels) w.rotation.y = -steer * 0.36
      const targetRoll = THREE.MathUtils.clamp(-steer * Math.min(speed / 38, 1) * 0.1 - drift * 0.05, -0.12, 0.12)
      const targetPitch = THREE.MathUtils.clamp(-accel * 0.007, -0.04, 0.05)
      bodyRoll += (targetRoll - bodyRoll) * Math.min(1, dt * 6)
      bodyPitch += (targetPitch - bodyPitch) * Math.min(1, dt * 5)
      body.rotation.z = bodyRoll
      body.rotation.x = bodyPitch
      body.position.y = Math.sin(wheelSpin * 0.1) * 0.004
      boostVis += ((boosting ? 1 : 0) - boostVis) * Math.min(1, dt * 12)
      flameMat.opacity = boostVis * (0.55 + Math.random() * 0.25)
      for (const f of flames) {
        f.scale.set(1, 0.65 + Math.random() * 0.8, 1)
        f.visible = boostVis > 0.05
      }
      tailMat.emissiveIntensity = braking ? 9 : 4.2
    },
    setPaint(hex) {
      paint.color.setHex(hex)
    },
    dispose() {
      root.traverse((o) => {
        if (o.geometry) o.geometry.dispose()
      })
    },
  }
}
