import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Retire Thailand',
  description: 'Retire Thailand privacy policy — how we collect and use your data.',
  alternates: { canonical: 'https://www.retirethailand.net/privacy-policy' },
};

export default function PrivacyPolicy() {
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
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Legal</div>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '36px', fontWeight: 700, color: '#F5EDD8', margin: '0 0 12px 0' }}>Privacy Policy</h1>
          <p style={{ ...p, color: '#7A6040' }}>Last updated: May 2026</p>
        </div>

        <div style={card}>
          <h2 style={h2}>What Information We Collect</h2>
          <p style={p}><strong style={{ color: '#F5EDD8' }}>Newsletter sign-ups:</strong> If you subscribe to our newsletter, we collect your email address. This is stored securely with Resend, our email service provider. We do not share your email address with third parties.</p>
          <p style={p}><strong style={{ color: '#F5EDD8' }}>Analytics:</strong> We use Google Analytics to understand how visitors use our site. This collects anonymous information such as pages visited, time on site, and general location (country/city level). We do not collect personally identifiable information through analytics.</p>
          <p style={{ ...p, margin: 0 }}><strong style={{ color: '#F5EDD8' }}>Calculator usage:</strong> The pension calculator on our site does not store or transmit any data you enter. All calculations happen in your browser.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>How We Use Your Information</h2>
          <p style={p}>Your email address is used solely to send you the Retire Thailand newsletter — updates on pension rates, cost of living, visa requirements and retirement news relevant to Australians in Thailand.</p>
          <p style={{ ...p, margin: 0 }}>We never sell, rent or share your personal information with third parties for marketing purposes.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Cookies</h2>
          <p style={p}>Our site uses cookies for Google Analytics and to remember your preferences. You can disable cookies in your browser settings at any time. Disabling cookies will not affect the core functionality of the site.</p>
          <p style={{ ...p, margin: 0 }}>We do not use advertising cookies or third-party tracking cookies beyond Google Analytics.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Third-Party Services</h2>
          <p style={p}>Our site contains links to third-party services including Wise, SafetyWing and Agoda. These services have their own privacy policies which we encourage you to read. We are not responsible for the privacy practices of third-party websites.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Your Rights</h2>
          <p style={p}>You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email we send, or by replying with "unsubscribe".</p>
          <p style={{ ...p, margin: 0 }}>To request deletion of your data or ask any privacy-related questions, <Link href="/contact" style={{ color: '#C9963A' }}>contact us</Link>.</p>
        </div>

        <div style={goldDiv} />
        <p style={{ ...p, fontSize: '13px', color: '#5A4030', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#C9963A', textDecoration: 'none' }}>← Back to Retire Thailand</Link>
        </p>
      </div>
    </div>
  );
}
