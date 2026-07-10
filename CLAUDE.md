# CLAUDE.md

This file tells Claude (and any other AI coding assistant) how to work in this repository. Read it at the start of every session. If anything here conflicts with a user instruction, ask before proceeding.

## Prime Directives

1. **Plan before coding.** For any non-trivial change, state the plan in plain English first and wait for confirmation.
2. **Small, reviewable diffs.** One concern per change. Never bundle refactors with features.
3. **Never silently rewrite code you weren't asked to touch.** If you think something nearby should change, mention it — don't just do it.
4. **No fake implementations.** No stub returns, no hardcoded "TODO" values pretending to work, no swallowed errors. If something can't be implemented, say so.
5. **Read before you write.** Inspect the relevant files and existing patterns before generating new code. Match the conventions already in the repo.

## Project Conventions

This is an interactive 3D portfolio. **Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · React Three Fiber (`@react-three/fiber`) + `@react-three/drei` · `three` · `framer-motion` · Tailwind CSS v4.

- **Client components.** Any file using hooks, R3F (`<Canvas>`), or `framer-motion` must start with `"use client"`. Keep server components free of those imports.
- **Dark mode first.** Theme is driven by a `.dark` class on `<html>` (see `ThemeProvider` + the inline script in `layout.tsx`). Canvas/page bases use `bg-zinc-950` / `#0a0a0a`. Always provide both light and dark variants (`text-zinc-900 dark:text-zinc-100`).
- **Styling = Tailwind utilities only.** No CSS Modules, no per-page `<style>` blocks for anything reusable. **Global keyframes/animations belong in `globals.css`** (`animate-wobble-1/2`, `animate-fade-in-slow`, `animate-line`, `animate-blink`, `animate-shimmer`). A keyframe defined in one page's local `<style>` will silently fail to animate on other pages.
- **Glassmorphism cards.** Floating UI uses `bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800`.
- **Typography.** Geist Mono (`var(--font-geist-mono)`) for terminal/technical text and code; Geist Sans for headings and prose.
- **Project subpages.** Build them on `ProjectLayout` (`src/components/ProjectLayout.tsx`) with its `Section`, `TechTags`, and `SpecRows` helpers so back-nav, header, scroll behavior, and entrance animation stay consistent. Wrap visual cards in `TerminalCard`.
- **Route transitions are global.** `PageTransition` (in the root layout) animates every route in/out via `framer-motion` `AnimatePresence`. Do **not** add a competing page-level enter/exit transition — use the default. Per-section entrance animations inside a page are fine.
- **R3F performance.** Never instantiate `THREE` geometries/materials inside the render loop or a `useFrame` callback. Memoize heavy math (quaternions, edge extraction) with `useMemo`; reuse scratch vectors/quaternions.
- **TypeScript.** Strict mode, no `any`. Define interfaces for data objects (face definitions, project data).
- **Assets.** Per-project images live in `public/images/<slug>/`. Reference with absolute paths (`/images/<slug>/file.png`). Confirm a file exists before referencing it — a wrong path renders a broken `<img>`.

## Repository Layout

```
src/
  app/
    layout.tsx              Root layout: fonts, ThemeProvider, PageTransition, theme bootstrap script, site metadata/OG
    page.tsx                Home — 3D Dodecahedron hero + scrollable recruiter sections (grid, experience, skills, footer)
    globals.css             Tailwind v4 import + all global keyframes (incl. prefers-reduced-motion overrides)
    resume/page.tsx         Redirects to /resume.pdf
    projects/<slug>/page.tsx One page per project (portrait, hardhaq, macropad, ascension, …)
    projects/<slug>/layout.tsx Tiny server layout exporting per-page metadata (title/description from src/data/projects.ts)
  components/
    Dodecahedron.tsx        3D nav hub; FACE_DEFINITIONS maps faces → project slugs
    PageTransition.tsx      Global route enter/exit animation
    ProjectLayout.tsx       Shared subpage scaffold + Section / TechTags / SpecRows (+ optional `links` repo buttons)
    TerminalCard.tsx        Terminal-window card with hover-tilt + idle wobble
    SkillNetwork.tsx        R3F skills graph (portrait page)
    home/                   Home scroll sections: ProjectGrid + HomeSections (experience, skills, awards, footer)
    Dodecahedron / ThemeProvider / ThemeToggle
  data/
    projects.ts             Typed project metadata — source of truth for the home grid and face popup blurbs
    profile.ts              Resume facts (links, experience, education, skills, awards) for home + about page
public/
  images/<slug>/            Per-project assets
  resume.pdf
AGENTS.md                   Design schema & 3D/UI specs (read alongside this file)
```

