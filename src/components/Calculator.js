'use client';

import { useState, useEffect, useCallback } from 'react';
import { cities, pensionRates, lifestyleOptions, rentOptions, foodOptions } from '@/lib/data';

// ── Helpers ──────────────────────────────────────────────
const formatAUD = (n) => `A$${Math.abs(n).toFixed(0)}`;
const formatTHB = (n) => `฿${Math.abs(Math.round(n)).toLocaleString()}`;

const cityEmojis = {
  'bangkok':    '🌆',
  'chiang-mai': '🏔️',
  'chiang-rai': '🌿',
  'hua-hin':    '🏖️',
  'khon-kaen':  '🏙️',
  'pattaya':    '🌊',
  'phuket':     '🌴',
};

const lineItems = [
  { key: 'rent',          label: 'Rent',            emoji: '🏠' },
  { key: 'food',          label: 'Food & groceries', emoji: '🍜' },
  { key: 'utilities',     label: 'Utilities',        emoji: '💡' },
  { key: 'internet',      label: 'Internet',         emoji: '📶' },
  { key: 'transport',     label: 'Transport',        emoji: '🛵' },
  { key: 'entertainment', label: 'Entertainment',    emoji: '🎉' },
  { key: 'insurance',     label: 'Health Insurance', emoji: '🏥' },
  { key: 'misc',          label: 'Miscellaneous',    emoji: '🛍️' },
];

// ── Styles ────────────────────────────────────────────────
const S = {
  // Layout
  section: {
    padding: '64px 24px',
    background: '#F7F0E4',
  },
  inner: {
    maxWidth: '960px',
    margin: '0 auto',
  },

  // Header
  title: {
    fontFamily: 'var(--font-display), Georgia, serif',
    fontSize: '32px',
    fontWeight: 700,
    color: '#1A1108',
    textAlign: 'center',
    marginBottom: '8px',
  },
  sub: {
    fontSize: '14px',
    color: '#7A6040',
    textAlign: 'center',
    marginBottom: '24px',
    lineHeight: 1.7,
  },

  // Exchange bar
  exBar: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#1A1108',
    borderRadius: '3px',
    padding: '8px 16px',
    marginBottom: '32px',
  },
  liveDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#4CAF50',
    display: 'inline-block',
  },
  exLabel: {
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#7A6040',
  },
  exRate: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#C9963A',
  },

  // Step label
  stepLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '10px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#7A6040',
    marginBottom: '14px',
  },
  stepNum: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#C9963A',
    color: '#0F0A04',
    fontSize: '11px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  // Input card
  icard: {
    background: '#1A1108',
    border: '1px solid rgba(201,150,58,0.2)',
    borderRadius: '4px',
    padding: '14px',
  },
  ititle: {
    fontSize: '10px',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#C9963A',
    marginBottom: '10px',
  },

  // Seg buttons
  segBtn: { display: 'flex', gap: '4px' },
  seg: (on) => ({
    flex: 1,
    padding: '7px 4px',
    border: `1px solid ${on ? '#C9963A' : 'rgba(201,150,58,0.25)'}`,
    borderRadius: '3px',
    fontSize: '11px',
    textAlign: 'center',
    color: on ? '#0F0A04' : '#7A6040',
    cursor: 'pointer',
    background: on ? '#C9963A' : 'transparent',
    fontWeight: on ? 600 : 400,
    fontFamily: 'inherit',
  }),

  // Radio items
  ritem: (on) => ({
    padding: '7px 10px',
    border: `1px solid ${on ? '#C9963A' : 'rgba(201,150,58,0.2)'}`,
    borderRadius: '3px',
    fontSize: '12px',
    color: on ? '#0F0A04' : '#7A6040',
    cursor: 'pointer',
    background: on ? '#C9963A' : 'transparent',
    fontWeight: on ? 600 : 400,
    fontFamily: 'inherit',
    textAlign: 'left',
    width: '100%',
    marginBottom: '5px',
  }),

  // Income display
  incDisp: {
    background: 'rgba(201,150,58,0.1)',
    border: '1px solid rgba(201,150,58,0.2)',
    borderRadius: '3px',
    padding: '10px',
    marginTop: '8px',
  },
  incAmt: {
    fontFamily: 'var(--font-display), Georgia, serif',
    fontSize: '18px',
    color: '#C9963A',
  },
  incSub: {
    fontSize: '10px',
    color: '#5A4030',
    marginTop: '2px',
  },

  // Gold divider
  goldDiv: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(201,150,58,0.4) 30%, rgba(201,150,58,0.7) 50%, rgba(201,150,58,0.4) 70%, transparent)',
    margin: '28px 0',
  },

  // City card
  ccard: (on) => ({
    background: on ? '#231608' : '#1A1108',
    border: `1px solid ${on ? '#C9963A' : 'rgba(201,150,58,0.2)'}`,
    borderRadius: '4px',
    padding: '14px',
    cursor: 'pointer',
    position: 'relative',
    textAlign: 'left',
    fontFamily: 'inherit',
    width: '100%',
  }),

  // Results accordion
  resItem: (open) => ({
    background: '#1A1108',
    border: `1px solid ${open ? 'rgba(201,150,58,0.5)' : 'rgba(201,150,58,0.2)'}`,
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '10px',
  }),
  resHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 18px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    width: '100%',
    fontFamily: 'inherit',
  },
};

