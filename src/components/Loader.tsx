"use client";

import { useState, useEffect } from "react";
import styles from "./loader.module.css";

const LOAD_DURATION_MS = 15_000;

export default function Loader() {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFading(true), LOAD_DURATION_MS);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`${styles.loader} ${fading ? styles.loaderHidden : ""}`}
            aria-label="Loading"
            aria-hidden={fading}
        >
            <div className={styles.dodecahedronWrap}>
                <div className={styles.perspective}>
                    <div className={styles.scene}>
                        <div className={`${styles.face} ${styles.f1}`} />
                        <div className={`${styles.face} ${styles.f2}`} />
                        <div className={`${styles.face} ${styles.f3}`} />
                        <div className={`${styles.face} ${styles.f4}`} />
                        <div className={`${styles.face} ${styles.f5}`} />
                        <div className={`${styles.face} ${styles.f6}`} />
                        <div className={`${styles.face} ${styles.f7}`} />
                        <div className={`${styles.face} ${styles.f8}`} />
                        <div className={`${styles.face} ${styles.f9}`} />
                        <div className={`${styles.face} ${styles.f10}`} />
                        <div className={`${styles.face} ${styles.f11}`} />
                        <div className={`${styles.face} ${styles.f12}`} />
                    </div>
                </div>
            </div>

            <span className={styles.loadingText}>Initializing</span>
        </div>
    );
}
