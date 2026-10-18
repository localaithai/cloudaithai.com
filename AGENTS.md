# cloudaithai.com

Static Astro 7 site for cloudaithai.com, the Cloud line's only domain. It sells Mimir Suites Cloud: the Suite on each staff machine, models from a cloud host, no AI machine, no worker. `CLAUDE.md` is a symlink to this file.

## Quick reference

- Package manager: `pnpm@10.17.1` (`pnpm-lock.yaml` is the committed lockfile)
- Develop: `pnpm dev` at `http://localhost:17007`; `pnpm preview` serves the built `dist/` on the same port
- Verification: `pnpm lint && pnpm typecheck && pnpm build` (static output writes `dist/`)
- Before changing routes, navigation, headings, metadata, copy, internal links, structured data, robots, sitemap, or `llms.txt`, read [SEO, AEO, and sitelink maintenance](docs/reference/seo-aeo-maintenance.md).
- No automated test suite. `astro check` is the type gate.

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
- `src/lib/site.ts` is the only place a brand value is written: name, suite name, URL, tagline, CTA, legal disclosure. `src/lib/site-data.ts` owns every route, label, title and description. Pages read from both; they never restate a value inline.
- Contact channels (email, LINE, phone) and the lead form come from omni's `cta.js` via `data-cta` attributes; never hardcode them in components.
- Fully static Astro build (`output: "static"`, `trailingSlash: "always"`, directory format); canonical paths end in `/`. No adapter, API routes, middleware or request-time rendering. Non-page routes are prerendered endpoints under `src/pages/`: `robots.txt.ts` (disallows everything unless `VERCEL_ENV` is `production`), `sitemap.xml.ts`, `llms.txt.ts`, `manifest.webmanifest.ts`, `blog/feed.xml.ts` and the extensionless `opengraph-image.ts` (satori and resvg at build time).
- Deployed to Vercel; the folder, the GitHub repo under the `localaithai` org, and the Vercel project all use the full domain name. The Vercel project lives in the **LocalAIThai** team (slug `local-ait-hai`), is named `cloudaithai.com`, and is git-connected so every push to `main` deploys to production (`vercel --prod` from a clone still works with `--scope local-ait-hai`). `vercel.json` names the `astro` framework and carries `trailingSlash`; there is no other host config.
- Page metadata comes from `pageHead()` in `src/lib/seo.ts`; `src/layouts/Base.astro` renders the whole `<head>`. Route pages show the bare route title in `<title>` and the suffixed title in Open Graph and Twitter, and the favicon and not-found og:image keep the cache-busting query strings, all as the Next.js build published them.
- Pages compose `src/layouts/SitePage.astro` (Navbar, visible motion wrapper, Contact, Footer) rather than rebuilding the frame. Pages, layouts and static sections are `.astro` and ship no framework JS; the only script outside islands is the `[data-reveal]` observer in `src/layouts/Base.astro`.
- React stays only for islands: framer-motion wrappers (`Navbar` `client:load`; `motion-page-content` `client:load`; `ScrollShowcase`, `data-handling-section`, `Pricing`, `Footer` and `Reveal` `client:visible`), the sonner toaster (`client:idle`), the blog video player (`client:visible`), and server-only rendering of the blog MDX through `RenderNode`. Each island wraps itself in `MotionConfig reducedMotion="user"`; React context does not cross islands, and Astro drops a `class` prop on React components, so pass `className`.
- Never put a `data-cta` element inside React-rendered markup: omni's `cta.js` fills those hosts before islands hydrate, and hydration would discard its work. `Contact.astro` keeps them static and places them in the visible `Reveal` wrapper, whose children arrive as slot HTML React never reconciles.
- Content is visible in server-rendered HTML before islands hydrate. Motion wrappers use `initial={false}`; do not reintroduce a page-wide opacity entrance. The Latin hero kicker uses a CSS-only React Bits SplitText word lift, with all words visible and no movement under reduced motion.
- Primary CTA is "Request a Demo" into the contact section. "Visit Mimir Suites" is never the primary CTA.
- `site.legalDisclosure` stays unset until the operating entity is named. Render nothing, never a placeholder.
- Copy is Thai-first with English product nouns inline. Bai Jamjuree carries both scripts, loaded through the Astro Fonts API as `--font-bai` (`fonts` in `astro.config.ts`, `<Font>` in `Base.astro`); keep Thai line heights.
- Use the `@/*` alias. TypeScript is strict; do not weaken types or add broad suppressions.
- Preserve WCAG 2.2 AA behavior: semantic structure, keyboard access, visible focus, contrast, touch targets and reduced motion.

## Shared image assets

- Browser-loaded content images use immutable URLs from `https://assets.mimir.business/assets/` through `src/lib/assets.ts` in both development and production. Do not add local URL fallbacks.
- Keep favicons, manifest icons, social cards, and structured-data identity images on this site origin because crawlers may omit the `Referer` header required by the asset-host WAF rule.
- Add or replace shared images through the `assets.mimir.business` catalogue workflow, then update the generated hash URL in the asset module.
- The asset host catalogue, deployment rules, and decisions live in the `assets.mimir.business` repository.

## Source of truth

- The Cloud-edition reposition plan is complete and archived: `docs/archive/CENTRAL_PLAN_mimir-suites-cloud-reposition.html` (2026-09-04). New multi-session work starts a fresh plan in `docs/central-plan/`.
- Business strategy, brand architecture and domain briefs: `../../business/`
- Durable rationale: `docs/decisions/`

## Documentation lifecycle

- Production code, executable configuration, and meaningful tests define implemented behavior. Agreed product and business requirements define the behavior changes must satisfy; investigate any mismatch.
- Multi-session work belongs in `docs/central-plan/CENTRAL_PLAN_<feature>.html`. Preserve the settled design, ordered file and symbol changes, edge cases, tests, commands, progress, and exact resume point, then archive the plan after delivery.
- `docs/decisions/<domain>/log-YYYY-MM-DD.md` preserves selective durable rationale. Routine changes need no decision record.
- Former domain summary pages under `docs/decisions/` are historical snapshots and navigation aids. Assess their content when that domain is next changed; keep dated logs and links intact.
- Update maintained documentation only when a change affects one of its claims. Do not create empty documentation folders.
