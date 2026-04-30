'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(15,10,4,0.97)',
      borderBottom: '1px solid rgba(201,150,58,0.15)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 40px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

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
          {[
            { href: '/', label: 'Calculator' },
            { href: '/cities', label: 'City Guides' },
            { href: '/blog', label: 'Blog' },
            { href: '/faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: '12px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#A08060',
              textDecoration: 'none',
            }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#F5EDD8' }}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M18 6L6 18M6 6l12 12"/>
              : <path d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(15,10,4,0.99)',
          borderTop: '1px solid rgba(201,150,58,0.1)',
          padding: '16px 40px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          {[
            { href: '/', label: 'Calculator' },
            { href: '/cities', label: 'City Guides' },
            { href: '/blog', label: 'Blog' },
            { href: '/faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link key={href} href={href}
              onClick={() => setOpen(false)}
              style={{ color: '#A08060', textDecoration: 'none', fontSize: '14px' }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
