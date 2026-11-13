import { site } from '@/site.config';
import { pricing } from '@/content/pricing';
import { pricingFaqs } from '@/content/faqs';
import { fill, money, monthCost, price } from '@/lib/format';
import { pageMeta } from '@/lib/seo';
import { btn } from '@/lib/ui';
import { faqPage, product, breadcrumbs } from '@/lib/schema';
import { routes } from '@/lib/routes';
import { StartLink } from '@/components/StartLink';
import { CompareTable } from '@/components/CompareTable';
import { SectionHead } from '@/components/SectionHead';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';

export const metadata = pageMeta({
  title: fill(pricing.metaTitle),
  description: fill(pricing.metaDescription),
  path: routes.pricing,
});

export default function PricingPage() {
  return (
    <>
      <section className="pt-14 pb-10 md:pt-[88px]">
        <div className="wrap max-w-[900px]">
          <p className="eyebrow text-cobalt">{pricing.eyebrow}</p>
          <h1 className="m-0 font-display text-[42px] leading-[1.04] font-bold tracking-tightest md:text-6xl">{fill(pricing.h1)}</h1>
          <p className="mt-6 mb-0 text-xl text-body" data-speakable>{fill(pricing.intro)}</p>
        </div>
      </section>

      <section id="plan" className="pt-10 pb-16 md:pb-24">
        <div className="wrap grid grid-cols-1 items-start gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border-2 border-cobalt bg-white p-7 md:p-10">
            <h2 className="m-0 font-display text-2xl font-bold">{site.plan.name}</h2>
            <p className="mt-[18px] mb-1 font-display text-[64px] leading-none font-bold tracking-[-0.04em] md:text-[80px]">
              {price}
              <span className="text-[22px] font-medium tracking-normal text-slate">/{site.plan.interval}</span>
            </p>
            <p className="mt-0 mb-7 text-[15px] text-slate">{pricing.cardNote}</p>
            <StartLink className={`${btn.primary} w-full`}>Start for {price} a month</StartLink>
            <dl className="mt-[30px] mb-0 border-t border-line-2 text-base">
              {pricing.rows.map((r) => (
                <div key={r.label} className="flex justify-between gap-4 border-b border-line-2 py-3.5 last:border-b-0">
                  <dt>{r.label}</dt>
                  <dd className="m-0 text-right font-semibold">{fill(r.value)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl bg-ink p-8 text-chalk">
              <h2 className="mt-0 mb-[18px] font-display text-[22px] font-bold text-white">{pricing.monthHeading}</h2>
              <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0">
                {site.plan.exampleMonths.map((m) => (
                  <li key={m} className="rounded-[14px] border border-ink-line p-4">
                    <p className="m-0 text-sm text-mist">{m} minutes</p>
                    <p className="mt-1 mb-0 font-display text-[28px] font-bold text-white">{money(monthCost(m))}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 mb-0 text-sm text-mist">{fill(pricing.monthNote)}</p>
            </div>
            <div className="rounded-3xl border border-line bg-white p-8">
              <h2 className="mt-0 mb-2.5 font-display text-[22px] font-bold">{pricing.upsellHeading}</h2>
              <p className="m-0 text-base text-body">{fill(pricing.upsellText)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone py-16 md:py-24">
        <div className="wrap">
          <SectionHead title={pricing.costHeading} intro={fill(pricing.costIntro)} size="md" className="mb-10" />
          <CompareTable variant="full" caption="AI receptionist and answering service prices compared" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap max-w-[860px]">
          <SectionHead title={pricing.faqHeading} size="md" className="mb-8" />
          <Faq items={pricingFaqs} />
        </div>
      </section>

      <FinalCta heading={fill(pricing.ctaHeading)} />

      <JsonLd
        data={[
          product({ path: routes.pricing, description: fill(pricing.intro) }),
          faqPage(pricingFaqs),
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: routes.pricing },
          ]),
        ]}
      />
    </>
  );
}
