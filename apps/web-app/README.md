# GE Smarthome Dealer Program

A modern Next.js 15 application showcasing the GE Smarthome dealer partnership program.

## Quick Start

```bash
cd apps/web-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Prerequisites
- **Node.js 18+**
- **npm 8+**

## Tech Stack
- Next.js App Router with TypeScript
- Tailored global styles in `src/app/globals.css`
- ESLint + TypeScript strict mode
- PostCSS pipeline with autoprefixer support

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run preview    # Build and start production server
npm run lint       # Run ESLint
```

## Project Structure
```
src/app/
├── layout.tsx    # Global app shell and metadata
├── page.tsx      # Landing page
├── signup/       # Dealer application route
└── globals.css   # Shared design tokens and utilities
```

## Conventions
- Keep visual styles centralized in `globals.css` to mirror the static design system.
- Use server components by default; opt into client components only when interaction is required.
- Validate all changes with `npm run lint` before committing.

## Speed Build Workflow

For repeatable CI/local builds without reinstalls and telemetry noise:

```bash
npm run build:speed
```

`scripts/speed-build.sh` ensures Node 20 is on the `PATH`, warms dependencies with `npm ci --prefer-offline`, lifts the Node memory ceiling, and calls `npx next build`. The script is safe to reuse in automation.

## Deployment

### Vercel (recommended)

```bash
# first time
npx vercel login

# from the repository root or apps/web-app
npm run deploy:vercel
```

The included `vercel.json` points the build command at `apps/web-app` so no extra configuration is required. Override environment variables (e.g. analytics keys) through the Vercel dashboard.

### Self-hosted / Other Platforms

1. `npm run build` (or `npm run build:speed` for cached installs).
2. Copy the `.next`, `public`, and `package.json` files to your host.
3. `npm install --omit=dev` on the server.
4. `npm run start` to boot the production server.
