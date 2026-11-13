import Link from 'next/link';
import { site } from '@/site.config';

const BUBBLE =
  'M5 5.5h14a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-7l-4.5 3.5v-3.5H5A2.5 2.5 0 0 1 2.5 15V8A2.5 2.5 0 0 1 5 5.5z';

/** The mark: speech bubble (chat) with voice bars (phone). Matches reference/logo/mark-*.svg. */
export function Mark({
  size = 36,
  tile = '#2446F5',
  glyph = '#FFFFFF',
  className,
}: {
  size?: number;
  tile?: string;
  glyph?: string;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true" className={className}>
      <rect width="36" height="36" rx="10" fill={tile} />
      <g transform="translate(6 6)">
        <path d={BUBBLE} fill={glyph} />
        <rect x="7" y="10" width="1.6" height="3" rx="0.8" fill={tile} />
        <rect x="10" y="8" width="1.6" height="7" rx="0.8" fill={tile} />
        <rect x="13" y="9" width="1.6" height="5" rx="0.8" fill={tile} />
        <rect x="16" y="10.25" width="1.6" height="2.5" rx="0.8" fill={tile} />
      </g>
    </svg>
  );
}

/** Header lockup: mark + "AI Receptionist" + "for small business". light = on Paper, dark = on Ink. */
export function Logo({ variant = 'light', href = '/' }: { variant?: 'light' | 'dark'; href?: string }) {
  const dark = variant === 'dark';
  return (
    <Link
      href={href}
      className={`flex flex-none items-center gap-2.5 whitespace-nowrap no-underline md:gap-3 ${dark ? 'text-white hover:text-white' : 'text-ink hover:text-ink'}`}
      aria-label={`${site.name} ${site.tagline}, home`}
    >
      <Mark size={36} className="size-8 md:size-9" />
      <span className="flex flex-col leading-[1.1]">
        <span className="font-display text-lg font-bold tracking-[-0.01em]">
          <span className={dark ? 'text-cobalt-light' : 'text-cobalt'}>AI</span> Receptionist
        </span>
        <span className={`text-xs tracking-[0.02em] ${dark ? 'text-mist' : 'text-slate'}`}>{site.tagline}</span>
      </span>
    </Link>
  );
}
