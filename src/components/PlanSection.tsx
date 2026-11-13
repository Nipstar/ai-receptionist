import { site } from '@/site.config';
import { fill } from '@/lib/format';
import { home } from '@/content/home';
import { btn } from '@/lib/ui';
import { PlanCard } from './PlanCard';
import { CallLink } from './CallLink';
import { SectionHead } from './SectionHead';

/** Stone band: plan card + "Hear it before you pay" + done-for-you upsell. Used on home and compare pages. */
export function PlanSection({ eyebrow, heading, id = 'pricing' }: { eyebrow?: string; heading?: string; id?: string }) {
  const p = home.pricing;
  return (
    <section id={id} className="bg-stone py-[72px] md:py-28">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow ?? p.eyebrow} title={fill(heading ?? p.heading)} className="mb-10 md:mb-12" />
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          <PlanCard />
          <div className="flex flex-col gap-5">
            <div className="flex-1 rounded-3xl bg-ink p-8 text-chalk">
              <h3 className="mt-0 mb-2.5 font-display text-[22px] font-bold text-white">{p.demoHeading}</h3>
              <p className="mt-0 mb-[22px] text-base text-fog">{p.demoText}</p>
              <CallLink className={`${btn.outlineInk} min-h-12 px-[22px] text-base`}>Call {site.demoPhone.display}</CallLink>
            </div>
            <div className="flex-1 rounded-3xl border border-line bg-white p-8">
              <h3 className="mt-0 mb-2.5 font-display text-[22px] font-bold">{p.upsellHeading}</h3>
              <p className="m-0 text-base text-body">{p.upsellText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
