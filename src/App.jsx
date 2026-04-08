import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Planet({ position, color, name, setActive }) {
  return (
    <mesh
      position={position}
      onClick={() => {
        setActive(name);
      }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      {/* UI PANEL */}
      {active && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            padding: "20px",
            background: "white",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <h2>{active}</h2>
          <p>This is {active} section</p>
          <button onClick={() => setActive(null)}>Close</button>
        </div>
      )}

      <Canvas>
        <Stars radius={100} depth={50} count={5000} factor={4} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Planet position={[-3, 0, 0]} color="blue" name="About" setActive={setActive} />
        <Planet position={[3, 0, 0]} color="purple" name="Projects" setActive={setActive} />
        <Planet position={[0, 2, -2]} color="green" name="Contact" setActive={setActive} />

        <OrbitControls />
      </Canvas>
    </div>
  );
}