# Laser Weld Inc. — Website

A Next.js 14 + styled-components marketing site for **Laser Weld Inc.**, a
quality welding and turn-key manufacturing company in Katy, Texas (est. 1994).

Dark, industrial design language: brushed-steel blacks, near-white type, and a
single hot signal-red accent, built to feel like the shop floor.

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
| Brand, address, phone/email, socials, quote link | `src/data/site.ts` |
| Capabilities, turn-key process, industries, principles | `src/data/services.ts` |
| Customer reviews + rating ⚠️ **currently placeholders — replace before launch** | `src/data/reviews.ts` |
| Privacy Policy + Terms of Service copy | `src/data/legal.ts` |

## Design tokens

Colors, fonts, spacing, and motion live in `src/styles/theme.ts`. The accent
red (`colors.accent`) and the steel-black backgrounds are the two levers for the
whole look. Fonts: **Space Grotesk** (display), **Inter** (body), **Space Mono**
(labels), all via `next/font/google`.

## Media assets (`/public`)

- `portfolio/laser.jpg` — the one authentic photograph (the Laser Weld yard),
  used in the About section. Drop additional shop-floor photography into
  `/public/portfolio/` and reference it from the relevant section component.

## Page structure (`src/app/page.tsx`)

Hero (with live parts-delivered counter) → Capabilities → Process → Industries →
About (Made in Texas) → Reviews → FAQ → Contact → Footer.

Additional routes: `/services` (full capabilities + turn-key process),
`/privacy`, `/terms`.

## Before launch checklist

- [ ] Replace the **placeholder customer reviews** and rating in `src/data/reviews.ts`
- [ ] Confirm the address, phone, and email in `src/data/site.ts`
- [ ] Swap the `bookingUrl` mailto for a real quote form if preferred
- [ ] Verify the social profile URLs in `site.socials`
- [ ] Add real shop-floor / equipment photography to `/public/portfolio/`
- [ ] Add a favicon (`src/app/icon.png`) and an OG image
- [ ] Have counsel review `src/data/legal.ts` (template, not legal advice)
