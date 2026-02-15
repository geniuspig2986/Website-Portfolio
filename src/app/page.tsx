"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dodecahedron from "@/components/Dodecahedron";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "#000000" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Dodecahedron />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </main>
  );
}
