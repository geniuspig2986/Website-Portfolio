// Recruiter-facing profile facts (mirrors public/resume.pdf) — single source
// for the home-page sections, hero links, and the about page.

export const LINKS = {
    github: "https://github.com/sinj3d",
    linkedin: "https://www.linkedin.com/in/shenghua-jin/",
    email: "sjin2986@gmail.com",
    resume: "/resume",
};

export interface ExperienceItem {
    org: string;
    role: string;
    period: string;
    summary: string;
    href?: string;
}

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: "Ascension Robotics",
        role: "Computer Vision Engineer",
        period: "Sept 2025 – present",
        summary:
            "Real-time armor-panel detection on Linux, a 12,000+ image dataset expanded to 4× the classes, and ROS 2 motion planning with Nav2.",
        href: "/projects/ascension",
    },
    {
        org: "Artiverse",
        role: "Data Annotator",
        period: "Oct 2025 – present",
        summary:
            "Annotated 800+ articulated 3D models, refined joint kinematics, and wrote URDF conversion scripts for simulation use.",
    },
    {
        org: "Robokids",
        role: "Robotics Instructor",
        period: "Sept 2025 – present",
        summary:
            "Teach robotics fundamentals and mechanical design on Lego Mindstorm EV3, NXT, and Tetrix platforms.",
    },
    {
        org: "Team Parabellum",
        role: "Team Captain (FTC)",
        period: "Sept 2022 – Jul 2025",
        summary:
            "Directed end-to-end robot engineering to the European Premier Event — Fusion 360 CAD, custom fabrication, and Java autonomous with PID control.",
        href: "/projects/parabellum",
    },
];

export const EDUCATION = {
    school: "Simon Fraser University",
    degree: "BSc, Computing Science",
    period: "2025 – 2029 (expected)",
    detail: "CGPA 4.17/4.33 · CMPT 419 Robotic Autonomy",
};

export interface SkillGroup {
    label: string;
    items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
    { label: "Languages", items: ["Java", "Python", "C++", "TypeScript", "Rust"] },
    { label: "Robotics & Hardware", items: ["ROS 2", "Fusion 360", "ANSYS HFSS", "KiCad", "3D Printing"] },
    { label: "ML & Data", items: ["OpenCV", "YOLOv12", "Pandas", "NumPy", "Jupyter"] },
    { label: "Web & Tools", items: ["React", "Next.js", "Git", "Docker", "Linux", "Tauri"] },
];

export const AWARD_CHIPS: string[] = [
    "🏆 HardHaQ 2025 — 1st Place",
    "🏆 Hack the Coast — Science Tech for Social Good",
    "🏆 SFU DSSS Datajam — Most Effective Solution",
    "🏆 Stormhacks — Surge Choice Award",
    "🎓 Matthew Leduc Scholarship",
    "🎓 SFU Alumni Scholarship",
];
