import { comparePages, getComparePage } from '@/content/compare';
import { ogContentType, ogSize, renderOg } from '@/lib/og';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const alt = 'AI receptionist comparison';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return comparePages.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getComparePage((await params).slug)!;
  return renderOg({ eyebrow: 'Compare', headline: c.h1 });
}
