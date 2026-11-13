import type { ReactNode } from 'react';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-16 md:py-24">
      <div className="wrap max-w-[760px] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-body">
        <h1 className="m-0 font-display text-[40px] leading-[1.06] font-bold tracking-tightest md:text-[52px]">{title}</h1>
        {children}
      </div>
    </section>
  );
}
