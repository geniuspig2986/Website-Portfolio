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
        role: "Software Developer",
        period: "Sept 2025 – June 2026",
        summary:
            "Decoupled a continuously spinning LiDAR/camera turret from the chassis with a C++ ROS 2 node — heading-locked base frame in tf2, Nav2 velocity commands rotated into the firmware’s turret frame — then migrated the local controller from DWB to MPPI (Omni model) to recover lateral motion, hardened bringup with a systemd user service, and shipped real-time target detection on a Jetson Orin Nano (~80% lower camera-intrinsic RMS reprojection error).",
        href: "/projects/ascension",
    },
    {
        org: "LiDAR–Camera Sensor Fusion",
        role: "Undergraduate Researcher, SFU",
        period: "Jan – Apr 2026",
        summary:
            "Owned sensor integration on a 5-person team’s mobile-robot data-collection rig (Jetson Orin Nano, ROS 2 Humble), fusing a ZED stereo camera and a Robosense LiDAR; calibrated the 6-DoF extrinsic transform to under ~3 cm translation error and generally <15 px reprojection error, on a custom two-tier 3D-printed mount.",
    },
    {
        org: "Artiverse",
        role: "Technical Data Annotator",
        period: "Oct 2025 – Feb 2026",
        summary:
            "Automated generation of XML URDF robot descriptions from .glb assets with a multi-threaded Python/NumPy pipeline for high-fidelity physics simulation, resolving 3D coordinate-system discrepancies and baked matrix transforms across 800+ models.",
    },
    {
        org: "Team Parabellum",
        role: "Team Captain (FTC)",
        period: "Sept 2022 – Jul 2025",
        summary:
            "Directed the mechanical design of the competition robot — custom chassis, capstan-drive speed reducer, and a telescoping box-tube linear extension with a differential wrist — carrying the team to 2nd Place Innovate at the European Premier Event; programmed Java autonomous routines with a custom PIDF controller and set the team’s Git/GitHub standards.",
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
        period: "Aug 2026 – May 2029 (expected)",
        detail: "Incoming transfer · Robotic Autonomy (SLAM, motion planning, ROS 2, control theory), Linear Algebra",
    },
    {
        school: "Simon Fraser University",
        degree: "Computing Science (transferring to CMU)",
        period: "2025 – 2026",
        detail: "CGPA 4.04/4.33",
    },
];

export interface SkillGroup {
    label: string;
    items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
    { label: "Robotics", items: ["ROS 2 (Nav2, MPPI, tf2)", "SLAM & localization", "Motion planning", "Jetson", "Linux"] },
    { label: "Languages", items: ["C++", "Python", "Rust", "Java", "JavaScript/TypeScript", "SQL"] },
    { label: "Perception & ML", items: ["OpenCV", "YOLOv12", "ONNX Runtime", "NumPy", "scikit-learn", "Camera/LiDAR calibration"] },
    { label: "Hardware & Tooling", items: ["Fusion 360", "KiCad", "ANSYS HFSS", "colcon/CMake", "Git", "Docker"] },
    { label: "Web", items: ["React", "Next.js", "Tauri", "Node.js"] },
];

export const AWARD_CHIPS: string[] = [
    "🏆 FTC Innovate Award — 2nd Place, European Premier Event",
    "🏆 ARC Competition — 3rd (1v1), 8th (3v3)",
    "🏆 HardHaQ 2025 — 1st Place",
    "🏆 nwHacks 2026 — Best Use of ElevenLabs API",
    "🏆 Hack the Coast — Science Tech for Social Good",
    "🏆 SFU DSSS Datajam — Most Effective Solution",
    "🏆 Stormhacks — Surge Choice Award",
    "🎓 Matthew Leduc Scholarship",
    "🎓 SFU Alumni Scholarship",
];
