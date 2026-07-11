---
name: verify
description: Build/launch/drive recipe for verifying changes to this portfolio site in a real browser.
---

# Verifying this repo

> **Owner preference (July 2026): do NOT run Playwright/headless-browser tests.**
> Verify with `npm run build`, then ask Simon to test manually and tell him
> exactly which flows to exercise. The browser recipe below is kept only for
> reference if he explicitly asks for an automated check.

## Launch

- `npm run dev` — but check first: the user often already has a dev server on **http://localhost:3000** (`curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/`). If it responds 200, use it — Next.js (Turbopack) hot-reloads uncommitted edits, and starting a second instance fails on the `.next/dev/lock` anyway.
- `npm run build` is the typecheck/lint gate (per CLAUDE.md), not verification.

## Drive (headless browser)

No Playwright browsers are installed in the ms-playwright cache; use the system Edge instead:

```bash
cd <scratchpad> && npm init -y && npm install playwright
```

```js
import { chromium } from "playwright";
const browser = await chromium.launch({ channel: "msedge", headless: true });
```

Write the script in the scratchpad (npx-installed playwright is not resolvable from there — a local `npm install playwright` in the scratchpad is required).

## Flows worth driving

- Home: hero renders (dodecahedron canvas), wheel-scroll over the canvas *and* over the terminal-text overlay reaches ProjectGrid → Skills → Awards → footer. Scrolling happens on `<main>` (the page's scroll container), **not** the window — `document.body` is `overflow-hidden`; assert on `main.scrollTop`.
- Drag on the canvas (OrbitControls rotate) must not crash or block scrolling.
- Collect `console` errors and 404 responses during the run; CLAUDE.md requires no image 404s.
- Check `main.scrollWidth <= main.clientWidth` (no horizontal overflow).

## Gotchas

- Every route scrolls in its own container (`main` on home, the `h-screen overflow-y-auto` div in `ProjectLayout`); window/body scroll position is always 0.
- Wait ~2s after load for the fade-in animations before screenshotting.
