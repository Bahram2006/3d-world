import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas>
        {/* Light */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Planet */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}