// Typed metadata for every content page under /projects — the single source of
// truth for the home-page project grid and the dodecahedron face popup blurbs.
// When adding a project: add an entry here, create the page, and (if it gets a
// 3D face) wire the matching FACE_DEFINITIONS entry in Dodecahedron.tsx.

export interface ProjectMeta {
    slug: string;
    title: string;
    blurb: string;
    tags: string[];
    accent: string;
    award?: string;
    category: "robotics" | "hardware" | "software" | "ml" | "about";
}

export const PROJECTS: ProjectMeta[] = [
    {
        slug: "portrait",
        title: "About Simon",
        blurb: "Simon Jin. Robotics, ML, and Software Engineering. Passionate about building intelligent systems.",
        tags: ["Bio", "Education", "Skills"],
        accent: "#06b6d4",
        category: "about",
    },
    {
        slug: "hardhaq",
        title: "HardHaQ 2025",
        blurb: "1st Place winner at HardHaQ 2025, a quantum hardware hackathon hosted by the North American Quantum Consortium.",
        tags: ["Quantum", "ANSYS HFSS", "Microwave Eng."],
        accent: "#f59e0b",
        award: "1st Place",
        category: "hardware",
    },
    {
        slug: "ascension",
        title: "Ascension Robotics",
        blurb: "Computer vision developer on a combat-robotics student design team — real-time armor-panel detection in C++ on a Jetson Orin Nano, a 12,000+ image dataset, and ROS 2 motion planning.",
        tags: ["OpenCV", "ROS 2", "Nav2", "YOLO"],
        accent: "#f97316",
        category: "robotics",
    },
    {
        slug: "telebuddy",
        title: "Telebuddy",
        blurb: "A 6-DOF teleoperated robotic arm specifically designed for precision soldering tasks. Won Science Tech for Social Good at Hack the Coast.",
        tags: ["ROS", "AR", "Inverse Kinematics"],
        accent: "#14b8a6",
        award: "Hack the Coast Winner",
        category: "robotics",
    },
    {
        slug: "parabellum",
        title: "FTC Parabellum",
        blurb: "Served as 3-year captain for FTC Parabellum. Led the team to compete in the European Internationals and mentored junior members.",
        tags: ["CAD", "Java", "Leadership"],
        accent: "#e11d48",
        award: "Innovate 2nd @ EU Intl.",
        category: "robotics",
    },
    {
        slug: "macropad",
        title: "Custom Macropad",
        blurb: "Engineered a custom hall-effect macropad from scratch, featuring a custom KiCad PCB and embedded firmware.",
        tags: ["KiCad", "Embedded", "USB HID"],
        accent: "#10b981",
        category: "hardware",
    },
    {
        slug: "resume-builder",
        title: "Resume Builder",
        blurb: "A local-first AI resume builder powered by a local LLM (llama.cpp). Generates tailored LaTeX resumes from structured experience data.",
        tags: ["Rust", "Tauri", "llama.cpp", "LaTeX"],
        accent: "#10b981",
        category: "software",
    },
    {
        slug: "hudson",
        title: "HUDson",
        blurb: "Deaf-assist heads-up display on Viture Pro XR glasses — real-time captioning with ElevenLabs text-to-speech and voice cloning. Won Best Use of ElevenLabs API at nwHacks 2026.",
        tags: ["XR", "ElevenLabs API", "JavaScript", "Node.js"],
        accent: "#3b82f6",
        award: "Best Use of ElevenLabs API",
        category: "software",
    },
    {
        slug: "awards",
        title: "Awards & Recognition",
        blurb: "Hackathon wins, scholarships, and competitive results across robotics, quantum hardware, and software.",
        tags: ["Hackathons", "Scholarships"],
        accent: "#f59e0b",
        category: "about",
    },
    {
        slug: "hackml",
        title: "HackML",
        blurb: "A machine-learning pipeline built around disciplined evaluation — k-fold cross-validation, feature engineering, and reproducible model optimization.",
        tags: ["Python", "scikit-learn", "pandas"],
        accent: "#8b5cf6",
        category: "ml",
    },
    {
        slug: "air-mouse",
        title: "Air Mouse",
        blurb: "A motion-controlled pointer that reads hand movement in free space — IMU sensing, sensor fusion, and low-latency firmware mapped onto standard input.",
        tags: ["Embedded", "IMU", "USB HID"],
        accent: "#6366f1",
        category: "hardware",
    },
];

export function projectBySlug(slug: string): ProjectMeta {
    const meta = PROJECTS.find((p) => p.slug === slug);
    if (!meta) throw new Error(`Unknown project slug: ${slug}`);
    return meta;
}
