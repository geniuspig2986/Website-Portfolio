"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#e11d48";

const HIGHLIGHTS = [
    {
        title: "Three-year captain",
        body: "Led FTC team Parabellum for three seasons — owning strategy, build schedules, and the team's technical direction from kickoff to championship.",
    },
    {
        title: "European Internationals",
        body: "Qualified for and competed at the European International championship, going head-to-head with top teams from across the continent.",
    },
    {
        title: "Mentorship",
        body: "Brought up the next generation of builders, teaching junior members CAD, fabrication, and competitive robot design.",
    },
    {
        title: "Design & build",
        body: "Drove the full robot lifecycle: mechanism design, prototyping, machining, wiring, and iterative testing against the season's game challenge.",
    },
];

export default function ParabellumPage() {
    return (
        <ProjectLayout
            slug="parabellum"
            title="FTC Parabellum"
            tagline="Three years as captain of FIRST Tech Challenge team Parabellum — leading design, build, and strategy all the way to the European Internationals."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Hero image */}
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="w-full aspect-video overflow-hidden bg-zinc-900/40">
                            <img
                                src="/images/parabellum/booth.jpg"
                                alt="Parabellum competition booth"
                                className="w-full h-full object-cover animate-fade-in-slow"
                            />
                        </div>
                    </TerminalCard>
                </div>

                {/* Specs */}
                <div className="w-full lg:w-2/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="-2s" reverseWobble={true} className="h-full">
                        <div className="p-6 md:p-8 bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[300px] flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <img src="/images/parabellum/logo.svg" alt="Parabellum logo" className="w-16 h-16 object-contain" />
                                <div>
                                    <p className="font-mono text-[11px] tracking-widest uppercase text-rose-600 dark:text-rose-400">Leadership</p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">FIRST Tech Challenge</p>
                                </div>
                            </div>
                            <SpecRows
                                rows={[
                                    { label: "Program", value: "FTC" },
                                    { label: "Role", value: "Captain · 3 yrs" },
                                    { label: "Peak", value: "Innovate 2nd @ EU Internationals" },
                                    { label: "Focus", value: "Design + build" },
                                    { label: "Team", value: "Parabellum" },
                                ]}
                            />
                            <TechTags accent={ACCENT} items={["CAD", "Java", "Fabrication", "Team Leadership", "Robot Design"]} />
                        </div>
                    </TerminalCard>
                </div>
            </Section>

            {/* Highlights */}
            <Section delay={0.35}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {HIGHLIGHTS.map((h) => (
                        <div
                            key={h.title}
                            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md"
                        >
                            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                                {h.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{h.body}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </ProjectLayout>
    );
}
