import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#080503', borderTop: '1px solid rgba(201,150,58,0.12)', padding: '28px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>

          {/* Logo + tagline */}
          <div>
            <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', color: '#F5EDD8', marginBottom: '4px' }}>
              Retire <span style={{ color: '#C9963A' }}>Thailand</span>
            </div>
            <div style={{ fontSize: '12px', color: '#3A2810' }}>
              Helping Australians retire smarter in the Land of Smiles.
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { href: '/cities', label: 'City Guides' },
              { href: '/blog', label: 'Blog' },
              { href: '/faq', label: 'FAQ' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#3A2810', textDecoration: 'none',
              }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{ fontSize: '11px', color: '#3A2810', textAlign: 'right', maxWidth: '340px', lineHeight: 1.6 }}>
            <p>Cost data sourced from Numbeo, ExpatDen & Thailand Insider Guide 2025–2026.</p>
            <p style={{ marginTop: '4px' }}>Not financial advice. Verify all figures with Centrelink and a licensed adviser.</p>
            <p style={{ marginTop: '4px' }}>© {new Date().getFullYear()} Retire Thailand.</p>
          </div>

        </div>
      </div>

      {/* Gold bar bottom */}
      <div style={{
        height: '3px', marginTop: '24px',
        background: 'linear-gradient(90deg, #0F0A04 0%, #C9963A 20%, #FFD87A 50%, #C9963A 80%, #0F0A04 100%)',
      }} />
    </footer>
  );
}
