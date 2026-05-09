import Link from 'next/link';

export const metadata = {
  title: 'Recommended Resources | Retire Thailand',
  description: 'The tools and services we recommend to Australians retiring in Thailand. Honest reviews of money transfer, health insurance, and other essential services.',
};

const services = [
  {
    name: 'Wise',
    category: 'Money Transfer',
    icon: '💸',
    url: 'https://wise.prf.hn/click/camref:1011l5FiPJ',
    tagline: 'Send your pension at the real exchange rate',
    description: 'Wise (formerly TransferWise) is the best way to move your Australian pension to Thailand. They use the real mid-market exchange rate — the same one you see on Google — with a small transparent fee on top.',
    why: [
      'Mid-market exchange rate (saves $30–60 per transfer vs banks)',
      'Transparent low fees — typically under 1%',
      'Free Thai bank account integration',
      'Money usually arrives in your Thai account within hours',
      'Multi-currency account — hold AUD, THB, USD and more',
    ],
    cost: 'Free to open. ~$8 fee per A$1000 transfer (vs $40-60 with banks).',
    cta: 'Open a Wise account',
  },
  {
    name: 'SafetyWing',
    category: 'Health Insurance',
    icon: '🏥',
    url: 'https://safetywing.com/?referenceID=26504193',
    tagline: 'Health insurance designed for expats',
    description: 'SafetyWing offers flexible monthly health insurance designed for digital nomads and long-term expats. Required for your Thai retirement visa (Non-OA) and gives you cover in Thai hospitals.',
    why: [
      'Monthly subscription — no annual lock-in',
      'Cover starts from around $50/month for 50+',
      'Accepted at major Thai hospitals',
      'Includes medical evacuation',
      'Designed for long-term overseas residence',
    ],
    cost: 'From around US$50/month depending on age and cover level.',
    cta: 'Get a SafetyWing quote',
  },
];

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

export default function ResourcesPage() {
  return (
    <main style={{
      position: 'relative', minHeight: '100vh',
      backgroundImage: 'url(/temple.jpg)',
      backgroundSize: 'cover', backgroundPosition: 'center 20%', backgroundAttachment: 'scroll',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,6,2,0.58) 0%, rgba(15,10,4,0.52) 50%, rgba(10,6,2,0.58) 100%)', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Gold bar */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #0F0A04 0%, #C9963A 20%, #FFD87A 50%, #C9963A 80%, #0F0A04 100%)' }} />

        {/* Dark header */}
        <div style={{ background: '#0F0A04', padding: '72px 40px 48px', textAlign: 'center', borderBottom: '1px solid rgba(201,150,58,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>Recommended Tools</span>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#F5EDD8', marginBottom: '14px', lineHeight: 1.15 }}>
            Resources for Your Move
          </h1>
          <p style={{ fontSize: '15px', color: '#7A6040', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
            Honest reviews of the services I personally use and recommend for Australians retiring in Thailand.
          </p>
        </div>

        <DiamondDivider />

        {/* Content */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '40px 40px 48px' }}>

          {/* Intro */}
          <div style={{
            background: 'rgba(20,13,4,0.82)',
            border: '1px solid rgba(201,150,58,0.25)',
            borderRadius: '4px',
            padding: '24px 28px',
            backdropFilter: 'blur(6px)',
            marginBottom: '20px',
            borderLeft: '3px solid #C9963A',
          }}>
            <p style={{ fontSize: '14px', color: '#A08060', lineHeight: 1.7, margin: 0 }}>
              These are the only services I currently recommend on Retire Thailand. I've kept the list short on purpose — you'll find dozens of "best of" lists with 20+ options elsewhere. The two services below are the ones I'd use myself and what I tell friends to use.
              <br /><br />
              <strong style={{ color: '#F5EDD8' }}>Disclosure:</strong> The links below are affiliate links — if you sign up I may earn a small commission at no extra cost to you. This helps keep the site free.
            </p>
          </div>

          {/* Services */}
          {services.map((s) => (
            <div key={s.name} style={{
              background: 'rgba(20,13,4,0.82)',
              border: '1px solid rgba(201,150,58,0.3)',
              borderRadius: '4px',
              padding: '32px',
              backdropFilter: 'blur(6px)',
              marginBottom: '20px',
            }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '48px', flexShrink: 0, lineHeight: 1 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '4px' }}>
                    {s.category}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '26px', fontWeight: 700, color: '#F5EDD8', marginBottom: '6px', lineHeight: 1.2 }}>
                    {s.name}
                  </h2>
                  <p style={{ fontSize: '14px', color: '#C9963A', fontWeight: 500 }}>{s.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '15px', color: '#A08060', lineHeight: 1.75, marginBottom: '20px' }}>
                {s.description}
              </p>

              {/* Why */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>
                  Why I recommend it
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.why.map((reason) => (
                    <li key={reason} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#7A6040', marginBottom: '8px', lineHeight: 1.6 }}>
                      <span style={{ color: '#6FCF97', flexShrink: 0, fontWeight: 700 }}>✓</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost */}
              <div style={{ background: 'rgba(201,150,58,0.08)', border: '1px solid rgba(201,150,58,0.2)', borderRadius: '3px', padding: '12px 16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '4px' }}>Cost</div>
                <div style={{ fontSize: '13px', color: '#A08060' }}>{s.cost}</div>
              </div>

              {/* CTA */}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#C9963A', color: '#0F0A04',
                  fontSize: '14px', fontWeight: 600,
                  padding: '13px 28px', borderRadius: '3px',
                  textDecoration: 'none',
                }}
              >
                {s.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F0A04" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          ))}

          {/* Coming soon note */}
          <div style={{
            background: 'rgba(20,13,4,0.6)',
            border: '1px dashed rgba(201,150,58,0.25)',
            borderRadius: '4px',
            padding: '20px 24px',
            backdropFilter: 'blur(6px)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔜</div>
            <p style={{ fontSize: '13px', color: '#7A6040', lineHeight: 1.6, margin: 0 }}>
              More recommendations coming as I review and personally vet additional services.
              I'd rather recommend two services I trust than twenty I don't.
            </p>
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
