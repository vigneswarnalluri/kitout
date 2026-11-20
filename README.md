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

The quote forms (Contact page and each unit page) post to `/api/quote`, which emails the request
to info@kitoutcontainer.com through [Resend](https://resend.com). Replies go straight to the customer.

To switch it on:

1. Create a Resend account and add the domain `kitoutcontainer.com` (Domains, Add domain).
2. Add the DNS records Resend shows (SPF, DKIM, and optionally DMARC) where the domain is
   managed (currently Wix: Domains, Manage DNS records). Wait for Resend to show "Verified".
3. Create an API key with "Sending access".
4. In Netlify (Site configuration, Environment variables) set `RESEND_API_KEY` and
   `QUOTE_FROM_EMAIL="Kit Out Website <quotes@kitoutcontainer.com>"`, then redeploy.

`QUOTE_TO_EMAIL` is optional and only needed to send requests somewhere other than
info@kitoutcontainer.com. Until the two required values are set, the live form tells visitors to
call or email instead.

## Still placeholder

- Showreel video (stock footage; see `docs/MEDIA-CREDITS.md`).
- The cream modular office image (Office 20) is labelled as an illustration. Rick is sending a real
  build photo to replace it.

## Prices and lease-to-own

Approved by Rick on 2026-11-19. Unit prices and monthly lease figures are in `src/lib/models.ts`
(`price`, `priceValue`, `lease`); the empty-container prices are in `src/lib/site.ts` and
`src/app/models/page.tsx`; the lease FAQ answer is in `src/lib/faqs.ts`. To hide them again, turn
off `showPrices` or `showLeaseToOwn` in `pending` in `src/lib/site.ts`.

No deposit or payment terms anywhere until Rick confirms them.
