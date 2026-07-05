"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#3b82f6";

const HIGHLIGHTS = [
    {
        title: "Deaf-assist captioning",
        body: "Real-time captions projected into the wearer's line of sight on Viture Pro XR glasses, so conversations stay accessible without looking away or at a phone.",
    },
    {
        title: "ElevenLabs TTS + voice cloning",
        body: "Integrated the ElevenLabs API for low-latency, natural-sounding text-to-speech and voice cloning, giving the wearer a voice that sounds like their own.",
    },
    {
        title: "Real-time pipeline",
        body: "Synchronized hardware inputs with cloud-based AI processing, keeping the spoken and visual layers in sync on the glasses.",
    },
    {
        title: "🏆 Won at nwHacks 2026",
        body: "Took Best Use of ElevenLabs API at nwHacks — Western Canada's largest hackathon — built and demoed within a single weekend.",
    },
];

export default function HudsonPage() {
    return (
        <ProjectLayout
            slug="hudson"
            title="HUDson"
            tagline="A deaf-assist heads-up display on Viture Pro XR glasses — real-time captioning with ElevenLabs text-to-speech and voice cloning. Winner of Best Use of ElevenLabs API at nwHacks 2026."
            accent={ACCENT}
            links={[{ label: "view_source", href: "https://github.com/iancdev/hudglasses" }]}
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
                                    <p className="font-mono text-[11px] tracking-widest uppercase text-blue-600 dark:text-blue-400">🏆 Winner</p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Best Use of ElevenLabs API — nwHacks 2026</p>
                                </div>
                            </div>
                            <SpecRows
                                rows={[
                                    { label: "Type", value: "Accessibility · XR" },
                                    { label: "Event", value: "nwHacks 2026" },
                                    { label: "Award", value: "Best Use of ElevenLabs API" },
                                    { label: "Hardware", value: "Viture Pro XR glasses" },
                                    { label: "Voice", value: "TTS + voice cloning" },
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
