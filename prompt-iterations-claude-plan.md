# Iterative Fix Plan (Claude-Ready)

**Assumptions**
- Framework: Next.js 13+ (App Router), React, Tailwind. Deployed on Vercel.
- Repo has basic ESLint, Prettier, Playwright (or Cypress).
- You can adapt file paths if your stack differs.

**Global guardrails for Claude**
- Always return **unified diffs** rooted at repo root.
- No commentary outside code fences.
- Don’t introduce breaking renames unless requested.
- Keep PRs atomic and focused.

```text
When I say “Run the prompt,” paste the whole prompt under “Claude Task Prompt.” Use the exact format. If Claude proposes extra changes outside scope, reject and re-run with the same prompt.
```

---

## Iteration 0 — Repo hygiene and CI baseline

**Objectives**
- Standardize CI, lint, type checks, and smoke tests so later changes are safe.
- Add PR template and commit convention.

**Tasks**
- Add GitHub Actions workflow for install, build, lint, test.
- Add `.nvmrc`, `.editorconfig`, `CONTRIBUTING.md`, `PULL_REQUEST_TEMPLATE.md`.

**Claude Task Prompt**
```
You are an expert Next.js front-end engineer. Make the smallest possible changes to:
1) Add .editorconfig and .nvmrc (Node 20).
2) Add .github/workflows/ci.yml that runs: pnpm install, pnpm build, pnpm lint, pnpm test.
3) Add .github/PULL_REQUEST_TEMPLATE.md with sections: Summary, Scope, Screenshots, Risks, Checklist.
4) Add CONTRIBUTING.md with branching and commit message rules (Conventional Commits).
Return a single unified diff rooted at repo root. No extra commentary.
```

**Tests**
- CI passes on PR.  
- `pnpm build` and `pnpm test` succeed locally.

**Git**
```bash
git checkout -b chore/ci-baseline
# run Claude, apply patch
git add -A && git commit -m "chore(ci): add CI, PR template, contributing"
git push -u origin chore/ci-baseline
```

**Definition of Done (DoD)**
- CI green, template visible on PR creation.

---

## Iteration 1 — Information architecture & tier consistency

**Objectives**
- Reconcile tier inconsistencies (“Authorized/Premier” vs “Elite”).
- Centralize plan data in one source of truth.

**Tasks**
- Create `content/partner-tiers.json` with canonical tiers.
- Update sign-up form and pages to render from this JSON.
- Remove references to non-existent tiers or document them properly.

**Claude Task Prompt**
```
Unify partner tiers. Create content/partner-tiers.json with:
[
  {"id":"authorized","label":"Authorized Partner","discount":"~15%","annual_commitment":3500,"benefits":[...]},
  {"id":"premier","label":"Premier Partner","discount":"~25%","annual_commitment":10000,"benefits":[...]}
]
Refactor any pages/components that render tiers or forms to read from this file. If an “Elite” tier exists in the form, remove it OR load it from the same JSON only if present. Do not hardcode values in JSX.
Return a unified diff. Keep changes minimal.
```

**Tests**
- Unit test: render tiers table from JSON.
- Manual: sign-up shows only canonical tiers.

**Git**
```bash
git checkout -b fix/tiers-canonical
```

**DoD**
- One JSON source; UI and forms match exactly.

---

## Iteration 2 — Legal, privacy, and footer hygiene

**Objectives**
- Add Privacy Policy, Terms, DPA references in footer and on signup.
- Add consent text near email fields.

**Tasks**
- Add `pages/privacy.tsx`, `pages/terms.tsx`.
- Footer links sitewide.
- Add short consent copy under form email field.

**Claude Task Prompt**
```
Add legal pages: /privacy and /terms with minimal compliant skeletons (no lorem ipsum). Add a persistent footer linking to Privacy and Terms. In the sign-up form, beneath the email field, add one-line consent text: “By submitting, you agree to our Privacy Policy and Terms.”
Return a unified diff. Keep style consistent with existing design system.
```

