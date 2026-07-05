"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dodecahedron from "@/components/Dodecahedron";
import ThemeToggle from "@/components/ThemeToggle";
import ContactModal from "@/components/ContactModal";
import ProjectGrid from "@/components/home/ProjectGrid";
import { AwardsStrip, ExperienceEducation, HomeFooter, SkillsSection } from "@/components/home/HomeSections";
import { LINKS } from "@/data/profile";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect, useRef } from "react";

// ─── Terminal-style typewriter ───────────────────────────────────────────────
// All lines rendered at once with visibility: hidden to reserve space.
// Characters revealed one at a time across all lines sequentially.

const TERMINAL_LINES = [
  { text: "> portfolio", style: "text-cyan-600 text-xs tracking-widest uppercase" },
  { text: "", style: "h-2" }, // spacer
  { text: "Shenghua (Simon) Jin", style: "text-3xl font-bold text-zinc-900 dark:text-zinc-100" },
  { text: "CS @ SFU · Software & Robotics", style: "text-xs font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-500" },
  { text: "", style: "h-3" }, // spacer
  { text: "Mechatronics engineer and software", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "developer with a passion for robotics,", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "machine learning, and building things", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "that bridge the digital-physical divide.", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "", style: "h-2" }, // spacer
  { text: "Currently studying at SFU, winning", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "hackathons, and pushing the boundaries", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "of what hardware and software can do", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "together.", style: "text-sm text-zinc-600 dark:text-zinc-400" },
];

// Flatten all characters with line/char indices for sequential reveal
function buildCharMap() {
  const chars: { line: number; char: number }[] = [];
  for (let l = 0; l < TERMINAL_LINES.length; l++) {
    const t = TERMINAL_LINES[l].text;
    for (let c = 0; c < t.length; c++) {
      chars.push({ line: l, char: c });
    }
  }
  return chars;
}

const CHAR_MAP = buildCharMap();

function TerminalText({ isReturning, onContact }: { isReturning: boolean; onContact: () => void }) {
  const charSpeed = isReturning ? 3 : 8;
  const firstLineDelay = isReturning ? 100 : 200;
  
  const [revealedCount, setRevealedCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setRevealedCount((prev) => {
          if (prev >= CHAR_MAP.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, charSpeed);
    }, firstLineDelay);

    return () => {
      clearTimeout(startTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Figure out how many chars are revealed per line
  const revealedPerLine: number[] = new Array(TERMINAL_LINES.length).fill(0);
  for (let i = 0; i < revealedCount && i < CHAR_MAP.length; i++) {
    revealedPerLine[CHAR_MAP[i].line]++;
  }

  // Which line is currently being typed
  const currentLine = revealedCount < CHAR_MAP.length ? CHAR_MAP[revealedCount]?.line ?? -1 : -1;
  const allDone = revealedCount >= CHAR_MAP.length;

  return (
    <div className="font-[family-name:var(--font-geist-mono)] leading-relaxed">
      {TERMINAL_LINES.map((line, i) => {
        if (!line.text) {
          // Spacer
          return <div key={i} className={line.style} />;
        }
        const shown = line.text.slice(0, revealedPerLine[i]);
        const isCurrentLine = i === currentLine;

        return (
          <div key={i} className={`${line.style} whitespace-pre`}>
            {shown || "\u00A0"}
            {isCurrentLine && !allDone && (
              <span className="animate-blink text-cyan-500">▌</span>
            )}
          </div>
        );
      })}

      {/* CTAs and profile links render immediately — not gated on the typewriter */}
      <div className="mt-4 animate-line flex gap-3 pointer-events-auto" style={{ animationDelay: "0.15s" }}>
        <a
          href="/resume"
          className="rounded border border-zinc-300 dark:border-zinc-600 px-4 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          view_resume
        </a>
        <button
          type="button"
          onClick={onContact}
          className="rounded bg-cyan-600 px-4 py-1.5 text-xs text-white transition hover:bg-cyan-500"
        >
          contact
        </button>
      </div>
      <div className="mt-3 animate-line flex items-center gap-4 pointer-events-auto" style={{ animationDelay: "0.3s" }}>
        <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <img src="/images/footer/github.svg" alt="" className="w-5 h-5 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img src="/images/footer/linkedin.svg" alt="" className="w-5 h-5 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
        </a>
        <a
          href={`mailto:${LINKS.email}`}
          className="text-xs text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          {LINKS.email}
        </a>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const { theme } = useTheme();
  const canvasBg = theme === "dark" ? "#0a0a0a" : "#ffffff";
  const [isExpanding, setIsExpanding] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    // OrbitControls sets touch-action: none on the canvas, which would trap
    // page scrolling on touch devices — only mount it for mouse-like pointers.
    const mq = window.matchMedia("(pointer: fine)");
    setFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setFinePointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem("portfolio_visited");
    if (hasVisited) {
      setIsReturning(true);
    }
    // Set flag for future visits
    sessionStorage.setItem("portfolio_visited", "true");

    const handleExpand = () => setIsExpanding(true);
    const handleEnd = () => setIsExpanding(false);
    window.addEventListener('start-expansion', handleExpand);
    window.addEventListener('end-expansion', handleEnd);
    return () => {
        window.removeEventListener('start-expansion', handleExpand);
        window.removeEventListener('end-expansion', handleEnd);
    };
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-y-auto overflow-x-hidden bg-white dark:bg-zinc-950">

      {/* Theme toggle */}
      <div className={`transition-opacity duration-500 ${isExpanding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <ThemeToggle />
      </div>

      {/* Hero: terminal intro + 3D dodecahedron */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Left-side terminal text */}
        <div className={`pointer-events-none absolute inset-y-0 left-0 z-[200] flex w-full max-w-xl lg:w-[40%] lg:max-w-none flex-col justify-center px-6 sm:px-10 lg:px-12 transition-opacity duration-500 ease-in-out ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
          <TerminalText isReturning={isReturning} onContact={() => setContactOpen(true)} />
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            style={{ background: canvasBg, pointerEvents: "auto" }}
            gl={{ localClippingEnabled: true }}
          >
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={0.6} />
            <Dodecahedron isReturning={isReturning} />
            {finePointer && (
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableDamping
                dampingFactor={0.08}
                target={[0, 0, 0]}
              />
            )}
          </Canvas>
        </div>

        {/* Scroll indicator */}
        <div className={`pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-opacity duration-500 ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center gap-0.5 animate-bounce">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 dark:text-zinc-500">scroll</span>
            <span className="text-sm leading-none text-zinc-400 dark:text-zinc-500">▾</span>
          </div>
        </div>
      </section>

      {/* Recruiter sections */}
      <ProjectGrid />
      <ExperienceEducation />
      <SkillsSection />
      <AwardsStrip />
      <HomeFooter onContact={() => setContactOpen(true)} />

      {/* Contact compose window */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
