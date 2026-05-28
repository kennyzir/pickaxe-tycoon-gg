import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Ore Guide — All Ores & Mining Locations (2026)',
  description: 'Complete ore guide for Pickaxe Tycoon. Every ore type from Coal to Void Ore, what pickaxe mines it, and how much it sells for.',
  alternates: { canonical: 'https://pickaxetycoon.gg/ore-guide' },
};

const ORES = [
  { name: 'Coal', tier: 1, value: 'Low', pickaxe: 'Coal Pickaxe (starter)', color: 'text-gray-400', border: 'border-slate-600' },
  { name: 'Stone', tier: 2, value: 'Low', pickaxe: 'Stone Pickaxe', color: 'text-slate-400', border: 'border-slate-500' },
  { name: 'Copper', tier: 3, value: 'Medium', pickaxe: 'Copper Pickaxe', color: 'text-orange-400', border: 'border-orange-600' },
  { name: 'Iron', tier: 4, value: 'Medium', pickaxe: 'Iron Pickaxe', color: 'text-gray-300', border: 'border-gray-500' },
  { name: 'Gold', tier: 5, value: 'High', pickaxe: 'Gold Pickaxe', color: 'text-yellow-400', border: 'border-yellow-500' },
  { name: 'Diamond', tier: 6, value: 'Very High', pickaxe: 'Diamond Pickaxe', color: 'text-cyan-400', border: 'border-cyan-500' },
  { name: 'Crystal', tier: 7, value: 'Very High', pickaxe: 'Crystal Pickaxe', color: 'text-purple-400', border: 'border-purple-500' },
  { name: 'Void Ore', tier: 9, value: 'Extreme', pickaxe: 'Void Pickaxe', color: 'text-red-400', border: 'border-red-500' },
];

export default function OreGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Ore Guide</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">💎</span>
          <h1 className="text-3xl font-black tracking-tight">Ore Guide</h1>
        </div>
        <p className="text-gray-400">
          Every ore in Pickaxe Tycoon, ranked by value. Learn which pickaxe mines each ore and the full progression from Coal to Void.
        </p>
      </div>

      {/* Intro */}
      <section className="mb-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-4">How Ores Work</h2>
        <div className="space-y-3 text-gray-300 text-sm">
          <p>
            In Pickaxe Tycoon, your pickaxe automatically mines ores. Walk over them to collect, then deposit at the processing platform to convert them into <strong className="text-amber-400">Money</strong>.
          </p>
          <p>
            Better pickaxes mine faster and unlock access to higher-value ores. Each pickaxe tier corresponds to a specific ore type.
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mt-4">
            <p className="text-amber-300 text-sm font-semibold">
              💡 The ore chain matches the pickaxe chain: Coal Pickaxe mines Coal → Stone Pickaxe mines Stone → and so on up to Void Pickaxe for Void Ore.
            </p>
          </div>
        </div>
      </section>

      {/* Ore Table */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">All Ores</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Ore</th>
                <th className="text-center py-3 px-4 text-gray-400 font-semibold">Tier</th>
                <th className="text-center py-3 px-4 text-gray-400 font-semibold">Value</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Best Pickaxe</th>
              </tr>
            </thead>
            <tbody>
              {ORES.map((ore, i) => (
                <tr key={ore.name} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
                  <td className="py-3 px-4">
                    <span className={`font-bold ${ore.color}`}>{ore.name}</span>
                  </td>
                  <td className="text-center py-3 px-4 text-gray-400 font-mono">{ore.tier}</td>
                  <td className="text-center py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      ore.value === 'Extreme' ? 'bg-red-500/20 text-red-400' :
                      ore.value === 'Very High' ? 'bg-purple-500/20 text-purple-400' :
                      ore.value === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                      ore.value === 'Medium' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-slate-500/20 text-gray-400'
                    }`}>{ore.value}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    <Link href={`/tier-list/${ore.name.toLowerCase().replace(' ', '-')}`} className="text-amber-400 hover:text-amber-300">
                      {ore.pickaxe}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ore Progression */}
      <section className="mb-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-4">Ore Progression Path</h2>
        <p className="text-gray-300 text-sm mb-4">
          The correct progression chain, confirmed from AlphaShoe gameplay:
        </p>
        <div className="flex flex-wrap gap-2">
          {['Coal', 'Stone', 'Copper', 'Iron', 'Gold', 'Diamond', 'Crystal', 'Void'].map((ore, i) => (
            <div key={ore} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-600 text-sm font-semibold">{ore}</span>
              {i < 7 && <span className="text-gray-600">→</span>}
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-3">Crystal II is a merged pickaxe, not a mined ore type.</p>
      </section>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4">
        <Link href="/tier-list" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          ← View Tier List
        </Link>
        <Link href="/beginner-guide" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          ← Beginner Guide
        </Link>
        <Link href="/merge-guide" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          Merge Guide →
        </Link>
      </div>
    </main>
  );
}
