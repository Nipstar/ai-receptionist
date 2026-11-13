/**
 * Single source of truth. Every price, number, URL and ID on the site comes from here.
 * Never hard-code a price, minute count or phone number in a page or component.
 *
 * Values written as [[LIKE_THIS]] are placeholders. A production build fails while any
 * placeholder reaches the built HTML (set ALLOW_PLACEHOLDERS=1 for preview builds).
 * Placeholders written as [[KEY: suggested text]] carry the wording from the design;
 * confirm it, then replace the whole token with the final text.
 *
 * Deployment values (contact details, GHL links and IDs, GTM, go-live time, site URL) come from
 * NEXT_PUBLIC_* environment variables, read at build time and baked into the static HTML.
 * Unset or empty, they fall back to their [[PLACEHOLDER]]. See .env.example.
 * Prices, minutes and copy stay in this file on purpose: they are content, checked by scripts/check.ts.
 */

/** An env value, or the fallback when it is unset or blank. */
function env(value: string | undefined, fallback: string): string {
  const v = value?.trim();
  return v ? v : fallback;
}

// Each variable is read by its literal name so Next.js can inline it into client code.
export const site = {
  name: 'AI Receptionist',
  tagline: 'for small business',
  domain: env(process.env.NEXT_PUBLIC_SITE_URL, 'https://aireceptionistforsmallbusiness.net').replace(/\/+$/, ''),
  owner: 'Antek Automation', // never "Ltd" or "Limited"
  email: env(process.env.NEXT_PUBLIC_EMAIL, '[[EMAIL]]'), // e.g. hello@aireceptionistforsmallbusiness.net
  demoPhone: {
    // GHL number, answered by the AI
    display: env(process.env.NEXT_PUBLIC_DEMO_PHONE_DISPLAY, '[[DEMO_PHONE_DISPLAY]]'),
    tel: env(process.env.NEXT_PUBLIC_DEMO_PHONE_E164, '[[DEMO_PHONE_E164]]'),
  },
  plan: {
    name: 'AI Receptionist + Chat',
    price: 97,
    currency: 'USD',
    interval: 'month',
    minutes: 250,
    overagePerMinute: 0.35, // placeholder rate until confirmed
    setupFee: 0,
    alertAtPercent: 80,
    goLive: env(process.env.NEXT_PUBLIC_GO_LIVE, '[[GO_LIVE]]'), // e.g. "1 to 2 business days"
    textAlertApproval: '1 to 3 weeks', // US A2P 10DLC carrier registration
    typicalCallMinutes: { low: 2, high: 3 }, // "A typical call runs 2 to 3 minutes"
    estimate: { callMinutesLow: 2.5, callMinutesHigh: 3, callsLow: 80, callsHigh: 100 }, // "roughly 80 to 100 calls"
    exampleMonths: [150, 250, 300, 350], // minutes used, for the "What a month looks like" grid
  },
  policy: {
    minuteRounding: '[[MINUTE_ROUNDING: rounded up to the nearest minute per call]]',
    rollover: '[[ROLLOVER: No. Your 250 minutes reset on your billing date each month.]]',
    textingFees: '[[A2P_FEES: US carrier texting registration fees are included / passed through at cost.]]',
  },
  ghl: {
    orderUrl: env(process.env.NEXT_PUBLIC_GHL_ORDER_FORM_URL, '[[GHL_ORDER_FORM_URL]]'), // order form / funnel checkout
    onboardingFormUrl: env(process.env.NEXT_PUBLIC_GHL_ONBOARDING_FORM_URL, '[[GHL_ONBOARDING_FORM_URL]]'),
    chatWidgetId: env(process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID, '[[GHL_CHAT_WIDGET_ID]]'),
  },
  analytics: { gtmId: env(process.env.NEXT_PUBLIC_GTM_ID, '') }, // optional, empty disables GTM
  pricesChecked: 'November 2026',
  copyrightYear: 2026,
} as const;

export type Site = typeof site;

const PLACEHOLDER = /\[\[[A-Z][A-Z0-9_]*(?::[^\]]*)?\]\]/;

/** True while a config value is still a [[PLACEHOLDER]]. */
export function isPlaceholder(value: string): boolean {
  return PLACEHOLDER.test(value);
}
