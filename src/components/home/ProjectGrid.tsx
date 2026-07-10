"use client";

import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { TechTags } from "@/components/ProjectLayout";
import Reveal from "@/components/home/Reveal";

// Plain, scannable list of every project page — the non-3D path to the same
// content the dodecahedron faces link to.
export default function ProjectGrid() {
    return (
        <section id="projects" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
            <Reveal>
                <p className="font-mono text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-500 mb-2">// projects</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Projects</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 font-mono">
                    Every face of the dodecahedron, browsable as a plain list.
                </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PROJECTS.map((p, i) => (
                    <Reveal key={p.slug} className="h-full" delay={(i % 3) * 0.08}>
                        <Link
                            href={`/projects/${p.slug}`}
                            className="group flex h-full flex-col gap-3 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md hover:border-cyan-500/60 dark:hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/5 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
                                    {p.title}
                                </h3>
                                {p.award && (
                                    <span className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border border-amber-400/50 text-amber-600 dark:text-amber-400 whitespace-nowrap">
                                        🏆 {p.award}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">{p.blurb}</p>
                            <TechTags items={p.tags} accent={p.accent} />
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
