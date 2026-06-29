# Proudlock Website

Commercial and residential construction — Southeast Queensland.

## Running locally

```bash
cd proudlock-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Styleguide (dev only): [http://localhost:3000/styleguide](http://localhost:3000/styleguide)

## Editing content

All content lives in typed data files — no CMS needed.

### Site details (address, phone, stats, licences)
Edit [`/content/site.ts`](./content/site.ts)

### Projects
Edit [`/content/projects.ts`](./content/projects.ts)

To **add a new project**:
1. Add a new object to the `projects` array in `content/projects.ts`
2. Copy images to `/public/images/projects/<your-slug>/` named `1.jpg`, `2.jpg`, etc.
3. Set `featured: true` to show it on the homepage

Available sectors: `"commercial" | "residential" | "fitout" | "interior-design"`

## Swapping images

Images live in `/public/images/`:

| Folder | Used for |
|--------|----------|
| `hero/` | Homepage hero background (warehouse-1.jpg is the default) |
| `logos/` | Logo files |
| `projects/<slug>/` | Project gallery images (1.jpg, 2.jpg, …) |

Replace any file with the same filename to update it. Supported formats: JPEG, PNG, WebP, AVIF.

## Contact form email

The form endpoint is at `/app/api/contact/route.ts`. It validates submissions but currently only logs them.

To wire up email delivery with [Resend](https://resend.com):

1. `npm install resend`
2. Add `RESEND_API_KEY=re_...` to `.env.local`
3. Uncomment the Resend block in `app/api/contact/route.ts`

## Deploying to Vercel

### First deploy

1. Push this repo to GitHub (instructions below)
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select the repo — Vercel auto-detects Next.js, no config needed
4. Click Deploy

### Subsequent deploys

Every push to `main` triggers an automatic redeploy.

### Environment variables

Add `RESEND_API_KEY` in Vercel → Project Settings → Environment Variables once you wire up email.

## GitHub setup (first time)

Run these commands inside the `proudlock-web` folder:

```bash
git init
git add .
git commit -m "Initial Proudlock website"
git remote add origin https://github.com/jt63-web/proudlock-website.git
git branch -M main
git push -u origin main
```

Then import from GitHub in Vercel.

## Tech stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Fonts**: DM Sans (headings) + Inter (body) via Google Fonts
- **Images**: next/image with AVIF/WebP optimisation
- **Hosting**: Vercel
