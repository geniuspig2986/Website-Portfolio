"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dodecahedron from "@/components/Dodecahedron";
import Loader from "@/components/Loader";

// Bio lines with staggered animation delays (after 10s loader + 0.8s fade)
const BIO_LINES = [
  { text: "Portfolio", delay: "16.0s", className: "mb-3 text-xs font-semibold tracking-[0.3em] text-cyan-600 uppercase" },
  { text: "Simon", delay: "16.4s", className: "text-4xl font-bold leading-tight tracking-tight text-zinc-900" },
  { text: "Shenghua Jin", delay: "16.7s", className: "mb-4 text-4xl font-bold leading-tight tracking-tight text-zinc-900" },
  {
    text: "Mechatronics engineer and software developer with a passion for robotics, machine learning, and building things that bridge the digital-physical divide.",
    delay: "17.2s",
    className: "max-w-sm text-sm leading-relaxed text-zinc-500",
  },
  {
    text: "Currently studying at SFU, winning hackathons, and pushing the boundaries of what hardware and software can do together.",
    delay: "17.7s",
    className: "mt-2 max-w-sm text-sm leading-relaxed text-zinc-500",
  },
];

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-white">
      {/* Loader overlay — fades out after 10s, stays mounted invisibly */}
      <Loader />

      {/* Left-side bio text — lines appear sequentially */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-[40%] flex-col justify-center px-12">
        {BIO_LINES.map((line, i) => (
          <p
            key={i}
            className={`animate-line ${line.className}`}
            style={{ animationDelay: line.delay }}
          >
            {line.text}
          </p>
        ))}

        <div
          className="animate-line mt-6 flex gap-3 pointer-events-auto"
          style={{ animationDelay: "18.2s" }}
        >
          <a
            href="#"
            className="rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100"
          >
            View Projects
          </a>
          <a
            href="#"
            className="rounded-full bg-cyan-500 px-5 py-2 text-xs font-medium text-white transition hover:bg-cyan-600"
          >
            Contact
          </a>
        </div>
      </div>

      {/* 3D Canvas — white background, dodecahedron shifted right */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "#ffffff" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <Dodecahedron />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          target={[1.5, 0, 0]}
        />
      </Canvas>
    </main>
  );
}
