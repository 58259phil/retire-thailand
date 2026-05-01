import Link from 'next/link';
import { cityGuides } from '@/lib/content/cityGuides';

export const metadata = {
  title: 'City Guides | Retire Thailand — Where to Retire in Thailand',
  description: 'In-depth guides to the best cities to retire in Thailand as an Australian. Real costs, neighbourhoods, healthcare and honest assessments of Hua Hin, Khon Kaen, Chiang Mai and more.',
};

export default function CitiesPage() {
  return (
    <main style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: 'url(/temple.jpg)',
      backgroundSize: '120%',
      backgroundPosition: 'center 20%',
      backgroundAttachment: 'fixed',
    }}>

      {/* Dark overlay — only over the photo area below header */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,6,2,0.58) 0%, rgba(15,10,4,0.52) 50%, rgba(10,6,2,0.58) 100%)',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Gold bar top */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #0F0A04 0%, #C9963A 20%, #FFD87A 50%, #C9963A 80%, #0F0A04 100%)' }} />

        {/* Header — solid dark background matching hero */}
        <div style={{
          background: '#0F0A04',
          padding: '72px 40px 48px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(201,150,58,0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>City Guides</span>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700,
            color: '#F5EDD8', marginBottom: '14px', lineHeight: 1.15,
          }}>
            Where Should You Retire in Thailand?
          </h1>
          <p style={{ fontSize: '15px', color: '#7A6040', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Honest, detailed guides to Thailand's top retirement cities — written for Australians living on a pension.
          </p>
        </div>

        {/* Diamond divider — dark background */}
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

        {/* City cards */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 40px 48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {cityGuides.map((city) => (
              <Link key={city.slug} href={`/cities/${city.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: 'rgba(20,13,4,0.82)',
                  border: '1px solid rgba(201,150,58,0.25)',
                  borderRadius: '4px',
                  padding: '28px 32px',
                  backdropFilter: 'blur(6px)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                }}>
                  {/* Emoji */}
                  <div style={{ fontSize: '44px', flexShrink: 0, lineHeight: 1 }}>{city.heroEmoji}</div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                      <h2 style={{
                        fontFamily: 'var(--font-display), Georgia, serif',
                        fontSize: '24px', fontWeight: 700, color: '#F5EDD8', margin: 0,
                      }}>
                        {city.name}
                      </h2>
                      <span style={{ fontSize: '12px', color: '#5A4030', letterSpacing: '0.06em' }}>{city.region}</span>
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#C9963A', marginBottom: '10px' }}>
                      {city.tagline}
                    </p>
                    <p style={{ fontSize: '14px', color: '#7A6040', lineHeight: 1.7, marginBottom: '16px' }}>
                      {city.verdict}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {city.highlights.slice(0, 4).map(h => (
                        <span key={h} style={{
                          fontSize: '11px', padding: '3px 10px',
                          background: 'rgba(201,150,58,0.1)',
                          border: '1px solid rgba(201,150,58,0.25)',
                          borderRadius: '2px', color: '#C9963A', fontWeight: 500,
                        }}>
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '13px' }}>
                        <div>
                          <span style={{ color: '#5A4030' }}>Budget: </span>
                          <span style={{ fontWeight: 600, color: '#F5EDD8' }}>฿{city.monthlyBudget.budget.toLocaleString()}/mo</span>
                        </div>
                        <div>
                          <span style={{ color: '#5A4030' }}>Comfortable: </span>
                          <span style={{ fontWeight: 600, color: '#F5EDD8' }}>฿{city.monthlyBudget.comfortable.toLocaleString()}/mo</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#C9963A' }}>
                        Read full guide
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9963A" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Diamond divider — dark background, full width */}
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

        {/* Dark footer — full width */}
        <div style={{ background: '#0F0A04', textAlign: 'center', padding: '48px 40px' }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#C9963A', color: '#0F0A04',
            fontSize: '14px', fontWeight: 600,
            padding: '13px 28px', borderRadius: '3px',
            textDecoration: 'none',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0A04" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Compare Cities in the Calculator
          </Link>
        </div>

      </div>
    </main>
  );
}
