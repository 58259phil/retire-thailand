import Link from 'next/link';

export const metadata = {
  title: 'About | Retire Thailand',
  description: 'About Retire Thailand — built by an Australian who spent 20 years across Asia including 8 years living in Hua Hin. Real experience, honest advice.',
  alternates: { canonical: 'https://www.retirethailand.net/about' },
  openGraph: {
  title: 'About | Retire Thailand',
  description: 'About Retire Thailand — built by an Australian who spent 20 years across Asia including 8 years living in Hua Hin. Real experience, honest advice.',
  url: 'https://www.retirethailand.net/about',
  siteName: 'Retire Thailand',
  type: 'website',
  images: [{ url: '/temple.jpg', width: 1200, height: 630, alt: 'Retire Thailand' }],
},
};

export default function About() {
  const bg = { backgroundImage: 'url(/temple.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 20%', backgroundAttachment: 'scroll' };
  const overlay = { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,6,2,0.82) 0%, rgba(15,10,4,0.78) 100%)', zIndex: 0 };
  const card = { background: 'rgba(20,13,4,0.82)', border: '1px solid rgba(201,150,58,0.2)', borderRadius: '4px', padding: '32px', backdropFilter: 'blur(6px)', marginBottom: '16px' };
  const h2 = { fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', color: '#F5EDD8', marginBottom: '12px', marginTop: 0 };
  const p = { fontSize: '15px', color: '#A08060', lineHeight: 1.8, margin: '0 0 12px 0' };
  const goldDiv = { height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,150,58,0.4) 30%, rgba(201,150,58,0.7) 50%, rgba(201,150,58,0.4) 70%, transparent)', margin: '24px 0' };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', ...bg }}>
      <div style={overlay} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto', padding: '80px 24px 80px' }}>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Our Story</div>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '36px', fontWeight: 700, color: '#F5EDD8', margin: '0 0 12px 0' }}>About Retire Thailand</h1>
        </div>

        <div style={card}>
          <h2 style={h2}>Built from Experience</h2>
          <p style={p}>Retire Thailand was built by Phil — an Australian from the Gold Coast who spent decades living and working across Asia. After years of travelling Asia for work, Phil moved to Asia permanently in 1998, spending the next 20 years living and working in Singapore, Malaysia, Hong Kong and Thailand.</p>
          <p style={p}>His time in Hua Hin gave him a deep understanding of what retirement in Thailand actually looks like for Australians — not the glossy version, but the real day-to-day experience of budgeting, visas, healthcare and building a life there.</p>
          <p style={{ ...p, margin: 0 }}>After moving back to Australia, he noticed that most retirement-in-Thailand content online was either out of date, aimed at Americans, or written by people who had never actually lived there. Retire Thailand was built to fix that — accurate, Australian-focused, and written from real experience.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>What We Cover</h2>
          <p style={p}>Retire Thailand is built specifically for Australians. That means everything is framed around the Australian Age Pension, Australian superannuation, Medicare, the Australia-Thailand tax treaty, and the practicalities of moving from Australia to Thailand.</p>
          <p style={{ ...p, margin: 0 }}>While built for Australians, the calculator also supports US, UK and Canadian pension amounts — so if you're from one of those countries and considering Thailand, the numbers work for you too.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
            {[
              '🏦 Australian Age Pension portability',
              '🛂 Thai retirement visa requirements',
              '💱 Pension calculator for 7 cities',
              '🏙️ Honest city guides',
              '🏥 Healthcare for expat retirees',
              '💰 Cost of living breakdowns',
              '🏠 Accommodation guides',
              '📋 Moving checklists',
            ].map(item => (
              <div key={item} style={{ fontSize: '13px', color: '#7A6040', padding: '8px 12px', background: 'rgba(201,150,58,0.05)', borderRadius: '3px' }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={card}>
          <h2 style={h2}>Our Approach</h2>
          <p style={p}>We try to be honest about Thailand — both the genuine advantages and the real challenges. We don't think Thailand is right for everyone, and we don't try to sell it as paradise. We think Australians deserve accurate, unvarnished information so they can make the right decision for their own circumstances.</p>
          <p style={{ ...p, margin: 0 }}>All content is written or reviewed by people who have actually lived in Thailand. We update pension rates, visa requirements and cost of living figures regularly as they change.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Stay in Touch</h2>
          <p style={p}>We send a newsletter with updates on pension rates, visa changes and cost of living when things change. No spam — just useful updates when something relevant happens.</p>
          <p style={p}>Questions or feedback? We genuinely read everything.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9963A', color: '#0F0A04', padding: '12px 24px', borderRadius: '3px', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
              Contact us
            </Link>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(201,150,58,0.3)', color: '#C9963A', padding: '12px 24px', borderRadius: '3px', textDecoration: 'none', fontSize: '13px' }}>
              Try the calculator →
            </Link>
          </div>
        </div>

        <div style={goldDiv} />
        <p style={{ ...p, fontSize: '13px', color: '#5A4030', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#C9963A', textDecoration: 'none' }}>← Back to Retire Thailand</Link>
        </p>
      </div>
    </div>
  );
}
