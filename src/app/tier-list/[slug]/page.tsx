import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPickaxes, getPickaxeBySlug, getPickaxeById } from '@/lib/data';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

const pickaxes = getPickaxes();

export function generateStaticParams() {
  return pickaxes.map((pickaxe) => ({ slug: pickaxe.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pickaxe = getPickaxeBySlug(slug);
  if (!pickaxe) return { title: 'Not Found' };

  return {
    title: `${pickaxe.name} — Pickaxe Tycoon Guide`,
    description: `Complete guide for ${pickaxe.name} in Pickaxe Tycoon. Power: ${pickaxe.power}, Tier ${pickaxe.tier} (Grade ${pickaxe.grade}). ${pickaxe.description}`,
    alternates: { canonical: `https://pickaxetycoon.gg/tier-list/${slug}` },
    keywords: [
      `Pickaxe Tycoon ${pickaxe.name}`,
      `Pickaxe Tycoon Tier ${pickaxe.tier}`,
      `Pickaxe Tycoon ${pickaxe.ore}`,
      `Pickaxe Tycoon ${pickaxe.grade} tier`,
      `Pickaxe Tycoon ${pickaxe.name} power`,
      `Pickaxe Tycoon mining guide`,
      `Pickaxe Tycoon merge guide`,
    ],
  };
}

const GRADE_COLORS: Record<string, string> = {
  S: 'border-red-500/40 bg-red-500/5',
  A: 'border-orange-500/40 bg-orange-500/5',
  B: 'border-yellow-500/40 bg-yellow-500/5',
  C: 'border-blue-500/40 bg-blue-500/5',
  D: 'border-slate-500/40 bg-slate-500/5',
};

const GRADE_BADGE: Record<string, string> = {
  S: 'bg-red-500/20 text-red-400 border border-red-500/40',
  A: 'bg-orange-500/20 text-orange-400 border border-orange-500/40',
  B: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40',
  C: 'bg-blue-500/20 text-blue-400 border border-blue-500/40',
  D: 'bg-slate-500/20 text-slate-400 border border-slate-500/40',
};

export default async function PickaxeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pickaxe = getPickaxeBySlug(slug);
  if (!pickaxe) notFound();

  const nextTierPickaxe = pickaxe.nextTier ? getPickaxeById(pickaxe.nextTier) : null;
  const prevTierPickaxe = pickaxe.mergeFrom ? getPickaxeById(pickaxe.mergeFrom) : null;

  const faqSchema = buildFAQSchema([
    {
      question: `What tier is the ${pickaxe.name}?`,
      answer: `The ${pickaxe.name} is Tier ${pickaxe.tier} with a Grade ${pickaxe.grade} rating and ${pickaxe.power.toLocaleString()} power.`,
    },
    {
      question: `How do I get the ${pickaxe.name}?`,
      answer: pickaxe.mergeOnly
        ? `The ${pickaxe.name} cannot be purchased — it is only obtainable by merging two ${prevTierPickaxe?.name ?? 'previous tier'} pickaxes.`
        : `You can purchase the ${pickaxe.name} from the in-game shop for $${pickaxe.price.toLocaleString()}.`,
    },
    {
      question: `What ore does the ${pickaxe.name} mine?`,
      answer: `The ${pickaxe.name} is designed for ${pickaxe.ore} mining.`,
    },
    {
      question: `What is the ${pickaxe.name} power stat?`,
      answer: `The ${pickaxe.name} has a power of ${pickaxe.power.toLocaleString()}, making it a ${pickaxe.rarity.toLowerCase()} tier tool.`,
    },
    {
      question: `How does merging work in Pickaxe Tycoon?`,
      answer: `Collect two identical pickaxes and merge them at the merge station to create the next tier. Two ${pickaxe.name}s would create a ${nextTierPickaxe?.name ?? 'higher tier'} pickaxe.`,
    },
  ]);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Tier List', item: '/tier-list' },
    { name: pickaxe.name, item: `/tier-list/${slug}` },
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${pickaxe.name} - Pickaxe Tycoon`,
    description: pickaxe.description,
    itemListElement: pickaxes.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `https://pickaxetycoon.gg/tier-list/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema, jsonLd]) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-amber-400">Home</a>
          <span className="mx-2">›</span>
          <Link href="/tier-list" className="hover:text-amber-400">Tier List</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">{pickaxe.name}</span>
        </nav>

        {/* Hero */}
        <div className={`p-8 rounded-2xl border ${GRADE_COLORS[pickaxe.grade]} mb-8`}>
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-3xl font-black tracking-tight">{pickaxe.name}</h1>
                <span className={`px-3 py-1 rounded-lg font-black text-sm ${GRADE_BADGE[pickaxe.grade]}`}>
                  Grade {pickaxe.grade}
                </span>
                <span className="px-2 py-1 rounded bg-slate-800 text-xs text-gray-400">
                  Tier {pickaxe.tier}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{pickaxe.description}</p>
              <div className="flex flex-wrap gap-2">
                {pickaxe.bestFor.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded bg-slate-800/50 text-xs text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-4xl font-black text-amber-400">{pickaxe.power.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Power</div>
              <div className={`text-sm mt-2 ${pickaxe.mergeOnly ? 'text-purple-400' : 'text-gray-400'}`}>
                {pickaxe.mergeOnly ? 'Merge only' : `$${pickaxe.price.toLocaleString()}`}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-center">
            <div className="text-2xl font-black text-amber-400">{pickaxe.tier}</div>
            <div className="text-xs text-gray-500 mt-1">Pickaxe Tier</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-center">
            <div className="text-2xl font-black text-amber-400">{pickaxe.power.toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">Power</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-center">
            <div className="text-2xl font-black text-amber-400">{pickaxe.ore}</div>
            <div className="text-xs text-gray-500 mt-1">Ore Type</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-center">
            <div className="text-2xl font-black text-amber-400">{pickaxe.rarity}</div>
            <div className="text-xs text-gray-500 mt-1">Rarity</div>
          </div>
        </div>

        {/* Merge Chain */}
        <section className="mb-8">
          <h2 className="font-bold text-lg mb-4">Progression Path</h2>
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-900/20">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {prevTierPickaxe ? (
                <>
                  <Link
                    href={`/tier-list/${prevTierPickaxe.slug}`}
                    className={`px-3 py-2 rounded-lg font-mono font-bold text-xs ${GRADE_BADGE[prevTierPickaxe.grade]} hover:opacity-80`}
                  >
                    {prevTierPickaxe.name}
                  </Link>
                  <span className="text-gray-600">+ 2x →</span>
                </>
              ) : (
                <>
                  <span className="px-3 py-2 rounded-lg font-mono font-bold text-xs bg-slate-800 text-gray-500">Start</span>
                  <span className="text-gray-600">→</span>
                </>
              )}
              <span className={`px-4 py-2 rounded-lg font-mono font-black text-sm ${GRADE_BADGE[pickaxe.grade]} border-2 border-current`}>
                {pickaxe.name}
              </span>
              {nextTierPickaxe ? (
                <>
                  <span className="text-gray-600">→</span>
                  <Link
                    href={`/tier-list/${nextTierPickaxe.slug}`}
                    className={`px-3 py-2 rounded-lg font-mono font-bold text-xs ${GRADE_BADGE[nextTierPickaxe.grade]} hover:opacity-80`}
                  >
                    {nextTierPickaxe.name}
                  </Link>
                </>
              ) : (
                <>
                  <span className="text-gray-600">→</span>
                  <span className="px-3 py-2 rounded-lg font-mono font-bold text-xs bg-purple-500/20 text-purple-400 border border-purple-500/40">MAX TIER</span>
                </>
              )}
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              {pickaxe.mergeOnly
                ? `The ${pickaxe.name} is merge-only. Collect two ${prevTierPickaxe?.name ?? 'previous tier'} pickaxes to create this.`
                : `The ${pickaxe.name} can be purchased or obtained through merging.`}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="p-6 rounded-2xl border border-slate-700">
          <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: `What tier is the ${pickaxe.name}?`,
                a: `The ${pickaxe.name} is Tier ${pickaxe.tier} with a Grade ${pickaxe.grade} rating and ${pickaxe.power.toLocaleString()} power.`,
              },
              {
                q: `How do I get the ${pickaxe.name}?`,
                a: pickaxe.mergeOnly
                  ? `The ${pickaxe.name} cannot be purchased — it is only obtainable by merging two ${prevTierPickaxe?.name ?? 'previous tier'} pickaxes.`
                  : `You can purchase the ${pickaxe.name} from the in-game shop for $${pickaxe.price.toLocaleString()}.`,
              },
              {
                q: `What ore does the ${pickaxe.name} mine?`,
                a: `The ${pickaxe.name} is designed for ${pickaxe.ore} mining.`,
              },
              {
                q: `How does merging work in Pickaxe Tycoon?`,
                a: `Collect two identical pickaxes and merge them at the merge station to create the next tier.`,
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-1">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {prevTierPickaxe ? (
            <Link
              href={`/tier-list/${prevTierPickaxe.slug}`}
              className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm hover:border-slate-500"
            >
              ← {prevTierPickaxe.name}
            </Link>
          ) : <div />}
          <Link
            href="/tier-list"
            className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm hover:border-slate-500"
          >
            Full Tier List
          </Link>
          {nextTierPickaxe ? (
            <Link
              href={`/tier-list/${nextTierPickaxe.slug}`}
              className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm hover:border-slate-500"
            >
              {nextTierPickaxe.name} →
            </Link>
          ) : <div />}
        </div>
      </main>
    </>
  );
}
