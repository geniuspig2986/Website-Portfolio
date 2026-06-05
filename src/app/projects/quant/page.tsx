"use client";

import TerminalCard from "@/components/TerminalCard";
import ProjectLayout, { Section, TechTags, SpecRows } from "@/components/ProjectLayout";

const ACCENT = "#22c55e";

const HIGHLIGHTS = [
    {
        title: "Signal research",
        body: "Mined historical market data for statistically meaningful signals, separating genuine edge from noise with out-of-sample testing.",
    },
    {
        title: "Backtesting engine",
        body: "Simulated strategies over historical data with realistic assumptions — transaction costs, slippage, and position sizing — before risking anything live.",
    },
    {
        title: "Risk metrics",
        body: "Evaluated strategies on risk-adjusted terms (Sharpe, drawdown, volatility) rather than headline return, where the real story usually hides.",
    },
    {
        title: "Data pipeline",
        body: "Ingested, cleaned, and aligned time-series data into a tidy frame so models trained on consistent, survivorship-aware inputs.",
    },
];

export default function QuantPage() {
    return (
        <ProjectLayout
            slug="quant"
            title="Quantitative Analysis"
            tagline="Quantitative financial research — building and backtesting data-driven strategies, judged on risk-adjusted performance rather than raw return."
            accent={ACCENT}
        >
            <Section delay={0.2} className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="w-full lg:w-3/5" style={{ perspective: "1000px" }}>
                    <TerminalCard delay="0s" reverseWobble={false} className="h-full">
                        <div className="p-6 md:p-8 font-mono text-sm bg-zinc-100/10 dark:bg-zinc-900/40 min-h-[280px] flex flex-col justify-center gap-3">
                            <p className="text-green-600 dark:text-green-400 text-xs tracking-widest uppercase mb-2">// research loop</p>
                            {[
                                "ingest market time-series",
                                "form hypothesis / signal",
                                "backtest (costs + slippage)",
                                "measure risk-adjusted return",
                                "validate out-of-sample",
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
                                    { label: "Type", value: "Quant Finance" },
                                    { label: "Method", value: "Backtesting" },
                                    { label: "Judged on", value: "Risk-adjusted" },
                                    { label: "Stack", value: "Python · pandas" },
                                ]}
                            />
                            <TechTags accent={ACCENT} items={["Python", "pandas", "NumPy", "Time Series", "Backtesting"]} />
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
