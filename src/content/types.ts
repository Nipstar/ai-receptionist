/** Copy strings may contain {tokens} filled from site.config.ts by fill() in src/lib/format.ts. */

export type Faq = { q: string; a: string };

export type ChatLine = { who: 'receptionist' | 'caller'; text: string };

export type ExampleCall = {
  business: string;
  time: string; // shown top right, e.g. "Sat 10:32 AM"
  lines: [ChatLine, ChatLine, ChatLine];
  summary: {
    sentAt: string;
    title: string;
    caller: string;
    phone: string; // 555 numbers only
    notes: string[];
  };
};

export type Industry = {
  slug: string;
  /** Nav and footer label, e.g. "Salons and spas" */
  name: string;
  /** Used in "AI receptionist for {titleName}" titles */
  titleName: string;
  /** schema.org Service audience */
  audience: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  example: ExampleCall;
  callsHeading: string;
  callsIntro: string;
  calls: { title: string; text: string }[];
  planHeading: string;
  planText: string;
  faqs: Faq[];
  ctaHeading: string;
  /** Two other industry slugs to link to */
  related: [string, string];
  /** Optional line pointing up to the done-for-you plan */
  upsell?: string;
  /** Illustrative prices quoted inside the example call (allowed by the price check) */
  examplePrices?: number[];
};
