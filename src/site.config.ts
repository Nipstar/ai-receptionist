/**
 * Single source of truth. Every price, number, URL and ID on the site comes from here.
 * Never hard-code a price, minute count or phone number in a page or component.
 *
 * Values written as [[LIKE_THIS]] are placeholders. A production build fails while any
 * placeholder reaches the built HTML (set ALLOW_PLACEHOLDERS=1 for preview builds).
 * Placeholders written as [[KEY: suggested text]] carry the wording from the design;
 * confirm it, then replace the whole token with the final text.
 */
export const site = {
  name: 'AI Receptionist',
  tagline: 'for small business',
  domain: 'https://aireceptionistforsmallbusiness.net',
  owner: 'Antek Automation', // never "Ltd" or "Limited"
  email: '[[EMAIL]]', // e.g. hello@aireceptionistforsmallbusiness.net
  demoPhone: { display: '[[DEMO_PHONE_DISPLAY]]', tel: '[[DEMO_PHONE_E164]]' }, // GHL number, answered by the AI
  plan: {
    name: 'AI Receptionist + Chat',
    price: 97,
    currency: 'USD',
    interval: 'month',
    minutes: 250,
    overagePerMinute: 0.35, // placeholder rate until confirmed
    setupFee: 0,
    alertAtPercent: 80,
    goLive: '[[GO_LIVE]]', // e.g. "1 to 2 business days"
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
    orderUrl: '[[GHL_ORDER_FORM_URL]]', // GHL order form / funnel checkout
    onboardingFormUrl: '[[GHL_ONBOARDING_FORM_URL]]',
    chatWidgetId: '[[GHL_CHAT_WIDGET_ID]]',
  },
  analytics: { gtmId: '' }, // optional, leave empty to disable
  pricesChecked: 'November 2026',
  copyrightYear: 2026,
} as const;

export type Site = typeof site;

const PLACEHOLDER = /\[\[[^\]]*\]\]/;

/** True while a config value is still a [[PLACEHOLDER]]. */
export function isPlaceholder(value: string): boolean {
  return PLACEHOLDER.test(value);
}
