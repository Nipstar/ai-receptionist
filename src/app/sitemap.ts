import type { MetadataRoute } from 'next';
import { site } from '@/site.config';
import { indexableRoutes } from '@/lib/routes';

export const dynamic = 'force-static';

/** Indexable pages only. thank-you, privacy and terms are noindex and left out. */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes().map((path) => ({
    url: `${site.domain}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path === '/pricing/' ? 0.9 : 0.7,
  }));
}
