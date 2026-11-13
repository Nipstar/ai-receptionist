/**
 * Site checks. `npm run check` runs everything against out/ (build first).
 * `tsx scripts/check.ts --source` runs only the source checks (used in prebuild).
 *
 * 1. No [[PLACEHOLDER]] in out/**\/*.html (unless ALLOW_PLACEHOLDERS=1)
 * 2. No em dash, no "!" in visible copy, no banned words, no UK spellings, no "Ltd"/VAT/sales tax
 * 3. Every displayed $ price and minute figure is a config value, derived from config, or from competitors.ts
 * 4. Every JSON-LD block parses; FAQPage entries equal the visible FAQ text
 * 5. Every internal link resolves to a built file
 * Warnings (do not fail): titles over 60 chars, descriptions over 155.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { site } from '../src/site.config';
import { monthCost } from '../src/lib/format';
import { competitors, market } from '../src/content/competitors';
import { industries } from '../src/content/industries';

const SOURCE_ONLY = process.argv.includes('--source');
const ALLOW_PLACEHOLDERS = process.env.ALLOW_PLACEHOLDERS === '1';
const OUT = 'out';
/** [[KEY]] or [[KEY: suggested text]]. Upper-case key, so Next's inline [["..."]] data never matches. */
const PLACEHOLDER = /\[\[[A-Z][A-Z0-9_]*(?::[^\]]*)?\]\]/g;

const errors: string[] = [];
const warnings: string[] = [];
const fail = (file: string, msg: string) => errors.push(`${file}: ${msg}`);
const warn = (file: string, msg: string) => warnings.push(`${file}: ${msg}`);

const BANNED = [
  'leverage',
  'revolutionize',
  'seamless',
  'seamlessly',
  'solution',
  'solutions',
  'cutting-edge',
  'game-changer',
  'game changer',
  'AI-powered',
  'omnichannel',
  'unlock',
  'supercharge',
];
const UK = ['colour', 'favour', 'organise', 'organisation', 'centre', 'licence', 'behaviour', 'analyse', 'cancelled', 'cancelling', 'enquiry', 'enquiries', 'programme', 'specialise', 'optimise', 'personalise'];
const FORBIDDEN = [/Antek Automation (Ltd|Limited)/i, /\bVAT\b/, /sales tax/i];

function walk(dir: string, exts: string[]): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return walk(p, exts);
    return exts.some((e) => p.endsWith(e)) ? [p] : [];
  });
}

function wordCheck(file: string, text: string) {
  if (text.includes('—')) fail(file, 'contains an em dash (U+2014)');
  for (const w of BANNED) {
    const re = new RegExp(`(^|[^\\w-])${w.replace(/[-]/g, '[-\\s]?')}($|[^\\w-])`, 'i');
    if (re.test(text)) fail(file, `banned word "${w}"`);
  }
  for (const w of UK) if (new RegExp(`\\b${w}\\b`, 'i').test(text)) fail(file, `UK spelling "${w}"`);
  for (const re of FORBIDDEN) if (re.test(text)) fail(file, `forbidden phrase ${re}`);
}

// ---------- source checks ----------
for (const file of walk('src', ['.ts', '.tsx'])) {
  const text = readFileSync(file, 'utf8');
  // Strip line comments so instructions to developers can mention the rules.
  wordCheck(file, text.replace(/^\s*(\/\/|\*|\/\*).*$/gm, ''));
}

// ---------- built checks ----------
const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d));
const norm = (s: string) => decode(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();

function visibleText(html: string): string {
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const body = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<head>[\s\S]*?<\/head>/, ' ');
  return norm(`${title} \n ${desc} \n ${body.replace(/<[^>]+>/g, ' \n ')}`);
}

const allowedPrices = new Set<number>([
  site.plan.price,
  site.plan.overagePerMinute,
  site.plan.setupFee,
  ...site.plan.exampleMonths.map(monthCost),
  ...competitors.flatMap((c) => [c.monthly, c.overage?.amount, c.chatAddon].filter((x): x is number => x !== undefined)),
  market.aiLow,
  market.aiHigh,
  market.humanLow,
  market.humanHigh,
  ...industries.flatMap((i) => i.examplePrices ?? []),
]);
const allowedMinutes = new Set<number>([
  site.plan.minutes,
  ...site.plan.exampleMonths,
  site.plan.typicalCallMinutes.low,
  site.plan.typicalCallMinutes.high,
  site.plan.estimate.callMinutesLow,
  site.plan.estimate.callMinutesHigh,
  ...competitors.filter((c) => c.included.unit === 'minutes').map((c) => c.included.amount),
  market.humanMinutesLow,
  market.humanMinutesHigh,
]);

