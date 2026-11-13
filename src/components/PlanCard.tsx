import { site } from '@/site.config';
import { fill, overage, price } from '@/lib/format';
import { planFeatures } from '@/content/home';
import { btn } from '@/lib/ui';
import { StartLink } from './StartLink';

/** The $97 plan. headingLevel lets pages keep a clean H2/H3 outline. */
export function PlanCard({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  const { estimate: e, minutes, alertAtPercent } = site.plan;
  return (
    <div className="rounded-3xl border-2 border-cobalt bg-white p-7 md:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <H className="m-0 font-display text-2xl font-bold">{site.plan.name}</H>
        <span className="rounded-full bg-cobalt-tint px-3 py-1 text-sm font-semibold text-cobalt-deep">No setup fee</span>
      </div>
      <p className="mt-[18px] mb-1 font-display text-[64px] leading-none font-bold tracking-[-0.04em] md:text-[72px]">
        {price}
        <span className="text-[22px] font-medium tracking-normal text-slate">/{site.plan.interval}</span>
      </p>
      <p className="mt-0 mb-[26px] text-[15px] text-slate">Month to month. Cancel any time.</p>
      <ul className="m-0 mb-[30px] grid list-none grid-cols-1 gap-x-6 gap-y-3 p-0 text-base sm:grid-cols-2">
        {planFeatures.map((f) => (
          <li key={f} className="flex gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2446F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-1 flex-none">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {fill(f)}
          </li>
        ))}
      </ul>
      <StartLink className={`${btn.primary} w-full`}>Start for {price} a month</StartLink>
      <p className="mt-4 mb-0 text-sm text-slate">
        {minutes} minutes is roughly {e.callsLow} to {e.callsHigh} calls at {e.callMinutesLow} to {e.callMinutesHigh} minutes
        each. Extra minutes {overage} each, with an email when you reach {alertAtPercent}%.
      </p>
    </div>
  );
}
