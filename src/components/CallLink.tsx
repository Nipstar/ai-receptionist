'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/site.config';
import { track } from '@/lib/analytics';

/** Every "Call it and hear it" / "Call the demo line" button. */
export function CallLink({ className, children }: { className?: string; children?: ReactNode }) {
  const path = usePathname() || '/';
  return (
    <a
      href={`tel:${site.demoPhone.tel}`}
      className={className}
      data-cta="call"
      onClick={() => track({ event: 'click_call', page_path: path })}
    >
      {children ?? `Call ${site.demoPhone.display}`}
    </a>
  );
}

/** The demo number as plain text, for desktop visitors who can't tap. */
export function DemoNumber({ className, prefix = 'Demo line:' }: { className?: string; prefix?: string }) {
  return (
    <p className={className}>
      {prefix} <span className="font-semibold whitespace-nowrap">{site.demoPhone.display}</span>
    </p>
  );
}
