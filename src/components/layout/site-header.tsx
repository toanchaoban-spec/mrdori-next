import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Search properties' },
  { href: '/saved', label: 'Saved listings' },
  { href: '/post-property', label: 'Post property' },
  { href: '/auth', label: 'Login / Register' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-lg font-semibold shadow-lg shadow-brand/30">
              MD
            </div>
            <div>
              <p className="font-display text-3xl font-semibold">MrDori</p>
              <p className="text-sm text-white/65">Premium Vietnam real estate marketplace</p>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/10 px-3 py-1">Luxury homes</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Investment listings</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Verified advisors</span>
          </div>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 px-4 py-2 text-white/80 transition hover:border-brand hover:bg-brand hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
