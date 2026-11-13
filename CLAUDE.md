# CLAUDE.md

Marketing site for aireceptionistforsmallbusiness.net: a US-market AI receptionist (phone) + website chat plan, $97/month, 250 call minutes, sold by Antek Automation. Static Next.js (App Router, `output: 'export'`, `trailingSlash: true`), TypeScript, Tailwind CSS v4. Hosted on Cloudflare Pages (`npm run build`, output `out/`). No server runtime: nothing may need one.

## Where things live

- `src/site.config.ts`: the single source for every price, minute count, phone number, URL and ID. **Never hard-code a price, minute figure or phone number in a page, component or content file.** Content strings use tokens (`{price}`, `{minutes}`, `{overage}`, `{goLive}`, `{alertAt}`, `{ionos.monthly}`, `{market.humanLow}`...) filled by `fill()` in `src/lib/format.ts`. Add a token there if you need a new figure.
- `src/content/`: all copy. `home.ts`, `pricing.ts`, `faqs.ts` (verbatim from the design), `industries.ts` (one object per `/for/[industry]/` page), `compare.ts` (`/compare/[slug]/`), `competitors.ts` (shared by every comparison table, dated `site.pricesChecked`).
- `src/components/`: shared UI. Every "Start" button is `<StartLink>` (GHL order URL + UTMs + `click_start`). Every "Call" button is `<CallLink>` (`tel:` + `click_call`), with `<DemoNumber>` showing the number as text.
- `src/lib/schema.ts`: JSON-LD built from the same data the page renders. FAQ JSON-LD and the visible `<Faq>` both render from one array.
- `src/app/globals.css`: brand tokens in `@theme`. `md:` (820px) is the desktop layout.
- `reference/design/*.dc.html`: the design source (Main = home, Pricing, Salons = industry template, BrandBoard). `reference/logo/`: the marks.
- `scripts/check.ts`: the checks. `scripts/generate-llms.ts`: writes `public/llms.txt` and `llms-full.txt` from content (prebuild; both files are gitignored).

## Copy rules (enforced by `scripts/check.ts`)

- US spelling. No em dashes. No exclamation marks.
- Banned: leverage, revolutionize, seamless, solution, cutting-edge, game-changer, AI-powered, omnichannel, unlock, supercharge.
- No invented statistics, testimonials, logos or results. No guarantees of revenue or bookings.
- Never "Antek Automation Ltd" or "Limited". Never mention VAT or sales tax.
- Sell the outcome (call answered, message in your inbox), not "AI".
- Be honest about limits: this plan does not book into calendars, text callers back or send review requests (that is the unnamed "done-for-you plan"). It never gives medical, legal or repair advice, never quotes prices it was not given, and says it is not a person if asked.
- Competitors: state published facts with the date. Never disparage. Every compare page says when the other option is the better choice.
- Example calls use invented business names and 555 numbers only.
- Placeholders are `[[UPPER_CASE]]` or `[[KEY: suggested wording]]` and stay visible until filled from config.
- One H1 per page. H2s phrased as the question people search where natural; the first paragraph under an H2 answers it in one or two sentences.

## Checks

```bash
ALLOW_PLACEHOLDERS=1 npm run build
```

```bash
ALLOW_PLACEHOLDERS=1 npm run check
```

`check.ts` fails on: placeholders in built HTML (unless `ALLOW_PLACEHOLDERS=1`), em dash / `!` / banned words / UK spellings, any `$` or minute figure not in config, derived from config or in `competitors.ts` (illustrative prices inside an example call go in that industry's `examplePrices`), JSON-LD that does not parse or FAQ JSON-LD that differs from the visible FAQ, broken internal links, missing title/description/canonical, and not exactly one H1. It warns on titles over 60 and descriptions over 155 characters. `npm run check` also runs ESLint and `tsc --noEmit`. Run both before committing.

## Adding pages

- New industry: add an object to `src/content/industries.ts` (unique copy for that trade's real calls, 6 call cards, 3 FAQs, 2 `related` slugs). Header, footer, sitemap, OG image and llms.txt pick it up.
- New compare page: add to `src/content/compare.ts`; add any new competitor to `competitors.ts`.
- New top-level route: add it to `indexableRoutes()` in `src/lib/routes.ts` if it should be in the sitemap and llms.txt.
