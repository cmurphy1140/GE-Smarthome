# GE Smarthome Dealer Program

A consolidated home for the GE Smarthome dealer experience. The repository now keeps the original static marketing prototype alongside an expanded Next.js implementation so you can reference the design system or continue building a production-ready site from the same codebase.

## Repository Layout
- `static-site/` – original HTML prototype (`index.html`, `signup.html`, `learning-guide.html`) for quick reference or lightweight hosting.
- `apps/web-app/` – Next.js application with the modernized onboarding experience and shared design tokens.

## Static Prototype Snapshot (`static-site/`)
- Polished homepage with hero, partnership benefits, and product ecosystem highlights.
- Dealer application page with client-side validation, success messaging, and responsive layout.
- Comprehensive brand documentation in `learning-guide.html` covering typography, color, and component rules.

## Next.js Application Overview (`apps/web-app/`)
- App Router project structure with TypeScript, PostCSS, and ESLint ready to extend.
- Mirrors the static content while enabling data fetching, routing, and component reuse.
- Includes project-level `.gitignore`, design tokens in `src/app/globals.css`, and a dedicated `/signup` route.

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

## Contributing
1. Decide whether the change belongs in the static reference or the Next.js app.
2. Update the relevant directory and follow existing patterns and design guidelines.
3. Run `npm run lint` inside `apps/web-app` before opening a pull request.

## License
Copyright © GE Lighting. All rights reserved.
