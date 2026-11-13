import { pricing } from '@/content/pricing';
import { fill } from '@/lib/format';
import { ogContentType, ogSize, renderOg } from '@/lib/og';

export const dynamic = 'force-static';
export const alt = 'AI receptionist pricing';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: 'Pricing', headline: fill(pricing.h1) });
}
