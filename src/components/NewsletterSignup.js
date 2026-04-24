'use client';

import { useState } from 'react';

export default function NewsletterSignup({ variant = 'default' }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
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
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  // ── Inline variant (for blog articles and FAQ) ──
  if (variant === 'inline') {
    return (
      <div
        className="rounded-2xl p-6 my-8 border"
        style={{ background: 'var(--color-cream)', borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl">📬</div>
          <div className="flex-1">
            <h3
              className="font-display text-xl mb-1"
              style={{ color: 'var(--color-ink)' }}
            >
              Stay updated on Thai retirement news
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-ink-soft)' }}>
              Pension rate changes, visa updates and cost of living — delivered to your inbox monthly. No spam.
            </p>

            {status === 'success' ? (
              <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
                <span>✅</span>
                <span>You're subscribed! We'll be in touch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-2 rounded-xl border text-sm outline-none focus:border-yellow-600"
                  style={{ borderColor: 'var(--color-border)', background: 'white', color: 'var(--color-ink)' }}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary text-sm py-2 px-5 whitespace-nowrap"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-xs mt-2">{errorMsg}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Default variant (for homepage) ──
  return (
    <section className="py-20 px-4" style={{ background: 'var(--color-ink)' }}>
      <div className="max-w-2xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-yellow-600/30 bg-yellow-600/10">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
            Free Newsletter
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Stay Ahead of the Changes
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Pension rate updates, Thai visa changes, cost of living shifts — we track it all so you don't have to. One email per month, no spam.
        </p>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-5xl">🎉</div>
            <p className="text-white text-xl font-display">You're subscribed!</p>
            <p className="text-gray-400">We'll keep you updated on everything Thailand retirement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name (optional)"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 outline-none focus:border-yellow-600/50 text-sm"
            />
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 outline-none focus:border-yellow-600/50 text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary py-3 px-6 whitespace-nowrap"
              >
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </div>
            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}
            <p className="text-gray-600 text-xs">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
