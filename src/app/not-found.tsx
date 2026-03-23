import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">404</p>
        <h1 className="font-display text-5xl text-ink">Property not found.</h1>
        <p className="text-base leading-7 text-slate-600">
          The requested listing does not exist in the current demo dataset. Return to the search page to browse the curated inventory.
        </p>
        <Link href="/properties" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand">
          Back to listings
        </Link>
      </section>
    </PageShell>
  );
}
