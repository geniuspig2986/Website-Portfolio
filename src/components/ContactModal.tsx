"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Destination inbox + Web3Forms access key.
// The access key is a PUBLIC string (safe to commit). Create a free one at
// https://web3forms.com and set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, or paste it
// in as the fallback below. Until a real key is set, sends will return an error.
const TO_ADDRESS = "sjin2986@gmail.com";
const ACCESS_KEY =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "197145ab-d5bd-4abc-ad0d-dbfc0558661e";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
    "w-full bg-transparent font-mono text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    // Reset to a clean compose window each time it opens.
    useEffect(() => {
        if (open) {
            setStatus("idle");
            setError("");
        }
    }, [open]);

    // Close on Escape.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        // Honeypot — if a bot filled this, silently pretend success.
        if (data.get("botcheck")) {
            setStatus("sent");
            return;
        }

        setStatus("sending");
        setError("");

        const payload = {
            access_key: ACCESS_KEY,
            subject: `[Portfolio] ${data.get("subject") || "New message"}`,
            from_name: (data.get("name") as string) || (data.get("email") as string),
            name: data.get("name"),
            email: data.get("email"),
            replyto: data.get("email"),
            message: data.get("message"),
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });
            const json = await res.json();
            if (json.success) {
                setStatus("sent");
            } else {
                setStatus("error");
                setError(json.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setError("Network error — check your connection and try again.");
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden
                    />

                    {/* Compose window */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Compose message"
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        className="relative w-full max-w-lg rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                    >
                        {/* Title bar */}
                        <div className="h-9 bg-zinc-100 dark:bg-zinc-800/80 flex items-center px-4 gap-2 border-b border-zinc-200 dark:border-zinc-700/50">
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50 hover:brightness-110"
                            />
                            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                            <span className="ml-2 font-mono text-[11px] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                                new_message — compose
                            </span>
                        </div>

                        {status === "sent" ? (
                            <div className="p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[280px]">
                                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-500 text-2xl">
                                    ✓
                                </div>
                                <h3 className="font-mono text-lg font-bold text-zinc-900 dark:text-zinc-100">
                                    Message sent
                                </h3>
                                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
                                    Thanks for reaching out — I&apos;ll get back to you at the address you provided.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-2 rounded bg-cyan-600 px-5 py-2 font-mono text-xs text-white transition hover:bg-cyan-500"
                                >
                                    close
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                {/* To (fixed) */}
                                <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
                                    <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 w-16 shrink-0">To</span>
                                    <span className="font-mono text-sm text-cyan-600 dark:text-cyan-400">{TO_ADDRESS}</span>
                                </div>

                                {/* From */}
                                <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
                                    <label htmlFor="cm-email" className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 w-16 shrink-0">From</label>
                                    <input
                                        id="cm-email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="your@email.com"
                                        className={FIELD}
                                    />
                                </div>

                                {/* Name */}
                                <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
                                    <label htmlFor="cm-name" className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 w-16 shrink-0">Name</label>
                                    <input
                                        id="cm-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your name (optional)"
                                        className={FIELD}
                                    />
                                </div>

                                {/* Subject */}
                                <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
                                    <label htmlFor="cm-subject" className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 w-16 shrink-0">Subject</label>
                                    <input
                                        id="cm-subject"
                                        name="subject"
                                        type="text"
                                        required
                                        placeholder="What's this about?"
                                        className={FIELD}
                                    />
                                </div>

                                {/* Message */}
                                <div className="px-5 py-3">
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        placeholder="Write your message…"
                                        className={`${FIELD} resize-none leading-relaxed`}
                                    />
                                </div>

                                {/* Honeypot (hidden from humans) */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    className="hidden"
                                    aria-hidden
                                />

                                {/* Footer */}
                                <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
                                    <span className="font-mono text-[11px] text-rose-500 min-h-[1rem] flex-1 truncate">
                                        {status === "error" ? error : ""}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="rounded border border-zinc-300 dark:border-zinc-600 px-4 py-1.5 font-mono text-xs text-zinc-700 dark:text-zinc-300 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                    >
                                        cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="rounded bg-cyan-600 px-5 py-1.5 font-mono text-xs text-white transition hover:bg-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === "sending" ? "sending…" : "send_message"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
