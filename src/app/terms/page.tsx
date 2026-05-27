import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Pickaxe Tycoon Guide',
  description: 'Terms of service for Pickaxe Tycoon Guide.',
  alternates: { canonical: 'https://pickaxetycoon.gg/terms' },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Terms of Service</span>
      </nav>

      <h1 className="text-3xl font-black tracking-tight mb-6">Terms of Service</h1>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>Last updated: May 27, 2026</p>
        <p>
          Pickaxe Tycoon Guide is a fan-created informational site. We are not affiliated with,
          endorsed by, or connected to Roblox Corporation or the developers of Pickaxe Tycoon in any way.
        </p>
        <h2 className="text-xl font-bold text-white mt-8">Disclaimer</h2>
        <p>
          All content on this site is provided for informational purposes only. Game data, codes,
          and statistics are compiled from community sources and may not be 100% accurate.
          Use at your own discretion.
        </p>
        <h2 className="text-xl font-bold text-white mt-8">Intellectual Property</h2>
        <p>
          Roblox, Pickaxe Tycoon, and all related game content are property of their respective owners.
          This site is non-commercial and created for fan utility.
        </p>
      </div>
    </main>
  );
}
