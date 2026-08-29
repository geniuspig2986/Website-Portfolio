"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#f97316";

const HIGHLIGHTS = [
    {
        title: "Armor-panel detection",
        body: "Real-time C++ detection system on a Jetson Orin Nano that automates aiming by tracking and predicting enemy robot motion — an OpenCV pipeline extracts precise target coordinates and angular orientation, with camera calibration tightened to cut RMS reprojection error by ~80%.",
    },
    {
        title: "Dataset at scale",
        body: "Processed over 12,000 images for the detection model, accelerating annotation by distilling labels from the team's older model and expanding the number of detected classes 4×.",
    },
    {
        title: "ROS 2 motion planning",
        body: "Implemented motion planning on the robot stack using Manifold-tech's Odin ROS drivers and Nav2, with Foxglove Studio for live introspection and debugging.",
    },
    {
        title: "ROS → MCU bridge",
        body: "Wrote custom ROS nodes that stream planner and targeting data over serial to the microcontroller, closing the loop between high-level autonomy and low-level actuation.",
    },
];

export default function AscensionPage() {
    return (
        <ProjectLayout
            slug="ascension"
            title="Ascension Robotics"
            tagline="Computer vision developer on a combat-robotics student design team — building the perception and autonomy stack that finds, tracks, and targets opposing robots in real time."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Pipeline diagram */}
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="p-6 md:p-8 font-mono text-sm bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[280px] flex flex-col justify-center gap-4">
                            <p className="text-orange-600 dark:text-orange-400 text-xs tracking-widest uppercase mb-2">// perception → actuation</p>
                            {[
                                { step: "camera feed", note: "live frames on Linux" },
                                { step: "→ YOLO detector", note: "armor-panel detection" },
                                { step: "→ OpenCV post-processing", note: "coordinates + angular orientation" },
                                { step: "→ Nav2 / Odin drivers", note: "motion planning" },
                                { step: "→ serial → MCU", note: "custom ROS nodes drive the turret" },
                            ].map((r, i) => (
                                <div key={i} className="flex items-baseline justify-between gap-4 border-l-2 pl-4" style={{ borderColor: ACCENT }}>
                                    <span className="text-zinc-800 dark:text-zinc-200">{r.step}</span>
                                    <span className="text-zinc-500 text-[11px] text-right">{r.note}</span>
                                </div>
                            ))}
                        </div>
                    </TerminalCard>
                </div>

                {/* Specs */}
                <div className="w-full lg:w-2/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="-2s" reverseWobble={true} className="h-full">
                        <div className="p-6 md:p-8 bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[280px] flex flex-col gap-6">
                            <SpecRows
                                rows={[
                                    { label: "Role", value: "Software Developer" },
                                    { label: "Period", value: "Sept 2025 – June 2026" },
                                    { label: "Platform", value: "Jetson Orin Nano · ROS 2" },
                                    { label: "Team", value: "Student design team" },
                                    { label: "Dataset", value: "12,000+ images · 4× classes" },
                                ]}
                            />
                            <TechTags
                                accent={ACCENT}
                                items={["OpenCV", "ROS 2", "Nav2", "Python", "C++", "Foxglove Studio", "Linux", "Serial/MCU"]}
                            />
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
