import Link from 'next/link';
import { site } from '@/site.config';
import { pageMeta } from '@/lib/seo';
import { btn } from '@/lib/ui';
import { routes } from '@/lib/routes';
import { PurchaseComplete } from '@/components/PurchaseComplete';

export const metadata = pageMeta({
  title: 'Thank you | AI Receptionist for small business',
  description: 'Your AI receptionist is ordered. Here is what happens next.',
  path: routes.thankYou,
  noindex: true,
});

const steps = [
  {
    title: 'Fill in your onboarding form',
    text: 'Five minutes. Your hours, services, the questions people always ask, any prices you are happy to share, and where to send call summaries.',
  },
  {
    title: `We set it up in ${site.plan.goLive}`,
    text: 'We load your receptionist and website chat with your answers and test it before a customer hears it.',
  },
  {
    title: 'Try your test number',
    text: 'We email you a test number and your chat code. Call it, ask it anything, then forward your calls when you are happy.',
  },
];

export default function ThankYouPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="wrap max-w-[860px]">
        <p className="eyebrow text-cobalt">Order confirmed</p>
        <h1 className="m-0 font-display text-[40px] leading-[1.06] font-bold tracking-tightest md:text-[56px]">
          Thank you. Your receptionist is on its way.
        </h1>
        <p className="mt-6 mb-0 text-xl text-body">
          Your receipt is on its way to your inbox. One short form from you and we take care of the rest.
        </p>
        <ol className="mt-12 grid list-none gap-5 p-0">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-[18px] border border-line bg-white p-7">
              <span className="inline-flex size-11 flex-none items-center justify-center rounded-xl bg-cobalt-tint font-display font-bold text-cobalt-deep" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h2 className="mt-0 mb-2 font-display text-[22px] leading-tight font-bold">{s.title}</h2>
                <p className="m-0 text-base text-body">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={site.ghl.onboardingFormUrl} className={btn.primary}>
            Fill in the onboarding form
          </a>
          <Link href="/">Back to home</Link>
        </div>
        <p className="mt-8 mb-0 text-[15px] text-slate">
          Questions? Email <span className="font-semibold">{site.email}</span>.
        </p>
      </div>
      <PurchaseComplete />
    </section>
  );
}
