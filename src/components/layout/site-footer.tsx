export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="font-display text-2xl text-ink">MrDori Next</h2>
          <p className="mt-3 max-w-xl leading-7">
            A modular App Router rebuild of the legacy prototype, now organized for future marketplace features,
            onboarding flows, and production-ready component reuse.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Experiences</h3>
          <ul className="mt-3 space-y-2">
            <li>Homepage storytelling</li>
            <li>Property search and filters</li>
            <li>Saved and posting UI</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Stack</h3>
          <ul className="mt-3 space-y-2">
            <li>Next.js App Router</li>
            <li>TypeScript modules</li>
            <li>Tailwind responsive layouts</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
