const filters = [
  { label: 'Keyword', value: 'riverfront, villa, office...' },
  { label: 'City', value: 'Ho Chi Minh City' },
  { label: 'Price', value: '5B - 50B VND' },
  { label: 'Property type', value: 'Apartment / Villa / Office' },
];

export function SearchPanel() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Search properties</p>
          <h2 className="mt-2 font-display text-4xl text-ink">Refined discovery tools</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A modular search surface replaces the hard-coded filter strips from the original HTML prototype.
          </p>
        </div>
        <button className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
          Apply search
        </button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {filters.map((filter) => (
          <label key={filter.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{filter.label}</span>
            <input
              defaultValue={filter.value}
              className="mt-3 w-full border-none bg-transparent p-0 text-base font-medium text-slate-900 outline-none"
            />
          </label>
        ))}
      </div>
    </section>
  );
}
