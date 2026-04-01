import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/lib/content/blogPosts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Retire Thailand`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

// Simple markdown-like renderer for our content
function renderContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-display text-2xl md:text-3xl mt-10 mb-4" style={{ color: 'var(--color-ink)' }}>
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-display text-xl mt-8 mb-3" style={{ color: 'var(--color-ink)' }}>
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('**') && line.endsWith('**') && !line.includes(' ')) {
      elements.push(
        <p key={i} className="font-bold mt-4 mb-1" style={{ color: 'var(--color-ink)' }}>
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.startsWith('| ')) {
      // Table — collect all rows
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const rows = tableLines.filter(l => !l.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: 'var(--color-ink)', color: 'white' }}>
                {rows[0].split('|').filter(Boolean).map((cell, j) => (
                  <th key={j} className="px-4 py-3 text-left font-semibold">{cell.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? 'white' : 'var(--color-cream)' }}>
                  {row.split('|').filter(Boolean).map((cell, j) => (
                    <td key={j} className="px-4 py-3 border-b border-gray-100">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith('- ')) {
      // Collect list items
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 space-y-2 ml-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2" style={{ color: 'var(--color-ink-soft)' }}>
              <span style={{ color: 'var(--color-gold)' }} className="mt-1 flex-shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: var(--color-gold-dark); text-decoration: underline;">$1</a>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else {
      // Regular paragraph — handle bold and links
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: var(--color-gold-dark); text-decoration: underline; font-weight: 600;">$1</a>');
      elements.push(
        <p key={i} className="text-base md:text-lg leading-relaxed my-4" style={{ color: 'var(--color-ink-soft)' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    i++;
  }
  return elements;
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <main style={{ background: 'var(--color-cream)', minHeight: '100vh' }}>

      {/* Hero */}
      <div className="bg-thai-pattern py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to all articles
          </Link>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(201,150,58,0.2)', color: 'var(--color-gold-light)' }}>
            {post.category}
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="card p-8 md:p-12">
          {renderContent(post.content)}
        </div>

        {/* CTA box */}
        <div className="mt-8 p-6 md:p-8 rounded-2xl text-center"
          style={{ background: 'var(--color-ink)' }}>
          <div className="text-2xl mb-2">🧮</div>
          <h3 className="font-display text-2xl text-white mb-2">
            See Your Numbers
          </h3>
          <p className="text-gray-400 mb-5 text-sm">
            Use our free calculator to see exactly how far your pension goes in each Thai city.
          </p>
          <Link href="/" className="btn-primary inline-block">
            Open Pension Calculator
          </Link>
        </div>

        {/* More articles */}
        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-2xl mb-6" style={{ color: 'var(--color-ink)' }}>
              More Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <div className="card p-5 h-full cursor-pointer group">
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-gold)' }}>
                      {p.category}
                    </div>
                    <h4 className="font-display text-base group-hover:text-yellow-700 transition-colors leading-snug" style={{ color: 'var(--color-ink)' }}>
                      {p.title}
                    </h4>
                    <div className="text-xs text-gray-400 mt-2">{p.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
