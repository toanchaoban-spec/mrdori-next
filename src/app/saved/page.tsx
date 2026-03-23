import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { PropertyCard } from '@/components/properties/property-card';
import { properties } from '@/data/properties';

export default function SavedPage() {
  const saved = properties.slice(0, 3);

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Saved listings UI</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-5xl text-ink">A dedicated shortlist for high-intent buyers.</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                This route stands in for the legacy “saved badge” behavior and gives the product room for notes,
                compare mode, and advisor collaboration later.
              </p>
            </div>
            <Link href="/properties" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand">
              Continue browsing
            </Link>
          </div>
        </div>
        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {saved.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
