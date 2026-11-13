import Link from 'next/link';
import { home } from '@/content/home';
import { CheckIcon } from './Check';
import { SectionHead } from './SectionHead';

/** "What's included" list with the honest "What it won't do" box. */
export function Included() {
  const c = home.included;
  return (
    <section className="pb-[72px] md:pb-28">
      <div className="wrap grid grid-cols-1 items-start gap-7 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div>
          <SectionHead eyebrow={c.eyebrow} title={c.heading} size="md" />
          <p className="mt-[22px] mb-0 text-lg text-body">{c.intro}</p>
          <div className="mt-8 rounded-[18px] border border-line bg-white px-7 py-[26px]">
            <h3 className="mt-0 mb-3 font-display text-[19px] font-bold">{c.wontHeading}</h3>
            <p className="m-0 text-base text-body">{c.wontText}</p>
            <p className="mt-3.5 mb-0 text-[15px]">
              <Link href="/#faq" className="font-semibold">
                {c.wontLink}
              </Link>
            </p>
          </div>
        </div>
        <ul className="m-0 flex list-none flex-col border-t border-line p-0">
          {c.items.map((it) => (
            <li key={it.title} className="flex gap-4 border-b border-line py-5">
              <CheckIcon />
              <div>
                <strong className="font-semibold">{it.title}</strong>
                <br />
                <span className="text-base text-slate">{it.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
