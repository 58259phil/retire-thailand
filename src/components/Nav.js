'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleCalculator = () => {
    setOpen(false);
    if (pathname === '/') {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#calculator');
    }
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
          <button onClick={handleCalculator} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '12px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#A08060',
            fontFamily: 'inherit', padding: 0,
          }}>
            Calculator
          </button>
          <Link href="/cities" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A08060', textDecoration: 'none' }}>City Guides</Link>
          <Link href="/blog" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A08060', textDecoration: 'none' }}>Blog</Link>
          <Link href="/faq" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A08060', textDecoration: 'none' }}>FAQ</Link>
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
          <button onClick={handleCalculator} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#A08060', textDecoration: 'none', fontSize: '14px',
            textAlign: 'left', fontFamily: 'inherit', padding: 0,
          }}>
            Calculator
          </button>
          <Link href="/cities" onClick={() => setOpen(false)} style={{ color: '#A08060', textDecoration: 'none', fontSize: '14px' }}>City Guides</Link>
          <Link href="/blog" onClick={() => setOpen(false)} style={{ color: '#A08060', textDecoration: 'none', fontSize: '14px' }}>Blog</Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: '#A08060', textDecoration: 'none', fontSize: '14px' }}>FAQ</Link>
        </div>
      )}
    </nav>
  );
}
