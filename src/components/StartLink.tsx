'use client';

import type { MouseEvent, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/site.config';
import { readUtm, track } from '@/lib/analytics';

/**
 * Every "Start for $97" button. Links to the GHL order form and appends the visitor's
 * UTM params (captured on first landing) plus source_page.
 */
export function StartLink({ className, children }: { className?: string; children: ReactNode }) {
  const path = usePathname() || '/';

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    try {
      const url = new URL(site.ghl.orderUrl);
      for (const [k, v] of Object.entries(readUtm())) url.searchParams.set(k, v);
      url.searchParams.set('source_page', path);
      e.currentTarget.href = url.toString();
    } catch {
      /* placeholder or malformed URL: fall through to the plain href */
    }
    track({ event: 'click_start', page_path: path });
  }

  return (
    <a href={site.ghl.orderUrl} onClick={onClick} className={className} data-cta="start">
      {children}
    </a>
  );
}
