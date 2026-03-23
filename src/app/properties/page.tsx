import { PageShell } from '@/components/layout/page-shell';
import { FilterSidebar } from '@/components/properties/filter-sidebar';
import { PropertyCard } from '@/components/properties/property-card';
import { SearchPanel } from '@/components/properties/search-panel';
import { properties } from '@/data/properties';

export default function PropertiesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SearchPanel />
        <div className="mt-10 grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <FilterSidebar />
          <div className="space-y-6">
            <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Search results</p>
                <h1 className="mt-2 text-3xl font-semibold text-ink">{properties.length} curated listings</h1>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-2">Grid view</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">Sort: newest</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">Premium only</span>
              </div>
            </div>
            <div className="grid gap-6 2xl:grid-cols-2">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