**Tests**
- Playwright: footer links visible on key pages; links load.
- Manual: consent appears on form.

**Git**
```bash
git checkout -b feat/legal-footer
```

**DoD**
- Footer exists, legal pages deployed, consent visible.

---

## Iteration 3 — Copy cleanup and IA clarity

**Objectives**
- Fix typos, remove apostrophe misuse in “FAQs,” tighten headings and CTA verbs.
- Put partner benefits table higher in the page.

**Tasks**
- Content edits only, plus heading hierarchy fixes (H1→H2→H3).
- Normalize CTA to one primary label.

**Claude Task Prompt**
```
Perform precise copy edits:
- Replace “FAQ’s” with “FAQs.”
- Fix “About GE Smart HomeDealer Program” to “About the GE Smart Home Dealer Program.”
- Normalize the primary CTA label across pages to “Apply Now.”
- Promote partner benefits table above long marketing paragraphs.
- Ensure headings use a logical H1>H2>H3 sequence for accessibility.
Return a unified diff. Content-only changes, plus heading tags where required.
```

**Tests**
- Lint for heading order (eslint-plugin-jsx-a11y).
- Manual proofread.

**Git**
```bash
git checkout -b fix/copy-ia
```

**DoD**
- Clean copy, consistent primary CTA, proper heading order.

---

## Iteration 4 — Accessibility upgrades (WCAG AA)

**Objectives**
- Keyboard accessibility for ROI slider and accordions.
- Add alt text, ARIA attributes, focus styles, and color-contrast fixes.

**Tasks**
- Replace custom slider with accessible control or add proper ARIA patterns.
- Ensure accordion uses button semantics with aria-expanded, aria-controls.
- Add visible focus rings.
- Validate color contrast.

**Claude Task Prompt**
```
Improve accessibility to WCAG 2.2 AA:
1) Ensure ROI slider is keyboard accessible with ARIA roles and labels, and exposes value to screen readers. If easier, refactor to input[type=range] with proper labelling.
2) Ensure FAQ accordion buttons have aria-expanded, aria-controls and manage focus correctly.
3) Add accessible alt text for non-decorative images; mark decorative images with empty alt.
4) Ensure focus-visible styles exist for interactive elements.
5) Fix any color contrast issues by adjusting Tailwind classes only; do not change brand palette drastically.
Return a unified diff touching only affected components and styles.
```

**Tests**
- Playwright a11y: tab through interactive elements.
- Axe or eslint a11y checks pass.

**Git**
```bash
git checkout -b feat/a11y-essentials
```

**DoD**
- Complete keyboard navigation, axe no critical findings.

---

## Iteration 5 — SEO & Open Graph, robots, sitemap

**Objectives**
- Add meta description, OG tags, favicon, canonical, sitemap, robots.txt.
- Add structured data (Organization, FAQPage if FAQs exist).

**Tasks**
- Next.js metadata API or `<Head>` tags with canonical.
- Create `next-sitemap` config or a small `app/sitemap.ts`.
- `public/robots.txt`.

**Claude Task Prompt**
```
Add SEO & OG:
1) Implement meta description and Open Graph tags for home and program pages using Next.js metadata or Head.
2) Add canonical link tags.
3) Add structured data JSON-LD: Organization and FAQPage (if FAQ exists), injected via <script type="application/ld+json">.
4) Add public/robots.txt and app/sitemap.ts that enumerates key routes.
5) Ensure OG image path is correct and included in head.
Return a unified diff with minimal changes.
```

**Tests**
- `curl -I` shows canonical; View Source shows JSON-LD.
- Lighthouse SEO ≥ 90.

**Git**
```bash
git checkout -b feat/seo-og-schema
```

**DoD**
- Metadata present, sitemap and robots deployed.

---

## Iteration 6 — Conversion path & ROI calculator improvements

