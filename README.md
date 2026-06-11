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
cp .env.example .env.local
npm run dev
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL, e.g. `https://omarhenidi.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics ID |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification code |

## Production

```bash
npm run build
```

This creates an **`out/`** folder with **`out/index.html`**. Upload the entire `out/` folder to your web server (cPanel, nginx, Apache, etc.).

The contact form opens the visitor's email app via `mailto:`.

Before deploy:

1. Confirm `NEXT_PUBLIC_SITE_URL` matches your live domain
2. Submit `/sitemap.xml` in Google Search Console
3. Search for `Omar Henidi` and `عمر هنيدي` after indexing — structured data links your site and social profiles

## Features

- SEO: metadata, Open Graph, Twitter cards, JSON-LD
- Dynamic sitemap, robots.txt, and web manifest
- Contact form via email client
- Static export for fast, lightweight hosting
