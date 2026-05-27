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
      <section
        className="text-center mb-16 rounded-2xl overflow-hidden py-16 px-6 relative"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay so text remains readable */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <div className="inline-block text-5xl mb-4">⛏️</div>
          <h1 className="text-4xl font-black tracking-tight mb-3 text-white">
            Pickaxe Tycoon Guide & Tools
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
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
              className="px-6 py-3 rounded-xl font-bold text-white border border-white/30 hover:bg-white/10 transition"
            >
              View Codes →
            </Link>
          </div>
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

      {/* Featured Pickaxes — drives to detail pages */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">All Pickaxes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { id: 'coal',       name: 'Coal',       tier: 1,  grade: 'D', color: 'bg-slate-500/20 text-slate-400 border-slate-500/40' },
            { id: 'stone',      name: 'Stone',      tier: 2,  grade: 'D', color: 'bg-slate-500/20 text-slate-400 border-slate-500/40' },
            { id: 'copper',     name: 'Copper',     tier: 3,  grade: 'C', color: 'bg-blue-500/20 text-blue-400 border-blue-500/40' },
            { id: 'iron',       name: 'Iron',       tier: 4,  grade: 'C', color: 'bg-blue-500/20 text-blue-400 border-blue-500/40' },
            { id: 'gold',       name: 'Gold',       tier: 5,  grade: 'B', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' },
            { id: 'diamond',    name: 'Diamond',    tier: 6,  grade: 'B', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' },
            { id: 'crystal',    name: 'Crystal',    tier: 7,  grade: 'A', color: 'bg-orange-500/20 text-orange-400 border-orange-500/40' },
            { id: 'crystal-ii', name: 'Crystal II',  tier: 8,  grade: 'A', color: 'bg-orange-500/20 text-orange-400 border-orange-500/40' },
            { id: 'void',       name: 'Void',       tier: 9,  grade: 'S', color: 'bg-red-500/20 text-red-400 border-red-500/40' },
            { id: 'void-ii',    name: 'Void II',    tier: 10, grade: 'S', color: 'bg-red-500/20 text-red-400 border-red-500/40' },
          ].map((p) => (
            <Link
              key={p.id}
              href={`/tier-list/${p.id}`}
              className={`p-3 rounded-xl border text-center ${p.color} hover:opacity-80 transition`}
            >
              <div className="font-bold text-sm mb-0.5">{p.name}</div>
              <div className="text-xs opacity-60">Tier {p.tier}</div>
            </Link>
          ))}
        </div>
        <p className="text-center mt-3">
          <Link href="/tier-list" className="text-sm text-amber-400 hover:text-amber-300">
            See full tier list with stats →
          </Link>
        </p>
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
