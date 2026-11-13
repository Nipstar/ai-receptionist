import type { Faq } from './types';

/**
 * Compare pages, rendered by src/app/compare/[slug]/page.tsx.
 * Answer first, facts with dates, honest about when the other option is better.
 * Competitor figures come from competitors.ts via {id.monthly} style tokens.
 */
export type ComparePage = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Two sentences that answer the search query */
  answer: string;
  /** schema.org Service audience */
  audience: string;
  costHeading: string;
  costIntro: string;
  /** Competitor ids for the table, after "This plan" */
  tableRows: string[];
  highlight?: string;
  differenceHeading: string;
  differences: { title: string; text: string }[];
  betterHeading: string;
  betterIntro: string;
  better: string[];
  faqs: Faq[];
};

export const comparePages: ComparePage[] = [
  {
    slug: 'ionos-ai-receptionist-alternative',
    navLabel: 'IONOS AI Receptionist alternative',
    metaTitle: 'IONOS AI Receptionist Alternative | Calls + Chat, {price}/mo',
    metaDescription:
      'IONOS AI Receptionist pricing next to a {price} plan with {minutes} minutes and website chat included. Published prices, dated, and when IONOS is the better pick.',
    eyebrow: 'Compare',
    h1: 'IONOS AI Receptionist alternative: calls and chat in one plan',
    answer:
      'IONOS AI Receptionist starts at {ionos.monthly} a month for {ionos.included}, then {ionos.overage} a call, and its AI Chat Assistant is a separate {ionos.chat} a month. This plan is {price} a month for {minutes} call minutes with website chat included, priced by the minute rather than the call.',
    audience: 'Small businesses comparing AI receptionist services',
    costHeading: 'How much does the IONOS AI Receptionist cost?',
    costIntro:
      'IONOS lists the AI Receptionist at {ionos.monthly} a month with {ionos.included} included and {ionos.overage} for each call after that. Website chat is a separate product, the AI Chat Assistant, at {ionos.chat} a month.',
    tableRows: ['ionos', 'ringcentral', 'dialzara'],
    highlight: 'ionos',
    differenceHeading: 'What is different about this plan?',
    differences: [
      {
        title: 'Priced by the minute, not the call',
        text: 'You get {minutes} call minutes a month. Short calls use less of your allowance than long ones, and we email you at {alertAt} so there are no surprises.',
      },
      {
        title: 'Website chat in the same price',
        text: 'The chat on your website uses the same answers as the phone and never uses your minutes.',
      },
      {
        title: 'Set up and updated for you',
        text: 'You fill in a five-minute form and we build and test it. New hours or a new service later? Send us the change and we update it, no charge.',
      },
      {
        title: 'A summary after every call',
        text: 'Who called, what they need, how urgent, and what to do next, in your inbox the moment the call ends.',
      },
    ],
    betterHeading: 'When is IONOS the better choice?',
    betterIntro: 'On price alone, IONOS costs less at low call volumes. It may suit you better if:',
    better: [
      'You get only a few calls a month and rarely go past {ionos.included}.',
      'You already run your website, domain or email with IONOS and want one bill.',
      'You only need phone answering and do not want website chat.',
    ],
    faqs: [
      {
        q: 'Is this cheaper than the IONOS AI Receptionist?',
        a: 'Not always. At low call volumes IONOS costs less. This plan is a flat {price} for {minutes} minutes with chat included, which suits businesses that take more calls or want website chat without a second subscription.',
      },
      {
        q: 'Do I need to host my website with you?',
        a: 'No. The chat is one line of code you paste into any website, and calls are forwarded from the number you already have.',
      },
      {
        q: 'Can I switch from IONOS?',
        a: 'Yes. Tell us about your business, we set it up and test it, then you change your call forwarding to the new number. Your phone number stays yours.',
      },
    ],
  },

  {
    slug: 'ringcentral-ai-receptionist-alternative',
    navLabel: 'RingCentral alternative',
    metaTitle: 'RingCentral AI Receptionist Pricing vs a {price} Plan',
    metaDescription:
      'RingCentral AI Receptionist pricing next to a {price} plan with {minutes} minutes and website chat. Dated published prices and when RingCentral fits better.',
    eyebrow: 'Compare',
    h1: 'RingCentral AI Receptionist pricing, and a simpler alternative',
    answer:
      'RingCentral AI Receptionist is listed at {ringcentral.monthly} a month with {ringcentral.included} included, with usage-based pricing beyond that. This plan is {price} a month for {minutes} call minutes with website chat included and no setup fee.',
    audience: 'Small businesses comparing AI receptionist services',
    costHeading: 'How much does the RingCentral AI Receptionist cost?',
    costIntro:
      'RingCentral lists its AI Receptionist at {ringcentral.monthly} a month with {ringcentral.included} included. Usage past that is billed on top. Prices below were checked {pricesChecked}.',
    tableRows: ['ringcentral', 'ionos', 'trillet', 'cloudtalk', 'dialzara'],
    highlight: 'ringcentral',
    differenceHeading: 'What is different about this plan?',
    differences: [
      {
        title: '{minutes} minutes in the price',
        text: 'More included minutes each month, with an email at {alertAt} and extra minutes at {overage} each if you go over.',
      },
      {
        title: 'Works with the phone number you have',
        text: 'Keep your current number and carrier. Forward calls when you are busy, after hours or all day.',
      },
      {
        title: 'Website chat included',
        text: 'The same answers on your website as on the phone, and chat never uses your minutes.',
      },
      {
        title: 'Set up for you',
        text: 'No admin portal to learn. We load your hours, services and answers, test it, and change it whenever you send an update.',
      },
    ],
    betterHeading: 'When is RingCentral the better choice?',
    betterIntro: 'RingCentral may suit you better if:',
    better: [
      'Your team already uses RingCentral for business phones and you want everything in one account.',
      'You use fewer than {ringcentral.included} a month and want the lower monthly price.',
      'You want to manage settings yourself inside a larger phone system.',
    ],
    faqs: [
      {
        q: 'Do I need a RingCentral phone plan to use this?',
        a: 'No. This works with any phone number you can forward, from any carrier, and the chat works on any website.',
      },
      {
        q: 'What happens if I go over my minutes?',
        a: 'Extra minutes are {overage} each. We email you at {alertAt} of your allowance first, and website chat never uses minutes.',
      },
      {
        q: 'Is there a contract?',
        a: 'No. {price} a month, month to month, no setup fee. Cancel any time and forward your calls back.',
      },
    ],
  },

  {
    slug: 'ai-receptionist-vs-answering-service',
    navLabel: 'AI vs human answering service',
    metaTitle: 'AI Receptionist vs Answering Service for Small Business',
    metaDescription:
      'What a human answering service costs, what an AI receptionist costs, and which suits your calls. Ruby and Smith.ai prices next to a {price} plan, dated.',
    eyebrow: 'Compare',
    h1: 'AI receptionist vs answering service: which does a small business need?',
    answer:
      'A human answering service puts a person on every call and usually starts around {market.humanLow} to {market.humanHigh} a month for {market.humanMinutesLow} to {market.humanMinutesHigh} minutes. An AI receptionist answers the same routine calls and takes the message for less: this plan is {price} a month for {minutes} minutes with website chat included.',
    audience: 'Small businesses comparing answering services',
    costHeading: 'How much does an answering service cost?',
    costIntro:
      'Human answering services usually start around {market.humanLow} to {market.humanHigh} a month for {market.humanMinutesLow} to {market.humanMinutesHigh} minutes, priced by the minute or the call. Most AI receptionists cost between {market.aiLow} and {market.aiHigh} a month.',
    tableRows: ['ruby', 'smithai', 'ringcentral', 'dialzara'],
    differenceHeading: 'What is the difference between an AI receptionist and an answering service?',
    differences: [
      {
        title: 'Who picks up',
        text: 'An answering service routes your call to a trained person. An AI receptionist answers in your business name with a calm, natural voice, and tells callers it is not a person if they ask.',
      },
      {
        title: 'What it costs per month',
        text: 'Human services price by the minute or call at several times the rate. This plan is {price} for {minutes} minutes.',
      },
      {
        title: 'When it is available',
        text: 'This plan answers 24/7, nights, weekends and holidays, with no extra charge for after-hours calls.',
      },
      {
        title: 'What you get after the call',
        text: 'A summary in your inbox the moment the call ends: who called, what they need, how urgent, and what to do next.',
      },
    ],
    betterHeading: 'When is a human answering service the better choice?',
    betterIntro: 'A person on the line is worth the extra cost if:',
    better: [
      'Your callers are often upset or in a sensitive situation and expect to talk to a person.',
      'Calls need judgment beyond the instructions you can write down.',
      'You need callers transferred live to you or your team during the call.',
    ],
    faqs: [
      {
        q: 'Is an AI receptionist as good as a human answering service?',
        a: 'For routine calls, like questions about hours, services and prices you share, and taking a message, it does the same job for less. For sensitive calls or ones that need judgment, a person is better.',
      },
      {
        q: 'Will callers know it is AI?',
        a: 'If they ask, it tells them. Most callers want their question answered and their message passed on, and that is what it does.',
      },
      {
        q: 'Can I try it before I switch?',
        a: 'Yes. Call the demo line and hear exactly what your callers will hear. There is no contract, so you can cancel before your next billing date.',
      },
    ],
  },
];

export function getComparePage(slug: string): ComparePage | undefined {
  return comparePages.find((c) => c.slug === slug);
}
