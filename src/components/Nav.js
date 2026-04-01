'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style={{ background: 'rgba(26,18,9,0.95)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-display text-xl text-white hover:text-yellow-400 transition-colors">
          Retire <span style={{ color: 'var(--color-gold)' }}>Thailand</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Calculator</Link>
          <Link href="/cities" className="text-sm text-gray-300 hover:text-white transition-colors">City Guides</Link>
          <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</Link>
          <Link href="/#calculator" className="btn-primary text-sm py-2 px-5">
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
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
        <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3" style={{ background: 'rgba(26,18,9,0.98)' }}>
          <Link href="/" className="block text-gray-300 py-2" onClick={() => setOpen(false)}>Calculator</Link>
          <Link href="/cities" className="block text-gray-300 py-2" onClick={() => setOpen(false)}>City Guides</Link>
          <Link href="/blog" className="block text-gray-300 py-2" onClick={() => setOpen(false)}>Blog</Link>
        </div>
      )}
    </nav>
  );
}
