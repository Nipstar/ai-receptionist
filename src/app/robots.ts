import type { MetadataRoute } from 'next';
import { site } from '@/site.config';

export const dynamic = 'force-static';

/** Allow everyone, AI crawlers named explicitly so intent is clear. */
export default function robots(): MetadataRoute.Robots {
  const ai = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'];
  return {
    rules: [{ userAgent: '*', allow: '/' }, ...ai.map((userAgent) => ({ userAgent, allow: '/' }))],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
