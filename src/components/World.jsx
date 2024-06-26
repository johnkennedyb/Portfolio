import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls from Three.js

function World() {
  return (
    <Canvas style={{ height: '100vh', width: '50vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <mesh rotation={[0, 0, 0]}>
          <sphereGeometry args={[5, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default World;

