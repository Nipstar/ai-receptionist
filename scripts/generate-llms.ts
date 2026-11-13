/**
 * Writes public/llms.txt and public/llms-full.txt from the content files (runs in prebuild).
 * Format follows the llms.txt convention: H1, blockquote summary, then sections of links with
 * one-line descriptions. llms-full.txt adds the full page copy.
 */
import './load-env';
import { writeFileSync } from 'node:fs';
import { site } from '../src/site.config';
import { fill, money, overage, price } from '../src/lib/format';
import { home } from '../src/content/home';
import { pricing } from '../src/content/pricing';
import { homeFaqs, pricingFaqs } from '../src/content/faqs';
import { industries } from '../src/content/industries';
import { comparePages } from '../src/content/compare';
import { competitors } from '../src/content/competitors';
import { industryTitle } from '../src/lib/titles';
import type { Faq } from '../src/content/types';

const url = (p: string) => `${site.domain}${p}`;
const p = site.plan;

const summary = `${site.name} ${site.tagline} answers a small business's phone calls and website chat in the business's own name, takes the details and emails a summary after every call. One plan: ${price} a month, ${p.minutes} call minutes, website chat included (chat uses no minutes), no setup fee, month to month. A product of ${site.owner}, for US businesses.`;

const plan = [
  `- Price: ${price} per month (${p.currency}), month to month, cancel any time`,
  `- Included: ${p.minutes} call minutes a month; website chat does not use minutes`,
  `- Extra minutes: ${overage} each; email alert at ${p.alertAtPercent}% of the allowance`,
  `- Setup fee: ${money(p.setupFee)}; setup is done for you`,
  `- Every call: summary by email the moment it ends`,
  `- Text alerts: switched on after US carrier (A2P 10DLC) registration is approved, usually ${p.textAlertApproval}`,
  `- Keep your number: forward calls when busy, after hours or always. Chat is one line of code on your site`,
  `- Not on this plan: calendar booking, texting callers back, review requests (available on a separate done-for-you plan)`,
].join('\n');

const pages = [
  `- [Home](${url('/')}): What the AI receptionist does, how setup works, what is included and what it will not do, plan and FAQ`,
  `- [Pricing](${url('/pricing/')}): ${price} a month for ${p.minutes} minutes, what a month costs, billing FAQ and a dated price comparison`,
];

const industryLinks = industries.map((i) => `- [${industryTitle(i)}](${url(`/for/${i.slug}/`)}): ${fill(i.metaDescription)}`);
const compareLinks = comparePages.map((c) => `- [${fill(c.metaTitle)}](${url(`/compare/${c.slug}/`)}): ${fill(c.metaDescription)}`);

const llms = `# ${site.name} ${site.tagline}

> ${summary}

## Plan

${plan}

## Pages

${pages.join('\n')}

## Industries

${industryLinks.join('\n')}

## Compare

${compareLinks.join('\n')}

## Optional

- [Full text of every page](${url('/llms-full.txt')})
`;

const faqText = (faqs: Faq[]) => faqs.map((f) => `Q: ${fill(f.q)}\nA: ${fill(f.a)}`).join('\n\n');
const compTable = competitors
  .map(
    (c) =>
      `- ${c.name}: ${c.approx ? 'about ' : ''}${money(c.monthly)}/mo, ${c.included.amount} ${c.included.unit}${c.overage ? `, then ${money(c.overage.amount)}/${c.overage.per}` : ''}${c.chatAddon ? `; chat separate at ${money(c.chatAddon)}/mo` : ''}`,
  )
  .join('\n');

const full = `${llms}
---

# Full text

## Home (${url('/')})

${fill(home.h1Line1)} ${fill(home.h1Line2)}

${home.intro}

### ${home.pain.heading}
${home.pain.cards.map((c) => `- ${c.title}: ${c.text}`).join('\n')}
${home.pain.closing}

### ${home.steps.heading}
${home.steps.items.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join('\n')}

### ${home.included.heading}
${home.included.intro}
${home.included.items.map((s) => `- ${s.title}: ${s.text}`).join('\n')}

${home.included.wontHeading}: ${home.included.wontText}

### Questions owners ask
${faqText(homeFaqs)}

## Pricing (${url('/pricing/')})

${fill(pricing.h1)}

${fill(pricing.intro)}

${pricing.rows.map((r) => `- ${r.label}: ${fill(r.value)}`).join('\n')}

### ${pricing.costHeading}
${fill(pricing.costIntro)}

Published prices, checked ${site.pricesChecked}:
- This plan: ${price}/mo, ${p.minutes} minutes + website chat, ${overage}/min over
${compTable}

### ${pricing.faqHeading}
${faqText(pricingFaqs)}

${industries
  .map(
    (i) => `## ${industryTitle(i)} (${url(`/for/${i.slug}/`)})

${i.h1}

${fill(i.intro)}

Example call (${i.example.business}):
${i.example.lines.map((l) => `${l.who === 'receptionist' ? 'Receptionist' : 'Caller'}: ${l.text}`).join('\n')}
Summary sent: ${i.example.summary.title}

### ${i.callsHeading}
${i.calls.map((c) => `- ${c.title}: ${c.text}`).join('\n')}
${i.upsell ? `\n${i.upsell}\n` : ''}
### Questions
${faqText(i.faqs)}
`,
  )
  .join('\n')}
${comparePages
  .map(
    (c) => `## ${c.h1} (${url(`/compare/${c.slug}/`)})

${fill(c.answer)}

### ${c.costHeading}
${fill(c.costIntro)}

### ${c.differenceHeading}
${c.differences.map((d) => `- ${fill(d.title)}: ${fill(d.text)}`).join('\n')}

### ${c.betterHeading}
${fill(c.betterIntro)}
${c.better.map((b) => `- ${fill(b)}`).join('\n')}

### Questions
${faqText(c.faqs)}
`,
  )
  .join('\n')}`;

writeFileSync('public/llms.txt', llms);
writeFileSync('public/llms-full.txt', full);
console.log(`llms: wrote public/llms.txt (${llms.length} chars) and public/llms-full.txt (${full.length} chars)`);
