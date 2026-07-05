"use client";

import ProjectLayout, { Section } from "@/components/ProjectLayout";

const ACCENT = "#f59e0b";

const AWARDS = [
    {
        name: "HardHaQ 2025 — 1st Place",
        org: "North American Quantum Consortium",
        kind: "Hackathon",
        note: "Won first place designing a superconducting transmon qubit circuit.",
        medal: "🏆",
    },
    {
        name: "Science Tech for Social Good",
        org: "Hack the Coast",
        kind: "Hackathon",
        note: "Awarded for Telebuddy, a teleoperated precision-soldering robot arm.",
        medal: "🏆",
    },
    {
        name: "Matthew Leduc Scholarship",
        org: "Academic",
        kind: "Scholarship",
        note: "Merit scholarship recognizing academic and technical achievement.",
        medal: "🎓",
    },
    {
        name: "SFU Alumni Scholarship",
        org: "Simon Fraser University",
        kind: "Scholarship",
        note: "Entrance scholarship awarded by the SFU alumni association.",
        medal: "🎓",
    },
    {
        name: "SFU DSSS Datajam — Most Effective Solution",
        org: "SFU Data Science Student Society",
        kind: "Datathon",
        note: "Predicted optimal batting mechanics from a baseball dataset with random forest, logistic regression, and XGBoost.",
        medal: "🏆",
    },
    {
        name: "SFU Stormhacks — Surge Choice Award",
        org: "Sustainable Engineering Track",
        kind: "Hackathon",
        note: "Built EcoDepot, an automated waste-sorting system pairing a custom CV model with a 3D-modeled sorting assembly.",
        medal: "🏆",
    },
    {
        name: "nwHacks",
        org: "Western Canada's largest hackathon",
        kind: "Hackathon",
        note: "Built HUDson — a heads-up display companion with voice synthesis.",
        medal: "⚡",
    },
    {
        name: "JourneyHacks",
        org: "SFU Surge",
        kind: "Hackathon",
        note: "Competed and shipped a working prototype within the weekend.",
        medal: "⚡",
    },
];

export default function AwardsPage() {
    return (
        <ProjectLayout
            slug="awards"
            title="Awards & Recognition"
            tagline="Hackathon wins, scholarships, and competitive results across robotics, quantum hardware, and software."
            accent={ACCENT}
        >
            <Section delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {AWARDS.map((a) => (
                        <div
                            key={a.name}
                            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md flex flex-col gap-3 hover:border-amber-400/60 transition-colors"
                        >
                            <div className="flex items-start justify-between">
                                <span className="text-2xl">{a.medal}</span>
                                <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-500">
                                    {a.kind}
                                </span>
                            </div>
                            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{a.name}</h3>
                            <p className="font-mono text-xs" style={{ color: ACCENT }}>{a.org}</p>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-auto">{a.note}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </ProjectLayout>
    );
}
