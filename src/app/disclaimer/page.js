import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer | Retire Thailand',
  description: 'Retire Thailand disclaimer — this site does not provide financial or legal advice.',
  alternates: { canonical: 'https://www.retirethailand.net/disclaimer' },
};

export default function Disclaimer() {
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
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '36px', fontWeight: 700, color: '#F5EDD8', margin: '0 0 12px 0' }}>Disclaimer</h1>
          <p style={{ ...p, color: '#7A6040' }}>Last updated: May 2026</p>
        </div>

        <div style={{ ...card, border: '1px solid rgba(201,150,58,0.4)', background: 'rgba(35,20,5,0.9)' }}>
          <h2 style={{ ...h2, color: '#C9963A' }}>Not Financial Advice</h2>
          <p style={p}>The information on Retire Thailand is provided for general informational and educational purposes only. Nothing on this site constitutes financial advice, investment advice, tax advice, legal advice or any other form of professional advice.</p>
          <p style={{ ...p, margin: 0 }}>Before making any decisions about retiring overseas, transferring your pension, or changing your financial arrangements, you should seek advice from a qualified and licensed financial adviser, accountant or solicitor who understands your specific circumstances.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Accuracy of Information</h2>
          <p style={p}>We make every effort to ensure the information on this site is accurate and up to date. However, pension rates, visa requirements, tax rules and cost of living figures change regularly. Information that was correct when published may no longer be current.</p>
          <p style={{ ...p, margin: 0 }}>Always verify critical information — particularly pension rates and visa requirements — directly with the relevant authority. For Australian Age Pension information, contact <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: '#C9963A' }}>Services Australia</a>. For Thai visa requirements, contact the <a href="https://www.thaiembassy.org.au" target="_blank" rel="noopener noreferrer" style={{ color: '#C9963A' }}>Royal Thai Embassy</a>.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Calculator Estimates</h2>
          <p style={p}>The pension calculator on this site provides estimates based on publicly available cost of living data from sources including Numbeo and ExpatDen. These estimates are indicative only. Your actual costs will depend on your individual lifestyle, accommodation choices, spending habits and the current exchange rate.</p>
          <p style={{ ...p, margin: 0 }}>Calculator results should not be used as the basis for financial decisions without independent verification.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>External Links</h2>
          <p style={{ ...p, margin: 0 }}>This site contains links to third-party websites. We are not responsible for the content, accuracy or privacy practices of any external site. The inclusion of a link does not constitute endorsement.</p>
        </div>

        <div style={card}>
          <h2 style={h2}>Limitation of Liability</h2>
          <p style={{ ...p, margin: 0 }}>To the maximum extent permitted by law, Retire Thailand accepts no liability for any loss or damage arising from your use of this site or reliance on information contained within it.</p>
        </div>

        <div style={goldDiv} />
        <p style={{ ...p, fontSize: '13px', color: '#5A4030', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#C9963A', textDecoration: 'none' }}>← Back to Retire Thailand</Link>
        </p>
      </div>
    </div>
  );
}
