# Kit Out Container Co. website

Marketing site for Kit Out Container Co.: container offices, office and storage combos, and
stacked builds. Built with Next.js (App Router) and TypeScript, styled with plain CSS.

Live site: https://kitoutcontainer.netlify.app (Netlify redeploys on every push to `main`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000, quote form submissions print to the terminal
npm run build    # production build
npm run start    # serve the production build
```

## Where things are

```
src/
  app/                    pages and routes
    page.tsx              home
    models/               unit list and one page per unit (/models/<slug>)
    process/ about/ faq/ contact/
    api/quote/route.ts    receives quote requests and emails them
    globals.css           all styles
    layout.tsx            fonts, header, footer
    template.tsx          page fade-in on navigation
    icon.png, apple-icon.png, favicon.ico
  components/
    layout/               Header, Footer, Reveal (scroll animations)
    sections/             PageHero, CtaBand, Showreel, ModelExplorer, PhotoGallery, QuoteForm
    ui/                   Icon, ModelCard
  lib/
    site.ts               business name, contact details, opening hours, menu
    models.ts             the four units: text, specs, inclusions, upgrades
    media.ts              gallery photos (with captions) and showreel clips
public/
  images/builds/          build photos used in the gallery and on unit pages
  images/brand/           logo files and the hero image
  videos/                 showreel clips and their poster frames
docs/
  MEDIA-CREDITS.md        where every photo and video came from
client-originals/         files exactly as the client sent them (not in git, not published)
```

## Common edits

| To change | Edit |
| --- | --- |
| Phone, email, address, hours | `src/lib/site.ts` |
| A unit's text, specs or inclusions | `src/lib/models.ts` |
| Gallery photos or captions | `src/lib/media.ts`, with the image in `public/images/builds/` |
| Showreel clips or their length | `src/lib/media.ts` and `CLIP_SECONDS` in `src/components/sections/Showreel.tsx` |
| Home page wording | `src/app/page.tsx` |
| Colors, fonts, spacing | the `:root` block at the top of `src/app/globals.css` |

New photos from the client: keep the original in `client-originals/`, and save a web copy
(resized, with camera metadata removed) into `public/images/builds/`.

## Quote form email

The form posts to `/api/quote`, which sends through [Resend](https://resend.com). Copy
`.env.example` to `.env.local` and fill in the three values; set the same three as environment
variables in Netlify. Until they are set, the live form answers with a "not connected" message.

## Still placeholder

- Contact details in `src/lib/site.ts`.
- Showreel video (stock footage; see `docs/MEDIA-CREDITS.md`).
- Unit names, inclusions and upgrades in `src/lib/models.ts` were drafted from build photos and
  need the client's confirmation.
