import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/data/properties';
import { formatArea, formatCurrency } from '@/lib/utils';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand/40">
      <div className="relative h-60 w-full overflow-hidden">
        <Image src={property.cover} alt={property.title} fill className="object-cover" sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />
        <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {property.premiumTag}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
          {property.status}
        </span>
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span>{property.type}</span>
            <span>•</span>
            <span>{property.city}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-ink">{property.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{property.location}</p>
            </div>
            <p className="text-right font-display text-3xl text-brand">{formatCurrency(property.price)}</p>
          </div>
          <p className="text-sm leading-6 text-slate-600">{property.description}</p>
        </div>
        <dl className="grid grid-cols-2 gap-3 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Beds</dt>
            <dd className="mt-1 font-semibold text-slate-900">{property.bedrooms || '—'}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Baths</dt>
            <dd className="mt-1 font-semibold text-slate-900">{property.bathrooms}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Area</dt>
            <dd className="mt-1 font-semibold text-slate-900">{formatArea(property.area)}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Built</dt>
            <dd className="mt-1 font-semibold text-slate-900">{property.yearBuilt}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">{property.agent.name}</p>
            <p className="text-sm text-slate-500">{property.agent.role}</p>
          </div>
          <Link href={`/properties/${property.slug}`} className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
