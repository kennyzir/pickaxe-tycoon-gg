import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Pickaxe Tycoon Guide',
  description: 'Learn about Pickaxe Tycoon Guide — the ultimate companion site for Pickaxe Tycoon on Roblox.',
  alternates: { canonical: 'https://pickaxetycoon.gg/about' },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">About</span>
      </nav>

      <h1 className="text-3xl font-black tracking-tight mb-6">About Pickaxe Tycoon Guide</h1>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Pickaxe Tycoon Guide is an independent fan site — not affiliated with Roblox Corporation or Popular Marketplace.
          Built to help players find codes, understand pickaxe progression, and calculate mining power.
        </p>
        <p>
          We monitor YouTube videos, gaming media, and community sources to keep codes and game data
          as accurate as possible. Game data is sourced from player-reported information and video analysis.
        </p>
        <p>
          All game names, trademarks, and copyrights belong to their respective owners.
          Roblox® is a registered trademark of Roblox Corporation.
        </p>
      </div>

      <div className="mt-10 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="font-bold text-lg mb-3">Contact</h2>
        <p className="text-gray-400 text-sm">
          For corrections or content requests, use the site feedback channels available on our social pages.
        </p>
      </div>
    </main>
  );
}
