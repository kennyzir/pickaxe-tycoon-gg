import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pickaxe Tycoon Updates — Latest News & Patch Notes',
  description: 'Stay up to date with the latest Pickaxe Tycoon updates, new features, and patch notes.',
  alternates: { canonical: 'https://pickaxetycoon.gg/updates' },
};

const UPDATES = [
  {
    date: 'May 27, 2026',
    version: 'v1.0',
    title: 'Site Launch — Full Tool Suite Released',
    changes: [
      'Pickaxe Tycoon Guide launched with codes, tier list, calculator, and beginner guide',
      'Initial pickaxe data compiled from community sources',
      'Active code monitoring system enabled',
    ],
  },
];

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Updates</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📢</span>
          <h1 className="text-3xl font-black tracking-tight">Updates & Patch Notes</h1>
        </div>
        <p className="text-gray-400">
          The latest news and updates for Pickaxe Tycoon. Check back regularly for new content.
        </p>
      </div>

      {/* Updates Feed */}
      <div className="space-y-8">
        {UPDATES.map((update) => (
          <article key={update.date} className="p-6 rounded-2xl border border-slate-700 bg-slate-900/30">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold mb-1">{update.title}</h2>
                <p className="text-gray-500 text-sm">{update.date} · {update.version}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {update.changes.map((change) => (
                <li key={change} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Notify CTA */}
      <div className="mt-12 p-6 rounded-2xl border border-slate-700 bg-slate-900/20 text-center">
        <p className="text-gray-400 text-sm mb-3">Want to know when new codes drop?</p>
        <a
          href="/codes"
          className="inline-block px-6 py-3 rounded-xl font-bold bg-amber-400 text-black hover:bg-amber-300 transition"
        >
          Check Codes Page →
        </a>
      </div>
    </main>
  );
}
