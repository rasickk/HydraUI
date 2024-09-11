import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Road = ({ position }) => {
  const roadRef = useRef();

  useFrame(() => {
    if (roadRef.current.position.z < -20) {
      roadRef.current.position.z = 20; // Reset position for a seamless loop
    }
    roadRef.current.position.z -= 0.1; // Adjust speed here for smooth movement
  });

  return (
    <mesh ref={roadRef} position={position}>
      {/* Dark, minimalistic road surface */}
      <boxGeometry args={[2, 0.1, 40]} />
      <meshStandardMaterial color="#1a1a1a" /> {/* Darker road surface for a more modern look */}

      {/* Dashed lane markings */}
      <mesh position={[0, 0.02, -17]} scale={[0.05, 0.05, 0.5]}>
        <boxGeometry args={[1, 0.01, 1]} />
        <meshStandardMaterial color="#ffffff" /> {/* White lane markings */}
      </mesh>
      <mesh position={[0, 0.02, -9]} scale={[0.05, 0.05, 0.5]}>
        <boxGeometry args={[1, 0.01, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.02, -1]} scale={[0.05, 0.05, 0.5]}>
        <boxGeometry args={[1, 0.01, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.02, 7]} scale={[0.05, 0.05, 0.5]}>
        <boxGeometry args={[1, 0.01, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.02, 15]} scale={[0.05, 0.05, 0.5]}>
        <boxGeometry args={[1, 0.01, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </mesh>
  );
};

export default Road;
