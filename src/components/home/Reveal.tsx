"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// Simple once-only fade-up used by the home scroll sections. Keep it subtle —
// no multi-phase builds (see CLAUDE.md / design notes).
export default function Reveal({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const reduceMotion = useReducedMotion();
    return (
        <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
