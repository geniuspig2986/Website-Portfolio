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
import { useState, useEffect } from "react";

const TERMINAL_LINES = [
  { text: "> portfolio", style: "text-cyan-600 text-xs tracking-widest uppercase" },
  { text: "", style: "h-2" },
  { text: "Shenghua (Simon) Jin", style: "text-3xl font-bold text-zinc-900 dark:text-zinc-100" },
  { text: "Robotics @ CMU · Incoming Fall 2026", style: "text-xs font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-500" },
  { text: "", style: "h-3" },
  { text: "Mechatronics engineer and software", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "developer with a passion for robotics,", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "machine learning, and building things", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "that bridge the digital-physical divide.", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "", style: "h-2" },
  { text: "Incoming Robotics transfer at Carnegie", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "Mellon (SCS), winning hackathons, and", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "pushing the boundaries of what hardware", style: "text-sm text-zinc-600 dark:text-zinc-400" },
  { text: "and software can do together.", style: "text-sm text-zinc-600 dark:text-zinc-400" },
];

function TerminalText({ onContact }: { onContact: () => void }) {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] leading-relaxed animate-fade-in">
      {TERMINAL_LINES.map((line, i) => {
        if (!line.text) {
          return <div key={i} className={line.style} />;
        }
        return (
          <div key={i} className={`${line.style} whitespace-pre`}>
            {line.text}
          </div>
        );
      })}

      <div className="mt-4 animate-fade-in flex gap-3 pointer-events-auto" style={{ animationDelay: "0.2s" }}>
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
      <div className="mt-3 animate-fade-in flex items-center gap-4 pointer-events-auto" style={{ animationDelay: "0.35s" }}>
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
  const [contactOpen, setContactOpen] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setFinePointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
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
    <main className="relative w-screen overflow-y-auto overflow-x-hidden bg-white dark:bg-zinc-950" style={{ minHeight: '100vh' }}>
      <div className={`transition-opacity duration-500 ${isExpanding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <ThemeToggle />
      </div>

      <section className="relative w-full overflow-hidden" style={{ height: '100dvh' }}>
        <div className={`pointer-events-none absolute inset-y-0 left-0 z-[200] flex w-full max-w-xl lg:w-[40%] lg:max-w-none flex-col justify-center px-6 sm:px-10 lg:px-12 transition-opacity duration-500 ease-in-out ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
          <TerminalText onContact={() => setContactOpen(true)} />
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            style={{ background: canvasBg, pointerEvents: "auto" }}
            gl={{ localClippingEnabled: true }}
          >
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={0.6} />
            <Dodecahedron isReturning={false} isFadingIn />
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

        <div className={`pointer-events-none absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-opacity duration-500 ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center gap-0.5 animate-bounce">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-zinc-400 dark:text-zinc-500">scroll</span>
            <span className="text-base sm:text-lg leading-none text-zinc-400 dark:text-zinc-500">▾</span>
          </div>
        </div>
      </section>

      <ProjectGrid />
      <ExperienceEducation />
      <SkillsSection />
      <AwardsStrip />
      <HomeFooter onContact={() => setContactOpen(true)} />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
