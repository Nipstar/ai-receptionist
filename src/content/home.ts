import type { ChatLine } from './types';

/** Home page copy, verbatim from reference/design/Main.dc.html. Tokens filled from site.config.ts. */
export const home = {
  metaTitle: 'AI Receptionist for Small Business | {price}/mo, Calls + Chat',
  metaDescription:
    'Every call answered in your business name, website chat included, call summary sent to you. {price} a month, {minutes} minutes, no setup fee, month to month.',
  badge: 'New',
  badgeText: 'Phone + website chat in one plan',
  h1Line1: 'Every call answered.',
  h1Line2: 'For {price} a month.',
  intro:
    "You're with a customer and the phone rings. Your AI receptionist picks up in your business name, answers the usual questions, takes the details and sends you the summary before you've finished what you were doing. Your website chat too.",
  heroChatHint: 'Or try the chat in the corner.',
  heroFacts: ['No setup fee', 'Month to month', 'Keep your number', 'Live in {goLive}'],
  heroCall: {
    title: 'Live call · Brightside Dental',
    time: '2:14 PM · 00:48',
    lines: [
      { who: 'receptionist', text: 'Brightside Dental, this is the front desk. Dr. Patel is with a patient. How can I help?' },
      { who: 'caller', text: 'I chipped a tooth this morning. Can someone see me this week?' },
      {
        who: 'receptionist',
        text: "Sorry to hear that. Can I take your name and the best number? I'll get this to the office right now so they can fit you in.",
      },
    ] as ChatLine[],
    summary: {
      sentAt: '2:16 PM',
      title: 'New call: chipped tooth, wants this week',
      rows: [
        { label: 'Caller', value: 'Dana R. · (555) 014-2286' },
        { label: 'Needs', value: 'Appointment this week, chipped front tooth, some pain' },
        { label: 'Next step', value: 'Call back today', accent: true },
      ],
    },
  },
  pain: {
    eyebrow: 'The real cost of a missed call',
    heading: "The phone isn't the problem. Not answering it is.",
    cards: [
      {
        title: "They don't leave a message",
        text: 'Voicemail is where a new customer decides to try the next name on the list. Most never call back.',
      },
      {
        title: 'Your callback lands too late',
        text: `By the time you're free, they've booked with whoever picked up. You're calling to hear "we're sorted, thanks."`,
      },
      {
        title: 'You already paid for that call',
        text: 'Ads, your Google listing, a referral you earned. The call cost you something. Missing it hands the work to someone else.',
      },
    ],
    closing: "You don't need more calls. You need to stop losing the ones you already get.",
  },
  steps: {
    eyebrow: 'How it works',
    heading: 'Live in days. No tech, no setup fee.',
    items: [
      {
        title: 'Tell us about your business',
        text: "A five-minute form. Your hours, services, the questions people always ask, any prices you're happy to share, and where to send messages.",
      },
      {
        title: 'We set it up for you',
        text: 'Your receptionist and your website chat, loaded with your answers and tested before a customer hears it. You get a test number to try it yourself.',
      },
      {
        title: 'Forward your calls',
        text: "Keep your number. Forward when you're busy, after hours, or all day. Paste one line of code and the chat is on your website.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    heading: 'Every call ends with a summary in your inbox.',
    intro: 'No listening to voicemails. No scribbled numbers. Who called, what they need, how urgent, and what to do next.',
    wontHeading: "What it won't do",
    wontText:
      "It won't book into your calendar, text callers back or quote a price you didn't give it. It won't pretend to be a person if someone asks. It catches the calls you can't take and gets you the details, fast.",
    wontLink: 'Need booking and text-back? Ask about our done-for-you plan.',
    items: [
      { title: 'Answers in your business name, 24/7', text: 'Nights, weekends, lunch, the busy hour. Second ring, every time.' },
      { title: "Answers the questions you're tired of", text: 'Hours, location, services, parking, the prices you choose to share.' },
      { title: 'Takes a proper message', text: 'Name, number, what they need and how urgent it is. Spelled right.' },
      { title: 'Website chat, same receptionist', text: "Same answers on your site as on the phone. Chat doesn't use your minutes." },
      { title: 'Call summary by email, instantly', text: 'The moment the call ends. Forward it to whoever handles callbacks.' },
      {
        title: 'Text alerts to your phone',
        text: 'Switched on once US carriers approve your texting registration. Email works from day one.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    heading: 'One plan. Calls and chat. {price}.',
    demoHeading: 'Hear it before you pay',
    demoText: 'Call our demo line. Ask it anything a customer would. Then check your inbox for the summary.',
    upsellHeading: 'Want it to book jobs too?',
    upsellText:
      'Calendar booking, instant text-back to missed callers and review requests come with our done-for-you plan. Start here, upgrade any time.',
  },
  compare: {
    eyebrow: 'Compare',
    heading: 'How does {price} compare?',
    intro:
      'Most AI receptionists charge by the call or sell chat separately. Human answering services charge by the minute, at several times the price.',
  },
  faq: { eyebrow: 'Straight answers', heading: 'Questions owners ask' },
  cta: {
    heading: 'Stop sending callers to voicemail.',
    text: 'Every call answered in your name, every message in your inbox. {price} a month, no setup fee, cancel any time.',
  },
};

/** Plan card bullet list, shared by home, pricing, industry and compare pages. */
export const planFeatures = [
  '{minutes} call minutes a month',
  'Website chat included',
  'Answers 24/7 in your name',
  'Call summary by email',
  'Text alerts (after carrier approval)',
  'Keep your existing number',
];
