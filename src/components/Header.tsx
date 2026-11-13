import Link from 'next/link';
import { Logo } from './Logo';
import { StartLink } from './StartLink';
import { industries } from '@/content/industries';
import { routes } from '@/lib/routes';
import { btn } from '@/lib/ui';
import { price } from '@/lib/format';

const navLink = 'text-ink no-underline hover:text-cobalt';

function Chevron() {
  return (
    <svg
      className="menu-chevron transition-transform"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** Industries dropdown and mobile menu use native <details>: no JS, keyboard accessible. */
export function Header() {
  return (
    <header className="relative z-20 border-b border-line bg-paper">
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          <Link href="/#how" className={navLink}>
            How it works
          </Link>
          <Link href={routes.pricing} className={navLink}>
            Pricing
          </Link>
          <details className="menu relative">
            <summary className={`${navLink} flex items-center gap-1.5`}>
              Industries <Chevron />
            </summary>
            <ul className="absolute left-1/2 top-[calc(100%+14px)] w-64 -translate-x-1/2 rounded-[18px] border border-line bg-white p-2 shadow-mock">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={routes.industry(i.slug)}
                    className="block rounded-xl px-3.5 py-2.5 text-ink no-underline hover:bg-paper hover:text-cobalt"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link href="/#faq" className={navLink}>
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2.5">
          <StartLink className={btn.small}>Start for {price}</StartLink>
          <details className="menu md:hidden">
            <summary
              className="flex size-11 items-center justify-center rounded-full border border-btn-line bg-white text-ink"
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute inset-x-0 top-full border-b border-line bg-paper px-5 pb-6 pt-2 text-[17px] font-medium"
            >
              <ul className="flex flex-col">
                <li><Link href="/#how" className={`${navLink} block py-3`}>How it works</Link></li>
                <li><Link href={routes.pricing} className={`${navLink} block py-3`}>Pricing</Link></li>
                <li><Link href="/#faq" className={`${navLink} block py-3`}>FAQ</Link></li>
              </ul>
              <p className="eyebrow mt-4 text-slate">Industries</p>
              <ul className="grid grid-cols-2 gap-x-4">
                {industries.map((i) => (
                  <li key={i.slug}>
                    <Link href={routes.industry(i.slug)} className={`${navLink} block py-2 text-[15px]`}>
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
