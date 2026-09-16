# WitQualis Technologies — Next.js Website

React/Next.js rebuild of the WitQualis site. Fully static-generated (SSG) for speed, with a dedicated AI section in the header.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## What's included

- 55 statically generated pages (services, solutions, hire-by-stack, blog, etc.)
- New **AI** dropdown in the header (desktop + mobile) linking to 4 AI pages:
  - /solutions/ai-development/
  - /solutions/generative-ai-solutions/
  - /solutions/ai-consulting/
  - /solutions/machine-learning-development/
  - plus a dedicated /hire/hire-ai-developers/ page
- Contact form API route (`/api/contact`) — set these env vars for it to actually send email:
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`

## Fixes made to the original build

1. Tailwind CSS v4 was misconfigured (v3 syntax with a v4 package) — fixed `postcss.config` and `globals.css`.
2. `nodemailer` dependency was missing — installed.
3. `src/data/stacks.ts` was incomplete (missing `getStackBySlug` and per-stack content) — rebuilt with full content for all 24 stacks.
4. Duplicate route bug: "AI Driven" and "Python" shared the same slug — AI now has its own slug/page (`hire-ai-developers`).
5. Removed a broken import (`ServicesBentoGrid`) that doesn't exist, which broke the homepage.
6. **Downgraded Next.js from an unstable 16.3.1 canary release to the latest stable 15.5.23** — the canary build had a serious bug where every dynamic route (`/hire/*`, `/services/*`, `/solutions/*`, `/blog/*`) returned 404 in production, even though the pages built successfully. This affected the majority of the site.
7. Updated all dynamic `[slug]` pages for Next 15's async `params` API.
8. Fixed a subtle bug on the homepage: a local variable was named `process`, shadowing Node's global `process` object, which silently broke the production build.

## Notes

- Images are intentionally kept minimal (SVG icons, gradients, CSS animation) instead of heavy photography, for fast load times. If you want the original photos/logos/team photos from the old PHP site pulled in, they can be added to `/public/images/`.
