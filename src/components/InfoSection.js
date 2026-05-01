'use client';

const steps = [
  {
    number: '01',
    title: 'Work until 67 in Australia',
    body: 'Keep building your super. The pension age is 67. You must be physically in Australia to claim.',
    icon: '🇦🇺',
  },
  {
    number: '02',
    title: 'Claim & live 2 years in Australia',
    body: 'After being granted the pension, you must live in Australia for 2 years before taking it overseas (portability requirement).',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Apply for Thai Retirement Visa',
    body: "The Non-Immigrant O-A visa requires 800,000 THB in a Thai bank OR 65,000 THB/month income. You'll also need health insurance.",
    icon: '🛂',
  },
  {
    number: '04',
    title: 'Move to Thailand',
    body: "Your pension is paid every 4 weeks into your nominated bank account. You'll receive the base rate — supplements stop after 6 weeks abroad.",
    icon: '✈️',
  },
];

const affiliateLinks = [
  {
    category: 'Currency Transfer',
    description: 'Send your pension to Thailand with the best exchange rate. Save hundreds per year vs. your bank.',
    providers: [
      { name: 'Wise', url: 'https://wise.prf.hn/click/camref:1011l5FiPJ', badge: 'Best Rates', note: 'Mid-market rate, low fees' },
      { name: 'OFX', url: 'https://ofx.com', badge: 'No Transfer Fee', note: 'Great for regular transfers' },
    ],
  },
  {
    category: 'Health Insurance',
    description: 'Required for your retirement visa. Compare plans from top Thai insurers before you move.',
    providers: [
      { name: 'Pacific Prime', url: 'https://www.pacificprime.com', badge: 'Most Popular', note: 'Compare 50,000+ plans' },
      { name: 'SafetyWing', url: 'https://safetywing.com/?referenceID=26504193', badge: 'Expat Friendly', note: 'Flexible monthly cover' },
    ],
  },
];

const DiamondDivider = () => (
  <div style={{ overflow: 'hidden', background: '#0F0A04' }}>
    <svg width="100%" height="24" viewBox="0 0 680 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="24" fill="#0F0A04"/>
      <line x1="0" y1="3" x2="680" y2="3" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
      <line x1="0" y1="21" x2="680" y2="21" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
      <g fill="#C9963A" opacity="0.45">
        {[20,58,96,134,172,210,248,286,324,362,400,438,476,514,552,590,628,666].map(x => (
          <polygon key={x} points={`${x},12 ${x+7},6 ${x+14},12 ${x+7},18`}/>
        ))}
      </g>
    </svg>
  </div>
);

export default function InfoSection() {
  return (
    <>
      <DiamondDivider />
      <section style={{ background: '#0F0A04', padding: '72px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* How it works */}
          <div style={{ marginBottom: '72px' }}>

            {/* Section header */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
                <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>Step by step</span>
                <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#F5EDD8', marginBottom: '10px' }}>
                How to Make It Happen
              </h2>
              <p style={{ fontSize: '14px', color: '#7A6040', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                The path from working in Australia to retiring in Thailand — step by step.
              </p>
            </div>

            {/* Steps grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {steps.map((step, i) => (
                <div key={i} style={{
                  background: '#160E05',
                  border: '1px solid rgba(201,150,58,0.18)',
                  borderRadius: '4px',
                  padding: '24px',
                  position: 'relative',
                }}>
                  {/* Step number watermark */}
                  <div style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: '56px', fontWeight: 700,
                    color: '#C9963A', opacity: 0.12,
                    position: 'absolute', top: '12px', right: '16px',
                    lineHeight: 1,
                  }}>{step.number}</div>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{step.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '16px', fontWeight: 700, color: '#F5EDD8', marginBottom: '10px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#7A6040', lineHeight: 1.7 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gold divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,150,58,0.4) 30%, rgba(201,150,58,0.7) 50%, rgba(201,150,58,0.4) 70%, transparent)', marginBottom: '72px' }} />

          {/* Tools section */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
                <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>Recommended services</span>
                <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#F5EDD8', marginBottom: '10px' }}>
                Tools to Help You Move
              </h2>
              <p style={{ fontSize: '14px', color: '#7A6040', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                Services we recommend to Australian retirees heading to Thailand.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {affiliateLinks.map((section, i) => (
                <div key={i} style={{
                  background: '#160E05',
                  border: '1px solid rgba(201,150,58,0.18)',
                  borderRadius: '4px',
                  padding: '24px',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', fontWeight: 700, color: '#F5EDD8', marginBottom: '6px' }}>
                    {section.category}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#7A6040', marginBottom: '20px', lineHeight: 1.6 }}>{section.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {section.providers.map((provider, j) => (
                      <a
                        key={j}
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '14px 16px',
                          background: 'rgba(201,150,58,0.04)',
                          border: '1px solid rgba(201,150,58,0.18)',
                          borderRadius: '3px',
                          textDecoration: 'none',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8', marginBottom: '2px' }}>
                            {provider.name}
                          </div>
                          <div style={{ fontSize: '11px', color: '#5A4030' }}>{provider.note}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{
                            fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em',
                            padding: '3px 10px', borderRadius: '2px',
                            background: 'rgba(201,150,58,0.15)',
                            color: '#C9963A',
                            border: '1px solid rgba(201,150,58,0.3)',
                          }}>
                            {provider.badge}
                          </span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9963A" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', fontSize: '11px', color: '#3A2810', marginTop: '20px' }}>
              * Some links above may be affiliate links. We may earn a small commission at no cost to you.
            </p>
          </div>

        </div>
      </section>
      <DiamondDivider />
    </>
  );
}
