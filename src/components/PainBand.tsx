/** Three numbered cards on Ink. */
export function PainBand({
  eyebrow,
  heading,
  cards,
  closing,
}: {
  eyebrow: string;
  heading: string;
  cards: { title: string; text: string }[];
  closing?: string;
}) {
  return (
    <section className="bg-ink py-[72px] text-chalk md:py-28">
      <div className="wrap">
        <p className="eyebrow text-cobalt-light">{eyebrow}</p>
        <h2 className="h-display m-0 max-w-[820px] text-[32px] text-white md:text-5xl">{heading}</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {cards.map((c, i) => (
            <div key={c.title} className="rounded-[18px] border border-ink-line bg-ink-2 p-7">
              <p className="m-0 font-display text-[15px] text-mist">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3.5 mb-2.5 font-display text-[22px] leading-tight font-bold text-white">{c.title}</h3>
              <p className="m-0 text-base text-fog">{c.text}</p>
            </div>
          ))}
        </div>
        {closing && <p className="mt-12 mb-0 max-w-[760px] text-xl text-white">{closing}</p>}
      </div>
    </section>
  );
}