**Dev commands** (Node/npm required on PATH): `npm run dev` (local server), `npm run build` (typecheck + production build), `npm run start`, `npm run lint`.

When adding a project: create `src/app/projects/<slug>/page.tsx` (plus its metadata `layout.tsx`), add a `PROJECTS` entry in `src/data/projects.ts` (feeds the home grid and popup blurbs), **and** — if it gets a 3D face — make sure the matching entry in `FACE_DEFINITIONS` (Dodecahedron.tsx) points to the same `slug`. A face that links to a slug with no page is a 404; a frosted (`isFrosted`) face is intentionally non-navigable ("coming soon"). A project may be grid-only (no face). Currently 11 faces link to project pages and face 10 is a frosted "coming soon" placeholder — reuse it first when adding a new project.

## How to Work on a Feature

Follow this sequence. Do not skip steps.

1. **Confirm the goal.** Restate what you're about to build in one or two sentences.
2. **Identify the slice.** Build one user-facing capability end-to-end rather than half-finished layers. For a project page the slice is usually: route/`page.tsx` → `ProjectLayout` scaffold → content sections → wire the matching `FACE_DEFINITIONS` entry in `Dodecahedron.tsx`. For a 3D change the slice is: geometry/data → `useFrame` update → on-screen result.
3. **Surface the plan.** List the files you'll create or edit and why. Wait for approval on anything touching more than ~3 files, or anything in a Protected Area.
4. **Implement.** Make the change. Keep edits scoped to what you described.
5. **Verify.** Run `npm run build` (typecheck + lint must pass clean) and, for anything visual or interactive, `npm run dev` and exercise it in the browser. Describe what you observed. See **Testing Standards** below.
6. **Summarize.** End with a short summary of what changed, what's verified, and what's still open.

## What Not to Do

- **Don't** add a per-page route transition that competes with the global `PageTransition`.
- **Don't** define reusable keyframes in a page-local `<style>` block — put them in `globals.css`.
- **Don't** create/instantiate geometries or materials inside `useFrame` / the render loop.
- **Don't** reference image paths that don't exist under `public/images/`. Verify first.
- **Don't** link a dodecahedron face to a project slug that has no `page.tsx`.
- **Don't** introduce `any`, hardcode light-only colors, or drop the `"use client"` directive on interactive components.
- **Don't** add heavy dependencies (3D libraries, UI kits, state managers) without approval — keep the bundle lean.
- **Don't** commit secrets, API keys, or `.env` files.

## Protected Areas

These are load-bearing and easy to break — read carefully and change conservatively (mention intent before editing):

- **`Dodecahedron.tsx`** — the geometry alignment, edge-extraction, quaternion, and `useFrame` animation math. Small changes cascade into visual breakage. The `FACE_DEFINITIONS` array is the source of truth for navigation.
- **`PageTransition.tsx`** — the `FrozenRoute` + `AnimatePresence` mechanism. Subtle; regressions cause flashes or stuck exits.
- **`layout.tsx` theme bootstrap script** — the inline `<script>` prevents a light/dark flash on first paint. Don't remove it.
- **`ThemeProvider.tsx`** — the single owner of theme state.