// ── Sub-components ────────────────────────────────────────

function CityCardNew({ city, selected, onToggle }) {
  const emoji = cityEmojis[city.id] || '📍';
  return (
    <button onClick={onToggle} style={S.ccard(selected)}>
      {selected && (
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          width: '18px', height: '18px', borderRadius: '50%',
          background: '#C9963A', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '9px', color: '#0F0A04', fontWeight: 700,
        }}>✓</div>
      )}
      <span style={{ fontSize: '22px', marginBottom: '8px', display: 'block' }}>{emoji}</span>
      <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '14px', fontWeight: 700, color: '#F5EDD8', marginBottom: '2px' }}>
        {city.name}
      </div>
      <div style={{ fontSize: '10px', color: '#5A4030', marginBottom: '8px' }}>{city.region}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {city.tags.slice(0, 2).map(tag => (
          <span key={tag} style={{
            fontSize: '9px', fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: '#C9963A',
            padding: '2px 6px', border: '1px solid rgba(201,150,58,0.25)', borderRadius: '2px',
          }}>{tag}</span>
        ))}
      </div>
    </button>
  );
}

function ResultsPanelNew({ city, results, exchangeRate, index }) {
  const [open, setOpen] = useState(index === 0);
  const [view, setView] = useState('monthly');

  const emoji = cityEmojis[city.id] || '📍';
  const isTight = results.surplusWeekly < 0;
  const isOk = results.surplusWeekly >= 0 && results.surplusWeekly <= 100;
  const isGood = results.surplusWeekly > 100;
  const surplusColor = isGood ? '#6FCF97' : isOk ? '#F6C90E' : '#EB5757';
  const multiplier = view === 'weekly' ? 1 / 4.33 : 1;

  return (
    <div style={S.resItem(open)}>
      {/* Header */}
      <button style={S.resHeader} onClick={() => setOpen(!open)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '20px' }}>{emoji}</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '16px', color: '#F5EDD8' }}>
              {city.name}
            </div>
            <div style={{ fontSize: '11px', color: '#5A4030', marginTop: '1px' }}>{city.region}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5A4030' }}>
              Weekly surplus
            </div>
            <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '20px', color: surplusColor }}>
              {isTight ? '−' : '+'} {formatAUD(Math.abs(results.surplusWeekly))}
            </div>
          </div>
          <span style={{ color: '#5A4030', fontSize: '14px', transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▼</span>
        </div>
      </button>

      {/* Surplus bar */}
      <div style={{ padding: '0 18px 12px' }}>
        <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: '2px', background: surplusColor,
            width: `${Math.min(100, Math.max(5, results.surplusPercent))}%`,
          }} />
        </div>
      </div>

      {/* Body */}
      {open && (
        <div style={{ borderTop: '1px solid rgba(201,150,58,0.1)', padding: '16px 18px 18px' }}>

          {/* View toggle */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#5A4030' }}>
              Budget Breakdown
            </span>
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', padding: '3px' }}>
              {['weekly', 'monthly'].map(v => (
                <button key={v} onClick={() => setView(v)} style={{
                  padding: '4px 12px', borderRadius: '2px', fontSize: '11px',
                  fontWeight: view === v ? 600 : 400,
                  background: view === v ? '#C9963A' : 'transparent',
                  color: view === v ? '#0F0A04' : '#7A6040',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  textTransform: 'capitalize',
                }}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Line items */}
          {lineItems.map(item => {
            const thb = results.monthlyTHB[item.key];
            if (!thb) return null;
            const dispTHB = thb * multiplier;
            const dispAUD = (thb / exchangeRate) * multiplier;
            return (
              <div key={item.key} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
                fontSize: '13px', color: '#7A6040',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#C9963A', fontWeight: 500, fontSize: '13px' }}>{formatAUD(dispAUD)}</div>
                  <div style={{ color: '#5A4030', fontSize: '11px' }}>{formatTHB(dispTHB)}</div>
                </div>
              </div>
            );
          })}

          {/* Totals */}
          <div style={{ marginTop: '14px', borderTop: '1px solid rgba(201,150,58,0.2)', paddingTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#7A6040', marginBottom: '8px' }}>
              <span>Total expenses</span>
              <span style={{ color: '#A08060', fontWeight: 500 }}>
                {view === 'weekly' ? formatAUD(results.totalWeeklyAUD) : formatAUD(results.totalMonthlyAUD)}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#7A6040', marginBottom: '8px' }}>
              <span>Your income</span>
              <span style={{ color: '#A08060', fontWeight: 500 }}>
                {view === 'weekly' ? formatAUD(results.pensionWeekly) : formatAUD(results.pensionWeekly * 4.33)}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(201,150,58,0.15)' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8' }}>
                {isTight ? 'Shortfall' : 'Surplus'}
              </span>
              <span style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', color: surplusColor }}>
                {isTight ? '−' : '+'} {view === 'weekly' ? formatAUD(Math.abs(results.surplusWeekly)) : formatAUD(Math.abs(results.surplusMonthly))}
                <span style={{ fontSize: '12px', fontFamily: 'inherit', marginLeft: '4px', color: '#7A6040' }}>
                  /{view === 'weekly' ? 'wk' : 'mo'}
                </span>
              </span>
            </div>
          </div>

          {/* Extra info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '14px' }}>
            <div style={{ background: 'rgba(201,150,58,0.06)', borderRadius: '3px', padding: '8px 12px' }}>
              <div style={{ fontSize: '10px', color: '#5A4030', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Monthly in Baht</div>
              <div style={{ fontSize: '13px', color: '#A08060', fontWeight: 500 }}>{formatTHB(results.totalMonthlyTHB)}</div>
            </div>
            <div style={{ background: 'rgba(201,150,58,0.06)', borderRadius: '3px', padding: '8px 12px' }}>
              <div style={{ fontSize: '10px', color: '#5A4030', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Income covers</div>
              <div style={{ fontSize: '13px', color: '#A08060', fontWeight: 500 }}>
                {Math.min(100, Math.round((results.totalWeeklyAUD / results.pensionWeekly) * 100))}% of costs
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

// ── Main Calculator ───────────────────────────────────────
export default function Calculator() {
  const [pensionType, setPensionType]       = useState('single');
  const [customAmount, setCustomAmount]     = useState('');
  const [useCustomAmount, setUseCustomAmount] = useState(false);
  const [selectedCities, setSelectedCities] = useState(['hua-hin', 'khon-kaen']);
  const [rentOption, setRentOption]         = useState('one-bed');
  const [foodOption, setFoodOption]         = useState('mixed');
  const [lifestyle, setLifestyle]           = useState('comfortable');
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [exchangeRate, setExchangeRate]     = useState(22.0);
  const [rateLoading, setRateLoading]       = useState(true);
  const [rateError, setRateError]           = useState(false);

  useEffect(() => {
    fetch('/api/exchange-rate')
      .then(r => r.json())
      .then(d => { setExchangeRate(d.rate); setRateError(d.source === 'fallback'); })
      .catch(() => setRateError(true))
      .finally(() => setRateLoading(false));
  }, []);

  const weeklyPensionAUD = useCallback(() => {
    if (useCustomAmount && customAmount) return parseFloat(customAmount) || 0;
    return pensionType === 'single'
      ? pensionRates.single.overseasWeekly
      : pensionRates.couple.combined.weekly;
  }, [useCustomAmount, customAmount, pensionType]);

  const toggleCity = (id) => {
    setSelectedCities(prev => {
      if (prev.includes(id)) return prev.length === 1 ? prev : prev.filter(c => c !== id);
      if (prev.length >= 3) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const calculateCityCosts = useCallback((city) => {
    const lm = lifestyleOptions.find(l => l.id === lifestyle)?.multiplier || 1;
    const rk = rentOptions.find(r => r.id === rentOption)?.key || 'rentOneBed';
    const fk = foodOptions.find(f => f.id === foodOption)?.key || 'foodMixed';

    const monthlyTHB = {
      rent:          city.costs[rk],
      food:          city.costs[fk] * lm,
      utilities:     city.costs.utilities,
      internet:      city.costs.internet,
      transport:     city.costs.transport * lm,
      entertainment: city.costs.entertainment * lm,
      insurance:     includeInsurance ? city.costs.healthInsurance : 0,
      misc:          city.costs.misc * lm,
    };

    const totalMonthlyTHB = Object.values(monthlyTHB).reduce((a, b) => a + b, 0);
    const totalMonthlyAUD = totalMonthlyTHB / exchangeRate;
    const totalWeeklyAUD  = totalMonthlyAUD / 4.33;
    const totalWeeklyTHB  = totalMonthlyTHB / 4.33;
    const pensionWeekly   = weeklyPensionAUD();
    const surplusWeekly   = pensionWeekly - totalWeeklyAUD;
    const surplusMonthly  = surplusWeekly * 4.33;

    return {
      monthlyTHB, totalMonthlyTHB, totalMonthlyAUD,
      totalWeeklyAUD, totalWeeklyTHB,
      surplusWeekly, surplusMonthly, pensionWeekly,
      canAfford: surplusWeekly >= 0,
      surplusPercent: Math.min(100, Math.max(0, (surplusWeekly / pensionWeekly) * 100)),
    };
  }, [lifestyle, rentOption, foodOption, includeInsurance, exchangeRate, weeklyPensionAUD]);

  // Sort cities alphabetically for display
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
  const weeklyAUD = weeklyPensionAUD();

  return (
    <section id="calculator" style={S.section}>
      <div style={S.inner}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h2 style={S.title}>Your Pension Calculator</h2>
          <p style={S.sub}>Adjust the settings below to match your lifestyle and see your weekly budget breakdown.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={S.exBar}>
              <span style={S.liveDot} />
              <span style={S.exLabel}>Live rate</span>
              <span style={S.exRate}>
                {rateLoading ? 'Loading...' : `฿${exchangeRate.toFixed(2)} per A$1.00`}
                {rateError && ' (approx)'}
              </span>
            </div>
          </div>
        </div>

        {/* ── STEP 1 ── */}
        <div style={S.stepLabel}>
          <div style={S.stepNum}>1</div>
          Your preferences
        </div>

        {/* Row 1: Pension type + Income */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>

          <div style={S.icard}>
            <div style={S.ititle}>Pension type</div>
            <div style={S.segBtn}>
              <button style={S.seg(pensionType === 'single')} onClick={() => setPensionType('single')}>Single</button>
              <button style={S.seg(pensionType === 'couple')} onClick={() => setPensionType('couple')}>Couple</button>
            </div>
          </div>

          <div style={S.icard}>
            <div style={S.ititle}>Weekly income</div>
            <div style={S.segBtn}>
              <button style={{ ...S.seg(!useCustomAmount), fontSize: '10px' }} onClick={() => setUseCustomAmount(false)}>
                Pension rate
              </button>
              <button style={{ ...S.seg(useCustomAmount), fontSize: '10px' }} onClick={() => setUseCustomAmount(true)}>
                Custom amount
              </button>
            </div>
            {useCustomAmount ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <span style={{ fontSize: '13px', color: '#7A6040' }}>A$</span>
                <input
                  type="number"
                  placeholder="650"
                  value={customAmount}
                  onChange={e => setCustomAmount(e.target.value)}
                  min="0"
                  style={{
                    flex: 1, padding: '8px 10px',
                    background: 'rgba(201,150,58,0.08)',
                    border: '1px solid rgba(201,150,58,0.3)',
                    borderRadius: '3px', color: '#F5EDD8',
                    fontSize: '14px', fontFamily: 'inherit',
                  }}
                />
                <span style={{ fontSize: '12px', color: '#7A6040' }}>/wk</span>
              </div>
            ) : (
              <div style={S.incDisp}>
                <div style={S.incAmt}>A${weeklyAUD.toFixed(2)}/wk</div>
                <div style={S.incSub}>
                  {pensionType === 'single' ? 'Single' : 'Couple'} overseas rate · March 2026
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Accommodation + Diet + Lifestyle */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '10px', marginBottom: '10px' }}>

          <div style={S.icard}>
            <div style={S.ititle}>🏠 Accommodation</div>
            {rentOptions.map(opt => (
              <button key={opt.id} style={S.ritem(rentOption === opt.id)} onClick={() => setRentOption(opt.id)}>
                {opt.label}
              </button>
            ))}
          </div>

          <div style={S.icard}>
            <div style={S.ititle}>🍜 Diet style</div>
            {foodOptions.map(opt => (
              <button key={opt.id} style={S.ritem(foodOption === opt.id)} onClick={() => setFoodOption(opt.id)}>
                {opt.label}
              </button>
            ))}
          </div>

          <div style={S.icard}>
            <div style={S.ititle}>✨ Lifestyle</div>
            {lifestyleOptions.map(opt => (
              <button key={opt.id} style={S.ritem(lifestyle === opt.id)} onClick={() => setLifestyle(opt.id)}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Health insurance toggle */}
        <div style={{ ...S.icard, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0' }}>
          <div>
            <div style={S.ititle}>🏥 Health Insurance</div>
            <div style={{ fontSize: '11px', color: '#5A4030' }}>Required for retirement visa</div>
          </div>
          <button
            onClick={() => setIncludeInsurance(!includeInsurance)}
            style={{
              width: '44px', height: '24px', borderRadius: '12px',
              background: includeInsurance ? '#C9963A' : 'rgba(255,255,255,0.1)',
              border: 'none', cursor: 'pointer', position: 'relative', flexShrink: 0,
            }}
          >
            <span style={{
              position: 'absolute', top: '3px',
              left: includeInsurance ? '23px' : '3px',
              width: '18px', height: '18px', borderRadius: '50%',
              background: '#fff', transition: 'left 0.2s',
            }} />
          </button>
        </div>

        <div style={S.goldDiv} />

        {/* ── STEP 2 ── */}
        <div style={S.stepLabel}>
          <div style={S.stepNum}>2</div>
          Select cities to compare (up to 3)
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '10px', marginBottom: '0' }}>
          {sortedCities.map(city => (
            <CityCardNew
              key={city.id}
              city={city}
              selected={selectedCities.includes(city.id)}
              onToggle={() => toggleCity(city.id)}
            />
          ))}
        </div>

        <div style={S.goldDiv} />

        {/* ── STEP 3 ── */}
        <div style={S.stepLabel}>
          <div style={S.stepNum}>3</div>
          Your results
        </div>

        {selectedCities.map((cityId, index) => {
          const city = cities.find(c => c.id === cityId);
          if (!city) return null;
          return (
            <ResultsPanelNew
              key={cityId}
              city={city}
              results={calculateCityCosts(city)}
              exchangeRate={exchangeRate}
              index={index}
            />
          );
        })}

        {/* Disclaimer */}
        <div style={{
          fontSize: '11px', color: '#A08060', lineHeight: 1.7,
          marginTop: '20px', paddingTop: '16px',
          borderTop: '1px solid rgba(201,150,58,0.15)',
        }}>
          Cost estimates based on 2025–2026 expat data from Numbeo, ExpatDen and Thailand Insider Guide.
          Actual costs vary. Australian Age Pension rates effective 20 March 2026 —
          verify at <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: '#C9963A' }}>servicesaustralia.gov.au</a>.
        </div>

      </div>
    </section>
  );
}
