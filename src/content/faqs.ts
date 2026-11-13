import type { Faq } from './types';

/** Verbatim from reference/design/Main.dc.html. Tokens filled from site.config.ts. */
export const homeFaqs: Faq[] = [
  {
    q: "Will callers know it's not a person?",
    a: "If they ask, it tells them. Most don't. They want their question answered and their message passed on, and that's what it does, in a calm, natural voice.",
  },
  {
    q: 'Can I keep my phone number?',
    a: "Yes. You forward your existing number to your receptionist, all the time or only when you don't pick up. Customers dial what they always have.",
  },
  {
    q: 'What happens if I go over {minutes} minutes?',
    a: 'Extra minutes are {overage} each. We email you at {alertAt} of your allowance, so there are no surprises. Website chat never uses minutes.',
  },
  {
    q: 'Why do text alerts take longer to switch on?',
    a: 'US carriers require every business that sends texts to register first. Approval usually takes one to three weeks. Email summaries work from your first day.',
  },
  {
    q: 'Can it book appointments?',
    a: 'Not on this plan. It takes the details and sends them to you straight away. Calendar booking, text-back to missed callers and review requests come with our done-for-you plan.',
  },
  {
    q: 'Is there a contract or setup fee?',
    a: 'No to both. {price} a month, month to month. Cancel any time and forward your calls back.',
  },
  {
    q: 'How do I change what it says?',
    a: 'New hours, a new service, a holiday closure: send us the change and we update it. No re-setup, no charge.',
  },
];

/** Verbatim from reference/design/Pricing.dc.html. Bracketed facts are config placeholders. */
export const pricingFaqs: Faq[] = [
  {
    q: 'What counts as a minute?',
    a: 'Time your receptionist spends on calls, {minuteRounding}. Website chat never uses minutes.',
  },
  { q: 'Do unused minutes roll over?', a: '{rollover}' },
  {
    q: 'Is there a free trial?',
    a: "Call the demo line and hear exactly what your callers will hear. There's no contract, so if it isn't for you, cancel before your next billing date.",
  },
  {
    q: 'Are there any other fees?',
    a: 'No setup fee. Extra minutes only if you go over. {textingFees}',
  },
  {
    q: 'How do I cancel?',
    a: 'Email us or cancel from your account, then switch your call forwarding off. You keep your number, it was always yours.',
  },
];
