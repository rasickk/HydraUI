import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const VehicleModel = () => {
  const { scene } = useGLTF('/Porsche.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Change the color of the material
        child.material.color.set('white'); // Set the color to red
        // You can use a color name, hex code, or RGB value
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={1} />;
};

export default VehicleModel;