function figureCheck(file: string, text: string) {
  for (const m of text.matchAll(/\$\s?(\d+(?:,\d{3})*(?:\.\d+)?)/g)) {
    const n = Number(m[1].replace(/,/g, ''));
    if (!allowedPrices.has(n)) fail(file, `price "${m[0]}" is not a config or competitor value`);
  }
  for (const m of text.matchAll(/(\d+(?:\.\d+)?)(?:\s*to\s*(\d+(?:\.\d+)?))?\s*(?:call\s+)?minutes?\b/gi)) {
    for (const g of [m[1], m[2]].filter(Boolean)) {
      if (!allowedMinutes.has(Number(g))) fail(file, `minute figure "${m[0]}" is not a config or competitor value`);
    }
  }
}

function jsonLdCheck(file: string, html: string) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const faqLd: { q: string; a: string }[] = [];
  for (const raw of blocks) {
    let data: { '@type'?: string; mainEntity?: { name: string; acceptedAnswer: { text: string } }[] };
    try {
      data = JSON.parse(raw);
    } catch (e) {
      fail(file, `JSON-LD does not parse: ${(e as Error).message}`);
      continue;
    }
    if (data['@type'] === 'FAQPage') {
      for (const q of data.mainEntity ?? []) faqLd.push({ q: q.name.trim(), a: q.acceptedAnswer.text.trim() });
    }
  }
  const qs = [...html.matchAll(/<span data-faq-q="true">([\s\S]*?)<\/span>/g)].map((m) => norm(m[1]));
  const as = [...html.matchAll(/<p[^>]*data-faq-a="true"[^>]*>([\s\S]*?)<\/p>/g)].map((m) => norm(m[1]));
  if (qs.length !== faqLd.length) {
    fail(file, `visible FAQ has ${qs.length} questions, FAQPage JSON-LD has ${faqLd.length}`);
    return;
  }
  faqLd.forEach((f, i) => {
    if (f.q !== qs[i]) fail(file, `FAQ question ${i + 1} differs from JSON-LD:\n    visible: ${qs[i]}\n    json-ld: ${f.q}`);
    if (f.a !== as[i]) fail(file, `FAQ answer ${i + 1} differs from JSON-LD:\n    visible: ${as[i]}\n    json-ld: ${f.a}`);
  });
}

function linkCheck(file: string, html: string) {
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = decode(m[1]);
    if (href.startsWith('//') || href.startsWith('/_next/')) continue;
    const path = href.split(/[?#]/)[0];
    const target = path.endsWith('/') ? join(OUT, path, 'index.html') : join(OUT, path);
    if (!existsSync(target)) fail(file, `broken internal link ${href}`);
  }
}

function metaCheck(file: string, html: string) {
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) return;
  const title = norm(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) fail(file, 'missing <title>');
  else if (title.length > 60) warn(file, `title is ${title.length} chars (target under 60): ${title}`);
  if (!desc) fail(file, 'missing meta description');
  else if (desc.length > 155) warn(file, `description is ${desc.length} chars (target under 155)`);
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(file, `has ${h1s} <h1> elements, expected 1`);
  if (!html.includes('rel="canonical"')) fail(file, 'missing canonical link');
}

if (!SOURCE_ONLY) {
  const pages = walk(OUT, ['.html']);
  if (pages.length === 0) {
    console.error('check: no HTML in out/. Run `npm run build` first.');
    process.exit(1);
  }
  const placeholders = new Map<string, Set<string>>();
  for (const abs of pages) {
    const file = relative('.', abs);
    const html = readFileSync(abs, 'utf8');
    for (const m of html.matchAll(PLACEHOLDER)) {
      const key = m[0].split(':')[0].replace(/\]\]$/, '') + ']]';
      if (!placeholders.has(key)) placeholders.set(key, new Set());
      placeholders.get(key)!.add(file.replace(/^out\//, '/').replace(/index\.html$/, ''));
    }
    const text = visibleText(html);
    wordCheck(file, text);
    if (/!/.test(text.replace(PLACEHOLDER, ''))) {
      const at = text.indexOf('!');
      fail(file, `exclamation mark in visible copy: "...${text.slice(Math.max(0, at - 40), at + 1)}"`);
    }
    figureCheck(file, text.replace(PLACEHOLDER, ''));
    jsonLdCheck(file, html);
    linkCheck(file, html);
    if (!file.endsWith('404.html') && !file.includes('_not-found')) metaCheck(file, html);
  }
  if (placeholders.size) {
    const list = [...placeholders].map(([k, files]) => `  ${k}  (${files.size} page${files.size > 1 ? 's' : ''})`).join('\n');
    if (ALLOW_PLACEHOLDERS) warnings.push(`placeholders left in built HTML (allowed by ALLOW_PLACEHOLDERS=1):\n${list}`);
    else errors.push(`placeholders left in built HTML (set ALLOW_PLACEHOLDERS=1 for preview builds):\n${list}`);
  }
  console.log(`check: scanned ${pages.length} pages`);
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`FAIL  ${e}`);
if (errors.length) {
  console.error(`\ncheck: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`check: ${SOURCE_ONLY ? 'source' : 'source + built'} checks passed${warnings.length ? ` with ${warnings.length} warning(s)` : ''}`);
