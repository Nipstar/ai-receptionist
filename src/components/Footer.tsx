import Link from 'next/link';
import { isPlaceholder, site } from '@/site.config';
import { industries } from '@/content/industries';
import { comparePages } from '@/content/compare';
import { routes } from '@/lib/routes';

const link = 'text-mist no-underline hover:text-white';

export function Footer() {
  const email = site.email;
  return (
    <footer className="bg-footer pt-16 pb-10 text-[15px] text-mist">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_1fr_1.2fr] md:gap-6">
          <div>
            <p className="m-0 font-display text-lg font-bold text-white">{site.name}</p>
            <p className="mt-1.5 mb-0 text-sm">
              Calls and website chat answered for US small businesses. A product of {site.owner}.
            </p>
          </div>
          <nav aria-label="Product" className="flex flex-col gap-2">
            <span className="font-semibold text-white">Product</span>
            <Link href="/#how" className={link}>How it works</Link>
            <Link href={routes.pricing} className={link}>Pricing</Link>
            <Link href="/#faq" className={link}>FAQ</Link>
          </nav>
          <nav aria-label="Industries" className="flex flex-col gap-2">
            <span className="font-semibold text-white">Industries</span>
            {industries.map((i) => (
              <Link key={i.slug} href={routes.industry(i.slug)} className={link}>
                {i.name}
              </Link>
            ))}
          </nav>
          <nav aria-label="Compare" className="flex flex-col gap-2">
            <span className="font-semibold text-white">Compare</span>
            {comparePages.map((c) => (
              <Link key={c.slug} href={routes.compare(c.slug)} className={link}>
                {c.navLabel}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-footer-line pt-6 text-[13px]">
          <span>
            © {site.copyrightYear} {site.owner}
          </span>
          <span className="flex flex-wrap gap-x-2">
            <Link href={routes.privacy} className="text-mist hover:text-white">Privacy</Link>·
            <Link href={routes.terms} className="text-mist hover:text-white">Terms</Link>·
            {isPlaceholder(email) ? (
              <span>{email}</span>
            ) : (
              <a href={`mailto:${email}`} className="text-mist hover:text-white">{email}</a>
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}
