"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#8b5cf6";

const HIGHLIGHTS = [
    {
        title: "K-fold cross-validation",
        body: "Built a robust evaluation harness using k-fold cross-validation to estimate generalization honestly and avoid overfitting to a single train/test split.",
    },
    {
        title: "Model optimization",
        body: "Swept hyperparameters and compared model families, tuning for the metric that mattered rather than raw accuracy on an imbalanced set.",
    },
    {
        title: "Feature engineering",
        body: "Cleaned, encoded, and engineered features from raw data so the model had signal to learn from — often the highest-leverage step in the pipeline.",
    },
    {
        title: "Reproducible pipeline",
        body: "Wrapped preprocessing, training, and evaluation into a scripted pipeline so results could be regenerated end-to-end on demand.",
    },
];

export default function HackMlPage() {
    return (
        <ProjectLayout
            slug="hackml"
            title="HackML"
            tagline="A machine-learning project built around a disciplined evaluation pipeline — k-fold cross-validation, model optimization, and reproducible results."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="p-6 md:p-8 font-mono text-sm bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[280px] flex flex-col justify-center gap-3">
                            <p className="text-violet-600 dark:text-violet-400 text-xs tracking-widest uppercase mb-2">// pipeline</p>
                            {[
                                "load + clean dataset",
                                "engineer features",
                                "split → k-fold (k=5)",
                                "train candidate models",
                                "cross-validate + tune",
                                "select best by CV score",
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="text-zinc-500">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="border-l-2 pl-3 text-zinc-800 dark:text-zinc-200" style={{ borderColor: ACCENT }}>{s}</span>
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
                                    { label: "Type", value: "Machine Learning" },
                                    { label: "Validation", value: "K-fold CV" },
                                    { label: "Focus", value: "Model optimization" },
                                    { label: "Stack", value: "Python · sklearn" },
                                ]}
                            />
                            <TechTags accent={ACCENT} items={["Python", "scikit-learn", "NumPy", "pandas", "Matplotlib"]} />
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
