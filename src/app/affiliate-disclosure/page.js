import Link from 'next/link';

export const metadata = {
  title: 'Affiliate Disclosure | Retire Thailand',
  description: 'Retire Thailand affiliate disclosure — some links earn us a small commission at no extra cost to you. Here is exactly how we earn from recommendations.',
  alternates: { canonical: 'https://www.retirethailand.net/affiliate-disclosure' },
  openGraph: {
  title: 'Affiliate Disclosure | Retire Thailand',
  description: 'Retire Thailand affiliate disclosure — some links earn us a small commission at no extra cost to you. Here is exactly how we earn from recommendations.',
  url: 'https://www.retirethailand.net/affiliate-disclosure',
  siteName: 'Retire Thailand',
  type: 'website',
  images: [{ url: '/temple.jpg', width: 1200, height: 630, alt: 'Retire Thailand' }],
},
};

export default function AffiliateDisclosure() {
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

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Legal</div>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '36px', fontWeight: 700, color: '#F5EDD8', margin: '0 0 12px 0' }}>
            Affiliate Disclosure
          </h1>
          <p style={{ ...p, color: '#7A6040' }}>Last updated: May 2026</p>
        </div>

        <div style={card}>
          <h2 style={h2}>How Retire Thailand Earns Money</h2>
          <p style={p}>Retire Thailand is a free resource for Australians planning to retire in Thailand. To keep the site running and the content free, we participate in affiliate programs. This means we may earn a small commission if you click a link on our site and make a purchase or sign up for a service.</p>
          <p style={p}>This costs you nothing extra. In most cases the price you pay is identical to going directly to the provider.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Our Affiliate Partners</h2>
          <p style={p}>We currently work with the following affiliate programs:</p>
          <div style={{ marginTop: '8px' }}>
            {[
              { name: 'Wise', desc: 'International money transfer. We earn a small fee if you sign up and make a transfer. We use and recommend Wise because we genuinely believe it is the best way for Australians to send money to Thailand.' },
              { name: 'SafetyWing', desc: 'Expat health insurance. We earn a commission if you purchase a policy. SafetyWing is one of the most popular health insurance options among expat retirees in Thailand.' },
              { name: 'Agoda', desc: 'Hotel and apartment booking. We earn a commission on completed bookings. Agoda has the best coverage of long-stay accommodation in Thailand.' },
            ].map(item => (
              <div key={item.name} style={{ borderLeft: '2px solid rgba(201,150,58,0.3)', paddingLeft: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#C9963A', marginBottom: '4px' }}>{item.name}</div>
                <p style={{ ...p, margin: 0, fontSize: '13px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={card}>
          <h2 style={h2}>Our Editorial Independence</h2>
          <p style={p}>Affiliate relationships do not influence our editorial content. We only recommend services we have personally used or thoroughly researched and believe are genuinely useful for Australians retiring to Thailand.</p>
          <p style={p}>We do not accept payment for positive reviews, and no affiliate partner has editorial control over our content. If we don't believe a service is worth recommending, we don't recommend it — regardless of whether an affiliate program exists.</p>
          <p style={{ ...p, margin: 0 }}>If you have questions about our affiliate relationships, <Link href="/contact" style={{ color: '#C9963A' }}>contact us</Link>.</p>
        </div>

        <div style={goldDiv} />
        <p style={{ ...p, fontSize: '13px', color: '#5A4030', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#C9963A', textDecoration: 'none' }}>← Back to Retire Thailand</Link>
        </p>
      </div>
    </div>
  );
}
