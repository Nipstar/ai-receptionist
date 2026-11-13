# aireceptionistforsmallbusiness.net

Marketing site for **AI Receptionist for small business**, a product of Antek Automation for US small businesses. One plan: AI receptionist (phone) + website chat, $97/month, 250 call minutes.

Next.js (App Router, `output: 'export'`), TypeScript, Tailwind CSS v4. Fully static: the build writes plain HTML to `out/`.

## Run

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## Build and check

```bash
ALLOW_PLACEHOLDERS=1 npm run build
```

```bash
ALLOW_PLACEHOLDERS=1 npm run check
```

- `prebuild` regenerates `public/llms.txt` and `public/llms-full.txt` and runs the source copy checks.
- `postbuild` runs `scripts/check.ts` on `out/`. **Without `ALLOW_PLACEHOLDERS=1` the build fails while any `[[PLACEHOLDER]]` is left.** That is deliberate: production cannot ship with placeholders.
- `npm run check` = built checks + ESLint + `tsc --noEmit`. (Next.js 16 removed `next lint`, so linting runs ESLint directly with `eslint-config-next`.)
- `npm run preview` serves `out/` locally.

## Deploy to Cloudflare Pages

1. Push the repo to GitHub.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, pick the repo.
3. Framework preset: **None**. Build command: `npm run build`. Output directory: `out`.
4. Environment variables:
   - `NODE_VERSION` = `22` (both environments)
   - `ALLOW_PLACEHOLDERS` = `1` on **Preview** only, until every placeholder is filled
5. Add the custom domain `aireceptionistforsmallbusiness.net` (and `www` redirecting to it).

`public/_headers` sets HSTS, nosniff, Referrer-Policy, Permissions-Policy, a CSP that allows the LeadConnector chat widget and GTM, long cache on `/_next/static/*`, and `image/png` on the extensionless OG images. After switching the chat widget on, open a live page's browser console and add any host the CSP reports as blocked.

**Vercel** also works: framework Next.js, same build command, output `out`. Vercel ignores `_headers`; copy the headers into a `vercel.json` `headers` block if you deploy there.

## Where things live

| What | Where |
|---|---|
| Every price, minute, phone number, URL and ID | `src/site.config.ts` |
| Home, pricing copy | `src/content/home.ts`, `src/content/pricing.ts`, `src/content/faqs.ts` |
| Industry pages | `src/content/industries.ts` (one object per industry) |
| Compare pages | `src/content/compare.ts` |
| Competitor prices (all tables) | `src/content/competitors.ts` |
| Brand tokens | `src/app/globals.css` (`@theme`) |
| JSON-LD builders | `src/lib/schema.ts` |
| Checks | `scripts/check.ts` |
| Design source | `reference/design/*.dc.html`, `reference/logo/*.svg` |

Content strings use `{price}`, `{minutes}`, `{overage}`, `{goLive}`, `{ionos.monthly}` and similar tokens, filled from config by `fill()` in `src/lib/format.ts`. Change the price once in `site.config.ts` and every page, table, JSON-LD block, OG image and `llms.txt` follows.

Icons: `npm run icons` rebuilds `src/app/icon.svg`, `apple-icon.png` (180) and `favicon.ico` from `reference/logo/mark-cobalt.svg`.

## Remaining placeholders

All in `src/site.config.ts` unless noted. `[[KEY: text]]` placeholders carry the wording from the design: confirm it, then replace the whole token.

| Placeholder | Where it shows | Value needed |
|---|---|---|
| `[[EMAIL]]` | Footer, Organization JSON-LD, thank-you, legal pages | e.g. hello@aireceptionistforsmallbusiness.net |
| `[[DEMO_PHONE_DISPLAY]]` | Every "Call" button and the number shown beside it | GHL demo number, formatted as you want it shown |
| `[[DEMO_PHONE_E164]]` | `tel:` links | Same number in E.164 format (+1 and 10 digits) |
| `[[GHL_ORDER_FORM_URL]]` | Every "Start for $97" button | GHL order form / funnel checkout URL |
| `[[GHL_ONBOARDING_FORM_URL]]` | Thank-you page button | GHL onboarding form URL |
| `[[GHL_CHAT_WIDGET_ID]]` | Chat widget (renders nothing until set) | GHL Sites > Chat Widget > Get Code |
| `[[GO_LIVE]]` | Home hero facts, thank-you | e.g. "1 to 2 business days" |
| `[[MINUTE_ROUNDING: ...]]` | Pricing FAQ "What counts as a minute?" | Billing increment |
| `[[ROLLOVER: ...]]` | Pricing FAQ "Do unused minutes roll over?" | Rollover policy |
| `[[A2P_FEES: ...]]` | Pricing FAQ "Are there any other fees?" | Included or passed through at cost |
| `[[PRIVACY_*]]` | `src/app/privacy/page.tsx` | Reviewed privacy policy (then remove `noindex`) |
| `[[TERMS_*]]` | `src/app/terms/page.tsx` | Reviewed terms (then remove `noindex`) |

Also confirm: `plan.overagePerMinute` (0.35 is a placeholder rate), the competitor figures in `competitors.ts` (checked November 2026), and the chat widget snippet in `src/components/GhlChat.tsx` against the code GHL gives you. Set `analytics.gtmId` to switch GTM on.

## GHL checklist (set up in GoHighLevel, not in this repo)

- [ ] **Payments > Products**: product "AI Receptionist + Chat", **$97 recurring monthly**, USD
- [ ] **Order form** (funnel step) with that product. Redirect after payment to `https://aireceptionistforsmallbusiness.net/thank-you/`. Paste its URL into `ghl.orderUrl`
- [ ] Order form passes through URL params (`utm_*`, `gclid`, `fbclid`, `source_page`) to hidden fields or contact custom fields
- [ ] **Workflow "Order submitted"**:
  - [ ] Create/update contact
  - [ ] Add tag `arsb-customer`
  - [ ] Create opportunity in pipeline **"AI Receptionist $97"**, stage **"Paid, awaiting onboarding"**
  - [ ] Send the onboarding form email (same form as `ghl.onboardingFormUrl`)
  - [ ] Internal notification to the team
- [ ] **Onboarding form** built; URL into `ghl.onboardingFormUrl`
- [ ] **Chat widget**: Sites > Chat Widget, style to brand (Cobalt `#2446F5`), Get Code, put the widget ID in `ghl.chatWidgetId`
- [ ] **Demo number**: GHL number answered by the demo AI receptionist; display and E.164 forms into `demoPhone`
- [ ] **A2P 10DLC** brand and campaign registration started (text alerts depend on it)
- [ ] Usage email at 80% of 250 minutes

## Analytics

`window.dataLayer` events: `click_call` (CallLink), `click_start` (StartLink, with page path), `purchase_complete` (thank-you, once per session). UTM params and click IDs are captured to `sessionStorage` on first landing and appended to the order form URL with `source_page`. `chat_open` is not wired yet: the LeadConnector widget does not document a public open event; add one in `GhlChat.tsx` if GHL exposes it. GTM loads only when `site.analytics.gtmId` is set.
