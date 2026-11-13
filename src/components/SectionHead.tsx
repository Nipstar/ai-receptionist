import type { ReactNode } from 'react';

/** Eyebrow + H2 + optional answer paragraph. The first paragraph under an H2 answers it. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  dark = false,
  size = 'lg',
  className = '',
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  size?: 'lg' | 'md';
  className?: string;
  id?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <p className={`eyebrow ${dark ? 'text-cobalt-light' : 'text-cobalt'}`}>{eyebrow}</p>}
      <h2
        id={id}
        className={`h-display m-0 max-w-[820px] text-[32px] ${size === 'lg' ? 'md:text-5xl' : 'md:text-[44px]'} ${dark ? 'text-white' : ''}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-3.5 mb-0 max-w-[720px] ${dark ? 'text-fog' : 'text-body'}`} data-speakable>
          {intro}
        </p>
      )}
    </div>
  );
}
