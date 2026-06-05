"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#06b6d4";

const HIGHLIGHTS = [
    {
        title: "Robotics & ROS",
        body: "Built nodes within a ROS publisher/subscriber architecture, decoupling perception, planning, and control into independent, testable processes.",
    },
    {
        title: "Low-level systems",
        body: "Worked close to the metal in C++ and Python — managing timing, memory, and hardware interfaces where performance and determinism matter.",
    },
    {
        title: "Containerized tooling",
        body: "Packaged research environments in Docker so experiments run identically across machines and dependencies stay reproducible.",
    },
    {
        title: "Experimentation",
        body: "Designed, instrumented, and iterated on experiments — measuring real behaviour rather than trusting that the model matches reality.",
    },
];

export default function ResearchPage() {
    return (
        <ProjectLayout
            slug="research"
            title="Systems & Robotics Research"
            tagline="Low-level systems and robotics research — ROS architectures, C++/Python tooling, and reproducible, containerized experiments."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="p-6 md:p-8 font-mono text-sm bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[280px] flex flex-col justify-center gap-3">
                            <p className="text-cyan-600 dark:text-cyan-400 text-xs tracking-widest uppercase mb-2">// node graph</p>
                            {[
                                { node: "/sensor", note: "publishes raw data" },
                                { node: "/perception", note: "subscribes → state estimate" },
                                { node: "/planner", note: "computes trajectory" },
                                { node: "/controller", note: "drives actuators" },
                            ].map((r, i) => (
                                <div key={i} className="flex items-baseline justify-between gap-4 border-l-2 pl-4" style={{ borderColor: ACCENT }}>
                                    <span className="text-zinc-800 dark:text-zinc-200">{r.node}</span>
                                    <span className="text-zinc-500 text-[11px] text-right">{r.note}</span>
                                </div>
                            ))}
                        </div>
                    </TerminalCard>
                </div>

                <div className="w-full lg:w-2/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="-2s" reverseWobble={true} className="h-full">
                        <div className="p-6 md:p-8 bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[280px] flex flex-col gap-6">
                            <SpecRows
                                rows={[
                                    { label: "Type", value: "Research" },
                                    { label: "Domain", value: "Robotics / systems" },
                                    { label: "Architecture", value: "ROS pub/sub" },
                                    { label: "Tooling", value: "Docker" },
                                ]}
                            />
                            <TechTags accent={ACCENT} items={["C++", "Python", "ROS", "Docker", "Linux"]} />
                        </div>
                    </TerminalCard>
                </div>
            </Section>

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
