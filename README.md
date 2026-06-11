# Omar Henidi Portfolio

Production portfolio for **Omar Henidi — عمر هنيدي**, Technical Director & Full Stack Engineer.

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Lucide React

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Set values in `.env` before building for production.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL, e.g. `https://omarhenidi.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics ID (leave empty to disable) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification code |

## Production deploy

```bash
npm run build
```

Upload the entire **`out/`** folder to your web server (cPanel, nginx, Apache, etc.).

- Entry point: `out/index.html`
- Sitemap: `out/sitemap.xml`
- Apache: `.htaccess` is copied into `out/` automatically

The contact form opens the visitor's email app via `mailto:`.

### Pre-deploy checklist

1. Set `NEXT_PUBLIC_SITE_URL` to your live domain
2. Add GA and Search Console IDs in `.env` if needed
3. Run `npm run build` and upload `out/`
4. Submit `https://your-domain.com/sitemap.xml` in Google Search Console
5. Validate structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run dev:clean` | Clear cache and start dev |
| `npm run build` | Static export to `out/` |
| `npm run clean` | Remove `.next/` and `out/` |
| `npm run lint` | ESLint |

## Features

- SEO: metadata, Open Graph, Twitter cards, Person JSON-LD in `<head>`
- Dynamic sitemap, robots.txt, and web manifest
- Contact form via email client
- Static export for fast, lightweight hosting
