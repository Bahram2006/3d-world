import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Planet({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas>
        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} />

        {/* Light */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Planets */}
        <Planet position={[-3, 0, 0]} color="blue" />
        <Planet position={[3, 0, 0]} color="purple" />
        <Planet position={[0, 2, -2]} color="green" />

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}