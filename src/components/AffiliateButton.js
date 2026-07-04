// AffiliateButton.js — save to src/components/AffiliateButton.js
// Usage in blog content: paste the HTML snippets from affiliate-buttons-html.js into blogPosts.js content strings
// Usage in React pages: <AffiliateButton affiliate="wise" stage="early" />

const variants = {
  wise: {
    early: {
      message: 'Moving money to Thailand? Wise uses the real exchange rate — most banks don\'t.',
      cta: 'See how Wise works',
      url: 'https://wise.prf.hn/click/camref:1011l5FiPJ',
      logo: '/wise-logo.png',
      logoAlt: 'Wise',
      logoHeight: '20px',
    },
    middle: {
      message: 'Your bank takes 2–4% on every pension transfer. That\'s roughly $900/year gone in hidden fees.',
      cta: 'Compare Wise rates',
      url: 'https://wise.prf.hn/click/camref:1011l5FiPJ',
      logo: '/wise-logo.png',
      logoAlt: 'Wise',
      logoHeight: '20px',
    },
    end: {
      message: 'Setting up Wise takes 20 minutes and saves $600–900/year on your pension transfers.',
      cta: 'Open a free Wise account',
      url: 'https://wise.prf.hn/click/camref:1011l5FiPJ',
      logo: '/wise-logo.png',
      logoAlt: 'Wise',
      logoHeight: '20px',
    },
  },
  safetywing: {
    early: {
      message: 'Medicare stops the moment you leave Australia. Health insurance in Thailand isn\'t optional — it\'s a visa requirement.',
      cta: 'See what SafetyWing covers',
      url: 'https://safetywing.com/?referenceID=26504193',
      logo: '/safetywing-logo.png',
      logoAlt: 'SafetyWing',
      logoHeight: '26px',
    },
    middle: {
      message: 'Every year you wait, a new diagnosis can become a permanently excluded pre-existing condition. Get covered while you\'re healthy.',
      cta: 'Check prices for your age',
      url: 'https://safetywing.com/?referenceID=26504193',
      logo: '/safetywing-logo.png',
      logoAlt: 'SafetyWing',
      logoHeight: '26px',
    },
    end: {
      message: 'A quote takes two minutes. SafetyWing is monthly with no lock-in — cancel anytime.',
      cta: 'Get a SafetyWing quote',
      url: 'https://safetywing.com/?referenceID=26504193',
      logo: '/safetywing-logo.png',
      logoAlt: 'SafetyWing',
      logoHeight: '26px',
    },
  },
};

export default function AffiliateButton({ affiliate, stage }) {
  const v = variants[affiliate]?.[stage];
  if (!v) return null;

  return (
    <a
      href={v.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      style={{
        display: 'block',
        background: 'rgba(201,150,58,0.08)',
        border: '1px solid rgba(201,150,58,0.3)',
        borderLeft: '3px solid #C9963A',
        borderRadius: '4px',
        padding: '18px 20px',
        textDecoration: 'none',
        margin: '28px 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <img
          src={v.logo}
          alt={v.logoAlt}
          style={{ height: v.logoHeight, width: 'auto', flexShrink: 0, marginTop: '2px' }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', color: '#A08060', lineHeight: 1.6, marginBottom: '10px' }}>
            {v.message}
          </div>
          <span style={{
            display: 'inline-block',
            background: '#C9963A',
            color: '#0F0A04',
            fontSize: '12px',
            fontWeight: 600,
            padding: '8px 18px',
            borderRadius: '3px',
          }}>
            {v.cta} →
          </span>
        </div>
      </div>
    </a>
  );
}

// Export variants for use in HTML generation
export { variants };
