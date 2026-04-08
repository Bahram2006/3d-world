import { useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function CameraController({ target }) {
  const { camera } = useThree();

  useFrame(() => {
    if (target) {
      camera.position.x += (target[0] - camera.position.x) * 0.05;
      camera.position.y += (target[1] - camera.position.y) * 0.05;
      camera.position.z += (target[2] + 3 - camera.position.z) * 0.05;

      camera.lookAt(target[0], target[1], target[2]);
    }
  });

  return null;
}

function Planet({ position, color, name, setActive, setTarget }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={hovered ? 1.3 : 1}
      onClick={() => {
        setActive(name);
        setTarget(position);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function App() {
  const [active, setActive] = useState(null);
  const [target, setTarget] = useState(null);

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
          <button
            onClick={() => {
              setActive(null);
              setTarget(null);
            }}
          >
            Close
          </button>
        </div>
      )}

      <Canvas>
        <Stars radius={100} depth={50} count={5000} factor={4} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <CameraController target={target} />

        <Planet position={[-3, 0, 0]} color="blue" name="About" setActive={setActive} setTarget={setTarget} />
        <Planet position={[3, 0, 0]} color="purple" name="Projects" setActive={setActive} setTarget={setTarget} />
        <Planet position={[0, 2, -2]} color="green" name="Contact" setActive={setActive} setTarget={setTarget} />

        <OrbitControls />
      </Canvas>
    </div>
  );
}