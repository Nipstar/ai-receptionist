/** Shared button classes. Pill, 52px tall (min 44px touch). One primary per section. */
const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold no-underline transition-colors';

export const btn = {
  primary: `${base} min-h-[52px] px-7 text-[17px] bg-cobalt text-white hover:bg-cobalt-deep hover:text-white`,
  outline: `${base} min-h-[52px] px-6 text-[17px] border border-btn-line bg-white text-ink hover:border-ink hover:text-ink`,
  outlineInk: `${base} min-h-[52px] px-6 text-[17px] border border-ink-btn text-white hover:border-white hover:text-white`,
  small: `${base} min-h-11 px-5 text-[15px] bg-cobalt text-white hover:bg-cobalt-deep hover:text-white`,
};
