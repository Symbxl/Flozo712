# Viridian Films — Landing Page

A Next.js 14 + styled-components landing page for Viridian Films (VRDN).
White-forward, professional, with a viridian/forest-green accent.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where to edit things

Everything that changes often lives in `src/data/` — you rarely need to touch components.

| What | File |
|------|------|
| Brand, contact info, socials, booking link, hero showreel paths | `src/data/site.ts` |
| The 8 services | `src/data/services.ts` |
| Case studies (Laserweld is fully built; add metrics/videos for the rest) | `src/data/caseStudies.ts` |
| Google reviews + rating ⚠️ **currently placeholders — replace before launch** | `src/data/reviews.ts` |
| Portfolio gallery photos | `src/data/portfolio.ts` |

## Media assets (`/public`)

- `showreel.mp4` — hero background video (1080p, ~12 MB, audio stripped, optimized from `weby.mp4`)
- `showreel-poster.webp` — hero poster frame
- `portfolio/portfolio-*.webp` — gallery photos (optimized webp)

### Swapping the hero video / adding photos
Drop a new MP4 into `/public` and point `site.showreel.videoSrc` at it.
For photos, export as `.webp` (faster than JPG/PNG) and add an entry in
`src/data/portfolio.ts` with its `width`/`height`.

> The optimizer deps (`sharp`, `ffmpeg-static`) are in devDependencies if you
> need to re-compress more source footage/photos later.

## Page structure (`src/app/page.tsx`)

Hero → Mission → Services → Portfolio → Results → Case Study (+ Full-Service
Partnership 01–04) → Google Reviews → Process → Contact → Footer.

## Before launch checklist

- [ ] Replace the **placeholder Google reviews** and rating in `src/data/reviews.ts`
- [ ] Confirm `site.location` and the `bookingUrl` (currently a mailto — swap for Calendly/Cal.com if preferred)
- [ ] Add real metrics + videos for **The Table** and **Personal Brand** case studies
- [ ] Add a brand YouTube URL in `site.socials.youtube` if there is one
- [ ] Add a favicon (`src/app/icon.png`) and an OG image