**Objectives**
- Clarify assumptions around calculator, add field validation.
- Persist settings in localStorage and optionally capture email to save config.

**Tasks**
- Add inline help text and validation messages.
- Add “Save my config” that opens an email capture modal.
- Harmonize CTA hierarchy sitewide.

**Claude Task Prompt**
```
Enhance conversion path:
1) In ROI calculator, add inline help icons that open small tooltips with assumption text. Validate fields and show inline error messages.
2) Persist calculator inputs in localStorage and restore on load.
3) Add a “Save my config” action that triggers a modal with email capture (client-side only), and show a success toast after save.
4) Ensure the primary CTA across pages is “Apply Now” and secondary CTAs are visually subordinate.
Return a unified diff, focusing on calculator component and shared CTA styles.
```

**Tests**
- Playwright: form validation scenarios; localStorage persistence.
- Manual: confirm help tooltips and modal behavior.

**Git**
```bash
git checkout -b feat/conversion-path
```

**DoD**
- Validation present, persistence working, modal flow functional.

---

## Iteration 7 — Evidence: case studies and transparent tier table

**Objectives**
- Add at least two case studies with bill of materials, install time, margin deltas.
- Create a transparent tier comparison table with discount bands, MDF, training.

**Tasks**
- Add `content/case-studies/*.md` or JSON and a simple CaseStudy page.
- Tier table component with responsive layout.

**Claude Task Prompt**
```
Add evidence:
1) Create content/case-studies/case-*.md with frontmatter fields: title, industry, bom, install_time_hours, margin_delta_pct, ticket_rate_change, summary, video_url (optional).
2) Add a CaseStudies index page that lists cards with key metrics and a detail page that renders frontmatter and markdown.
3) Build a PartnerTierTable component that displays discount bands, MDF, demo gear terms, onboarding timeline with data from content/partner-tiers.json.
Return a unified diff with new content files, pages, and components. Keep styling consistent.
```

**Tests**
- Unit test: tier table renders from JSON.
- Manual: case study pages accessible.

**Git**
```bash
git checkout -b feat/case-studies-tiers
```

**DoD**
- Case studies live; tier table present and data-driven.

---

## Iteration 8 — Analytics & post-submit flow

**Objectives**
- Track ROI slider, CTA clicks, form completion.
- Add post-submit state with SLA messaging and calendar link.

**Tasks**
- Wire event tracking wrapper (e.g., simple `window.gtag` guard or vendor-agnostic dispatcher).
- Add confirmation screen with “48-hour welcome call” message and a scheduling link.

**Claude Task Prompt**
```
Add analytics and post-submit flow:
1) Create a lightweight analytics util that safely no-ops if tracking is disabled. Expose trackEvent(name, props).
2) Track: ROI slider changes, Apply Now clicks, Save Config modal open/submit, form validation errors, form success.
3) After form submit, show a confirmation screen with “Expect contact within 48 hours” and a Schedule Call button linking to a configurable calendar URL (env var).
Return a unified diff. Add env var placeholder for CALENDAR_URL in .env.example only.
```

**Tests**
- E2E: submit path reaches confirmation view; events logged to console in dev.
- Manual: verify link opens scheduling.

**Git**
```bash
git checkout -b feat/analytics-post-submit
```

**DoD**
- Events fire; confirmation flow complete.

---

## Iteration 9 — Performance and CWV tuning

**Objectives**
- Optimize LCP/CLS: image optimization, lazy-load below-the-fold, preconnect fonts.
- Bundle trimming: split ROI calculator if heavy, remove dead code.

**Tasks**
- Convert hero images to next/image with `priority` on LCP.
- Preload critical font; use `font-display: swap`.
- Lazy-load case study detail components.

