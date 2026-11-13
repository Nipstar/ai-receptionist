import { site } from '@/site.config';
import { fill } from '@/lib/format';
import type { Faq } from '@/content/types';

/** JSON-LD builders. Every builder takes the same data the page renders, so the two cannot drift. */

const orgId = `${site.domain}/#organization`;

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: site.owner,
    url: site.domain,
    logo: `${site.domain}/icon.svg`,
    email: site.email,
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.domain}/#website`,
    name: `${site.name} ${site.tagline}`,
    url: site.domain,
    publisher: { '@id': orgId },
    inLanguage: 'en-US',
  };
}

function monthlyPrice() {
  return {
    '@type': 'UnitPriceSpecification',
    price: site.plan.price,
    priceCurrency: site.plan.currency,
    billingDuration: 'P1M',
    unitCode: 'MON',
    referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
  };
}

function overagePrice() {
  return {
    '@type': 'UnitPriceSpecification',
    name: 'Extra call minutes',
    price: site.plan.overagePerMinute,
    priceCurrency: site.plan.currency,
    unitCode: 'MIN',
    referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MIN' },
  };
}

export function offer(path: string, withOverage = false) {
  return {
    '@type': 'Offer',
    name: site.plan.name,
    url: `${site.domain}${path}`,
    price: site.plan.price,
    priceCurrency: site.plan.currency,
    availability: 'https://schema.org/InStock',
    eligibleRegion: { '@type': 'Country', name: 'US' },
    priceSpecification: withOverage ? [monthlyPrice(), overagePrice()] : monthlyPrice(),
  };
}

export function service({ path, description, audience }: { path: string; description: string; audience?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${site.name} ${site.tagline}`,
    serviceType: 'AI receptionist and website chat',
    description,
    url: `${site.domain}${path}`,
    provider: { '@id': orgId },
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: audience ? { '@type': 'BusinessAudience', audienceType: audience } : undefined,
    offers: offer(path),
  };
}

export function product({ path, description }: { path: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: site.plan.name,
    description,
    brand: { '@type': 'Brand', name: site.name },
    url: `${site.domain}${path}`,
    offers: offer(path, true),
  };
}

/** FAQ text is filled with the same fill() the visible FAQ uses. */
export function faqPage(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: fill(f.q),
      acceptedAnswer: { '@type': 'Answer', text: fill(f.a) },
    })),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.domain}${it.path}`,
    })),
  };
}

/** Home: the hero sentence and the FAQ answers are what assistants should read aloud. */
export function speakable(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${site.domain}${path}`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
  };
}
