'use client';

import { useState, useMemo } from 'react';
import tierData from '@/data/tier-list.json';

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
}

const PICKAXES = tierData.pickaxes as Pickaxe[];

const TIER_COLORS: Record<string, string> = {
  S: 'text-red-400',
  A: 'text-orange-400',
  B: 'text-yellow-400',
  C: 'text-blue-400',
  D: 'text-slate-400',
};

const TIER_BG: Record<string, string> = {
  S: 'bg-red-500/20',
  A: 'bg-orange-500/20',
  B: 'bg-yellow-500/20',
  C: 'bg-blue-500/20',
  D: 'bg-slate-500/20',
};

export default function CalculatorPage() {
  const [selectedId, setSelectedId] = useState<string>(PICKAXES[0].id);
  const [quantity, setQuantity] = useState(1);

  const selected = PICKAXES.find((p) => p.id === selectedId) || PICKAXES[0];

  const totalPower = useMemo(() => selected.power * quantity, [selected.power, quantity]);
  const totalValue = useMemo(() => selected.price * quantity, [selected.price, quantity]);

  const efficiency = useMemo(() => {
    if (selected.price === 0) return 'N/A';
    return (selected.power / Math.log(selected.price + 1)).toFixed(2);
  }, [selected]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Calculator</span>
      </nav>

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">⛏️</span>
          <h1 className="text-3xl font-black tracking-tight">Mining Calculator</h1>
        </div>
        <p className="text-gray-400">
          Calculate total mining power and find the best pickaxe for your stage in Pickaxe Tycoon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Pickaxe Selector */}
        <div>
          <h2 className="font-bold text-lg mb-4">Select Pickaxe</h2>
          <div className="space-y-3">
            {PICKAXES.map((pick) => (
              <button
                key={pick.id}
                onClick={() => setSelectedId(pick.id)}
                className={`w-full p-4 rounded-xl border text-left transition ${
                  selectedId === pick.id
                    ? 'border-amber-400 bg-amber-400/5'
                    : 'border-slate-700 hover:border-slate-500 bg-slate-900/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{pick.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-mono font-bold ${TIER_BG[pick.grade]} ${TIER_COLORS[pick.grade]}`}>
                        T{pick.tier}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs">{pick.rarity} · Mines {pick.ore}</p>
                  </div>
                  <div className="text-right">
                    <div className={`font-black text-lg ${TIER_COLORS[pick.grade]}`}>{pick.power}</div>
                    <div className="text-gray-600 text-xs">power</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Results */}
        <div>
          <h2 className="font-bold text-lg mb-4">Results</h2>
          <div className="p-6 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/5 to-slate-900 mb-6">
            <div className="text-center mb-6">
              <div className={`text-5xl font-black ${TIER_COLORS[selected.grade]}`}>
                {totalPower.toLocaleString()}
              </div>
              <div className="text-gray-500 mt-1">Total Mining Power</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900/50 text-center">
                <div className="text-xl font-black text-amber-400">{selected.power}</div>
                <div className="text-xs text-gray-500 mt-1">Per Pickaxe</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 text-center">
                <div className="text-xl font-black text-white">{quantity}</div>
                <div className="text-xs text-gray-500 mt-1">Quantity</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Price per pickaxe</span>
                <span className="font-mono font-bold">
                  {selected.price > 0 ? `$${selected.price.toLocaleString()}` : 'Merge only'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Total value</span>
                <span className="font-mono font-bold">
                  {selected.price > 0 ? `$${totalValue.toLocaleString()}` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Power/Price ratio</span>
                <span className="font-mono font-bold text-green-400">{efficiency}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Tier</span>
                <span className="font-mono font-bold">{selected.tier} / 10</span>
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block font-semibold text-sm mb-2">Quantity (how many of this pickaxe)</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 font-bold transition"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                max={9999}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-center font-mono font-bold focus:outline-none focus:border-amber-400"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 font-bold transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Pickaxe Details */}
          <div className="p-5 rounded-xl border border-slate-700 bg-slate-900/30">
            <h3 className="font-bold mb-2">{selected.name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {selected.bestFor.map((tag) => (
                <span key={tag} className="px-2 py-1 rounded bg-slate-800 text-xs text-gray-400">{tag}</span>
              ))}
            </div>
            <p className="text-gray-400 text-sm">{selected.description}</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12 p-6 rounded-2xl border border-slate-700">
        <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">How is the calculator power calculated?</h3>
            <p className="text-gray-400 text-sm">Total power = pickaxe base power × quantity. Each pickaxe has a fixed base power value. Crystal II and Void II can only be obtained through merging.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">What is the power/price ratio?</h3>
            <p className="text-gray-400 text-sm">It's a measure of how much power you get per dollar spent. Higher ratio = better value for money in early-mid game.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">What pickaxe should I aim for?</h3>
            <p className="text-gray-400 text-sm">For mid-game: Diamond Pickaxe (Tier 6). For late game: Crystal Pickaxe (Tier 7). The Void Pickaxe II (Tier 10) is the final goal.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
