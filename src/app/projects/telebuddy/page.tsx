"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#14b8a6";

const HIGHLIGHTS = [
    {
        title: "6-DOF teleoperation",
        body: "A six-degree-of-freedom arm mirrors the operator's hand pose in real time, translating coarse human motion into the steady, sub-millimetre placement that soldering demands.",
    },
    {
        title: "AR control layer",
        body: "An augmented-reality overlay lets the operator see the work surface and target joints from the arm's perspective, closing the loop between intent and end-effector.",
    },
    {
        title: "Precision soldering",
        body: "Purpose-built end effector holds the iron and feeds solder at a controlled rate, keeping a human in the loop while removing the hand tremor that ruins fine joints.",
    },
    {
        title: "Accessibility focus",
        body: "Designed so that people who can't hold a steady iron — through tremor, injury, or distance — can still do precision electronics work remotely.",
    },
];

export default function TelebuddyPage() {
    return (
        <ProjectLayout
            slug="telebuddy"
            title="Telebuddy"
            tagline="A 6-DOF teleoperated robotic arm for precision soldering, driven through an AR control layer. Winner of Science Tech for Social Good at Hack the Coast."
            accent={ACCENT}
            links={[{ label: "view_source", href: "https://github.com/PotatoPeaSea/6dof" }]}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Hero image */}
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="w-full aspect-video overflow-hidden bg-zinc-900/40">
                            <img
                                src="/images/telebuddy/telebuddy.jpg"
                                alt="Telebuddy teleoperated solder bot"
                                className="w-full h-full object-cover animate-fade-in-slow"
                            />
                        </div>
                    </TerminalCard>
                </div>

                {/* Specs + award */}
                <div className="w-full lg:w-2/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="-2s" reverseWobble={true} className="h-full">
                        <div className="p-6 md:p-8 bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[300px] flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <img src="/images/telebuddy/hackthecoast.png" alt="Hack the Coast" className="w-12 h-12 object-contain" />
                                <div>
                                    <p className="font-mono text-[11px] tracking-widest uppercase text-teal-600 dark:text-teal-400">🏆 Winner</p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Science Tech for Social Good — Hack the Coast</p>
                                </div>
                            </div>
                            <SpecRows
                                rows={[
                                    { label: "Type", value: "Mechatronics" },
                                    { label: "Kinematics", value: "6-DOF arm" },
                                    { label: "Control", value: "AR teleop" },
                                    { label: "Task", value: "Precision soldering" },
                                    { label: "Event", value: "Hack the Coast" },
                                ]}
                            />
                            <TechTags accent={ACCENT} items={["ROS", "C++", "Python", "AR", "Inverse Kinematics"]} />
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
