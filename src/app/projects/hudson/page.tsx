"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#3b82f6";

const HIGHLIGHTS = [
    {
        title: "Heads-up display",
        body: "Projects contextual information into the driver's line of sight so attention stays on the road instead of a phone or dashboard screen.",
    },
    {
        title: "ElevenLabs TTS",
        body: "Integrated the ElevenLabs API for low-latency, natural-sounding text-to-speech, turning navigation and alerts into a hands-free voice companion.",
    },
    {
        title: "Real-time pipeline",
        body: "Event-driven backend streams updates to the display and synthesizes speech on the fly, keeping the spoken and visual layers in sync.",
    },
    {
        title: "Built at nwHacks",
        body: "Conceived, built, and demoed within a single hackathon weekend at nwHacks — Western Canada's largest hackathon.",
    },
];

export default function HudsonPage() {
    return (
        <ProjectLayout
            slug="hudson"
            title="HUDson"
            tagline="A heads-up display companion that keeps your eyes on the road and talks back — built at nwHacks with the ElevenLabs API for natural text-to-speech."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Hero image */}
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="w-full aspect-video overflow-hidden bg-zinc-900/40">
                            <img
                                src="/images/hudson/gallery.jpg"
                                alt="HUDson heads-up display"
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
                                <img src="/images/hudson/logo.jpg" alt="HUDson logo" className="w-14 h-14 object-contain rounded-md" />
                                <div>
                                    <p className="font-mono text-[11px] tracking-widest uppercase text-blue-600 dark:text-blue-400">Software</p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Heads-up display + voice</p>
                                </div>
                            </div>
                            <SpecRows
                                rows={[
                                    { label: "Type", value: "Software" },
                                    { label: "Event", value: "nwHacks" },
                                    { label: "Voice", value: "ElevenLabs API" },
                                    { label: "Surface", value: "HUD overlay" },
                                    { label: "Mode", value: "Hands-free" },
                                ]}
                            />
                            <TechTags accent={ACCENT} items={["JavaScript", "ElevenLabs API", "WebSockets", "Node.js"]} />
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
