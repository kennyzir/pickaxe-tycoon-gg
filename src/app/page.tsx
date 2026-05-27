import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Guide & Tools — Codes, Tier List, Calculator',
  description: 'The ultimate Pickaxe Tycoon companion. Find all working codes, best pickaxe tier list, and mining calculator.',
  alternates: { canonical: 'https://pickaxetycoon.gg' },
};

const tools = [
  {
    href: '/codes',
    icon: '🎁',
    title: 'Active Codes',
    desc: 'All working Pickaxe Tycoon codes. Updated May 2026.',
    cta: 'View Codes →',
  },
  {
    href: '/tier-list',
    icon: '🏆',
    title: 'Pickaxe Tier List',
    desc: 'Every pickaxe ranked from S to D tier with stats.',
    cta: 'View Tier List →',
  },
  {
    href: '/calculator',
    icon: '⛏️',
    title: 'Mining Calculator',
    desc: 'Calculate your mining power and find the best pickaxe.',
    cta: 'Use Calculator →',
  },
  {
    href: '/beginner-guide',
    icon: '📖',
    title: 'Beginner Guide',
    desc: 'How to mine, merge pickaxes, and build your tower.',
    cta: 'Read Guide →',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-block text-5xl mb-4">⛏️</div>
        <h1 className="text-4xl font-black tracking-tight mb-3">
          Pickaxe Tycoon Guide & Tools
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
          The ultimate companion for Pickaxe Tycoon on Roblox. Codes, tier lists, calculators, and guides — all in one place.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://www.roblox.com/games/73814003954154/Pickaxe-Tycoon"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition"
          >
            Play on Roblox →
          </a>
          <Link
            href="/codes"
            className="px-6 py-3 rounded-xl font-bold border border-slate-600 hover:border-amber-400 transition"
          >
            View Codes
          </Link>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Quick Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="p-6 rounded-2xl border border-slate-700 hover:border-amber-400/50 bg-slate-900/50 hover:bg-slate-800/50 transition group"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-amber-400 transition">{tool.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{tool.desc}</p>
              <span className="text-amber-400 text-sm font-semibold">{tool.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-3">About Pickaxe Tycoon</h2>
        <p className="text-gray-400 leading-relaxed">
          Pickaxe Tycoon is a Roblox tycoon game where you buy pickaxes, mine ores, and merge duplicates to create more powerful tools. 
          Build your mining tower, collect all the pickaxes, and become the ultimate miner. The goal is to unlock every pickaxe in the index.
        </p>
        <div className="mt-4 flex gap-4 text-sm text-gray-500">
          <span>🎮 Roblox ID: 73814003954154</span>
          <span>⛏️ Tycoon / Simulator</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What is Pickaxe Tycoon?', a: 'Pickaxe Tycoon is a Roblox tycoon game about mining ores and collecting pickaxes. Buy tools, mine resources, merge duplicates, and build your tower.' },
            { q: 'Are the codes free?', a: 'Yes, all codes listed on this site are completely free. We update them regularly as new codes are released.' },
            { q: 'How often are codes updated?', a: 'We check for new codes daily and update as soon as they are published.' },
          ].map((faq) => (
            <div key={faq.q} className="p-4 rounded-xl border border-slate-700 bg-slate-900/20">
              <h3 className="font-semibold mb-1">{faq.q}</h3>
              <p className="text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
