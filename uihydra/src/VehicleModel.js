// src/VehicleModel.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

const VehicleModel = () => {
  const { scene } = useGLTF('/taxi.gltf');
  return <primitive object={scene} scale={0.5} />;
};

export default VehicleModel;
