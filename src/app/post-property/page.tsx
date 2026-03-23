import { PageShell } from '@/components/layout/page-shell';
import { PostPropertyForm } from '@/components/post/post-property-form';

export default function PostPropertyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PostPropertyForm />
      </section>
    </PageShell>
  );
}
