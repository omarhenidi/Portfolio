# Omar Henidi Portfolio

Production portfolio for **Omar Henidi — عمر هنيدي**, Technical Director & Full Stack Engineer.

## Stack

- Next.js 15 (App Router)
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
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Yes | Google Analytics ID |
| `CONTACT_TO` | Yes | Contact form inbox |
| `SMTP_HOST` | Yes | SMTP server |
| `SMTP_PORT` | Yes | SMTP port |
| `SMTP_USER` | Yes | SMTP username |
| `SMTP_PASS` | Yes | Google App Password |
| `SMTP_FROM` | Yes | Sender address |

## Production

### Static hosting (cPanel, nginx, Apache)

```bash
npm run build
```

This creates an **`out/`** folder with **`out/index.html`**. Upload the entire `out/` folder to your web server.

On static hosting, the contact form opens the visitor's email app.

### Node / Vercel (SMTP contact form)

```bash
npm run build:server
npm start
```

Before deploy:

1. Set all env vars on your host (e.g. Vercel) when using `build:server`
2. Confirm `NEXT_PUBLIC_SITE_URL` matches your live domain
3. Test the contact form after deploy
4. Submit `/sitemap.xml` in Google Search Console
5. Search for `Omar Henidi` and `عمر هنيدي` after indexing — structured data links your site and social profiles

## Features

- SEO: metadata, Open Graph, Twitter cards, JSON-LD
- Dynamic sitemap, robots.txt, and web manifest
- Contact form with validation, honeypot, and rate limiting
- Security headers in production
