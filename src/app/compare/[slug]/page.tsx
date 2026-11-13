import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { comparePages, getComparePage } from '@/content/compare';
import { fill, price } from '@/lib/format';
import { pageMeta } from '@/lib/seo';
import { btn } from '@/lib/ui';
import { routes } from '@/lib/routes';
import { breadcrumbs, faqPage, service } from '@/lib/schema';
import { StartLink } from '@/components/StartLink';
import { CallLink, DemoNumber } from '@/components/CallLink';
import { CompareTable } from '@/components/CompareTable';
import { SectionHead } from '@/components/SectionHead';
import { PlanSection } from '@/components/PlanSection';
import { CheckIcon } from '@/components/Check';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return comparePages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getComparePage((await params).slug);
  if (!c) return {};
  return pageMeta({ title: fill(c.metaTitle), description: fill(c.metaDescription), path: routes.compare(c.slug) });
}

export default async function ComparePage({ params }: Props) {
  const c = getComparePage((await params).slug);
  if (!c) notFound();
  const path = routes.compare(c.slug);

  return (
    <>
      <section className="pt-14 pb-14 md:pt-[88px] md:pb-20">
        <div className="wrap max-w-[900px]">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate">
            <Link href="/" className="text-slate">Home</Link> <span aria-hidden="true">/</span> Compare
          </nav>
          <p className="eyebrow text-cobalt">{c.eyebrow}</p>
          <h1 className="m-0 font-display text-[38px] leading-[1.06] font-bold tracking-tightest md:text-[56px]">{c.h1}</h1>
          <p className="mt-6 mb-0 text-xl text-body" data-speakable>{fill(c.answer)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <StartLink className={btn.primary}>Start for {price} a month</StartLink>
            <CallLink className={btn.outline}>Call it and hear it</CallLink>
          </div>
          <DemoNumber className="mt-4 mb-0 text-[15px] text-body" />
        </div>
      </section>

      <section className="bg-stone py-16 md:py-24">
        <div className="wrap">
          <SectionHead title={c.costHeading} intro={fill(c.costIntro)} size="md" className="mb-10" />
          <CompareTable variant="full" rows={c.tableRows} highlight={c.highlight} caption={`${c.costHeading} Prices compared`} />
          <p className="mt-6 mb-0 text-base">
            <Link href={routes.pricing} className="font-semibold">See what the {price} plan includes</Link>
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <SectionHead title={c.differenceHeading} size="md" className="mb-10" />
          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
            {c.differences.map((d) => (
              <li key={d.title} className="rounded-[18px] border border-line bg-white p-7">
                <h3 className="mt-0 mb-2.5 font-display text-[22px] leading-tight font-bold">{fill(d.title)}</h3>
                <p className="m-0 text-base text-body">{fill(d.text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-16 text-chalk md:py-24">
        <div className="wrap max-w-[860px]">
          <SectionHead title={c.betterHeading} intro={fill(c.betterIntro)} size="md" dark className="mb-8" />
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {c.better.map((b) => (
              <li key={b} className="flex gap-4 rounded-2xl border border-ink-line bg-ink-2 px-6 py-5 text-fog">
                <CheckIcon className="stroke-cobalt-light" />
                <span>{fill(b)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PlanSection eyebrow="The alternative" heading="One plan. Calls and chat. {price}." id="plan" />

      <section className="py-16 md:py-24">
        <div className="wrap max-w-[860px]">
          <SectionHead title="Common questions" size="md" className="mb-8" />
          <Faq items={c.faqs} />
          <p className="mt-10 mb-0 text-[15px] text-slate">
            More on <Link href={routes.pricing}>AI receptionist pricing</Link> or see{' '}
            <Link href="/">how the receptionist works</Link>.
          </p>
        </div>
      </section>

      <FinalCta heading="Stop sending callers to voicemail." text={fill('Every call answered in your name, every message in your inbox. {price} a month, no setup fee, cancel any time.')} />

      <JsonLd
        data={[
          service({ path, description: fill(c.metaDescription), audience: c.audience }),
          faqPage(c.faqs),
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: c.navLabel, path },
          ]),
        ]}
      />
    </>
  );
}
