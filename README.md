# Calgary Sandblasting

Lead-generation website for Calgary Sandblasting, a mobile sandblasting business serving Calgary, Airdrie,
Cochrane, Okotoks, Chestermere, and Strathmore. Next.js 14 (App Router) + Tailwind CSS, statically generated,
deployed to Vercel.

## Before launch — placeholders to replace

1. **Phone number** — `PHONE_DISPLAY` / `PHONE_HREF` in `src/config/site.ts`.
2. **Insurance / WCB copy** — `TRUST_SIGNALS` in `src/config/site.ts`; confirm final wording once coverage is
   confirmed.
3. **Business hours** — `BUSINESS_HOURS` and `OPENING_HOURS_SPEC` in `src/config/site.ts` (keep both in sync).
4. **Google Maps embed** — `GOOGLE_MAPS_EMBED_SRC` in `src/config/site.ts` needs a real Maps Embed API key and
   place ID once the Google Business Profile is set up.
5. **Social / GBP links** — `SOCIAL_LINKS` in `src/config/site.ts`.
6. **Photos** — job photos live in `public/images/gallery/` and are wired up in `src/data/gallery.ts`
   (`GALLERY_PHOTOS`, with an optional `serviceSlug` to also surface a photo on that service's page). Add new
   entries there as more job photos come in — the `<GalleryPhoto>` component renders a styled placeholder
   automatically for any spot without a `src` yet (e.g. the oilfield/industrial service, which has no photos).
7. **Aggregate rating schema** — commented out in `src/lib/schema.ts` (`localBusinessSchema`); uncomment once
   reviews exist on Google.

**Logo & brand colors are done** — `public/images/logo-mark.png` is the icon cropped from the real logo (used
in the header, footer, favicon, and OG share image via `src/components/LogoMark.tsx`), and `ink`/`hazard` in
`tailwind.config.ts` are sampled directly from it (`#0E0E0E` / `#FEC208`). The full source file with wordmark is
kept at `brand-assets/calgary-sandblasting-logo-full.png` (not deployed — not referenced by any page).

All of the above are centralized in `src/config/site.ts` specifically so NAP (name, service area, phone) can be
updated in one place without drifting between pages, matching whatever is entered in Google Business Profile.

## Environment variables

Copy `.env.example` to `.env.local` for local dev, or set these in the Vercel project settings:

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID` — GA4 measurement ID
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` / `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` — Google Ads conversion
  tracking, fired on successful quote-form submission (`src/lib/gtag.ts`)
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — Web3Forms access key for the quote request form

All three are optional — the site builds and runs without them; the related tracking/form features just no-op
until the keys are set.

## Domain setup

Canonical domain is `calgarysandblasting.ca` (set in `DOMAIN` in `src/config/site.ts`). If
`calgarysandblasting.com` is also registered, configure it as a redirect to the `.ca` domain at the registrar or
in Vercel's domain settings (Vercel → Project → Settings → Domains → add the `.com` domain and set it to redirect
to the `.ca` domain) — this is DNS/hosting configuration, not something handled in application code.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploy to Vercel by connecting this GitHub repository. Static pages (home, services, service areas, pricing,
gallery, contact, FAQ) are all pre-rendered at build time via `generateStaticParams` for a fast, low-JS,
Core-Web-Vitals-friendly site.
