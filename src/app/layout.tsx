import type { Metadata } from 'next';
import Script from 'next/script';
import { getGameConfig } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const config = getGameConfig();

export const metadata: Metadata = {
  title: {
    default: config.seo.siteTitle,
    template: `%s | ${config.game.name}`,
  },
  description: config.seo.siteDescription,
  keywords: [...config.seo.primaryKeywords, ...config.seo.secondaryKeywords],
  alternates: {
    canonical: config.seo.baseUrl,
  },
  openGraph: {
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    url: config.seo.baseUrl,
    siteName: config.game.name,
    images: [{ url: `${config.seo.baseUrl}/og-default.svg`, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    images: [`${config.seo.baseUrl}/og-default.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased">
        <Header />
        <main className="min-h-[calc(100vh-180px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
