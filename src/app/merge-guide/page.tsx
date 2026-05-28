import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Merge Guide — How to Merge Pickaxes (2026)',
  description: 'Complete merge guide for Pickaxe Tycoon. Learn how two identical pickaxes combine into a stronger tier, from Coal to Void Pickaxe II.',
  alternates: { canonical: 'https://pickaxetycoon.gg/merge-guide' },
};

const MERGE_CHAIN = [
  { from: 'Coal Pickaxe', to: 'Stone Pickaxe', tier: 1 },
  { from: 'Stone Pickaxe', to: 'Copper Pickaxe', tier: 2 },
  { from: 'Copper Pickaxe', to: 'Iron Pickaxe', tier: 3 },
  { from: 'Iron Pickaxe', to: 'Gold Pickaxe', tier: 4 },
  { from: 'Gold Pickaxe', to: 'Diamond Pickaxe', tier: 5 },
  { from: 'Diamond Pickaxe', to: 'Crystal Pickaxe', tier: 6 },
  { from: 'Crystal Pickaxe', to: 'Crystal Pickaxe II', tier: 7 },
  { from: 'Crystal Pickaxe II', to: 'Void Pickaxe', tier: 8 },
  { from: 'Void Pickaxe', to: 'Void Pickaxe II', tier: 9 },
];

export default function MergeGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Merge Guide</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🔀</span>
          <h1 className="text-3xl font-black tracking-tight">Merge Guide</h1>
        </div>
        <p className="text-gray-400">
          How merging works in Pickaxe Tycoon — combine two identical pickaxes to unlock the next tier. Full progression chain from Coal to Void Pickaxe II.
        </p>
      </div>

      {/* What is Merging */}
      <section className="mb-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-4">What is Merging?</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            Merging is the core progression mechanic in Pickaxe Tycoon. When you own <strong className="text-white">two identical pickaxes</strong>, you can merge them at the merge station to create one pickaxe of the next tier.
          </p>
          <p>
            Merging is the only way to reach the highest-tier pickaxes like Crystal Pickaxe II and Void Pickaxe II — they cannot be purchased from the shop.
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mt-4">
            <p className="text-amber-300 text-sm font-semibold">
              💡 Key insight from AlphaShoe: After buying 1,500 total pickaxes, he ended up with 2 Crystal Pickaxes. Merge RNG means you need extras — don't sell your duplicates!
            </p>
          </div>
        </div>
      </section>

      {/* Merge Chain */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Full Merge Progression Chain</h2>
        <div className="space-y-3">
          {MERGE_CHAIN.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex-1 p-4 rounded-xl border border-slate-700 bg-slate-900/20">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-gray-500">Tier {step.tier}</span>
                  <span className="font-semibold">{step.from}</span>
                </div>
                <p className="text-xs text-gray-500">Merge 2 × {step.from}</p>
              </div>
              <div className="text-2xl text-amber-400 font-bold shrink-0">→</div>
              <div className="flex-1 p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-gray-500">Tier {step.tier + 1}</span>
                  <span className="font-semibold text-amber-300">{step.to}</span>
                </div>
                <p className="text-xs text-gray-500">Result of merge</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-4 mt-4 p-4 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex-1">
              <p className="font-bold text-red-400">Void Pickaxe II (MAX TIER)</p>
              <p className="text-xs text-gray-500">Reached by merging two Void Pickaxes</p>
            </div>
            <span className="text-2xl">🏆</span>
          </div>
        </div>
      </section>

      {/* Merge-Only Pickaxes */}
      <section className="mb-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-4">Merge-Only Pickaxes</h2>
        <p className="text-gray-300 mb-4">
          These pickaxes cannot be bought from the shop — they only come from merging:
        </p>
        <div className="space-y-3">
          {[
            { name: 'Coal Pickaxe', note: 'Given at start. Cannot be bought.' },
            { name: 'Crystal Pickaxe II', note: 'Merge two Crystal Pickaxes to create.' },
            { name: 'Void Pickaxe II', note: 'MAX tier. Merge two Void Pickaxes.' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700">
              <span className="text-lg">🔒</span>
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-4">Pro Tips</h2>
        <ul className="space-y-3">
          {[
            'Never sell duplicate pickaxes — you need 2 of the same to merge',
            'Keep at least 2 of every tier as you progress',
            'Prioritize buying shop pickaxes first, then merge your way up',
            'Crystal and Void tier merges cost nothing extra — just the duplicates',
            'Watch gameplay videos (Bax, AlphaShoe) to see merge timing strategies',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="text-amber-400 mt-0.5">→</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4">
        <Link href="/tier-list" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          ← View Tier List
        </Link>
        <Link href="/beginner-guide" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          ← Beginner Guide
        </Link>
        <Link href="/ore-guide" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          Ore Guide →
        </Link>
      </div>
    </main>
  );
}
