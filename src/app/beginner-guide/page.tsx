import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Beginner Guide — How to Mine, Merge & Progress Fast',
  description: 'Learn how to play Pickaxe Tycoon from scratch. Step-by-step guide covering mining, depositing ores, buying pickaxes, and merging.',
  alternates: { canonical: 'https://pickaxetycoon.gg/beginner-guide' },
};

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Beginner Guide</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📖</span>
          <h1 className="text-3xl font-black tracking-tight">Beginner Guide</h1>
        </div>
        <p className="text-gray-400">
          Everything you need to know to get started with Pickaxe Tycoon. Mine efficiently, upgrade smartly, and build your tower.
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="p-5 rounded-2xl border border-slate-700 bg-slate-900/30 mb-10">
        <h2 className="font-bold mb-3">Table of Contents</h2>
        <ul className="space-y-2 text-sm">
          {[
            ['#step1', 'Step 1 — Collect Ores'],
            ['#step2', 'Step 2 — Deposit Ores'],
            ['#step3', 'Step 3 — Buy New Pickaxes'],
            ['#step4', 'Step 4 — Merge Pickaxes'],
            ['#step5', 'Step 5 — Build Your Tower'],
            ['#tips', 'Pro Tips'],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={id} className="text-amber-400 hover:text-amber-300">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Steps */}
      <div className="space-y-12">
        <section id="step1">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-400 text-black font-black text-sm flex items-center justify-center">1</span>
            Collect Ores
          </h2>
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-900/20 space-y-3">
            <p className="text-gray-300 leading-relaxed">
              When you first join Pickaxe Tycoon, your pickaxe automatically mines ores. Walk over the mined ores to collect them — they glow and hover above the ground.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You start with a basic pickaxe. It mines slowly at first, but as you upgrade and buy better pickaxes, you'll collect ores faster.
            </p>
            <div className="flex gap-2 flex-wrap mt-3">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-amber-400">PC: Walk over ores to collect</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-amber-400">Mobile: Tap ores to collect</span>
            </div>
          </div>
        </section>

        <section id="step2">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-400 text-black font-black text-sm flex items-center justify-center">2</span>
            Deposit Ores
          </h2>
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-900/20 space-y-3">
            <p className="text-gray-300 leading-relaxed">
              Once you've collected enough ores, head to the <strong className="text-white">Deposit Ore</strong> platform. Stand on it and your ores will be processed into <strong className="text-amber-400">Money</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Money is the primary currency in Pickaxe Tycoon. You need it to buy new pickaxes and expand your mining operation.
            </p>
            <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/20 text-sm text-gray-300">
              💡 <strong>Tip:</strong> Deposit ores regularly. If your inventory is full, your pickaxe will stop mining until you make space.
            </div>
          </div>
        </section>

        <section id="step3">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-400 text-black font-black text-sm flex items-center justify-center">3</span>
            Buy New Pickaxes
          </h2>
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-900/20 space-y-3">
            <p className="text-gray-300 leading-relaxed">
              With money earned, you can buy new pickaxes from the in-game shop. Better pickaxes mine faster and can harvest rarer ores.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Each pickaxe has a <strong className="text-amber-400">Power</strong> stat. Higher power means faster mining and more valuable ores.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Start with cheap pickaxes and work your way up. Check our <Link href="/tier-list" className="text-amber-400 hover:text-amber-300">Tier List</Link> for the best picks.
            </p>
          </div>
        </section>

        <section id="step4">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-400 text-black font-black text-sm flex items-center justify-center">4</span>
            Merge Pickaxes
          </h2>
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-900/20 space-y-3">
            <p className="text-gray-300 leading-relaxed">
              Once you have <strong className="text-white">two or more of the same pickaxe</strong>, you can merge them into a stronger version. This is key to progression.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Merging takes the two pickaxes and creates a single, more powerful pickaxe. Keep merging to climb the tiers — Stone → Copper → Iron → Gold → Diamond → Emerald → Void.
            </p>
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 text-sm text-gray-300">
              🔮 <strong>Merging</strong> is the fastest way to reach top-tier pickaxes without spending millions.
            </div>
          </div>
        </section>

        <section id="step5">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-400 text-black font-black text-sm flex items-center justify-center">5</span>
            Build Your Tower
          </h2>
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-900/20 space-y-3">
            <p className="text-gray-300 leading-relaxed">
              The ultimate goal of Pickaxe Tycoon is to <strong className="text-white">build a giant mining tower</strong> and <strong className="text-white">collect all the pickaxes</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your tower grows as you progress. Each floor unlocks new pickaxes and challenges. Fill the index to complete the game.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Keep mining, keep merging, keep climbing. The tower is endless — or at least, it feels that way.
            </p>
          </div>
        </section>

        <section id="tips">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            Pro Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tip: 'Deposit often', desc: 'Don\'t let your inventory fill up — deposit every few minutes.' },
              { tip: 'Focus on merging early', desc: 'Merging two mid-tier pickaxes beats buying one expensive one.' },
              { tip: 'Use codes', desc: 'Check our codes page for free rewards that boost your progress.' },
              { tip: 'Watch for updates', desc: 'New pickaxes and areas are added regularly. Check our updates page.' },
            ].map(({ tip, desc }) => (
              <div key={tip} className="p-4 rounded-xl border border-slate-700 bg-slate-900/20">
                <h3 className="font-bold text-amber-400 mb-1">💡 {tip}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 p-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 text-center">
        <p className="text-gray-300 mb-4">Ready to start? Jump into Pickaxe Tycoon now!</p>
        <a
          href="https://www.roblox.com/games/73814003954154/Pickaxe-Tycoon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition"
        >
          Play Pickaxe Tycoon →
        </a>
      </div>
    </main>
  );
}
