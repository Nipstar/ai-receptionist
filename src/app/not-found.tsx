import Link from 'next/link';
import type { Metadata } from 'next';
import { btn } from '@/lib/ui';
import { routes } from '@/lib/routes';

export const metadata: Metadata = { title: { absolute: 'Page not found | AI Receptionist' }, robots: { index: false } };

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap max-w-[720px] text-center">
        <p className="eyebrow text-cobalt">404</p>
        <h1 className="m-0 font-display text-[40px] leading-[1.06] font-bold tracking-tightest md:text-[56px]">
          This page isn&apos;t here.
        </h1>
        <p className="mt-5 mb-0 text-xl text-body">The link may be old or mistyped. These will get you back on track.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className={btn.primary}>Go to the home page</Link>
          <Link href={routes.pricing} className={btn.outline}>See pricing</Link>
        </div>
      </div>
    </section>
  );
}
