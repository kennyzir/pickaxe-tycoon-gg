'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import codesData from '@/data/codes.json';

interface Code {
  code: string;
  reward: string;
  source: string;
  addedDate: string;
  status: 'active' | 'expired';
  isNew?: boolean;
}

const CODES = codesData.codes as Code[];

export default function CodesPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const activeCodes = CODES.filter((c) => c.status === 'active');
  const expiredCodes = CODES.filter((c) => c.status === 'expired');

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(code);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Codes</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🎁</span>
          <h1 className="text-3xl font-black tracking-tight">Pickaxe Tycoon Codes</h1>
        </div>
        <p className="text-gray-400">
          All working codes for Pickaxe Tycoon. Last updated: {codesData.lastUpdated}.
        </p>
      </div>

      {/* How to Redeem */}
      <div className="p-5 rounded-2xl border border-amber-400/20 bg-amber-400/5 mb-10">
        <h2 className="font-bold text-lg mb-3">How to Redeem Codes</h2>
        <ol className="space-y-2 text-gray-300 text-sm">
          <li>1. Open Pickaxe Tycoon on Roblox</li>
          <li>2. Click the <strong>Settings</strong> button in-game</li>
          <li>3. Look for the <strong>Codes</strong> button</li>
          <li>4. Enter the code and press <strong>Redeem</strong></li>
          <li>5. Enjoy your free rewards!</li>
        </ol>
      </div>

      {/* Active Codes */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-bold">Active Codes</h2>
          <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
            {activeCodes.length}
          </span>
        </div>
        {activeCodes.length === 0 ? (
          <p className="text-gray-500 p-6 text-center border border-dashed border-slate-700 rounded-xl">
            No active codes right now. Check back soon!
          </p>
        ) : (
          <div className="space-y-3">
            {activeCodes.map((code) => (
              <div key={code.code} className="flex items-center justify-between p-4 rounded-xl border border-slate-700 bg-slate-900/50 hover:border-green-500/30 transition">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <code className="font-mono font-bold text-green-400">{code.code}</code>
                    {code.isNew && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-400 text-xs font-bold">NEW</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{code.reward}</p>
                  <p className="text-gray-600 text-xs mt-1">Source: {code.source} · Added: {code.addedDate}</p>
                </div>
                <button
                  onClick={() => copyCode(code.code)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition ${
                    copied === code.code
                      ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {copied === code.code ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Expired Codes */}
      {expiredCodes.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-gray-500">Expired Codes</h2>
          </div>
          <div className="space-y-3">
            {expiredCodes.map((code) => (
              <div key={code.code} className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-900/20 opacity-60">
                <div>
                  <code className="font-mono text-gray-500">{code.code}</code>
                  <p className="text-gray-600 text-sm mt-1">{code.reward}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-gray-600 text-xs font-bold">Expired</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mt-12 p-6 rounded-2xl border border-slate-700">
        <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">How do I get new codes?</h3>
            <p className="text-gray-400 text-sm">Codes are released by the developer through YouTube videos and Discord. We update this page as soon as new codes are found.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Why did a code stop working?</h3>
            <p className="text-gray-400 text-sm">Most codes have an expiration date or a limited number of uses. Once max redemptions are reached, the code expires.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Are these codes safe?</h3>
            <p className="text-gray-400 text-sm">Yes, all codes are official and come from the game's developer or official YouTube/Discord channels.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
