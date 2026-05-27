import type { Metadata } from 'next';
import Link from 'next/link';
import tierData from '@/data/tier-list.json';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Tier List — All Pickaxes Ranked (S to D)',
  description: 'Every Pickaxe Tycoon pickaxe ranked from S to D tier. See the best pickaxes, their stats, power, and price.',
  alternates: { canonical: 'https://pickaxetycoon.gg/tier-list' },
};

interface Pickaxe {
  id: string;
  name: string;
  tier: 'S' | 'A' | 'B' | 'C' | 'D';
  power: number;
  price: number;
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
  const sorted = [...PICKAXES].sort((a, b) => TIER_ORDER_MAP[b.tier] - TIER_ORDER_MAP[a.tier]);

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
          All pickaxes ranked from best to worst. Last updated: {tierData.lastUpdated}.
        </p>
      </div>

      {/* Tier Groups */}
      {TIER_ORDER.map((tier) => {
        const items = sorted.filter((p) => p.tier === tier);
        if (items.length === 0) return null;
        return (
          <section key={tier} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-lg font-black text-sm ${TIER_BADGE[tier]}`}>Tier {tier}</span>
              <span className="text-gray-500 text-sm">{items.length} pickaxe{items.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="space-y-3">
              {items.map((pickaxe) => (
                <div key={pickaxe.id} className={`p-5 rounded-2xl border ${TIER_COLORS[pickaxe.tier]}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{pickaxe.name}</h3>
                        <span className={`px-2 py-0.5 rounded font-mono text-xs font-bold ${TIER_BADGE[pickaxe.tier]}`}>
                          T{pickaxe.tier}
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
                      <div className="text-sm text-gray-400 mt-1">${pickaxe.price.toLocaleString()}</div>
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
        <strong className="text-gray-400">Note:</strong> Stats are based on community testing and may vary. Prices reflect in-game costs.
      </div>

      {/* FAQ */}
      <section className="mt-12 p-6 rounded-2xl border border-slate-700">
        <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">What is the best pickaxe in Pickaxe Tycoon?</h3>
            <p className="text-gray-400 text-sm">The Void Pickaxe is currently the highest-tier pickaxe with 2,500 power. It is the ultimate goal for most players.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How do I get better pickaxes?</h3>
            <p className="text-gray-400 text-sm">Mine and sell ores to earn money, then buy new pickaxes from the shop. Collect duplicates to merge into stronger versions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Is the tier list based on power only?</h3>
            <p className="text-gray-400 text-sm">Mostly power, but also consider price-to-power ratio for early and mid-game progression efficiency.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
