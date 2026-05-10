import Link from 'next/link';
import { cityGuides, getCityGuide } from '@/lib/content/cityGuides';
import { notFound } from 'next/navigation';
import { AffiliateBanner, StickyAffiliateSidebar } from '@/components/AffiliateCard';

export async function generateStaticParams() {
  return cityGuides.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const city = getCityGuide(params.slug);
  if (!city) return {};
  return {
    title: `Retiring in ${city.name}, Thailand | Retire Thailand`,
    description: city.metaDescription,
    openGraph: { title: `Retiring in ${city.name}, Thailand`, description: city.metaDescription, type: 'article' },
  };
}

function renderContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#F5EDD8', marginTop: '32px', marginBottom: '12px' }}>{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', fontWeight: 700, color: '#C9963A', marginTop: '24px', marginBottom: '10px' }}>{line.replace('### ', '')}</h3>);
    } else {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F5EDD8">$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#C9963A;text-decoration:underline;font-weight:600;">$1</a>');
      elements.push(<p key={i} style={{ fontSize: '15px', lineHeight: 1.8, color: '#7A6040', marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: html }} />);
    }
    i++;
  }
  return elements;
}

const card = {
  background: 'rgba(20,13,4,0.82)',
  border: '1px solid rgba(201,150,58,0.25)',
  borderRadius: '4px',
  padding: '20px',
  backdropFilter: 'blur(6px)',
  marginBottom: '16px',
};

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

