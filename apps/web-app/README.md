# GE Smarthome Web App

This Next.js application powers an interactive version of the GE Smarthome dealer experience. It mirrors the static marketing prototype while unlocking reusable components, API integrations, and modern build tooling.

## Prerequisites
- **Node.js 20.x** – the repo ships with `.node-version` so `nvm use` (or Homebrew’s `node@20`) keeps things consistent.
- **npm 10+** – installed with Node 20.
- (Optional) [Vercel CLI](https://vercel.com/docs/cli) for one-command deployments.

## Tech Stack
- Next.js App Router with TypeScript
- Tailored global styles in `src/app/globals.css`
- ESLint + TypeScript strict mode
- PostCSS pipeline with autoprefixer support

## Available Scripts
```bash
npm install        # install dependencies
npm run dev        # start the development server on http://localhost:3000
npm run build      # create a production build in .next/
npm run build:speed # cached install + tuned build (see scripts/speed-build.sh)
npm run start      # run the production server
npm run lint       # lint the project
npm run build:analyze # visualize the bundle with next build --analyze
npm run deploy:vercel # deploy the latest build to Vercel (requires CLI auth)
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
