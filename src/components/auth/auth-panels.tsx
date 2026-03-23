const perks = [
  'Save listings and revisit advisor recommendations.',
  'Track the status of submitted properties.',
  'Receive premium neighborhood updates and launch alerts.',
];

export function AuthPanels() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] bg-ink p-8 text-white shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand/80">Account benefits</p>
        <h1 className="mt-4 font-display text-5xl">Access the full buyer and seller journey.</h1>
        <ul className="mt-8 space-y-4">
          {perks.map((perk) => (
            <li key={perk} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
              {perk}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Login</p>
          <div className="mt-6 space-y-4">
            <label className="block text-sm text-slate-600">
              Email or phone
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand/30 transition focus:ring-4" placeholder="advisor@mrdori.vn" />
            </label>
            <label className="block text-sm text-slate-600">
              Password
              <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand/30 transition focus:ring-4" placeholder="Enter your password" />
            </label>
            <button className="w-full rounded-full bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark">Sign in</button>
          </div>
        </form>
        <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Register</p>
          <div className="mt-6 space-y-4">
            <label className="block text-sm text-slate-600">
              Full name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand/30 transition focus:ring-4" placeholder="Nguyen Van A" />
            </label>
            <label className="block text-sm text-slate-600">
              Email
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand/30 transition focus:ring-4" placeholder="hello@example.com" />
            </label>
            <label className="block text-sm text-slate-600">
              Create password
              <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand/30 transition focus:ring-4" placeholder="Minimum 8 characters" />
            </label>
            <button className="w-full rounded-full border border-ink px-5 py-3 font-semibold text-ink transition hover:border-brand hover:text-brand">Create account</button>
          </div>
        </form>
      </div>
    </section>
  );
}
