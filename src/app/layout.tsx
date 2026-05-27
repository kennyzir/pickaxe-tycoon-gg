import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://pickaxetycoon.gg'),
  title: {
    default: 'Pickaxe Tycoon Guide & Tools — Codes, Tier List, Calculator',
    template: '%s | Pickaxe Tycoon Guide',
  },
  description: 'The ultimate Pickaxe Tycoon companion — all working codes, best tier list, and mining calculator. Updated May 2026.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pickaxetycoon.gg',
    siteName: 'Pickaxe Tycoon Guide',
    title: 'Pickaxe Tycoon Guide & Tools — Codes, Tier List, Calculator',
    description: 'The ultimate Pickaxe Tycoon companion — all working codes, best tier list, and mining calculator.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
