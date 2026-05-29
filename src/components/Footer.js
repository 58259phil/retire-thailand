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
            <div style={{ fontSize: '12px', color: '#A08060', marginBottom: '8px' }}>
              Retire smarter in the Land of Smiles.
            </div>
            {/* Facebook link */}
            <a
              href="https://www.facebook.com/profile.php?id=61590254589956"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#7A6040', fontSize: '11px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#7A6040" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
          </div>

          {/* Legal nav links — replaces main nav */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
              { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/disclaimer', label: 'Disclaimer' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontSize: '11px', letterSpacing: '0.06em',
                color: '#A08060', textDecoration: 'none',
              }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ fontSize: '11px', color: '#A08060', textAlign: 'right' }}>
            © {new Date().getFullYear()} Retire Thailand.
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
