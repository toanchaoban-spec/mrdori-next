const fields = [
  ['Listing title', 'Riverfront duplex in Thu Thiem'],
  ['Property type', 'Apartment / Villa / Office'],
  ['Location', 'District, city, neighborhood'],
  ['Expected price', 'Enter sale or monthly rent'],
  ['Area', 'Square meters'],
  ['Bedrooms / rooms', '4'],
];

export function PostPropertyForm() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] bg-white p-8 shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Seller cockpit</p>
        <h1 className="mt-4 font-display text-5xl text-ink">Post a new listing with a clean, guided workflow.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          This screen replaces the former modal-based posting experience with a dedicated route that can later support drafts,
          media uploads, moderation, and plan selection.
        </p>
        <div className="mt-8 rounded-3xl bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">Publishing checklist</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Provide an address and market-ready title.</li>
            <li>• Add pricing, specifications, and target audience.</li>
            <li>• Upload photography, floor plans, and legal docs later.</li>
          </ul>
        </div>
      </div>
      <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map(([label, placeholder]) => (
            <label key={label} className="block text-sm text-slate-600">
              {label}
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand/30 transition focus:ring-4" placeholder={placeholder} />
            </label>
          ))}
          <label className="block text-sm text-slate-600 md:col-span-2">
            Property story
            <textarea className="mt-2 min-h-40 w-full rounded-[1.5rem] border border-slate-200 px-4 py-3 outline-none ring-brand/30 transition focus:ring-4" placeholder="Describe the strongest selling points, nearby landmarks, and fit for buyers or tenants." />
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark">Save draft</button>
          <button className="rounded-full border border-ink px-6 py-3 font-semibold text-ink transition hover:border-brand hover:text-brand">Preview listing</button>
        </div>
      </form>
    </section>
  );
}
