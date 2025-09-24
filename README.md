# GE Smarthome Dealer Program

A consolidated home for the GE Smarthome dealer experience. The repository now keeps the original static marketing prototype alongside an expanded Next.js implementation so you can reference the design system or continue building a production-ready site from the same codebase.

## Feature Highlights
- Modern Next.js App Router stack with TypeScript, ESLint, and Tailwind-powered design tokens.
- Unified dark-blue visual language with deliberate light/dark alternation across sections for clear reading rhythm.
- Rich micro-interactions: animated hero, tabbed benefits, vertical selector, and responsive layouts tuned for sales teams on any device.
- Dedicated `/learning-guide` and `/signup` routes that carry the same UI kit and storytelling as the homepage.

## Repository Layout
- `static-site/` – original HTML prototype (`index.html`, `signup.html`, `learning-guide.html`) for quick reference or lightweight hosting.
  - `assets/` – organized image assets surfaced by the static build.
- `apps/web-app/` – production-ready Next.js application with shared components, layouts, and API hooks.

## UI/UX Guidelines
- Keep section backgrounds alternating between light and deep navy tones; avoid stacking dark blocks back-to-back.
- Primary accents use GE navy (`bg-blue-950`) with white typography for CTA clarity; secondary actions lean on subtle outlines.
- Section headings should flow through `SectionHeader` so typography, animation, and spacing remain consistent.
- Prefer glassmorphism treatments (`bg-white/10`, blurred panels) when placing cards on dark gradients to maintain legibility.
- Reuse motion primitives (fade/slide) already defined in components to keep transitions cohesive.

## Getting Started

### Static HTML Prototype
```bash
open static-site/index.html
```
Open the files directly in a browser or serve them with any static file server.

### Next.js App
```bash
cd apps/web-app
npm install
npm run dev
```
The development server starts on `http://localhost:3000` by default.

### Useful Commands (Next.js)
- `npm run lint` – Ensure formatting and TypeScript-aware lint rules pass.
- `npm run build` – Generate production build output.
- `npm run start` – Serve the production build locally.

## Contributing
1. Decide whether the change belongs in the static reference or the Next.js app.
2. Follow the UI guidelines above—maintain alternating backgrounds, consistent typography, and dark-blue accents.
3. Run `npm run lint` inside `apps/web-app` before opening a pull request and include screenshots for major visual tweaks.

## License
Copyright © GE Lighting. All rights reserved.
