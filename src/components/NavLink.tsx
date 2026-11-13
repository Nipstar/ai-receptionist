'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Header link with the design's active state (2px ink underline) and aria-current. */
export function NavLink({ href, className = '', children }: { href: string; className?: string; children: ReactNode }) {
  const path = usePathname();
  const active = !href.includes('#') && path === href;
  return (
    <Link href={href} className={`${className} ${active ? 'border-b-2 border-ink' : ''}`} aria-current={active ? 'page' : undefined}>
      {children}
    </Link>
  );
}
