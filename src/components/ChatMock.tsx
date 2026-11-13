import type { ChatLine } from '@/content/types';

/** The call transcript card from the hero. Receptionist bubbles left on Cobalt wash, caller right. */
export function ChatMock({
  title,
  time,
  lines,
  live = false,
}: {
  title: string;
  time: string;
  lines: ChatLine[];
  live?: boolean;
}) {
  return (
    <figure className="m-0 rounded-[20px] border border-line bg-white px-[22px] pt-[22px] pb-5 shadow-mock">
      <figcaption className="flex items-center justify-between gap-3 border-b border-line-2 pb-3.5">
        <span className="flex items-center gap-2.5 text-[15px] font-semibold">
          {live && <span className="size-2.5 flex-none rounded-full bg-live" aria-hidden="true" />}
          {title}
        </span>
        <span className="text-[13px] whitespace-nowrap text-slate tabular-nums">{time}</span>
      </figcaption>
      <div className="flex flex-col gap-2.5 pt-4 text-[15px] leading-[1.45]">
        {lines.map((l, i) =>
          l.who === 'receptionist' ? (
            <p key={i} className="m-0 max-w-[86%] self-start rounded-[14px_14px_14px_4px] bg-cobalt-wash px-3.5 py-2.5">
              <span className="sr-only">Receptionist: </span>
              {l.text}
            </p>
          ) : (
            <p key={i} className="m-0 max-w-[80%] self-end rounded-[14px_14px_4px_14px] bg-bubble px-3.5 py-2.5">
              <span className="sr-only">Caller: </span>
              {l.text}
            </p>
          ),
        )}
      </div>
    </figure>
  );
}
