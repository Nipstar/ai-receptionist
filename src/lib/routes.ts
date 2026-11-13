import { industries } from '@/content/industries';
import { comparePages } from '@/content/compare';

export const routes = {
  home: '/',
  pricing: '/pricing/',
  industry: (slug: string) => `/for/${slug}/`,
  compare: (slug: string) => `/compare/${slug}/`,
  thankYou: '/thank-you/',
  privacy: '/privacy/',
  terms: '/terms/',
};

/** Every indexable page, for the sitemap and llms.txt. */
export function indexableRoutes(): string[] {
  return [
    routes.home,
    routes.pricing,
    ...industries.map((i) => routes.industry(i.slug)),
    ...comparePages.map((c) => routes.compare(c.slug)),
  ];
}
