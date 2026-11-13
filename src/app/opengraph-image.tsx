import { home } from '@/content/home';
import { fill } from '@/lib/format';
import { ogContentType, ogSize, renderOg } from '@/lib/og';

export const dynamic = 'force-static';
export const alt = 'Every call answered. AI receptionist and website chat for small business.';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: 'AI receptionist for small business', headline: `${fill(home.h1Line1)} ${fill(home.h1Line2)}` });
}
