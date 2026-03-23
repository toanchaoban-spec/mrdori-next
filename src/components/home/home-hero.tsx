import Link from 'next/link';

const quickSearch = [
  'Thu Thiem penthouse',
  'District 1 townhouse',
  'Beach villa in Da Nang',
  'Office in District 7',
];

export function HomeHero() {
  return (
    <section className="bg-ink bg-hero-glow text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand/90">Legacy prototype, modern foundation</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">
            Discover premium Vietnamese property in a modular Next.js experience.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            The original single-file concept becomes a reusable product shell with homepage storytelling, search,
            saved listings, authentication, and property posting surfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/properties" className="rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark">
              Browse listings
            </Link>
            <Link href="/post-property" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-brand hover:bg-white/5">
              Post a property
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/75">
            {quickSearch.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-card backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand/80">Instant search</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['Listing type', 'For sale'],
              ['Property category', 'Apartment / Villa'],
              ['Preferred city', 'Ho Chi Minh City'],
              ['Budget range', '5B - 50B VND'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
                <p className="mt-2 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-white p-5 text-slate-900">
            <p className="text-sm font-semibold text-slate-500">Advisor notes</p>
            <p className="mt-3 text-xl font-semibold text-ink">“A polished buyer funnel should feel premium before a call is ever booked.”</p>
            <p className="mt-4 text-sm text-slate-600">Use the new modular pages to continue building search, CRM, and conversion flows cleanly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
