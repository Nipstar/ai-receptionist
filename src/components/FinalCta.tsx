import { btn } from '@/lib/ui';
import { price } from '@/lib/format';
import { StartLink } from './StartLink';
import { CallLink, DemoNumber } from './CallLink';

export function FinalCta({ heading, text }: { heading: string; text?: string }) {
  return (
    <section className="bg-ink py-[72px] text-chalk md:py-28">
      <div className="wrap max-w-[820px] text-center">
        <h2 className="h-display m-0 text-[32px] leading-[1.04] tracking-tightest text-white md:text-[56px]">{heading}</h2>
        {text && <p className="mx-auto mt-[22px] mb-0 max-w-[600px] text-[19px] text-fog">{text}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <StartLink className={btn.primary}>Start for {price} a month</StartLink>
          <CallLink className={btn.outlineInk}>Call the demo line</CallLink>
        </div>
        <DemoNumber className="mt-4 mb-0 text-sm text-mist" />
      </div>
    </section>
  );
}
