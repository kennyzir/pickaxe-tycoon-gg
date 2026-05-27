import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Pickaxe Tycoon Guide',
  description: 'Privacy policy for Pickaxe Tycoon Guide.',
  alternates: { canonical: 'https://pickaxetycoon.gg/privacy-policy' },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-amber-400">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-black tracking-tight mb-6">Privacy Policy</h1>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>Last updated: May 27, 2026</p>
        <p>
          Pickaxe Tycoon Guide does not collect, store, or share any personal data.
          This site contains no forms, accounts, or tracking systems.
        </p>
        <p>
          We use Cloudflare Pages for hosting. Cloudflare may collect standard server logs
          including IP addresses and requested URLs. This data is handled under Cloudflare's privacy policy.
        </p>
        <p>
          We may display affiliate links to Roblox-related products. These links do not involve
          the collection of personal data beyond standard affiliate network tracking.
        </p>
        <p>
          By using this site, you agree to this privacy policy in full.
        </p>
      </div>
    </main>
  );
}
