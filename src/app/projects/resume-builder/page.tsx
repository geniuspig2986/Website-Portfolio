"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#10b981";

const FEATURES = [
    {
        title: "Local-first LLM",
        body: "Runs entirely offline against a quantized model via llama.cpp — no API keys, no data leaving the machine. Your experience data never touches a third-party server.",
    },
    {
        title: "Structured → LaTeX",
        body: "Stores experience as structured JSON, then compiles a tailored LaTeX resume per job description. Consistent typography, zero manual formatting.",
    },
    {
        title: "Live editor",
        body: "Edit bullet points and have the model rephrase, tighten, or quantify them inline. Diff-style preview before anything is committed to the document.",
    },
    {
        title: "Native PDF export",
        body: "Tauri-bundled Rust backend shells out to a LaTeX toolchain and returns a print-ready PDF — a single binary, no Electron bloat.",
    },
];

export default function ResumeBuilderPage() {
    return (
        <ProjectLayout
            slug="resume-builder"
            title="Resume Builder"
            tagline="A local-first AI resume builder that turns structured experience data into tailored, print-ready LaTeX resumes — powered by an on-device LLM."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Pipeline diagram */}
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="p-6 md:p-8 font-mono text-sm bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[280px] flex flex-col justify-center gap-4">
                            <p className="text-emerald-600 dark:text-emerald-400 text-xs tracking-widest uppercase mb-2">// pipeline</p>
                            {[
                                { step: "experience.json", note: "structured source of truth" },
                                { step: "+ job_description.txt", note: "target role context" },
                                { step: "→ llama.cpp (local)", note: "tailor + rephrase bullets" },
                                { step: "→ resume.tex", note: "templated LaTeX" },
                                { step: "→ resume.pdf", note: "native export" },
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
                                    { label: "Type", value: "Dev Tool" },
                                    { label: "Role", value: "Solo build" },
                                    { label: "Frontend", value: "React + Tauri" },
                                    { label: "Backend", value: "Rust" },
                                    { label: "Inference", value: "llama.cpp" },
                                    { label: "Status", value: "In progress" },
                                ]}
                            />
                            <TechTags
                                accent={ACCENT}
                                items={["Rust", "Tauri", "React", "TypeScript", "llama.cpp", "LaTeX"]}
                            />
                        </div>
                    </TerminalCard>
                </div>
            </Section>

            {/* Features */}
            <Section delay={0.35}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {FEATURES.map((f) => (
                        <div
                            key={f.title}
                            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md"
                        >
                            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                                {f.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.body}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </ProjectLayout>
    );
}
