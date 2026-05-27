import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-24 text-center">
      <div className="text-6xl mb-6">⛏️</div>
      <h1 className="text-4xl font-black mb-3">404 — Page Not Found</h1>
      <p className="text-gray-400 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-bold bg-amber-400 text-black hover:bg-amber-300 transition inline-block"
      >
        Back to Home →
      </Link>
    </main>
  );
}
