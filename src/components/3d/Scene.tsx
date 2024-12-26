import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Star from './Star';

export default function Scene() {
  return (
    <div className="absolute inset-0 h-screen pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Star />
      </Canvas>
    </div>
  );
}