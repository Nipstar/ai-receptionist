import { getIndustry, industries } from '@/content/industries';
import { ogContentType, ogSize, renderOg } from '@/lib/og';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const alt = 'AI receptionist for your industry';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ industry: string }> }) {
  const i = getIndustry((await params).industry)!;
  return renderOg({ eyebrow: i.eyebrow, headline: i.h1 });
}
