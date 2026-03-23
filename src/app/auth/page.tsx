import { AuthPanels } from '@/components/auth/auth-panels';
import { PageShell } from '@/components/layout/page-shell';

export default function AuthPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AuthPanels />
      </section>
    </PageShell>
  );
}
