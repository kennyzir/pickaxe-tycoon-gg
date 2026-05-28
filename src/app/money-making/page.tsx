import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Money Making Guide — Fastest Way to Earn (2026)',
  description: 'How to make money fast in Pickaxe Tycoon. Best strategies for earning, efficient deposit timing, and maximizing your income per session.',
  alternates: { canonical: 'https://pickaxetycoon.gg/money-making' },
};

export default function MoneyMakingPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Money Making Guide</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">💰</span>
          <h1 className="text-3xl font-black tracking-tight">Money Making Guide</h1>
        </div>
        <p className="text-gray-400">
          The fastest ways to earn in Pickaxe Tycoon — from basic collection to advanced strategies used by top players like Bax.
        </p>
      </div>

      {/* Core Mechanic */}
      <section className="mb-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-4">How You Earn Money</h2>
        <div className="space-y-3 text-gray-300 text-sm">
          <p>
            The core loop is simple: <strong className="text-white">Pickaxe mines ore → Walk over ore to collect → Deposit at processing platform → Get Money</strong>.
          </p>
          <p>
            Your pickaxe mines automatically. The key to making money faster is upgrading your pickaxe tier (which mines faster) and depositing frequently so you don't hit collection capacity.
          </p>
        </div>
      </section>

      {/* Strategies */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Money-Making Strategies</h2>
        <div className="space-y-5">
          {[
            {
              level: 'Beginner',
              icon: '🌱',
              tips: [
                'Deposit ores every 30-60 seconds — do not let your inventory fill up',
                'Start buying new pickaxes as soon as you have enough money',
                'Focus on progression, not maximizing per-deposit',
                'Upgrade to Stone Pickaxe early ($100) — significantly faster mining',
              ],
            },
            {
              level: 'Intermediate',
              icon: '⚡',
              tips: [
                'Keep 2 of every pickaxe tier for merging, sell excess duplicates',
                'Target high-value ores (Gold, Diamond) once you unlock them',
                'Deposit before going idle — full inventory means lost mining time',
                'Crystal Pickaxe mines significantly faster — prioritize reaching it',
              ],
            },
            {
              level: 'Advanced',
              icon: '💎',
              tips: [
                'Bax-style "perfect" setup: maximize pickaxe count for massive collection',
                'Void Pickaxe earns the most per ore — push to Tier 9 ASAP',
                'Use Crystal Pickaxe II as your primary earner after merging',
                'Monitor YouTube for new money-making tips from Pickaxe Tycoon creators',
              ],
            },
          ].map((section) => (
            <div key={section.level} className="p-6 rounded-2xl border border-slate-700 bg-slate-900/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-lg font-bold">{section.level} Strategies</h3>
              </div>
              <ul className="space-y-2">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="text-amber-400 mt-0.5 shrink-0">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Income Stats */}
      <section className="mb-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
        <h2 className="text-xl font-bold mb-4">Estimated Income by Tier</h2>
        <p className="text-gray-400 text-sm mb-4">
          Based on community gameplay data (AlphaShoe, Bax). Actual income varies by deposit size and timing.
        </p>
        <div className="space-y-3">
          {[
            { tier: 'Coal / Stone', income: '~$50-200 / deposit', color: 'text-gray-400' },
            { tier: 'Copper / Iron', income: '~$500-2,000 / deposit', color: 'text-orange-400' },
            { tier: 'Gold / Diamond', income: '~$5,000-20,000 / deposit', color: 'text-yellow-400' },
            { tier: 'Crystal Pickaxe', income: '~$20,000+ / deposit', color: 'text-purple-400' },
            { tier: 'Void Pickaxe II (MAX)', income: '~$100,000+ / deposit', color: 'text-red-400' },
          ].map((item) => (
            <div key={item.tier} className="flex justify-between items-center p-3 rounded-xl bg-slate-800/50 border border-slate-700">
              <span className={`font-semibold ${item.color}`}>{item.tier}</span>
              <span className="text-gray-300 text-sm font-mono">{item.income}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-3">
          AlphaShoe reported earning ~$20,000 per Crystal Pickaxe collection with 1,500 total pickaxes.
        </p>
      </section>

      {/* Related Pages */}
      <div className="flex flex-wrap gap-4">
        <Link href="/tier-list" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          View Tier List
        </Link>
        <Link href="/beginner-guide" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          Beginner Guide
        </Link>
        <Link href="/merge-guide" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          Merge Guide
        </Link>
        <Link href="/ore-guide" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-amber-500/50 text-sm font-semibold">
          Ore Guide
        </Link>
      </div>
    </main>
  );
}
