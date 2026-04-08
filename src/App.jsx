import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Planet({ position, color, name }) {
  return (
    <mesh
      position={position}
      onClick={() => {
        console.log(name + " clicked");
      }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas>
        <Stars radius={100} depth={50} count={5000} factor={4} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Planet position={[-3, 0, 0]} color="blue" name="About" />
        <Planet position={[3, 0, 0]} color="purple" name="Projects" />
        <Planet position={[0, 2, -2]} color="green" name="Contact" />

        <OrbitControls />
      </Canvas>
    </div>
  );
}