import type { Faq as FaqItem } from '@/content/types';
import { fill } from '@/lib/format';

/**
 * Native <details> accordion. Text comes from the same array as the FAQPage JSON-LD
 * (faqPage() in lib/schema.ts); scripts/check.ts verifies they match.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line-3" data-faq>
      {items.map((f) => (
        <details key={f.q} className="border-b border-line-3 py-[22px]">
          <summary className="flex items-start justify-between gap-5 text-[19px] leading-snug font-semibold">
            <span data-faq-q>{fill(f.q)}</span>
            <span className="faq-plus text-[26px] leading-none text-cobalt" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 mb-0 text-body" data-faq-a>
            {fill(f.a)}
          </p>
        </details>
      ))}
    </div>
  );
}