## Context Hygiene

- Read `AGENTS.md` and this file at the start of a session; they encode the design schema and conventions.
- Before building a page, read an existing finished one (`projects/hardhaq/page.tsx`, `projects/portrait/page.tsx`) and `ProjectLayout.tsx` to match patterns.
- Prefer the shared helpers (`ProjectLayout`, `TerminalCard`, `Section`, `TechTags`, `SpecRows`) over re-implementing scaffolding per page.
- Keep diffs scoped; don't reformat untouched files.

## Testing Standards

There is **no automated test suite** in this repo — don't claim tests were run when they weren't. Verification means:

1. **`npm run build`** — must pass clean. This runs the TypeScript typecheck and ESLint; it's the primary gate for "does it compile."
2. **`npm run dev`** + manual smoke test — load the home page (dodecahedron builds and faces are clickable), navigate into the changed subpage, click `back_to_portfolio`, and toggle light/dark. Confirm the route transition plays and no images 404 in the console.
3. State plainly what you verified and what you didn't (e.g. "build passes; not manually smoke-tested").


## Code Review Self-Check

Before saying "done," verify each item:

- [ ] The diff only contains changes related to the stated goal.
- [ ] No `console.log` spam, commented-out blocks, or scratch code left behind.
- [ ] No new npm dependencies added without approval.
- [ ] No protected areas modified without approval.
- [ ] `npm run build` passes clean (typecheck + ESLint, no errors).
- [ ] Interactive components have `"use client"`; reusable keyframes live in `globals.css`, not page-local `<style>`.
- [ ] Every color has both a light and `dark:` variant; nothing is light-only.
- [ ] No `any`; data objects are typed with interfaces.
- [ ] All referenced `public/images/...` paths exist (no broken `<img>`), and no `FACE_DEFINITIONS` slug points to a missing page.
- [ ] No secrets, API keys, or `.env` files in the diff.
- [ ] No geometries/materials instantiated inside `useFrame` or the render loop.

## Communication Style

- Be concise. Skip preamble like "Great question!" and get to the work.
- When uncertain, say so. Don't guess at React Three Fiber, `drei`, `framer-motion`, Next.js App Router, or Tailwind v4 APIs or versions — read the code/docs or ask.
- Surface tradeoffs explicitly when you make a non-obvious choice (e.g., R3F instancing vs. per-mesh, animation in `useFrame` vs. `framer-motion`, image weight vs. quality).
- If a request is ambiguous, ask one clarifying question before coding.

## Maintenance Tasks

When asked to do maintenance work, treat each as its own focused session:

- **Refactors:** identify duplication and unclear naming. Propose changes; don't bundle with features. The shared scaffolding (`ProjectLayout`, `TerminalCard`, helpers) is the place to consolidate repeated page markup.
- **Package updates:** one npm dependency at a time, especially `next`, `react`, `three`, `@react-three/*`, and `framer-motion` (their versions are coupled). Read the changelog/breaking changes, then run `npm run build` after each.
- **Documentation:** keep `README.md`, `AGENTS.md`, and this `CLAUDE.md` in sync with code changes. If new conventions emerge, record them here.
- **Content sync:** when adding or renaming a project, keep four things aligned — the `PROJECTS` entry (`src/data/projects.ts`), the `FACE_DEFINITIONS` entry (`Dodecahedron.tsx`, if it has a face), the `src/app/projects/<slug>/page.tsx` route (+ metadata `layout.tsx`), and the `public/images/<slug>/` assets. Resume-derived facts (experience, education, skills, awards) live in `src/data/profile.ts` — update it alongside `public/resume.pdf`.

## Handoff Notes

End a substantive session with a short summary in chat covering: what changed, what was verified (and how), and any open follow-ups. If the work spans multiple sessions, capture durable context (decisions, gotchas, todo) in the relevant doc — `AGENTS.md` for design/3D decisions, this file for conventions — rather than leaving it implicit.
