import Link from 'next/link';
import { blogPosts } from '@/lib/content/blogPosts';

export const metadata = {
  title: 'Blog | Retire Thailand — Australian Pension & Retirement Guides',
  description: 'Practical guides for Australians retiring in Thailand. Pension rules, visa requirements, cost of living breakdowns and honest advice from people who have made the move.',
};

const categoryColors = {
  'Pension & Money': { bg: '#ECFDF5', color: '#065F46' },
  'Visa & Legal': { bg: '#EFF6FF', color: '#1E40AF' },
  'Cost of Living': { bg: '#FFF7ED', color: '#92400E' },
  'Healthcare': { bg: '#FDF4FF', color: '#6B21A8' },
  'City Guides': { bg: '#FEF2F2', color: '#991B1B' },
};

export default function BlogPage() {
  return (
    <main style={{ background: 'var(--color-cream)', minHeight: '100vh' }}>

      {/* Header */}
      <div className="bg-thai-pattern py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-yellow-600/30 bg-yellow-600/10">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Retirement Guides</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
            Retire Thailand Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Practical, honest guides for Australians planning to retire in Thailand.
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {blogPosts.map((post) => {
            const catColors = categoryColors[post.category] || { bg: '#F3F4F6', color: '#374151' };
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card p-6 md:p-8 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="tag"
                      style={{ background: catColors.bg, color: catColors.color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <span className="text-sm text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-yellow-700 transition-colors" style={{ color: 'var(--color-ink)' }}>
                    {post.title}
                  </h2>

                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-soft)' }}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: 'var(--color-gold-dark)' }}>
                    Read article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Back to calculator */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Pension Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}
