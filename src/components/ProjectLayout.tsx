"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Shared scaffold for project subpages: scroll layer, animated back-nav, and a
// terminal-style header. The page-to-page route transition is handled globally
// by <PageTransition> in the root layout — pages only provide their own content.
export default function ProjectLayout({
    slug,
    title,
    tagline,
    accent = "#06b6d4",
    links,
    children,
}: {
    slug: string;
    title: string;
    tagline: string;
    accent?: string;
    links?: { label: string; href: string }[];
    children: ReactNode;
}) {
    return (
        <div className="relative h-screen w-full bg-zinc-50 dark:bg-zinc-950 font-sans transition-colors overflow-y-auto overflow-x-hidden pt-24 pb-24">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(161, 161, 170, 0.3); border-radius: 10px; }
            `}</style>

            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pointer-events-auto flex flex-col gap-10 z-10 relative">

                {/* Back nav */}
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-start"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono text-sm tracking-widest uppercase bg-zinc-200/50 dark:bg-zinc-900/50 px-4 py-2 rounded-md backdrop-blur-sm border border-zinc-300/50 dark:border-zinc-800/50 shadow-lg shadow-black/10 dark:shadow-black/40"
                    >
                        &lt; back_to_portfolio
                    </Link>
                </motion.nav>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="flex flex-col gap-3"
                >
                    <span
                        className="font-mono text-xs tracking-[0.3em] uppercase"
                        style={{ color: accent }}
                    >
                        ~/projects/{slug}
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                        {title}
                    </h1>
                    <p className="font-mono text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
                        <span className="font-bold" style={{ color: accent }}>{"> "}</span>
                        {tagline}
                    </p>
                    {links && links.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-1">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-md group font-mono text-sm shadow-lg"
                                >
                                    <img
                                        src="/images/footer/github.svg"
                                        alt=""
                                        className="w-4 h-4 dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
                                    />
                                    <span className="text-zinc-800 dark:text-zinc-200">{l.label}</span>
                                </a>
                            ))}
                        </div>
                    )}
                    <div
                        className="h-px w-full mt-2"
                        style={{ background: `linear-gradient(90deg, ${accent}55, transparent)` }}
                    />
                </motion.header>

                {children}
            </div>
        </div>
    );
}

// Animated content section with a staggered entrance.
export function Section({
    children,
    delay = 0.2,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.section>
    );
}

// Monospace pill list for tech stacks / tags.
export function TechTags({ items, accent = "#06b6d4" }: { items: string[]; accent?: string }) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map((t) => (
                <span
                    key={t}
                    className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-md border bg-white/50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
                    style={{ borderColor: `${accent}40` }}
                >
                    {t}
                </span>
            ))}
        </div>
    );
}

// Key/value spec rows (e.g. role, stack, status).
export function SpecRows({ rows }: { rows: { label: string; value: string }[] }) {
    return (
        <dl className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800 font-mono text-sm">
            {rows.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="text-zinc-500 dark:text-zinc-500 uppercase text-[11px] tracking-widest">{r.label}</dt>
                    <dd className="text-zinc-800 dark:text-zinc-200 text-right">{r.value}</dd>
                </div>
            ))}
        </dl>
    );
}
