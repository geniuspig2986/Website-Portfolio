"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// ─── Constants ───────────────────────────────────────────────────────────────
const RADIUS = 2.5;
const phi = (1 + Math.sqrt(5)) / 2;

// ─── Face Data ───────────────────────────────────────────────────────────────
// The 12 face normals of a dodecahedron correspond to the vertices of its dual,
// the icosahedron. These are cyclic permutations of (0, ±1, ±φ).

interface FaceData {
    direction: [number, number, number];
    label: string;
    content: React.ReactNode;
}

const FACE_DEFINITIONS: FaceData[] = [
    // ── Group 1: (0, ±1, ±φ) ──
    {
        direction: [0, 1, phi],
        label: "Portrait",
        content: (
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/70 px-8 py-6 text-center backdrop-blur-md">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                <h2 className="text-lg font-bold tracking-tight text-white">
                    Simon Shenghua Jin
                </h2>
                <p className="text-xs font-medium tracking-widest text-cyan-300/80 uppercase">
                    Robotics &nbsp;|&nbsp; ML &nbsp;|&nbsp; Software
                </p>
            </div>
        ),
    },
    {
        direction: [0, -1, -phi],
        label: "Footer",
        content: (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-black/70 px-8 py-5 backdrop-blur-md">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                    Connect
                </p>
                <div className="flex gap-4">
                    <a href="#" className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">
                        LinkedIn
                    </a>
                    <a href="#" className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">
                        GitHub
                    </a>
                    <a href="#" className="rounded-lg bg-cyan-500/20 px-3 py-1.5 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/30">
                        Resume ↓
                    </a>
                </div>
            </div>
        ),
    },
    {
        direction: [0, 1, -phi],
        label: "HardHaQ",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-amber-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                    🏆 1st Place
                </span>
                <h3 className="text-sm font-bold text-white">HardHaQ 2026</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    Quantum Hardware Hackathon — designed &amp; prototyped a novel qubit
                    control interface.
                </p>
            </div>
        ),
    },
    {
        direction: [0, -1, phi],
        label: "HackML",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-violet-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-violet-400 uppercase">
                    Machine Learning
                </span>
                <h3 className="text-sm font-bold text-white">HackML</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    K-fold cross-validation pipeline for robust model evaluation &amp;
                    hyperparameter tuning.
                </p>
            </div>
        ),
    },

    // ── Group 2: (±1, ±φ, 0) ──
    {
        direction: [1, phi, 0],
        label: "Hardware",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-emerald-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                    Hardware
                </span>
                <h3 className="text-sm font-bold text-white">Custom Macropad</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    Hall-effect switches, KiCad PCB design, 3D-printed enclosure with
                    sub-0.1mm tolerances.
                </p>
            </div>
        ),
    },
    {
        direction: [-1, phi, 0],
        label: "Leadership",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-rose-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase">
                    Leadership
                </span>
                <h3 className="text-sm font-bold text-white">FTC Team Parabellum</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    3-year captain — led team to European Internationals. Mentored 20+
                    junior members.
                </p>
            </div>
        ),
    },
    {
        direction: [1, -phi, 0],
        label: "HUDson",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-blue-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">
                    Software
                </span>
                <h3 className="text-sm font-bold text-white">HUDson</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    nwHacks 2026 — Best Use of ElevenLabs API. Real-time HUD overlay
                    system.
                </p>
            </div>
        ),
    },
    {
        direction: [-1, -phi, 0],
        label: "Air Mouse",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-orange-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase">
                    Integration
                </span>
                <h3 className="text-sm font-bold text-white">Air Mouse</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    JourneyHacks 2026 Surge Choice Award — gesture-controlled cursor via
                    IMU sensor fusion.
                </p>
            </div>
        ),
    },

    // ── Group 3: (±φ, 0, ±1) ──
    {
        direction: [phi, 0, 1],
        label: "Solder Bot",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-teal-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-teal-400 uppercase">
                    Mechatronics
                </span>
                <h3 className="text-sm font-bold text-white">No-Shake Solder Bot</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    Dum-E / Dum-IER — robotic teleoperation platform for precision
                    soldering tasks.
                </p>
            </div>
        ),
    },
    {
        direction: [-phi, 0, 1],
        label: "Research",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-indigo-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">
                    Research
                </span>
                <h3 className="text-sm font-bold text-white">Robotics Lab</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    OBJ → URDF conversion scripts, ROS integration, Docker-containerized
                    simulation pipelines.
                </p>
            </div>
        ),
    },
    {
        direction: [phi, 0, -1],
        label: "Quant",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-yellow-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-yellow-400 uppercase">
                    Quant Finance
                </span>
                <h3 className="text-sm font-bold text-white">CPABC Case Competition</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    Quantitative financial analysis &amp; portfolio optimization strategy
                    presentation.
                </p>
            </div>
        ),
    },
    {
        direction: [-phi, 0, -1],
        label: "Awards",
        content: (
            <div className="flex w-48 flex-col gap-2 rounded-2xl border border-pink-500/20 bg-black/70 px-6 py-5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-pink-400 uppercase">
                    Awards
                </span>
                <h3 className="text-sm font-bold text-white">Scholarships</h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                    Matthew Leduc Scholarship &amp; SFU Alumni Scholarship — academic
                    excellence in engineering.
                </p>
            </div>
        ),
    },
];

// ─── Precomputed face positions & quaternions ────────────────────────────────
interface ComputedFace {
    position: THREE.Vector3;
    quaternion: THREE.Quaternion;
    data: FaceData;
}

function computeFaces(): ComputedFace[] {
    const up = new THREE.Vector3(0, 0, 1); // default Html "forward" direction

    return FACE_DEFINITIONS.map((face) => {
        const dir = new THREE.Vector3(...face.direction).normalize();
        const position = dir.clone().multiplyScalar(RADIUS);

        // Quaternion that rotates the default forward (0,0,1) to face outward
        const quaternion = new THREE.Quaternion().setFromUnitVectors(up, dir);

        return { position, quaternion, data: face };
    });
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Dodecahedron() {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    const faces = useMemo(() => computeFaces(), []);

    // Gentle continuous rotation
    useFrame((_state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.08;
            groupRef.current.rotation.x += delta * 0.04;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Wireframe base geometry */}
            <mesh ref={meshRef}>
                <dodecahedronGeometry args={[RADIUS, 0]} />
                <meshStandardMaterial
                    color="#1e90ff"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* HTML overlays on each face */}
            {faces.map((face, i) => (
                <group
                    key={face.data.label}
                    position={face.position}
                    quaternion={face.quaternion}
                >
                    <Html
                        transform
                        distanceFactor={8}
                        style={{
                            pointerEvents: "auto",
                            userSelect: "none",
                        }}
                    >
                        {face.data.content}
                    </Html>
                </group>
            ))}
        </group>
    );
}
