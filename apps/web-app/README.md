# GE Smarthome Web App

This Next.js application powers an interactive version of the GE Smarthome dealer experience. It mirrors the static marketing prototype while unlocking reusable components, API integrations, and modern build tooling.

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
npm run start      # run the production server
npm run lint       # lint the project
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

## Deployment
Build with `npm run build` and deploy the generated `.next` output using your preferred platform (Vercel, Netlify, self-hosted Node, etc.).
