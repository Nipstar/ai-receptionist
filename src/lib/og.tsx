import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { site } from '@/site.config';
import { price } from '@/lib/format';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

async function font(weight: 500 | 700) {
  // Space Grotesk from @fontsource (WOFF, which Satori can read). Build-time only.
  return readFile(join(process.cwd(), `node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-${weight}-normal.woff`));
}

const MARK = `data:image/svg+xml;base64,${Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><rect width="36" height="36" rx="10" fill="#2446F5"/><g transform="translate(6 6)"><path d="M5 5.5h14a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-7l-4.5 3.5v-3.5H5A2.5 2.5 0 0 1 2.5 15V8A2.5 2.5 0 0 1 5 5.5z" fill="#FFFFFF"/><rect x="7" y="10" width="1.6" height="3" rx="0.8" fill="#2446F5"/><rect x="10" y="8" width="1.6" height="7" rx="0.8" fill="#2446F5"/><rect x="13" y="9" width="1.6" height="5" rx="0.8" fill="#2446F5"/><rect x="16" y="10.25" width="1.6" height="2.5" rx="0.8" fill="#2446F5"/></g></svg>',
).toString('base64')}`;

/** Ink background, eyebrow, headline, logo, price. 1200x630. */
export async function renderOg({ eyebrow, headline }: { eyebrow: string; headline: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0F1216',
          padding: '72px 80px',
          fontFamily: 'Space Grotesk',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, fontWeight: 500, letterSpacing: '0.08em', color: '#9FB0FF', textTransform: 'uppercase' }}>
          {eyebrow}
        </div>
        <div style={{ display: 'flex', fontSize: headline.length > 60 ? 64 : 78, fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.03em', color: '#FFFFFF', maxWidth: 1000 }}>
          {headline}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MARK} width={64} height={64} alt="" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, color: '#FFFFFF' }}>
                <span style={{ color: '#9FB0FF' }}>AI</span>&nbsp;Receptionist
              </div>
              <div style={{ display: 'flex', fontSize: 22, fontWeight: 500, color: '#A3A7AE' }}>{site.tagline}</div>
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 700, color: '#FFFFFF' }}>{price}/mo</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Space Grotesk', data: await font(500), weight: 500, style: 'normal' },
        { name: 'Space Grotesk', data: await font(700), weight: 700, style: 'normal' },
      ],
    },
  );
}
