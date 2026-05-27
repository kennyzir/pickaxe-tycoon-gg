import type { Metadata } from 'next';
import Link from 'next/link';
import tierData from '@/data/tier-list.json';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Tier List — All Pickaxes Ranked (S to D)',
  description: 'Every Pickaxe Tycoon pickaxe ranked from S to D tier. See the best pickaxes, their power stats, and progression path.',
  alternates: { canonical: 'https://pickaxetycoon.gg/tier-list' },
};

interface Pickaxe {
  id: string;
  name: string;
  tier: number;
  grade: 'S' | 'A' | 'B' | 'C' | 'D';
  power: number;
  price: number;
  ore: string;
  rarity: string;
  description: string;
  bestFor: string[];
  image?: string;
}

const PICKAXES = tierData.pickaxes as Pickaxe[];

const TIER_ORDER = ['S', 'A', 'B', 'C', 'D'] as const;

const TIER_COLORS: Record<string, string> = {
  S: 'border-red-500/40 bg-red-500/5',
  A: 'border-orange-500/40 bg-orange-500/5',
  B: 'border-yellow-500/40 bg-yellow-500/5',
  C: 'border-blue-500/40 bg-blue-500/5',
  D: 'border-slate-500/40 bg-slate-500/5',
};

const TIER_BADGE: Record<string, string> = {
  S: 'bg-red-500/20 text-red-400 border border-red-500/40',
  A: 'bg-orange-500/20 text-orange-400 border border-orange-500/40',
  B: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40',
  C: 'bg-blue-500/20 text-blue-400 border border-blue-500/40',
  D: 'bg-slate-500/20 text-slate-400 border border-slate-500/40',
};

const TIER_ORDER_MAP: Record<string, number> = { S: 5, A: 4, B: 3, C: 2, D: 1 };

export default function TierListPage() {
  const sorted = [...PICKAXES].sort((a, b) => TIER_ORDER_MAP[b.grade] - TIER_ORDER_MAP[a.grade]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Tier List</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🏆</span>
          <h1 className="text-3xl font-black tracking-tight">Pickaxe Tycoon Tier List</h1>
        </div>
        <p className="text-gray-400">
          All 10 pickaxes ranked from best to worst. Click any pickaxe for a detailed guide, stats, and merge path. Last updated: {tierData.lastUpdated}.
        </p>
      </div>

      {/* Tier Groups */}
      {TIER_ORDER.map((grade) => {
        const items = sorted.filter((p) => p.grade === grade);
        if (items.length === 0) return null;
        return (
          <section key={grade} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-lg font-black text-sm ${TIER_BADGE[grade]}`}>Tier {grade}</span>
              <span className="text-gray-500 text-sm">{items.length} pickaxe{items.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="space-y-3">
              {items.map((pickaxe) => (
                <div key={pickaxe.id} className={`p-5 rounded-2xl border ${TIER_COLORS[pickaxe.grade]}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {/* KEY INTERNAL LINK — pickaxe name links to detail page */}
                        <Link href={`/tier-list/${pickaxe.id}`} className="font-bold text-lg hover:text-amber-400 transition">
                          {pickaxe.name}
                        </Link>
                        <span className={`px-2 py-0.5 rounded font-mono text-xs font-bold ${TIER_BADGE[pickaxe.grade]}`}>
                          Level {pickaxe.tier}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-xs text-gray-400">
                          {pickaxe.rarity}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{pickaxe.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {pickaxe.bestFor.map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded bg-slate-800/50 text-xs text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-black text-amber-400">{pickaxe.power.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Power</div>
                      {pickaxe.price > 0 ? (
                        <div className="text-sm text-gray-400 mt-1">${pickaxe.price.toLocaleString()}</div>
                      ) : (
                        <div className="text-sm text-purple-400 mt-1">Merge only</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Note */}
      <div className="mt-8 p-4 rounded-xl border border-slate-700 bg-slate-900/20 text-sm text-gray-500">
        <strong className="text-gray-400">Note:</strong> Power values based on community testing and game mechanics analysis. Prices reflect in-game shop costs. Merge-only pickaxes (Crystal II, Void II) have no shop price.
      </div>

      {/* Progression Path */}
      <section className="mt-10 p-6 rounded-2xl border border-amber-400/20 bg-amber-400/5">
        <h2 className="font-bold text-lg mb-4">Progression Path</h2>
        <div className="flex items-center gap-2 flex-wrap text-sm">
          {PICKAXES.map((p, i) => (
            <span key={p.id} className="flex items-center gap-2">
              <Link
                href={`/tier-list/${p.id}`}
                className={`px-2 py-1 rounded font-mono font-bold text-xs ${TIER_BADGE[p.grade]} hover:opacity-70`}
              >
                {p.name}
              </Link>
              {i < PICKAXES.length - 1 && <span className="text-gray-600">→</span>}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm mt-3">
          The game has <strong className="text-white">10 Pickaxe Tiers</strong>. Reach Tier 10 (Void Pickaxe II) to complete the index. Merging two same-tier pickaxes creates the next tier.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/calculator"
            className="px-4 py-2 rounded-lg bg-amber-400 text-black font-bold text-sm hover:bg-amber-300 transition"
          >
            ⛏️ Use Calculator →
          </Link>
          <Link
            href="/beginner-guide"
            className="px-4 py-2 rounded-lg border border-slate-600 font-bold text-sm hover:border-slate-400 transition"
          >
            📖 Beginner Guide →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 p-6 rounded-2xl border border-slate-700">
        <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">What is the best pickaxe in Pickaxe Tycoon?</h3>
            <p className="text-gray-400 text-sm">The Void Pickaxe II (Tier 10) is the ultimate pickaxe with 5,000 power. It is only obtainable by merging two Void Pickaxes.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How do I get better pickaxes?</h3>
            <p className="text-gray-400 text-sm">Mine and sell ores to earn money, then buy new pickaxes from the shop. Collect duplicates to merge into stronger versions. <Link href="/beginner-guide" className="text-amber-400 hover:text-amber-300">See the beginner guide for full details.</Link></p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How many tiers are there?</h3>
            <p className="text-gray-400 text-sm">There are 10 Pickaxe Tiers. <Link href="/tier-list/void" className="text-amber-400 hover:text-amber-300">Void Pickaxe</Link> is Tier 9. <Link href="/tier-list/void-ii" className="text-amber-400 hover:text-amber-300">Void Pickaxe II</Link> is Tier 10 — the final goal.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">What does "Merge only" mean?</h3>
            <p className="text-gray-400 text-sm">Some top-tier pickaxes (Crystal II, Void II) cannot be bought — they can only be created by merging two of the previous tier. <Link href="/beginner-guide#step4" className="text-amber-400 hover:text-amber-300">Learn about merging in the beginner guide.</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
