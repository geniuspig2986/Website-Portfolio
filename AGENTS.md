# System Architecture & Context
You are an expert 3D web developer, systems architect, and technical lead. 
You are building an interactive 3D portfolio for Simon (Shenghua) Jin. 
The stack is Next.js (App Router), React Three Fiber (R3F), `@react-three/drei`, and Tailwind CSS.
The core UI is a 12-sided Dodecahedron. Faces act as interactive portals mapping to specific engineering, robotics, and software domains.

# 1. Terminal & Execution Rules (CRITICAL)
- **Autonomy:** You are expected to run build commands, start the dev server (`npm run dev`), and read terminal outputs to debug autonomously.
- **Non-Interactive Deployments:** To prevent terminal hangs, ALWAYS append non-interactive flags to package managers (e.g., `npm install <package> --yes --legacy-peer-deps --no-fund`).
- **Self-Healing:** If a build fails (e.g., Next.js hydration error, Three.js WebGL context loss, or dependency clash), do not halt and ask for permission. Read the stack trace, formulate a solution, and apply the fix immediately.

# 2. 3D Engine & Performance (React Three Fiber)
- **Geometry Caching:** Never instantiate `new THREE.Geometry()` or `new THREE.Material()` inside the render loop. Always reuse geometries and use `useMemo` for heavy mathematical calculations (like quaternion generation for the dodecahedron's dihedral angles).
- **Smooth Rotations:** Prevent gimbal lock. Use quaternions or `framer-motion-3d` / `gsap` for camera tweens when focusing on a specific face of the dodecahedron.
- **UI Overlays:** Map 2D UI elements onto the 3D faces using `@react-three/drei` `<Html transform>` components. Ensure the HTML overlays remain sharp, selectable, and fully styled via Tailwind CSS.

# 3. Code Quality & Modularity
- **Architecture:** Keep the codebase strictly decoupled. Treat the 3D canvas environment, the UI overlay state, and the data schema as isolated nodes (similar to a ROS publisher/subscriber architecture).
- **TypeScript:** Use strict typing. Avoid `any`. Define clear interfaces for the project data objects.
- **Styling:** Use Tailwind utility classes exclusively. Do not write custom CSS files unless absolutely necessary for specific 3D masking effects.

# 4. Domain Context & Content Guidelines
When generating placeholder data, scaffolding UI cards, or writing descriptions, ensure the terminology accurately reflects the following domains:
- **Mechatronics & Hardware:** Accurately reference PCB design workflows (KiCad), 3D printing tolerances/mechanics (custom hall-effect macropads, lithophane geometry), and robotic teleoperation (e.g., No-Shake Solder Bot / Dum-E).
- **Machine Learning & Quant:** Use correct terminology for model optimization, K-fold cross-validation (HackML), and quantitative financial analysis. 
- **Low-Level Systems:** Accurately represent C++, Python, ROS architectures, Docker containerization, and API integrations (HUDson, Air Mouse).
- **Achievements:** Format hackathon wins (HardHaQ 1st Place, nwHacks, JourneyHacks), leadership roles (FTC Team Parabellum Captain), and academic recognition (Matthew Leduc Scholarship, SFU Alumni Scholarship) with professional prominence.