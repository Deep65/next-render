"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls,  Environment } from "@react-three/drei";

import Guitar  from "../../Guitar_hardware_parts";

const Main = () => {
  return (
    <div className="w-full h-screen bg-black">
           <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <Guitar />
        <Environment preset="sunset" />
      </Canvas>

    </div>
  );
};

export default Main;
