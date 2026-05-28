import Link from 'next/link';

export const metadata = {
  title: 'Contact | Retire Thailand',
  description: 'Get in touch with Retire Thailand — questions about retiring in Thailand on the Australian pension.',
  alternates: { canonical: 'https://www.retirethailand.net/contact' },
};

export default function Contact() {
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
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Get in Touch</div>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '36px', fontWeight: 700, color: '#F5EDD8', margin: '0 0 12px 0' }}>Contact</h1>
          <p style={p}>Have a question about retiring in Thailand? Found an error on the site? Want to share your experience? We'd love to hear from you.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Email Us</h2>
          <p style={p}>The best way to reach us is by email. We aim to respond within 48 hours.</p>
          <a
            href="mailto:mail.retirethailand@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(201,150,58,0.1)', border: '1px solid rgba(201,150,58,0.3)',
              borderRadius: '3px', padding: '14px 24px', textDecoration: 'none',
              color: '#C9963A', fontSize: '15px', fontWeight: 600,
            }}
          >
            <span>✉</span>
            mail.retirethailand@gmail.com
          </a>
        </div>

        <div style={card}>
          <h2 style={h2}>What We Can Help With</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              '🏦 Australian Age Pension questions',
              '🛂 Thai retirement visa queries',
              '🏙️ City guide corrections or updates',
              '💱 Calculator feedback',
              '📝 Content suggestions or corrections',
              '🤝 Affiliate or partnership enquiries',
            ].map(item => (
              <div key={item} style={{ fontSize: '13px', color: '#7A6040', padding: '8px 12px', background: 'rgba(201,150,58,0.05)', borderRadius: '3px' }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={card}>
          <h2 style={h2}>Please Note</h2>
          <p style={p}>We are not financial advisers, lawyers or Centrelink representatives. We cannot provide personalised financial or legal advice. For questions about your specific pension entitlements, contact <strong style={{ color: '#F5EDD8' }}>Centrelink International Services on 131 673</strong>.</p>
          <p style={{ ...p, margin: 0 }}>For Thai visa questions, contact the <a href="https://www.thaiembassy.org.au" target="_blank" rel="noopener noreferrer" style={{ color: '#C9963A' }}>Royal Thai Embassy in Canberra</a> or the Thai Consulate in Sydney.</p>
        </div>

        <div style={goldDiv} />
        <p style={{ ...p, fontSize: '13px', color: '#5A4030', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#C9963A', textDecoration: 'none' }}>← Back to Retire Thailand</Link>
        </p>
      </div>
    </div>
  );
}
