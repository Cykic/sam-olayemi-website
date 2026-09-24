# sam-olayemi.com

The Sam-Olayemi website: Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.
It follows the same structure as the Banby website.

## Run it

```bash
npm install
npm run dev            # http://localhost:3000 (or: npm run dev -- -p 3120)
npm run lint
npm run build && npm start
```

Copy `.env.example` to `.env.local` and fill it in. Without `ZEPTOMAIL_TOKEN` and
`INQUIRY_FROM_EMAIL`, development logs project inquiries to the terminal, and production
answers 503 so the form points visitors to the email address instead.

## Where things live

| Path | What |
| --- | --- |
| `src/app` | Routes, metadata routes (sitemap, robots, manifest, OG image, icons) and `api/inquiries` |
| `src/components` | One folder per component; primitives in `components/ui` |
| `src/constants` | All copy and content: services, work, insights, FAQs, contact details |
| `src/api` | Async content getters. Swap these for CMS queries to move content out of the repo |
| `src/types`, `src/utils`, `src/hooks` | Content models, SEO/structured data helpers, scroll hooks |
| `docs/design-system.md` | Tokens, type, motion and content rules |

## Content still to supply

Search for `TODO(content)` and `TODO(legal)`:

- Confirm `fortune@sam-olayemi.com`, and add phone, WhatsApp and social profiles (`constants/site.ts`). Empty values are hidden.
- Testimonials, client logos and team profiles (`constants/proof.ts`). Their sections stay hidden until real entries exist.
- Client case studies: add `kind: "case-study"` items to `constants/work.ts`.
- Legal review of the privacy policy and terms.
