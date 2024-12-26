import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Star({ scale = 2.5 }) {
  const mesh = useRef<Mesh>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    // Base rotation
    mesh.current.rotation.x += delta * 0.2;
    
    // Mouse-based rotation
    const targetRotationY = (mouse.x * Math.PI) / 4;
    const targetRotationZ = (mouse.y * Math.PI) / 4;
    
    mesh.current.rotation.y += (targetRotationY - mesh.current.rotation.y) * 0.1;
    mesh.current.rotation.z += (targetRotationZ - mesh.current.rotation.z) * 0.1;
  });

  return (
    <group scale={scale}>
      {[0, 60, 120].map((rotation, index) => (
        <mesh
          key={index}
          rotation-z={rotation * (Math.PI / 180)}
          ref={index === 0 ? mesh : undefined}
        >
          <torusGeometry args={[1, 0.2, 16, 100]} />
          <meshStandardMaterial
            color="#FF0000"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}