'use client';

import { useState } from 'react';

export default function NewsletterSignup({ variant = 'default' }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong');
        setStatus('error');
      } else {
        setStatus('success');
        setEmail('');
        setName('');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  // Inline variant for blog/FAQ
  if (variant === 'inline') {
    return (
      <div style={{
        background: '#160E05',
        border: '1px solid rgba(201,150,58,0.2)',
        borderRadius: '4px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ fontSize: '28px' }}>📬</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', color: '#F5EDD8', marginBottom: '6px' }}>
              Stay updated on Thai retirement news
            </h3>
            <p style={{ fontSize: '13px', color: '#7A6040', lineHeight: 1.6, marginBottom: '16px' }}>
              Pension rate changes, visa updates and cost of living — delivered monthly. No spam.
            </p>
            {status === 'success' ? (
              <div style={{ fontSize: '14px', color: '#6FCF97', fontWeight: 500 }}>✅ You're subscribed!</div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" required
                  style={{
                    flex: 1, minWidth: '200px', padding: '10px 14px',
                    background: 'rgba(201,150,58,0.06)',
                    border: '1px solid rgba(201,150,58,0.25)',
                    borderRadius: '3px', color: '#F5EDD8',
                    fontSize: '13px', fontFamily: 'inherit',
                  }}
                />
                <button type="submit" disabled={status === 'loading'} style={{
                  padding: '10px 20px', background: '#C9963A', color: '#0F0A04',
                  border: 'none', borderRadius: '3px', fontSize: '13px',
                  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
                }}>
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
                </button>
              </form>
            )}
            {status === 'error' && <p style={{ fontSize: '12px', color: '#EB5757', marginTop: '8px' }}>{errorMsg}</p>}
          </div>
        </div>
      </div>
    );
  }

  // Default homepage variant
  return (
    <section style={{ background: '#0F0A04', padding: '72px 40px' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>Free newsletter</span>
          <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#F5EDD8', marginBottom: '12px' }}>
          Stay Ahead of the Changes
        </h2>
        <p style={{ fontSize: '14px', color: '#7A6040', lineHeight: 1.7, marginBottom: '36px' }}>
          Pension rate updates, Thai visa changes, cost of living shifts — we track it all so you don't have to. One email per month, no spam.
        </p>

        {status === 'success' ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '48px' }}>🎉</div>
            <p style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', color: '#F5EDD8' }}>You're subscribed!</p>
            <p style={{ fontSize: '13px', color: '#7A6040' }}>We'll keep you updated on everything Thailand retirement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '420px', margin: '0 auto' }}>
            <input
              type="text" value={name}
              onChange={e => setName(e.target.value)}
              placeholder="First name (optional)"
              style={{
                width: '100%', padding: '12px 16px',
                background: 'rgba(201,150,58,0.06)',
                border: '1px solid rgba(201,150,58,0.2)',
                borderRadius: '3px', color: '#F5EDD8',
                fontSize: '14px', fontFamily: 'inherit',
              }}
            />
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email" value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" required
                style={{
                  flex: 1, padding: '12px 16px',
                  background: 'rgba(201,150,58,0.06)',
                  border: '1px solid rgba(201,150,58,0.2)',
                  borderRadius: '3px', color: '#F5EDD8',
                  fontSize: '14px', fontFamily: 'inherit',
                }}
              />
              <button type="submit" disabled={status === 'loading'} style={{
                padding: '12px 24px', background: '#C9963A', color: '#0F0A04',
                border: 'none', borderRadius: '3px', fontSize: '14px',
                fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
              }}>
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </div>
            {status === 'error' && <p style={{ fontSize: '12px', color: '#EB5757' }}>{errorMsg}</p>}
            <p style={{ fontSize: '11px', color: '#3A2810' }}>No spam. Unsubscribe anytime.</p>
          </form>
        )}
      </div>
    </section>
  );
}
