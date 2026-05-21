import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function cssVarToHex(varName: string): string {
  const root = document.documentElement
  const raw = getComputedStyle(root).getPropertyValue(varName).trim()
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext('2d')
  if (!ctx) return '#ffffff'
  ctx.fillStyle = raw
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  return '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('')
}

function SpinningKnot() {
  const meshRef = useRef<THREE.Mesh>(null)
  const color = cssVarToHex('--color-brand')

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.25 * delta
    meshRef.current.rotation.y += 0.35 * delta
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.32, 128, 32]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
    </mesh>
  )
}

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="city" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
            <SpinningKnot />
          </Float>
          <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="relative z-10 grid place-items-center h-full text-center px-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted mb-4">
            Advanced CSS · W3 · Tag 3
          </p>
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-4 mix-blend-difference">
            Compose + Agent.
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl">
            Motion Variants · View Transitions · @scope · Cursor Agent
          </p>
        </div>
      </div>
    </section>
  )
}
