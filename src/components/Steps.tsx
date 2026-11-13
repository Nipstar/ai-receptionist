import { SectionHead } from './SectionHead';

export function Steps({ eyebrow, heading, items }: { eyebrow: string; heading: string; items: { title: string; text: string }[] }) {
  return (
    <section id="how" className="py-[72px] md:py-28">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={heading} />
        <ol className="mt-10 grid list-none grid-cols-1 gap-6 p-0 md:mt-14 md:grid-cols-3">
          {items.map((s, i) => (
            <li key={s.title} className="rounded-[18px] border border-line bg-white p-[30px]">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-cobalt-tint font-display font-bold text-cobalt-deep" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-5 mb-2.5 font-display text-[22px] leading-tight font-bold">{s.title}</h3>
              <p className="m-0 text-base text-body">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
