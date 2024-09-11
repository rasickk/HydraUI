import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import VehicleModel from './VehicleModel';
import Road from './Road';

const VehicleScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      {/* Vehicle */}
      <VehicleModel />

      {/* Roads on either side */}
      <Road position={[-1.5, 0, -10]} /> {/* Left road */}
      <Road position={[1.5, 0, -10]} /> {/* Right road */}

      <OrbitControls />
    </Canvas>
  );
};

export default VehicleScene;