**Claude Task Prompt**
```
Optimize performance:
1) Migrate hero and above-the-fold images to next/image with priority and proper sizes.
2) Lazy-load below-the-fold components (case studies detail, ROI helpers).
3) Add preconnect/preload for fonts; ensure font-display: swap.
4) Remove dead imports; verify bundle size drops.
Return a unified diff with tight changes and a brief summary comment in the diff header indicating expected LCP/CLS improvements.
```

**Tests**
- Lighthouse CI: CWV metrics tracked; LCP improves.
- Manual: verify no layout shift.

**Git**
```bash
git checkout -b perf/cwv-optimizations
```

**DoD**
- Lighthouse ≥ 90 performance on desktop, improved mobile.

---

## Iteration 10 — Domain & deployment polish

**Objectives**
- Move from `vercel.app` to branded domain.
- Add canonical redirects and www/non-www canonicalization.
- Add basic uptime check.

**Tasks**
- Configure custom domain in Vercel dashboard.
- Add redirect rules in `next.config.js` or `vercel.json`.
- Add health endpoint `/api/health`.

**Claude Task Prompt**
```
Add deployment polish:
1) Create a simple /api/health route returning 200 JSON {status:"ok"}.
2) Add canonical redirects for www/non-www in next.config.js rewrites/redirects.
3) If vercel.json is used, ensure redirects are mirrored there.
Return a unified diff, minimal changes only.
```

**Tests**
- `curl /api/health` returns 200.
- Redirects function.

**Git**
```bash
git checkout -b chore/domain-redirects-health
```

**DoD**
- Custom domain live, redirects correct, health endpoint available.

---

# Continuous Practices for Every Iteration

**README and docs updates**
- At the end of each iteration, append a section to `CHANGELOG.md` and update `README.md` “Status” table (what changed, why, test coverage).

**Claude Prompt for README/CHANGELOG**
```
Update docs:
1) Append a new entry to CHANGELOG.md with version bump and bullet list of changes.
2) Update README.md: reflect new pages, components, scripts, and env vars. Keep the “Getting Started,” “Testing,” and “Deployment” sections accurate.
Return a unified diff limited to CHANGELOG.md and README.md.
```

**Git flow**
- Feature branches only, squash merge.
- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `perf:`, `refactor:`.

**Testing**
- Unit: components touched.
- E2E: flows affected (apply, ROI, case study view).
- A11y smoke: tab-through + axe run.

**Rollback**
- Each iteration must be shippable alone; revert by `git revert` of merge commit.
- Keep previous production build artifacts in Vercel for instant rollback.

---

## Minimal code scaffolds you’ll likely need (Claude can extend)

**Accessible FAQ accordion skeleton**
```tsx
// components/FAQ.tsx
export function FAQItem({ id, question, answer }: { id: string; question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 focus:outline-none focus-visible:ring"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(v => !v)}
      >
        <span className="font-medium">{question}</span>
      </button>
      <div id={`${id}-panel`} role="region" hidden={!open}>
        <p className="pb-4 text-sm text-gray-700">{answer}</p>
      </div>
    </div>
  );
}
```

**Analytics guard**
```ts
// lib/analytics.ts
export function trackEvent(name: string, props: Record<string, any> = {}) {
  try {
    // replace with your vendor; safe no-op
    // @ts-ignore
    window?.gtag?.('event', name, props);
  } catch {}
}
```

**JSON-LD helper**
```tsx
// components/StructuredData.tsx
export function StructuredData({ json }: { json: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
```

**Sitemap and robots**
```ts
// app/sitemap.ts
export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
  ];
}
// public/robots.txt
// User-agent: *
// Allow: /
// Sitemap: https://yourdomain.com/sitemap.xml
```

---

# Execution cadence

- Run **two iterations per week** max. Ship, measure, then proceed.
- After Iteration 5, pause to gather SEO and conversion telemetry.
- After Iteration 8, review analytics events and trim noise.

This plan keeps changes modular, testable, and easy to ask Claude for targeted diffs. Feed each prompt, review the patch, run the tests, merge, deploy. Then repeat.
