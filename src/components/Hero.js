'use client';

import Link from 'next/link';

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Gold bar top */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, #0F0A04 0%, #C9963A 20%, #FFD87A 50%, #C9963A 80%, #0F0A04 100%)'
      }} />

      {/* Hero section */}
      <section style={{
        display: 'flex',
        height: '480px',
        position: 'relative',
        overflow: 'hidden',
        background: '#0F0A04',
      }}>

        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 28% 65%, rgba(201,150,58,0.07) 0%, transparent 55%)',
          zIndex: 1, pointerEvents: 'none'
        }} />

        {/* Left content */}
        <div style={{
          flex: 1,
          padding: '64px 40px 64px 5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 3,
          height: '480px',
        }}>

          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#C9963A', marginBottom: '20px'
          }}>
            <div style={{ width: '20px', height: '1px', background: '#C9963A' }} />
            For Australian Retirees
            <div style={{ width: '20px', height: '1px', background: '#C9963A' }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.12,
            color: '#F5EDD8',
            margin: '0 0 14px',
          }}>
            How Far Does Your<br />
            Pension Go in{' '}
            <em style={{ color: '#C9963A', fontStyle: 'italic' }}>Thailand?</em>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: '15px', color: '#7A6040', lineHeight: 1.75,
            maxWidth: '400px', marginBottom: '36px'
          }}>
            A free calculator built specifically for Australians — live AUD/THB rates,
            honest city-by-city cost breakdowns and everything you need to plan your move.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={scrollToCalculator}
              style={{
                display: 'inline-block',
                background: '#C9963A',
                color: '#0F0A04',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '14px 28px',
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                lineHeight: 1,
              }}
            >
              Calculate My Numbers →
            </button>
            <Link
              href="/cities"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#C9963A',
                fontSize: '14px',
                fontWeight: 500,
                padding: '13px 24px',
                borderRadius: '3px',
                border: '1px solid #C9963A',
                cursor: 'pointer',
                fontFamily: 'inherit',
                lineHeight: 1,
                textDecoration: 'none',
              }}
            >
              See City Guides
            </Link>
          </div>
        </div>

        {/* Right — temple photo */}
        <div style={{
          width: '360px',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
          height: '480px',
        }}>
          <img
            src="/temple.jpg"
            alt="Traditional Thai temple"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              display: 'block',
            }}
          />
          {/* Dark overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(8,4,0,0.25)',
            zIndex: 1,
          }} />
          {/* Left fade */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '120px', height: '100%',
            background: 'linear-gradient(90deg, #0F0A04 0%, rgba(15,10,4,0.9) 40%, transparent 100%)',
            zIndex: 2,
          }} />
        </div>
      </section>

      {/* Tick strip */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        padding: '14px 40px',
        background: '#130C04',
        borderTop: '1px solid rgba(201,150,58,0.12)',
        borderBottom: '1px solid rgba(201,150,58,0.12)',
        flexWrap: 'wrap',
      }}>
        {[
          'Live AUD/THB rates',
          '7 Thai cities compared',
          'March 2026 pension rates',
          'Free, no signup needed',
        ].map((item) => (
          <div key={item} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', color: '#A08060',
          }}>
            <span style={{ color: '#C9963A', fontWeight: 600 }}>✓</span>
            {item}
          </div>
        ))}
      </div>

      {/* Thai diamond pattern divider */}
      <div style={{ overflow: 'hidden', background: '#160E05' }}>
        <svg width="100%" height="24" viewBox="0 0 680 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="680" height="24" fill="#160E05"/>
          <line x1="0" y1="3" x2="680" y2="3" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
          <line x1="0" y1="21" x2="680" y2="21" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
          <g fill="#C9963A" opacity="0.45">
            {[20,58,96,134,172,210,248,286,324,362,400,438,476,514,552,590,628,666].map(x => (
              <polygon key={x} points={`${x},12 ${x+7},6 ${x+14},12 ${x+7},18`}/>
            ))}
          </g>
        </svg>
      </div>
    </>
  );
}
