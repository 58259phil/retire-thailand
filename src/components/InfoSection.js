'use client';

const providerLogos = {
  'Wise': { src: '/wise-logo.png', height: '24px' },
  'SafetyWing': { src: '/safetywing-logo.png', height: '30px' },
  'Agoda': { src: '/agoda-logo.png', height: '28px' },
};

const affiliateLinks = [
  {
    category: 'Currency Transfer',
    description: 'Send your pension to Thailand with the best exchange rate. Mid-market rates with low transparent fees — saves hundreds per year vs. your bank.',
    providers: [
      { name: 'Wise', url: 'https://wise.prf.hn/click/camref:1011l5FiPJ', badge: 'Recommended', note: 'Mid-market rate, low fees' },
    ],
  },
  {
    category: 'Health Insurance',
    description: 'Required for your retirement visa. Flexible monthly cover designed specifically for expats and long-term travellers.',
    providers: [
      { name: 'SafetyWing', url: 'https://safetywing.com/?referenceID=26504193', badge: 'Recommended', note: 'Flexible monthly expat cover' },
    ],
  },
  {
    category: 'Accommodation',
    description: 'Find serviced apartments and condos across Thailand. Great long-stay rates — ideal for trying a city before committing to a lease.',
    providers: [
      { name: 'Agoda', url: 'https://www.agoda.com/?cid=1932012', badge: 'Best Thailand Rates', note: 'Long-stay apartments & condos' },
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="affiliate-grid">
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
                          {providerLogos[provider.name] ? (
                            <img
                              src={providerLogos[provider.name].src}
                              alt={provider.name}
                              style={{ height: providerLogos[provider.name].height, width: 'auto', display: 'block', marginBottom: '4px' }}
                            />
                          ) : (
                            <div style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8', marginBottom: '2px' }}>
                              {provider.name}
                            </div>
                          )}
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
