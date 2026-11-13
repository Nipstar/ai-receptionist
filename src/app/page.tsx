import { home } from '@/content/home';
import { homeFaqs } from '@/content/faqs';
import { fill, price } from '@/lib/format';
import { pageMeta } from '@/lib/seo';
import { btn } from '@/lib/ui';
import { faqPage, service, speakable } from '@/lib/schema';
import { StartLink } from '@/components/StartLink';
import { CallLink, DemoNumber } from '@/components/CallLink';
import { ChatMock } from '@/components/ChatMock';
import { CallSummaryCard } from '@/components/CallSummaryCard';
import { PainBand } from '@/components/PainBand';
import { Steps } from '@/components/Steps';
import { Included } from '@/components/Included';
import { PlanSection } from '@/components/PlanSection';
import { CompareTable } from '@/components/CompareTable';
import { SectionHead } from '@/components/SectionHead';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';

export const metadata = pageMeta({
  title: fill(home.metaTitle),
  description: fill(home.metaDescription),
  path: '/',
});

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}

export default function HomePage() {
  const call = home.heroCall;
  return (
    <>
      <section id="top" className="pt-14 pb-[72px] md:pt-24 md:pb-[104px]">
        <div className="wrap grid grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <p className="mt-0 mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pr-3.5 pl-2 text-sm font-medium text-body">
              <span className="rounded-full bg-cobalt-tint px-2.5 py-0.5 text-[13px] font-semibold text-cobalt-deep">{home.badge}</span>
              {home.badgeText}
            </p>
            <h1 className="m-0 font-display text-[44px] leading-[1.02] font-bold tracking-tightest md:text-[68px]">
              {fill(home.h1Line1)}
              <br />
              <span className="text-cobalt">{fill(home.h1Line2)}</span>
            </h1>
            <p className="mt-[26px] mb-0 max-w-[540px] text-xl leading-[1.55] text-body" data-speakable>
              {home.intro}
            </p>
            <div className="mt-[34px] flex flex-wrap gap-3">
              <StartLink className={btn.primary}>Start for {price} a month</StartLink>
              <CallLink className={btn.outline}>
                <PlayIcon />
                Call it and hear it
              </CallLink>
            </div>
            <DemoNumber className="mt-4 mb-0 text-[15px] text-body" prefix={`${home.heroChatHint} Demo line:`} />
            <p className="mt-[18px] mb-0 text-sm text-slate">{home.heroFacts.map(fill).join(' · ')}</p>
          </div>
          <div className="flex flex-col gap-4">
            <ChatMock title={call.title} time={call.time} lines={call.lines} live />
            <CallSummaryCard className="md:ml-12" sentAt={call.summary.sentAt} title={call.summary.title} rows={call.summary.rows} />
          </div>
        </div>
      </section>

      <PainBand {...home.pain} />
      <Steps {...home.steps} />
      <Included />
      <PlanSection />

      <section className="py-[72px] md:py-28">
        <div className="wrap">
          <SectionHead eyebrow={home.compare.eyebrow} title={fill(home.compare.heading)} intro={home.compare.intro} size="md" className="mb-10" />
          <CompareTable variant="summary" rows={['ionos', 'ringcentral', 'dialzara']} humanRow caption="AI receptionist and answering service prices compared" />
        </div>
      </section>

      <section id="faq" className="pb-[72px] md:pb-28">
        <div className="wrap max-w-[860px]">
          <SectionHead eyebrow={home.faq.eyebrow} title={home.faq.heading} size="md" className="mb-9" />
          <Faq items={homeFaqs} />
        </div>
      </section>

      <FinalCta heading={home.cta.heading} text={fill(home.cta.text)} />

      <JsonLd
        data={[
          service({ path: '/', description: fill(home.metaDescription) }),
          faqPage(homeFaqs),
          speakable('/'),
        ]}
      />
    </>
  );
}
