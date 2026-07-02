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
        <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
          <Link href="/#calculator" style={linkStyle}>Calculator</Link>
          <Link href="/cities" style={linkStyle}>City Guides</Link>
          <Link href="/blog" style={linkStyle}>Blog</Link>
          <Link href="/resources" style={linkStyle}>Resources</Link>
          <Link href="/faq" style={linkStyle}>FAQ</Link>
        </div>
      </div>

      {/* Mobile visible nav row */}
      <div className="md:hidden" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '0 12px 10px',
        borderTop: '1px solid rgba(201,150,58,0.08)',
        paddingTop: '10px',
      }}>
        <Link href="/cities" style={mobileLinkStyle}>Cities</Link>
        <Link href="/blog" style={mobileLinkStyle}>Blog</Link>
        <Link href="/resources" style={mobileLinkStyle}>Resources</Link>
        <Link href="/faq" style={mobileLinkStyle}>FAQ</Link>
      </div>
    </nav>
  );
}
