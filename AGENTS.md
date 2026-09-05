# cloudaithai.com

Static Next.js 16 site for cloudaithai.com, the Cloud line's only domain. It sells Mimir Suites Cloud: the Suite on each staff machine, models from a cloud host, no AI machine, no worker. `CLAUDE.md` is a symlink to this file.

## Quick reference

- Package manager: `pnpm@10.17.1` (`pnpm-lock.yaml` is the committed lockfile)
- Develop: `pnpm dev`
- Verification: `pnpm lint && pnpm build` (static export writes `out/`)
- No typecheck script and no test suite. `next build` is the type gate.

## Business context

Before writing copy, CTAs, footer disclosures, or cross-links, read:

- Brand rules every site obeys: `../../business/brand-architecture.md`
- This domain's brief (positioning, CTA, data-handling statement): `../../business/domains/cloudaithai.com.md`
- Product-side definition of the Cloud edition: `../../suites/docs/decisions/product/log-2026-09-04.md`
- Lead capture fields and routing: `../../business/leads.md`

## Project rules

- Say plainly that document text goes to cloud models, with PII redacted by default before it leaves. Never borrow the Local AI line's privacy wording. Link to `localaithai.com` for the customer who needs data on-site; that is the one cross-link with genuine user benefit.
- Each seat is one install with its own data, a company buys one per machine, and a backup folder is part of setup. Copy describes the Suite and its apps, never an "AI automation install".
- Model-usage billing is undecided. Do not publish credit, token or tier pricing until the product decides it.
- `lib/site.ts` is the only place a brand value is written: name, suite name, URL, tagline, CTA, legal disclosure. `lib/site-data.ts` owns every route, label, title and description. Pages read from both; they never restate a value inline.
- Contact channels (email, LINE, phone) and the lead form come from omni's `cta.js` via `data-cta` attributes; never hardcode them in components.
- Fully static export with `trailingSlash: true`; canonical paths end in `/`. No API routes, middleware or request-time rendering.
- Pages compose `components/site-page.tsx` (Navbar, motion wrapper, Contact, Footer) rather than rebuilding the frame.
- Primary CTA is "Request a Demo" into the contact section. "Visit Mimir Suites" is never the primary CTA.
- `site.legalDisclosure` stays unset until the operating entity is named. Render nothing, never a placeholder.
- Copy is Thai-first with English product nouns inline. Bai Jamjuree carries both scripts; keep Thai line heights.
- Use the `@/*` alias. TypeScript is strict; do not weaken types or add broad suppressions.
- Preserve WCAG 2.2 AA behavior: semantic structure, keyboard access, visible focus, contrast, touch targets and reduced motion.

## Source of truth

- The Cloud-edition reposition plan is complete and archived: `docs/archive/CENTRAL_PLAN_mimir-suites-cloud-reposition.html` (2026-09-04). New multi-session work starts a fresh plan in `docs/central-plan/`.
- Business strategy, brand architecture and domain briefs: `../../business/`
