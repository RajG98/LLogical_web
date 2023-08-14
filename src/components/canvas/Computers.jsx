import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from
  '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer=useGLTF('./education_icon/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2.45}
        groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={1}
        position={[0, -1.6, 0]}
        rotation={[-0.01,0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 15 }}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={< CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/3}
        />
        <Computers />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas