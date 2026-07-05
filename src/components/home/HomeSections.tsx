"use client";

import Link from "next/link";
import { AWARD_CHIPS, EDUCATION, EXPERIENCE, LINKS, SKILL_GROUPS } from "@/data/profile";

// Below-the-fold recruiter sections for the home page: experience/education,
// skills, awards strip, and contact footer. Project grid lives in ProjectGrid.

export function ExperienceEducation() {
    return (
        <section id="experience" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
            <p className="font-mono text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-500 mb-2">// experience</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">Experience & Education</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 flex flex-col gap-5">
                    {EXPERIENCE.map((e) => {
                        const body = (
                            <>
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                                        {e.org} <span className="font-normal text-zinc-500 dark:text-zinc-400">— {e.role}</span>
                                    </h3>
                                    <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-500">{e.period}</span>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">{e.summary}</p>
                            </>
                        );
                        const cardClass =
                            "p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md";
                        return e.href ? (
                            <Link key={e.org} href={e.href} className={`${cardClass} block hover:border-cyan-500/60 dark:hover:border-cyan-500/50 transition-colors`}>
                                {body}
                            </Link>
                        ) : (
                            <div key={e.org} className={cardClass}>
                                {body}
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-5 h-fit">
                    {EDUCATION.map((ed) => (
                        <div key={ed.school} className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md">
                            <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-500 mb-3">Education</p>
                            <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{ed.school}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{ed.degree}</p>
                            <p className="font-mono text-xs text-zinc-500 mt-1">{ed.period}</p>
                            <p className="font-mono text-xs text-cyan-600 dark:text-cyan-500 mt-3">{ed.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
            <p className="font-mono text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-500 mb-2">// skills</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SKILL_GROUPS.map((g) => (
                    <div key={g.label} className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md">
                        <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-500 mb-3">{g.label}</p>
                        <div className="flex flex-wrap gap-2">
                            {g.items.map((s) => (
                                <span
                                    key={s}
                                    className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function AwardsStrip() {
    return (
        <section id="awards" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
            <p className="font-mono text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-500 mb-2">// recognition</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">Awards</h2>
            <div className="flex flex-wrap gap-3">
                {AWARD_CHIPS.map((a) => (
                    <Link
                        key={a}
                        href="/projects/awards"
                        className="font-mono text-xs px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md text-zinc-700 dark:text-zinc-300 hover:border-amber-400/60 transition-colors"
                    >
                        {a}
                    </Link>
                ))}
            </div>
        </section>
    );
}

export function HomeFooter({ onContact }: { onContact: () => void }) {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-8">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                <div>
                    <p className="font-mono text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-500 mb-2">// contact</p>
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Let&apos;s talk</h2>
                    <a
                        href={`mailto:${LINKS.email}`}
                        className="font-mono text-sm text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        {LINKS.email}
                    </a>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href={LINKS.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-md group font-mono text-sm"
                    >
                        <img src="/images/footer/github.svg" alt="" className="w-4 h-4 dark:invert opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="text-zinc-800 dark:text-zinc-200">GitHub</span>
                    </a>
                    <a
                        href={LINKS.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-md group font-mono text-sm"
                    >
                        <img src="/images/footer/linkedin.svg" alt="" className="w-4 h-4 dark:invert opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="text-zinc-800 dark:text-zinc-200">LinkedIn</span>
                    </a>
                    <a
                        href={LINKS.resume}
                        className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 transition px-4 py-2 rounded-md font-mono text-sm"
                    >
                        <img src="/images/footer/resume.svg" alt="" className="w-4 h-4 invert" />
                        <span className="text-white">Resume</span>
                    </a>
                    <button
                        type="button"
                        onClick={onContact}
                        className="rounded border border-zinc-300 dark:border-zinc-600 px-4 py-2 font-mono text-sm text-zinc-700 dark:text-zinc-300 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                        contact
                    </button>
                </div>
            </div>
        </footer>
    );
}
