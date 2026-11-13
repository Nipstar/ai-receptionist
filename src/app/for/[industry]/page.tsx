import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getIndustry, industries } from '@/content/industries';
import { fill, price } from '@/lib/format';
import { pageMeta } from '@/lib/seo';
import { btn } from '@/lib/ui';
import { routes } from '@/lib/routes';
import { industryTitle } from '@/lib/titles';
import { breadcrumbs, faqPage, service } from '@/lib/schema';
import { StartLink } from '@/components/StartLink';
import { CallLink, DemoNumber } from '@/components/CallLink';
import { ChatMock } from '@/components/ChatMock';
import { CallSummaryCard } from '@/components/CallSummaryCard';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';

type Props = { params: Promise<{ industry: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = getIndustry((await params).industry);
  if (!i) return {};
  return pageMeta({ title: industryTitle(i), description: fill(i.metaDescription), path: routes.industry(i.slug) });
}

export default async function IndustryPage({ params }: Props) {
  const i = getIndustry((await params).industry);
  if (!i) notFound();
  const path = routes.industry(i.slug);
  const related = i.related.map((slug) => getIndustry(slug)!).filter(Boolean);

  return (
    <>
      <section className="pt-14 pb-[72px] md:pt-[88px] md:pb-[104px]">
        <div className="wrap grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow text-cobalt">{i.eyebrow}</p>
            <h1 className="m-0 font-display text-[42px] leading-[1.04] font-bold tracking-tightest md:text-6xl">{i.h1}</h1>
            <p className="mt-6 mb-0 text-xl text-body" data-speakable>{fill(i.intro)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StartLink className={btn.primary}>Start for {price} a month</StartLink>
              <CallLink className={btn.outline}>Call it and hear it</CallLink>
            </div>
            <DemoNumber className="mt-4 mb-0 text-[15px] text-body" />
          </div>
          <div className="flex flex-col gap-4">
            <ChatMock title={`Example call · ${i.example.business}`} time={i.example.time} lines={i.example.lines} />
            <CallSummaryCard
              className="md:ml-12"
              sentAt={i.example.summary.sentAt}
              title={i.example.summary.title}
              meta={[i.example.summary.caller, i.example.summary.phone, ...i.example.summary.notes]}
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-chalk md:py-24">
        <div className="wrap">
          <h2 className="h-display m-0 mb-3.5 max-w-[760px] text-[30px] text-white md:text-[44px]">{i.callsHeading}</h2>
          <p className="mt-0 mb-11 max-w-[680px] text-fog">{i.callsIntro}</p>
          <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3">
            {i.calls.map((c) => (
              <li key={c.title} className="rounded-2xl border border-ink-line bg-ink-2 p-6">
                <h3 className="mt-0 mb-1.5 font-display text-[19px] leading-snug font-bold text-white">{c.title}</h3>
                <p className="m-0 text-[15px] text-fog">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="h-display m-0 mb-4 text-[30px] md:text-[44px]">{fill(i.planHeading)}</h2>
            <p className="mt-0 mb-6 text-body">{fill(i.planText)}</p>
            <p className="m-0">
              <Link href={routes.pricing} className="font-semibold">
                See full pricing
              </Link>
            </p>
            {i.upsell && (
              <p className="mt-6 mb-0 rounded-[18px] border border-line bg-white px-6 py-5 text-base text-body">{i.upsell}</p>
            )}
            <p className="mt-8 mb-0 text-[15px] text-slate">
              Also answering calls for{' '}
              <Link href={routes.industry(related[0].slug)} className="underline underline-offset-2">{related[0].name.toLowerCase()}</Link> and{' '}
              <Link href={routes.industry(related[1].slug)} className="underline underline-offset-2">{related[1].name.toLowerCase()}</Link>.
            </p>
          </div>
          <div>
            <h2 className="sr-only">{i.titleName} questions</h2>
            <Faq items={i.faqs} />
          </div>
        </div>
      </section>

      <FinalCta heading={i.ctaHeading} />

      <JsonLd
        data={[
          service({ path, description: fill(i.metaDescription), audience: i.audience }),
          faqPage(i.faqs),
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: i.name, path },
          ]),
        ]}
      />
    </>
  );
}
