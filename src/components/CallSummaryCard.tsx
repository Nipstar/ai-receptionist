/** The "Sent to you" email summary card, on Ink. Either detail rows (home) or a single meta line (industries). */
export function CallSummaryCard({
  sentAt,
  title,
  rows,
  meta,
  className = '',
}: {
  sentAt: string;
  title: string;
  rows?: { label: string; value: string; accent?: boolean }[];
  meta?: string[];
  className?: string;
}) {
  return (
    <div className={`rounded-[20px] bg-ink px-[22px] py-5 text-chalk shadow-mock-ink ${className}`}>
      <p className="m-0 flex items-center gap-2.5 text-[13px] text-mist">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
        Sent to you · {sentAt}
      </p>
      <p className="mt-2.5 mb-3 font-display text-lg font-semibold text-white">{title}</p>
      {rows && (
        <dl className="m-0 grid grid-cols-[88px_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-sm">
          {rows.map((r) => (
            <div key={r.label} className="contents">
              <dt className="text-mist">{r.label}</dt>
              <dd className={`m-0 ${r.accent ? 'font-semibold text-cobalt-light' : ''}`}>{r.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {meta && <p className="m-0 text-sm text-fog">{meta.join(' · ')}</p>}
    </div>
  );
}
