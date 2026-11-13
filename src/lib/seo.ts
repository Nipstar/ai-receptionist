import type { Metadata } from 'next';
import { site } from '@/site.config';

export function pageMeta({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${site.domain}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: `${site.name} ${site.tagline}`,
      locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
