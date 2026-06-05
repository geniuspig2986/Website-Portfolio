"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#10b981";

const HIGHLIGHTS = [
    {
        title: "Custom KiCad PCB",
        body: "Designed the schematic and 2-layer board from scratch in KiCad — matrix wiring, decoupling, and a USB-C front end routed by hand for a clean, manufacturable layout.",
    },
    {
        title: "Hall-effect switches",
        body: "Analog hall-effect sensors read continuous key travel instead of a binary press, enabling adjustable actuation points and rapid-trigger behaviour.",
    },
    {
        title: "Embedded firmware",
        body: "Bare-metal firmware samples each sensor's magnetic field, calibrates per-key, and maps travel to HID events — presenting to the host as a standard USB keyboard.",
    },
    {
        title: "3D-printed enclosure",
        body: "Parametric case modeled for tight switch tolerances, with a friction-fit plate and clearance for the PCB and connector.",
    },
];

export default function MacropadPage() {
    return (
        <ProjectLayout
            slug="macropad"
            title="Custom Macropad"
            tagline="A hall-effect macropad engineered from the silicon up — custom KiCad PCB, analog magnetic switches, and embedded firmware that speaks USB HID."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Hero image */}
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="p-6 md:p-10 flex items-center justify-center bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[320px]">
                            <img
                                src="/images/macropad/macropad.png"
                                alt="Custom hall-effect macropad"
                                className="w-full max-h-[360px] object-contain filter drop-shadow-[0_0_25px_rgba(0,0,0,0.45)] animate-fade-in-slow"
                            />
                        </div>
                    </TerminalCard>
                </div>

                {/* Specs */}
                <div className="w-full lg:w-2/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="-2s" reverseWobble={true} className="h-full">
                        <div className="p-6 md:p-8 bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[320px] flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <img src="/images/macropad/switch.png" alt="Hall-effect switch" className="w-16 h-16 object-contain" />
                                <div>
                                    <p className="font-mono text-[11px] tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Hardware</p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Analog magnetic key switch</p>
                                </div>
                            </div>
                            <SpecRows
                                rows={[
                                    { label: "Type", value: "Mechatronics" },
                                    { label: "PCB", value: "KiCad · 2-layer" },
                                    { label: "Switches", value: "Hall-effect" },
                                    { label: "Interface", value: "USB-C HID" },
                                    { label: "Enclosure", value: "3D printed" },
                                ]}
                            />
                            <TechTags accent={ACCENT} items={["KiCad", "C/C++", "USB HID", "3D Printing", "Embedded"]} />
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
