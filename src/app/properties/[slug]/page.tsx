import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/page-shell';
import { properties } from '@/data/properties';
import { formatArea, formatCurrency } from '@/lib/utils';

type PropertyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    return {
      title: 'Property not found | MrDori Next',
    };
  }

  return {
    title: `${property.title} | MrDori Next`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
              <div className="relative h-[26rem] w-full">
                <Image src={property.cover} alt={property.title} fill className="object-cover" priority sizes="(min-width: 1280px) 60vw, 100vw" />
              </div>
              <div className="grid gap-4 p-4 sm:grid-cols-3">
                {property.gallery.map((image, index) => (
                  <div key={image} className="relative h-48 w-full overflow-hidden rounded-[1.5rem]">
                    <Image src={image} alt={`${property.title} gallery image ${index + 1}`} fill className="object-cover" sizes="(min-width: 640px) 30vw, 100vw" />
                  </div>
                ))}
              </div>
            </div>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{property.premiumTag}</p>
                  <h1 className="mt-3 font-display text-5xl text-ink">{property.title}</h1>
                  <p className="mt-3 text-base text-slate-500">{property.location}</p>
                </div>
                <p className="font-display text-4xl text-brand">{formatCurrency(property.price)}</p>
              </div>
              <p className="mt-6 text-base leading-8 text-slate-600">{property.description}</p>
              <dl className="mt-8 grid gap-4 rounded-[1.75rem] bg-slate-50 p-6 sm:grid-cols-2 xl:grid-cols-4">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Type</dt>
                  <dd className="mt-2 text-lg font-semibold text-slate-900">{property.type}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Area</dt>
                  <dd className="mt-2 text-lg font-semibold text-slate-900">{formatArea(property.area)}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Bedrooms</dt>
                  <dd className="mt-2 text-lg font-semibold text-slate-900">{property.bedrooms || 'Studio / flexible'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Bathrooms</dt>
                  <dd className="mt-2 text-lg font-semibold text-slate-900">{property.bathrooms}</dd>
                </div>
              </dl>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-xl font-semibold text-ink">Highlights</h2>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    {property.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ink">Amenities</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => (
                      <span key={amenity} className="rounded-full bg-brand-soft px-4 py-2 text-sm text-brand">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Advisor</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">{property.agent.name}</h2>
              <p className="mt-2 text-slate-500">{property.agent.role}</p>
              <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                <p>Phone: {property.agent.phone}</p>
                <p>Status: {property.status}</p>
                <p>Built: {property.yearBuilt}</p>
                <p>District: {property.district}</p>
              </div>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-full bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark">Book a tour</button>
                <button className="w-full rounded-full border border-ink px-5 py-3 font-semibold text-ink transition hover:border-brand hover:text-brand">Save listing</button>
              </div>
            </div>
            <div className="rounded-[2rem] bg-ink p-8 text-white shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand/80">Investment snapshot</p>
              <p className="mt-4 text-3xl font-display">{formatCurrency(property.price / property.area)} / m²</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Placeholder metrics can evolve into yield, transaction history, and comparable inventory once the app is wired to backend data.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
