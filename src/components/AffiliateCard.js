'use client';

// Agoda affiliate URL — update this once approved
const AGODA_URL = 'https://www.agoda.com/?cid=1932012';

// Service definitions with multiple tagline contexts
const services = {
  wise: {
    name: 'Wise',
    url: 'https://wise.prf.hn/click/camref:1011l5FiPJ',
    icon: '💸',
    cta: 'Get Wise',
    category: 'Money Transfer',
    taglines: {
      calculator: { eyebrow: 'Saves $50/transfer', title: 'Stop your bank skimming your pension', desc: 'Wise charges ~$8 to send what your bank charges $50+ for.' },
      blogMoney:  { eyebrow: 'Saves $50/transfer', title: 'Stop your bank skimming your pension', desc: 'Wise uses the real exchange rate — saves $50+ per transfer vs your bank.' },
      blogVisa:   { eyebrow: 'Move money cheaply', title: 'Move money for your visa deposit',    desc: 'Wise is the cheapest way to fund your ฿800k visa deposit in Thailand.' },
      blogHealth: { eyebrow: 'Saves $50/transfer', title: 'Pay your insurance the cheap way',   desc: 'Wise lets you pay overseas insurance bills at the real exchange rate.' },
      blogCity:   { eyebrow: 'Saves $50/transfer', title: 'Send your pension to Thailand',      desc: 'Wise charges ~$8 vs your bank\'s $50+ — keeps more of your pension.' },
      cityGuide:  { eyebrow: 'Real exchange rate', title: 'Send your pension to Thailand',      desc: 'Wise uses the real AUD/THB rate. Most people save ~$1,200/year vs banks.' },
      default:    { eyebrow: 'Real exchange rate', title: 'Send your pension at the real rate', desc: 'Wise charges ~$8 to send what your bank charges $50+ for.' },
    },
  },
  safetywing: {
    name: 'SafetyWing',
    url: 'https://safetywing.com/?referenceID=26504193',
    icon: '🏥',
    cta: 'Get SafetyWing',
    category: 'Health Insurance',
    taglines: {
      calculator: { eyebrow: 'From $50/month',     title: 'Get the cover your visa requires',    desc: 'Required for your Non-OA visa. Flexible monthly cover for retirees abroad.' },
      blogMoney:  { eyebrow: 'Required for visa',  title: 'You\'ll need this for your visa',     desc: 'SafetyWing offers flexible expat cover — required for the Non-OA visa.' },
      blogVisa:   { eyebrow: 'Required for visa',  title: 'Visa-compliant insurance from $50/mo', desc: 'SafetyWing meets the Thai retirement visa insurance requirements.' },
      blogHealth: { eyebrow: 'Recommended cover',  title: 'Designed for expats, monthly billed', desc: 'No annual lock-in. Cover from around $50/month for retirees 50+.' },
      blogCity:   { eyebrow: 'Hospital cover',     title: 'Cover at major Thai hospitals',       desc: 'SafetyWing is accepted at major hospitals — required for your visa.' },
      cityGuide:  { eyebrow: 'Hospital cover',     title: 'Cover wherever you live in Thailand', desc: 'Accepted at major hospitals nationwide. Required for the retirement visa.' },
      default:    { eyebrow: 'Required for visa',  title: 'Health cover for your retirement',    desc: 'Flexible monthly expat cover — required for your Non-OA visa.' },
    },
  },
  agoda: {
    name: 'Agoda',
    url: AGODA_URL,
    icon: '🏨',
    cta: 'Search Agoda',
    category: 'Accommodation',
    taglines: {
      calculator: { eyebrow: 'Best Thailand rates', title: 'Find your perfect base in Thailand',    desc: 'Search serviced apartments and condos — great long-stay rates.' },
      blogMoney:  { eyebrow: 'Long-stay deals',     title: 'Try before you commit to a city',      desc: 'Book a month in your shortlisted city before signing a lease.' },
      blogVisa:   { eyebrow: 'Long-stay deals',     title: 'Need an address for your visa?',       desc: 'Agoda has monthly-rate serviced apartments across Thailand.' },
      blogHealth: { eyebrow: 'Best Thailand rates', title: 'Find accommodation near good hospitals', desc: 'Agoda lets you filter by area — stay close to the hospitals you need.' },
      blogCity:   { eyebrow: 'Best Thailand rates', title: 'Find your perfect base in Thailand',    desc: 'Compare long-stay apartments and condos across 7 Thai cities.' },
      cityGuide:  { eyebrow: 'Best local rates',    title: 'Find accommodation in this city',      desc: 'Compare serviced apartments and condos — monthly rates available.' },
      default:    { eyebrow: 'Best Thailand rates', title: 'Find accommodation in Thailand',       desc: 'Search Agoda for serviced apartments and condos — great long-stay rates.' },
    },
  },
};

