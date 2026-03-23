const groups = [
  {
    title: 'Popular districts',
    items: ['District 1', 'Thu Duc', 'District 7', 'Binh Thanh', 'Ngu Hanh Son'],
  },
  {
    title: 'Lifestyle fit',
    items: ['Riverfront', 'Family compound', 'Work-live', 'Investment', 'Short-stay ready'],
  },
  {
    title: 'Amenities',
    items: ['Pool', 'Concierge', 'Gym', 'Wine cellar', 'Private parking'],
  },
];

export function FilterSidebar() {
  return (
    <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Filter sidebar</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink">Browse by preference</h2>
      </div>
      {groups.map((group) => (
        <section key={group.title} className="space-y-3 border-t border-slate-100 pt-5 first:border-none first:pt-0">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
      <div className="rounded-3xl bg-brand-soft p-5">
        <p className="text-sm font-semibold text-brand">Saved search preview</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Save combinations like “District 1 townhouse under 25B” once search state becomes connected to live data.
        </p>
      </div>
    </aside>
  );
}
