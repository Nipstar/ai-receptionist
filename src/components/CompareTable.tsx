import { site } from '@/site.config';
import { competitors, humanAggregate, type Competitor } from '@/content/competitors';
import { money, overage, price } from '@/lib/format';

type Variant = 'summary' | 'full';

function monthly(c: Competitor, variant: Variant) {
  const base = c.approx ? `About ${money(c.monthly)}` : money(c.monthly);
  return variant === 'full' && c.chatAddon ? `${base} (+${money(c.chatAddon)} chat)` : base;
}

function included(c: Competitor, variant: Variant) {
  const inc = `${c.included.amount} ${c.included.unit}`;
  if (variant === 'full' || !c.overage) return inc;
  return c.overage.per === 'call'
    ? `${inc}, then ${money(c.overage.amount)} a call`
    : `${inc}, then ${money(c.overage.amount)}/min`;
}

function overLimit(c: Competitor) {
  if (c.overage) return `${money(c.overage.amount)}/${c.overage.per}`;
  return c.overageLabel ?? 'Not published';
}

function chat(c: Competitor) {
  if (c.chatAddon) return `Separate, ${money(c.chatAddon)}/mo`;
  return c.chatLabel ?? 'Not listed';
}

const th = 'px-6 py-[18px] font-semibold';
const td = 'px-6 py-[18px]';

/**
 * Dated comparison table built from src/content/competitors.ts.
 * summary: Monthly / Included / Website chat (home). full: Monthly / Included / Over the limit.
 */
export function CompareTable({
  variant = 'full',
  rows,
  humanRow = false,
  highlight,
  caption,
}: {
  variant?: Variant;
  rows?: string[];
  humanRow?: boolean;
  highlight?: string;
  caption: string;
}) {
  const list = rows ? rows.map((id) => competitors.find((c) => c.id === id)!).filter(Boolean) : competitors;
  return (
    <>
      <div className="overflow-x-auto rounded-[18px] border border-line bg-white" role="region" aria-label={caption} tabIndex={0}>
        <table className="w-full min-w-[720px] border-collapse text-base">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-paper text-left">
              <th scope="col" className={th}>Service</th>
              <th scope="col" className={th}>Monthly</th>
              <th scope="col" className={th}>Included</th>
              <th scope="col" className={th}>{variant === 'full' ? 'Over the limit' : 'Website chat'}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-cobalt-wash">
              <th scope="row" className={`${td} text-left font-semibold`}>
                {variant === 'full' ? 'This plan (calls + chat)' : 'This plan'}
              </th>
              <td className={`${td} font-semibold`}>{price}</td>
              <td className={td}>
                {site.plan.minutes} minutes{variant === 'full' ? ' + website chat' : ''}
              </td>
              <td className={td}>{variant === 'full' ? `${overage}/min` : 'Included'}</td>
            </tr>
            {list.map((c) => (
              <tr key={c.id} className={`border-t border-line-2 ${highlight === c.id ? 'bg-paper' : ''}`}>
                <th scope="row" className={`${td} text-left font-medium`}>{c.name}</th>
                <td className={td}>{monthly(c, variant)}</td>
                <td className={td}>{included(c, variant)}</td>
                <td className={td}>{variant === 'full' ? overLimit(c) : chat(c)}</td>
              </tr>
            ))}
            {humanRow && (
              <tr className="border-t border-line-2">
                <th scope="row" className={`${td} text-left font-medium`}>{humanAggregate.name}</th>
                <td className={td}>From about {money(humanAggregate.monthly)}</td>
                <td className={td}>
                  About {humanAggregate.minutesLow} to {humanAggregate.minutesHigh} minutes
                </td>
                <td className={td}>Varies</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3.5 mb-0 text-[13px] text-slate">
        Published prices from vendor pages and 2026 pricing guides, checked {site.pricesChecked}. Plans change, so check
        before you buy.
      </p>
    </>
  );
}