// Sticky sidebar — desktop only (hidden on mobile via className)
export function StickyAffiliateSidebar({ context = 'default' }) {
  return (
    <div className="aff-sticky-sidebar" style={{
      position: 'sticky',
      top: '88px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '4px', textAlign: 'center' }}>
        Recommended
      </div>
      <SidebarCard service="wise" context={context} />
      <SidebarCard service="safetywing" context={context} />
      <SidebarCard service="agoda" context={context} />
    </div>
  );
}

// Individual sidebar card
function SidebarCard({ service, context }) {
  const s = services[service];
  if (!s) return null;
  const t = s.taglines[context] || s.taglines.default;

  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      style={{
        background: 'rgba(20,13,4,0.85)',
        border: '1px solid rgba(201,150,58,0.4)',
        borderRadius: '4px',
        padding: '14px',
        textDecoration: 'none',
        backdropFilter: 'blur(6px)',
        display: 'block',
      }}
    >
      <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '6px' }}>
        {t.eyebrow}
      </div>
      <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{s.icon}</span>
      <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '13px', fontWeight: 700, color: '#F5EDD8', lineHeight: 1.3, marginBottom: '6px' }}>
        {t.title}
      </div>
      <div style={{ fontSize: '11px', color: '#7A6040', lineHeight: 1.5, marginBottom: '10px' }}>
        {t.desc}
      </div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 600, color: '#C9963A' }}>
        {s.cta} →
      </div>
    </a>
  );
}

// Inline banner for blog articles (mobile-friendly, replaces sidebar on mobile)
export function AffiliateBanner({ service, context = 'default' }) {
  const s = services[service];
  if (!s) return null;
  const t = s.taglines[context] || s.taglines.default;

  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      style={{
        display: 'block',
        background: 'linear-gradient(135deg, rgba(201,150,58,0.18) 0%, rgba(201,150,58,0.08) 100%)',
        border: '1px solid rgba(201,150,58,0.4)',
        borderRadius: '4px',
        padding: '20px 24px',
        textDecoration: 'none',
        marginBottom: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '36px', flexShrink: 0 }}>{s.icon}</div>
        <div style={{ flex: 1, minWidth: '180px' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '4px' }}>
            {t.eyebrow} · {s.category}
          </div>
          <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '17px', fontWeight: 700, color: '#F5EDD8', marginBottom: '4px' }}>
            {t.title}
          </div>
          <div style={{ fontSize: '13px', color: '#7A6040', lineHeight: 1.6 }}>
            {t.desc}
          </div>
        </div>
        <div style={{
          flexShrink: 0,
          background: '#C9963A', color: '#0F0A04',
          fontSize: '12px', fontWeight: 600,
          padding: '10px 18px', borderRadius: '3px',
          display: 'inline-flex', alignItems: 'center', gap: '6px',
        }}>
          {s.cta} →
        </div>
      </div>
    </a>
  );
}
