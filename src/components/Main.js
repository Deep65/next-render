"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Environment } from "@react-three/drei";

const Main = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color="blue" />
        </Sphere>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Main;