export default function CityGuidePage({ params }) {
  const city = getCityGuide(params.slug);
  if (!city) notFound();
  const otherCities = cityGuides.filter(c => c.slug !== city.slug);

  return (
    <main style={{
      position: 'relative', minHeight: '100vh',
      backgroundImage: 'url(/temple.jpg)',
      backgroundSize: '120%', backgroundPosition: 'center 20%', backgroundAttachment: 'scroll',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,6,2,0.58) 0%, rgba(15,10,4,0.52) 50%, rgba(10,6,2,0.58) 100%)', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Gold bar */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #0F0A04 0%, #C9963A 20%, #FFD87A 50%, #C9963A 80%, #0F0A04 100%)' }} />

        {/* Dark header */}
        <div style={{ background: '#0F0A04', padding: '48px 40px', borderBottom: '1px solid rgba(201,150,58,0.15)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <Link href="/cities" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#5A4030', textDecoration: 'none', marginBottom: '24px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A4030" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All city guides
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '56px', lineHeight: 1 }}>{city.heroEmoji}</span>
              <div>
                <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#F5EDD8', lineHeight: 1.1, marginBottom: '6px' }}>
                  {city.name}
                </h1>
                <p style={{ fontSize: '14px', color: '#C9963A', fontWeight: 500 }}>{city.tagline}</p>
                <p style={{ fontSize: '12px', color: '#5A4030', marginTop: '4px' }}>{city.region}</p>
              </div>
            </div>
          </div>
        </div>

        <DiamondDivider />

        {/* Content — 3 column: sticky sidebar | article | right sidebar */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 320px', gap: '24px', alignItems: 'start' }} className="city-guide-outer-grid">

            {/* LEFT: Sticky affiliate sidebar */}
            <StickyAffiliateSidebar context="cityGuide" />

            {/* MIDDLE + RIGHT: existing content */}
            <div style={{ display: 'contents' }}>

            {/* Main content */}
            <div>
              {/* Verdict */}
              <div style={{ ...card, borderLeft: '3px solid #C9963A', borderRadius: '0 4px 4px 0' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '8px' }}>Our Verdict</div>
                <p style={{ fontSize: '15px', color: '#A08060', lineHeight: 1.7 }}>{city.verdict}</p>
              </div>

              {/* Article */}
              <div style={card}>
                {renderContent(city.content)}
              </div>

              {/* CTA */}
              <div style={{ ...card, textAlign: 'center', padding: '32px' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>🧮</div>
                <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', color: '#F5EDD8', marginBottom: '8px' }}>
                  Calculate Your {city.name} Budget
                </h3>
                <p style={{ fontSize: '13px', color: '#7A6040', marginBottom: '20px' }}>
                  See exactly how your Australian pension stacks up against {city.name}'s costs.
                </p>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9963A', color: '#0F0A04', fontSize: '14px', fontWeight: 600, padding: '13px 28px', borderRadius: '3px', textDecoration: 'none' }}>
                  Open Pension Calculator
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>

              {/* Quick facts */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '14px' }}>Quick Facts</div>
                {[
                  { label: 'Population', val: city.population },
                  { label: 'Climate', val: city.climate },
                  { label: 'Expat scene', val: city.expat.size },
                ].map(({ label, val }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '6px 0', borderBottom: '1px solid rgba(201,150,58,0.08)' }}>
                    <span style={{ color: '#5A4030' }}>{label}</span>
                    <span style={{ color: '#A08060', fontWeight: 500 }}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Monthly budget */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '14px' }}>Monthly Budget (THB)</div>
                {[
                  { label: 'Budget', amount: city.monthlyBudget.budget, color: '#6FCF97' },
                  { label: 'Comfortable', amount: city.monthlyBudget.comfortable, color: '#C9963A' },
                  { label: 'Western', amount: city.monthlyBudget.luxury, color: '#A08060' },
                ].map(tier => (
                  <div key={tier.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: 'rgba(201,150,58,0.06)', border: '1px solid rgba(201,150,58,0.12)', borderRadius: '3px', marginBottom: '6px', fontSize: '13px' }}>
                    <span style={{ color: '#7A6040' }}>{tier.label}</span>
                    <span style={{ fontWeight: 700, color: tier.color }}>฿{tier.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Highlights</div>
                {city.highlights.map(h => (
                  <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#7A6040', marginBottom: '6px' }}>
                    <span style={{ color: '#6FCF97', flexShrink: 0 }}>✓</span>{h}
                  </div>
                ))}
              </div>

              {/* Watch outs */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Watch Out For</div>
                {city.lowlights.map(l => (
                  <div key={l} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#7A6040', marginBottom: '6px' }}>
                    <span style={{ color: '#F6C90E', flexShrink: 0 }}>!</span>{l}
                  </div>
                ))}
              </div>

              {/* Neighbourhoods */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '14px' }}>Neighbourhoods</div>
                {city.neighbourhoods.map((n, i) => (
                  <div key={n.name} style={{ paddingBottom: '14px', marginBottom: '14px', borderBottom: i < city.neighbourhoods.length - 1 ? '1px solid rgba(201,150,58,0.1)' : 'none' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#F5EDD8', marginBottom: '4px' }}>{n.name}</div>
                    <div style={{ fontSize: '12px', color: '#5A4030', marginBottom: '4px' }}>{n.description}</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#C9963A' }}>{n.rentRange}</div>
                  </div>
                ))}
              </div>

              {/* Healthcare */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '8px' }}>Healthcare</div>
                <p style={{ fontSize: '12px', color: '#5A4030', marginBottom: '14px', lineHeight: 1.6 }}>{city.healthcare.summary}</p>
                {city.healthcare.hospitals.map(h => (
                  <div key={h.name} style={{ fontSize: '12px', marginBottom: '8px' }}>
                    <div style={{ fontWeight: 600, color: '#A08060' }}>{h.name}</div>
                    <div style={{ color: '#5A4030' }}>{h.type} · {h.notes}</div>
                  </div>
                ))}
              </div>

              {/* Recommended services — TOP of sidebar */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Recommended Services</div>
                <a href="https://wise.prf.hn/click/camref:1011l5FiPJ" target="_blank" rel="noopener noreferrer sponsored" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'rgba(201,150,58,0.08)', border: '1px solid rgba(201,150,58,0.25)', borderRadius: '3px', textDecoration: 'none', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>💸</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '2px' }}>Real exchange rate</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#F5EDD8' }}>Send your pension to {city.name}</div>
                    <div style={{ fontSize: '10px', color: '#7A6040', marginTop: '2px' }}>Wise saves ~$1,200/year vs banks</div>
                  </div>
                  <span style={{ color: '#C9963A', fontSize: '14px' }}>→</span>
                </a>
                <a href="https://safetywing.com/?referenceID=26504193" target="_blank" rel="noopener noreferrer sponsored" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'rgba(201,150,58,0.08)', border: '1px solid rgba(201,150,58,0.25)', borderRadius: '3px', textDecoration: 'none' }}>
                  <span style={{ fontSize: '20px' }}>🏥</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '2px' }}>Hospital cover</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#F5EDD8' }}>Cover wherever you live</div>
                    <div style={{ fontSize: '10px', color: '#7A6040', marginTop: '2px' }}>SafetyWing — required for visa</div>
                  </div>
                  <span style={{ color: '#C9963A', fontSize: '14px' }}>→</span>
                </a>
              </div>

              {/* Other cities */}
              <div style={card}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '12px' }}>Other City Guides</div>
                {otherCities.map(c => (
                  <Link key={c.slug} href={`/cities/${c.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#A08060', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid rgba(201,150,58,0.08)' }}>
                    <span>{c.heroEmoji}</span>
                    <span style={{ fontWeight: 500 }}>{c.name}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5A4030" strokeWidth="2.5" style={{ marginLeft: 'auto' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                ))}
              </div>

            </div>
            </div>
          </div>
        </div>

        <DiamondDivider />
        <div style={{ background: '#0F0A04', textAlign: 'center', padding: '48px 40px' }}>
          <Link href="/cities" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9963A', color: '#0F0A04', fontSize: '14px', fontWeight: 600, padding: '13px 28px', borderRadius: '3px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0A04" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to All City Guides
          </Link>
        </div>

      </div>
    </main>
  );
}
