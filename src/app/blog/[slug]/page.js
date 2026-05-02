import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/lib/content/blogPosts';
import { notFound } from 'next/navigation';
import NewsletterSignup from '@/components/NewsletterSignup';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Retire Thailand`,
    description: post.metaDescription,
    openGraph: { title: post.title, description: post.metaDescription, type: 'article', publishedTime: post.date },
  };
}

function renderContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#F5EDD8', marginTop: '32px', marginBottom: '12px' }}>{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', fontWeight: 700, color: '#C9963A', marginTop: '24px', marginBottom: '10px' }}>{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('**') && line.endsWith('**') && !line.includes(' ')) {
      elements.push(<p key={i} style={{ fontWeight: 700, color: '#F5EDD8', marginTop: '16px', marginBottom: '4px' }}>{line.replace(/\*\*/g, '')}</p>);
    } else if (line.startsWith('| ')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) { tableLines.push(lines[i].trim()); i++; }
      const rows = tableLines.filter(l => !l.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={i} style={{ overflowX: 'auto', margin: '20px 0' }}>
          <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#1A1108' }}>
                {rows[0].split('|').filter(Boolean).map((cell, j) => (
                  <th key={j} style={{ padding: '10px 14px', textAlign: 'left', color: '#C9963A', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1px solid rgba(201,150,58,0.3)' }}>{cell.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? 'rgba(20,13,4,0.5)' : 'rgba(26,17,8,0.5)' }}>
                  {row.split('|').filter(Boolean).map((cell, j) => (
                    <td key={j} style={{ padding: '9px 14px', color: '#A08060', borderBottom: '1px solid rgba(201,150,58,0.08)' }}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) { items.push(lines[i].trim().replace('- ', '')); i++; }
      elements.push(
        <ul key={i} style={{ margin: '12px 0', paddingLeft: '0', listStyle: 'none' }}>
          {items.map((item, j) => (
            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#7A6040', marginBottom: '6px', fontSize: '15px', lineHeight: 1.7 }}>
              <span style={{ color: '#C9963A', flexShrink: 0, marginTop: '2px' }}>•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F5EDD8">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#C9963A;text-decoration:underline;">$1</a>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F5EDD8">$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#C9963A;text-decoration:underline;font-weight:600;">$1</a>');
      elements.push(<p key={i} style={{ fontSize: '15px', lineHeight: 1.8, color: '#7A6040', marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: html }} />);
    }
    i++;
  }
  return elements;
}

const card = { background: 'rgba(20,13,4,0.82)', border: '1px solid rgba(201,150,58,0.25)', borderRadius: '4px', padding: '28px 32px', backdropFilter: 'blur(6px)', marginBottom: '16px' };

const DiamondDivider = () => (
  <div style={{ background: '#0F0A04', overflow: 'hidden' }}>
    <svg width="100%" height="24" viewBox="0 0 680 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="24" fill="#0F0A04"/>
      <line x1="0" y1="3" x2="680" y2="3" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
      <line x1="0" y1="21" x2="680" y2="21" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
      <g fill="#C9963A" opacity="0.4">
        {[20,58,96,134,172,210,248,286,324,362,400,438,476,514,552,590,628,666].map(x => (
          <polygon key={x} points={`${x},12 ${x+7},6 ${x+14},12 ${x+7},18`}/>
        ))}
      </g>
    </svg>
  </div>
);

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const otherPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <main style={{
      position: 'relative', minHeight: '100vh',
      backgroundImage: 'url(/temple.jpg)',
      backgroundSize: '120%', backgroundPosition: 'center 20%', backgroundAttachment: 'scroll',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,6,2,0.58) 0%, rgba(15,10,4,0.52) 50%, rgba(10,6,2,0.58) 100%)', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Gold bar */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #0F0A04 0%, #C9963A 20%, #FFD87A 50%, #C9963A 80%, #0F0A04 100%)' }} />

        {/* Dark header */}
        <div style={{ background: '#0F0A04', padding: '48px 40px', borderBottom: '1px solid rgba(201,150,58,0.15)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#5A4030', textDecoration: 'none', marginBottom: '24px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A4030" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to all articles
            </Link>
            <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 12px', background: 'rgba(201,150,58,0.15)', border: '1px solid rgba(201,150,58,0.3)', borderRadius: '2px', color: '#C9963A', marginBottom: '16px' }}>
              {post.category}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, color: '#F5EDD8', lineHeight: 1.15, marginBottom: '14px' }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: '#5A4030' }}>
              <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <DiamondDivider />

        {/* Article */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 40px 48px' }}>
          <div style={card}>{renderContent(post.content)}</div>

          {/* CTA */}
          <div style={{ ...card, textAlign: 'center', padding: '32px' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🧮</div>
            <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', color: '#F5EDD8', marginBottom: '8px' }}>See Your Numbers</h3>
            <p style={{ fontSize: '13px', color: '#7A6040', marginBottom: '20px' }}>Use our free calculator to see exactly how far your pension goes in each Thai city.</p>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9963A', color: '#0F0A04', fontSize: '14px', fontWeight: 600, padding: '13px 28px', borderRadius: '3px', textDecoration: 'none' }}>
              Open Pension Calculator
            </Link>
          </div>

          {/* Newsletter */}
          <NewsletterSignup variant="inline" />

          {/* More articles */}
          {otherPosts.length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', color: '#F5EDD8', marginBottom: '16px' }}>More Guides</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {otherPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'rgba(20,13,4,0.82)', border: '1px solid rgba(201,150,58,0.2)', borderRadius: '4px', padding: '16px', backdropFilter: 'blur(6px)', cursor: 'pointer' }}>
                      <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '8px' }}>{p.category}</div>
                      <h4 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '14px', color: '#F5EDD8', lineHeight: 1.4, marginBottom: '8px' }}>{p.title}</h4>
                      <div style={{ fontSize: '11px', color: '#5A4030' }}>{p.readTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <DiamondDivider />
        <div style={{ background: '#0F0A04', textAlign: 'center', padding: '48px 40px' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9963A', color: '#0F0A04', fontSize: '14px', fontWeight: 600, padding: '13px 28px', borderRadius: '3px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0A04" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to All Articles
          </Link>
        </div>

      </div>
    </main>
  );
}
