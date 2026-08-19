'use client';

import Link from 'next/link';

export default function Nav() {
  const linkStyle = {
    fontSize: '12px', letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#A08060', textDecoration: 'none',
  };

  const mobileLinkStyle = {
    fontSize: '11px', letterSpacing: '0.1em',
    textTransform: 'uppercase', color: '#A08060', textDecoration: 'none',
    padding: '4px 2px',
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(15,10,4,0.97)',
      borderBottom: '1px solid rgba(201,150,58,0.15)',
      backdropFilter: 'blur(12px)',
    }}>
      <style>{`
        .nav-desktop-links { display: flex; align-items: center; gap: 32px; }
        .nav-mobile-row { display: none; }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none; }
          .nav-mobile-row {
            display: flex; align-items: center; justify-content: space-around;
            padding: 10px 12px 10px;
            border-top: 1px solid rgba(201,150,58,0.08);
          }
        }
      `}</style>

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 20px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }} className="nav-top-row">

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: '20px', color: '#F5EDD8',
          }}>
            Retire <em style={{ color: '#C9963A', fontStyle: 'normal' }}>Thailand</em>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop-links">
          <Link href="/#calculator" style={linkStyle}>Calculator</Link>
          <Link href="/cities" style={linkStyle}>City Guides</Link>
          <Link href="/blog" style={linkStyle}>Blog</Link>
          <Link href="/resources" style={linkStyle}>Resources</Link>
          <Link href="/faq" style={linkStyle}>FAQ</Link>
        </div>
      </div>

      {/* Mobile visible nav row */}
      <div className="nav-mobile-row">
        <Link href="/cities" style={mobileLinkStyle}>Cities</Link>
        <Link href="/blog" style={mobileLinkStyle}>Blog</Link>
        <Link href="/resources" style={mobileLinkStyle}>Resources</Link>
        <Link href="/faq" style={mobileLinkStyle}>FAQ</Link>
      </div>
    </nav>
  );
}
