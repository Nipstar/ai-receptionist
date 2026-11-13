/** Pricing page copy, verbatim from reference/design/Pricing.dc.html. Tokens filled from site.config.ts. */
export const pricing = {
  metaTitle: 'AI Receptionist Pricing: {price}/mo for {minutes} Minutes | No Setup Fee',
  metaDescription:
    'What an AI receptionist costs, what counts as a minute, and how {price} compares with IONOS, RingCentral, Dialzara and human answering services.',
  eyebrow: 'Pricing',
  h1: 'AI receptionist pricing: {price} a month, no setup fee.',
  intro:
    'One plan. {minutes} call minutes, website chat, an email summary after every call and text alerts to your phone. Extra minutes are {overage} each. Month to month.',
  cardNote: 'No setup fee. No contract. Cancel any time.',
  rows: [
    { label: 'Call minutes', value: '{minutes} a month' },
    { label: 'Website chat', value: 'Included, no minutes used' },
    { label: 'Call summary by email', value: 'Every call' },
    { label: 'Text alerts', value: 'After carrier approval' },
    { label: 'Extra minutes', value: '{overage} each' },
    { label: 'Setup', value: 'Done for you, {setupFee}' },
  ],
  monthHeading: 'What a month looks like',
  monthNote:
    'At {overage} per extra minute. A typical call runs {typicalLow} to {typicalHigh} minutes. We email you at {alertAt} of your allowance.',
  upsellHeading: 'Need more than messages?',
  upsellText:
    "Our done-for-you plan books straight into your calendar, texts back missed callers and asks every customer for a review. Start on {price} and move up when you're ready.",
  costHeading: 'How much does an AI receptionist cost?',
  costIntro:
    'Most AI receptionists for small businesses cost between {market.aiLow} and {market.aiHigh} a month, priced by calls or minutes. Human answering services usually start around {market.humanLow} to {market.humanHigh} a month for {market.humanMinutesLow} to {market.humanMinutesHigh} minutes. The low starting prices tend to include very few calls, and website chat is often a separate product.',
  faqHeading: 'Billing questions',
  ctaHeading: '{price} a month. Every call answered.',
};
