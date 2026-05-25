import Link from 'next/link';
import { blogPosts } from '@/lib/content/blogPosts';
import { StickyAffiliateSidebar } from '@/components/AffiliateCard';

const NarrowAffCard = ({ service, eyebrow, title, desc }) => {
  const data = {
    wise:       { url: 'https://wise.prf.hn/click/camref:1011l5FiPJ', icon: '💸' },
    safetywing: { url: 'https://safetywing.com/?referenceID=26504193', icon: '🏥' },
  }[service];
  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer sponsored" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(201,150,58,0.1)',
      border: '1px solid rgba(201,150,58,0.4)',
      borderRadius: '4px',
      padding: '14px 18px',
      textDecoration: 'none',
      marginBottom: '10px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '22px' }}>{data.icon}</span>
        <div>
          <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '2px' }}>{eyebrow}</div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#F5EDD8' }}>{title}</div>
          <div style={{ fontSize: '11px', color: '#7A6040', marginTop: '2px' }}>{desc}</div>
        </div>
      </div>
      <span style={{ color: '#C9963A', fontWeight: 600, fontSize: '16px' }}>→</span>
    </a>
  );
};

export const metadata = {
  title: 'Blog | Retire Thailand — Australian Pension & Retirement Guides',
  description: 'Practical guides for Australians retiring in Thailand. Pension rules, visa requirements, cost of living and honest advice from people who have made the move.',
};

const categoryColors = {
  'Pension & Money':  '#6FCF97',
  'Visa & Legal':     '#7EB8F7',
  'Cost of Living':   '#C9963A',
  'Healthcare':       '#C084FC',
  'City Guides':      '#F87171',
};

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

export default function BlogPage() {
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
        <div style={{ background: '#0F0A04', padding: '72px 40px 48px', textAlign: 'center', borderBottom: '1px solid rgba(201,150,58,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>Retirement Guides</span>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#F5EDD8', marginBottom: '14px', lineHeight: 1.15 }}>
            Retire Thailand Blog
          </h1>
          <p style={{ fontSize: '15px', color: '#7A6040', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Practical, honest guides for Australians planning to retire in Thailand.
          </p>
        </div>

        <DiamondDivider />

        {/* Articles — with sticky sidebar */}
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 40px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', alignItems: 'start' }} className="blog-article-grid">

            {/* Sticky affiliate sidebar */}
            <StickyAffiliateSidebar context="blogMoney" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {blogPosts.map((post, i) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article style={{
                      background: 'rgba(20,13,4,0.82)',
                      border: '1px solid rgba(201,150,58,0.25)',
                      borderRadius: '4px',
                      padding: '24px 28px',
                      backdropFilter: 'blur(6px)',
                      cursor: 'pointer',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                          padding: '3px 10px', borderRadius: '2px',
                          background: 'rgba(201,150,58,0.12)',
                          border: '1px solid rgba(201,150,58,0.25)',
                          color: categoryColors[post.category] || '#C9963A',
                        }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: '12px', color: '#5A4030' }}>{post.readTime}</span>
                        <span style={{ fontSize: '12px', color: '#5A4030' }}>
                          {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#F5EDD8', marginBottom: '8px', lineHeight: 1.3 }}>
                        {post.title}
                      </h2>
                      <p style={{ fontSize: '14px', color: '#7A6040', lineHeight: 1.7, marginBottom: '14px' }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#C9963A' }}>
                        Read article
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9963A" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </article>
                  </Link>

                </div>
              ))}

            </div>
          </div>
        </div>

        <DiamondDivider />
        <div style={{ background: '#0F0A04', textAlign: 'center', padding: '48px 40px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9963A', color: '#0F0A04', fontSize: '14px', fontWeight: 600, padding: '13px 28px', borderRadius: '3px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0A04" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Pension Calculator
          </Link>
        </div>

      </div>
    </main>
  );
}
