import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/site.config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GhlChat } from '@/components/GhlChat';
import { Gtm } from '@/components/Gtm';
import { UtmCapture } from '@/components/UtmCapture';
import { JsonLd } from '@/components/JsonLd';
import { organization, website } from '@/lib/schema';

// Self-hosted at build time by next/font: no Google Fonts request at runtime, metric-matched fallbacks (no CLS).
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  applicationName: `${site.name} ${site.tagline}`,
  authors: [{ name: site.owner }],
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#F6F5F1',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={[organization(), website()]} />
        <UtmCapture />
        <Gtm />
        <GhlChat />
      </body>
    </html>
  );
}
