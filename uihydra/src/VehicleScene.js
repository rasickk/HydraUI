import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import VehicleModel from './VehicleModel';

const VehicleScene = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
      <VehicleModel />
      <OrbitControls />
    </Canvas>
  );
};

export default VehicleScene;
