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
        org: "LiDAR–Camera Sensor Fusion",
        role: "Undergraduate Research (CMPT 419), SFU",
        period: "Jan – Apr 2026",
        summary:
            "Built a calibrated multi-sensor rig on a mobile robot (Jetson Orin Nano, ROS 2 Humble) fusing a ZED stereo camera and Robosense LiDAR; calibrated the 6-DoF extrinsic transform to ~3 cm translation error and <15 px reprojection error.",
    },
    {
        org: "Ascension Robotics",
        role: "Computer Vision Developer",
        period: "Sept 2025 – present",
        summary:
            "Real-time object detection in C++ on a Jetson Orin Nano, ~80% reduction in camera-calibration reprojection error, a 12,000+ image dataset, and ROS 2 motion planning with Nav2.",
        href: "/projects/ascension",
    },
    {
        org: "Artiverse",
        role: "Technical Data Annotator",
        period: "Oct 2025 – Feb 2026",
        summary:
            "Engineered a multi-threaded Python/NumPy pipeline generating URDFs from .glb files for physics simulation, resolving coordinate-system discrepancies across 800+ 3D models.",
    },
    {
        org: "Team Parabellum",
        role: "Team Captain (FTC)",
        period: "Sept 2022 – Jul 2025",
        summary:
            "Led design and build of a competitive FTC robot to Innovate 2nd Place at the European Premier Event — Fusion 360 CAD, Java autonomous with a custom PIDF controller, and team Git workflows.",
        href: "/projects/parabellum",
    },
];

export interface EducationItem {
    school: string;
    degree: string;
    period: string;
    detail: string;
}

export const EDUCATION: EducationItem[] = [
    {
        school: "Carnegie Mellon University",
        degree: "B.S. Robotics, School of Computer Science",
        period: "Fall 2026 – 2029 (expected)",
        detail: "Incoming transfer",
    },
    {
        school: "Simon Fraser University",
        degree: "Computing Science (transferring to CMU)",
        period: "2025 – 2026",
        detail: "CGPA 4.04/4.33 · Robotic Autonomy (SLAM, motion planning, ROS 2)",
    },
];

export interface SkillGroup {
    label: string;
    items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
    { label: "Languages", items: ["Python", "C++", "Rust", "Java", "JavaScript/TypeScript", "SQL"] },
    { label: "Robotics & Hardware", items: ["ROS 2", "KiCad", "Fusion 360", "ANSYS HFSS", "Embedded firmware"] },
    { label: "ML & Data", items: ["OpenCV", "YOLOv12", "Pandas", "NumPy", "scikit-learn", "XGBoost", "Optuna"] },
    { label: "Web & Tools", items: ["React", "Next.js", "Tauri", "Node.js", "Git/GitHub", "Docker", "Linux"] },
];

export const AWARD_CHIPS: string[] = [
    "🏆 HardHaQ 2025 — 1st Place",
    "🏆 nwHacks 2026 — Best Use of ElevenLabs API",
    "🏆 Hack the Coast — Science Tech for Social Good",
    "🏆 SFU DSSS Datajam — Most Effective Solution",
    "🏆 Stormhacks — Surge Choice Award",
    "🎓 Matthew Leduc Scholarship",
    "🎓 SFU Alumni Scholarship",
];
