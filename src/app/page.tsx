import Link from 'next/link';
import { HomeHero } from '@/components/home/home-hero';
import { SectionHeading } from '@/components/home/section-heading';
import { PageShell } from '@/components/layout/page-shell';
import { PropertyCard } from '@/components/properties/property-card';
import { homepageHighlights, properties } from '@/data/properties';

export default function HomePage() {
  const featured = properties.filter((property) => property.featured).slice(0, 3);

  return (
    <PageShell>
      <HomeHero />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why this rebuild"
          title="A cleaner structure for the full marketplace roadmap"
          description="Instead of extending one HTML file, the new project separates content, pages, and reusable presentation components so features can evolve independently."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homepageHighlights.map((highlight) => (
            <article key={highlight.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="text-xl font-semibold text-ink">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured inventory"
            title="High-intent property cards ready for future data wiring"
            description="These cards carry the visual richness of the prototype while keeping the UI reusable across home, search, saved, and detail flows."
          />
          <Link href="/properties" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand">
            View all listings
          </Link>
        </div>
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
