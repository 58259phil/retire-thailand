'use client';

import { useState, useEffect, useCallback } from 'react';
import { cities, pensionRates, lifestyleOptions, rentOptions, foodOptions } from '@/lib/data';

// ── Helpers ──────────────────────────────────────────────
const currencySymbols = {
  AUD: 'AU$',
  USD: 'US$',
  GBP: '£',
  EUR: '€',
  CAD: 'CA$',
  DKK: 'Kr',
  SGD: 'S$',
  ZAR: 'R',
  SEK: 'kr',
};

const formatCurrency = (n, code) => {
  const sym = currencySymbols[code] || code;
  return `${sym}${Math.abs(n).toFixed(0)}`;
};
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

// Currency list — AUD first, then alphabetical
const currencies = [
  { code: 'AUD', flag: '🇦🇺', label: 'Australian $', primary: true },
  { code: 'CAD', flag: '🇨🇦', label: 'Canadian $',   primary: false },
  { code: 'DKK', flag: '🇩🇰', label: 'Danish Kr',    primary: false },
  { code: 'EUR', flag: '🇪🇺', label: 'Euro',          primary: false },
  { code: 'GBP', flag: '🇬🇧', label: 'British £',    primary: false },
  { code: 'SGD', flag: '🇸🇬', label: 'Singapore $',  primary: false },
  { code: 'ZAR', flag: '🇿🇦', label: 'S. African R', primary: false },
  { code: 'SEK', flag: '🇸🇪', label: 'Swedish Kr',   primary: false },
  { code: 'USD', flag: '🇺🇸', label: 'US $',          primary: false },
];

// ── City Card ─────────────────────────────────────────────
function CityCard({ city, selected, onToggle }) {
  const emoji = cityEmojis[city.id] || '📍';
  return (
    <button
      onClick={onToggle}
      style={{
        background: selected ? 'rgba(35,22,5,0.9)' : 'rgba(20,13,4,0.82)',
        border: `1px solid ${selected ? '#C9963A' : 'rgba(201,150,58,0.2)'}`,
        borderRadius: '4px',
        padding: '14px',
        cursor: 'pointer',
        position: 'relative',
        textAlign: 'left',
        fontFamily: 'inherit',
        width: '100%',
        backdropFilter: 'blur(6px)',
      }}
    >
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

// ── Results Panel ─────────────────────────────────────────
function ResultsPanel({ city, results, exchangeRate, selectedCurrency, currencyRate, index }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('monthly');

  const emoji = cityEmojis[city.id] || '📍';
  const isTight = results.surplusWeekly < 0;
  const isOk    = results.surplusWeekly >= 0 && results.surplusWeekly <= 100;
  const isGood  = results.surplusWeekly > 100;
  const surplusColor = isGood ? '#6FCF97' : isOk ? '#F6C90E' : '#EB5757';
  const multiplier = view === 'weekly' ? 1 / 4.33 : 1;
  const sym = currencySymbols[selectedCurrency] || selectedCurrency;

  return (
    <div style={{
      background: 'rgba(20,13,4,0.85)',
      border: `1px solid ${open ? 'rgba(201,150,58,0.5)' : 'rgba(201,150,58,0.2)'}`,
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '10px',
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 18px', cursor: 'pointer',
          background: 'none', border: 'none', width: '100%', fontFamily: 'inherit',
        }}
      >
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
              {isTight ? '−' : '+'} {formatCurrency(Math.abs(results.surplusWeekly), selectedCurrency)}
            </div>
          </div>
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="#C9963A" strokeWidth="2.5" strokeLinecap="round"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
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

      {/* Expanded body */}
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
            const dispCur = (thb / currencyRate) * multiplier;
            return (
              <div key={item.key} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
                fontSize: '13px', color: '#7A6040',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{item.emoji}</span><span>{item.label}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#C9963A', fontWeight: 500, fontSize: '13px' }}>{formatCurrency(dispCur, selectedCurrency)}</div>
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
                {view === 'weekly' ? formatCurrency(results.totalWeeklyAUD, selectedCurrency) : formatCurrency(results.totalMonthlyAUD, selectedCurrency)}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#7A6040', marginBottom: '8px' }}>
              <span>Your income</span>
              <span style={{ color: '#A08060', fontWeight: 500 }}>
                {view === 'weekly' ? formatCurrency(results.pensionWeekly, selectedCurrency) : formatCurrency(results.pensionWeekly * 4.33, selectedCurrency)}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(201,150,58,0.15)' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8' }}>
                {isTight ? 'Shortfall' : 'Surplus'}
              </span>
              <span style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', color: surplusColor }}>
                {isTight ? '−' : '+'} {view === 'weekly' ? formatCurrency(Math.abs(results.surplusWeekly), selectedCurrency) : formatCurrency(Math.abs(results.surplusMonthly), selectedCurrency)}
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

          {/* Affiliate recommendations */}
          <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '10px', color: '#5A4030', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
              You'll need
            </div>
            <a href="https://wise.prf.hn/click/camref:1011l5FiPJ" target="_blank" rel="noopener noreferrer sponsored" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(201,150,58,0.1)',
              border: '1px solid rgba(201,150,58,0.3)',
              borderRadius: '3px',
              padding: '10px 14px',
              textDecoration: 'none',
              fontSize: '12px',
              color: '#C9963A',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/wise-logo.png" alt="Wise" style={{ height: '20px', width: 'auto', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#F5EDD8' }}>Send your pension with Wise</div>
                  <div style={{ fontSize: '11px', color: '#7A6040', marginTop: '2px' }}>Real exchange rate, low fees</div>
                </div>
              </div>
              <span style={{ color: '#C9963A', fontWeight: 600 }}>→</span>
            </a>
            <a href="https://safetywing.com/?referenceID=26504193" target="_blank" rel="noopener noreferrer sponsored" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(201,150,58,0.1)',
              border: '1px solid rgba(201,150,58,0.3)',
              borderRadius: '3px',
              padding: '10px 14px',
              textDecoration: 'none',
              fontSize: '12px',
              color: '#C9963A',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/safetywing-logo.png" alt="SafetyWing" style={{ height: '26px', width: 'auto', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#F5EDD8' }}>Health insurance with SafetyWing</div>
                  <div style={{ fontSize: '11px', color: '#7A6040', marginTop: '2px' }}>Required for retirement visa</div>
                </div>
              </div>
              <span style={{ color: '#C9963A', fontWeight: 600 }}>→</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Exchange Rate Panel ───────────────────────────────────
function ExchangePanel({ audRate, rateLoading, rateError, selectedCurrency, onCurrencySelect, allRates }) {

  const ratio = audRate / 22.0;
  const approxRates = {
    AUD: audRate,
    CAD: parseFloat((28.10 * ratio).toFixed(2)),
    DKK: parseFloat((4.18 * ratio).toFixed(2)),
    EUR: parseFloat((31.20 * ratio).toFixed(2)),
    GBP: parseFloat((37.85 * ratio).toFixed(2)),
    SGD: parseFloat((26.85 * ratio).toFixed(2)),
    ZAR: parseFloat((1.58 * ratio).toFixed(2)),
    SEK: parseFloat((2.76 * ratio).toFixed(2)),
    USD: parseFloat((32.90 * ratio).toFixed(2)),
  };

  const displayRates = Object.keys(allRates).length > 0 ? allRates : approxRates;

  return (
    <div style={{
      background: 'rgba(20,13,4,0.82)',
      border: '1px solid rgba(201,150,58,0.2)',
      borderRadius: '4px',
      padding: '14px',
    }}>
      {/* Live badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: rateError ? '#F6C90E' : '#4CAF50', flexShrink: 0 }} />
        <span style={{ fontSize: '10px', color: rateError ? '#F6C90E' : '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {rateLoading ? 'Loading...' : rateError ? 'Approximate' : 'Live rates'}
        </span>
      </div>

      {/* Instruction */}
      <div style={{ fontSize: '9px', color: '#C9963A', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>
        Click your exchange rate
      </div>

      {currencies.map(c => {
        const isSelected = selectedCurrency === c.code;
        return (
          <div
            key={c.code}
            onClick={() => onCurrencySelect(c.code)}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: isSelected ? '8px 10px' : c.primary ? '8px 14px' : '6px 6px',
              margin: c.primary && !isSelected ? '0 -14px' : isSelected ? '2px -10px' : '0',
              borderBottom: isSelected
                ? '1px solid rgba(201,150,58,0.4)'
                : c.primary
                  ? '1px solid rgba(201,150,58,0.2)'
                  : '1px solid rgba(201,150,58,0.08)',
              background: isSelected
                ? 'rgba(201,150,58,0.18)'
                : c.primary
                  ? 'rgba(201,150,58,0.1)'
                  : 'transparent',
              marginBottom: c.primary && !isSelected ? '4px' : isSelected ? '4px' : '0',
              cursor: 'pointer',
              borderRadius: isSelected ? '3px' : '0',
              border: isSelected ? '1px solid rgba(201,150,58,0.5)' : undefined,
              transition: 'background 0.15s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '13px' }}>{c.flag}</span>
              <span style={{ fontSize: '11px', color: isSelected ? '#F5EDD8' : c.primary ? '#F5EDD8' : '#7A6040', fontWeight: isSelected ? 600 : c.primary ? 500 : 400 }}>
                {c.label}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{
                fontSize: isSelected || c.primary ? '14px' : '11px',
                color: '#C9963A', fontWeight: 500,
                fontFamily: isSelected || c.primary ? 'var(--font-display), Georgia, serif' : 'inherit',
              }}>
                ฿{displayRates[c.code]?.toFixed(2) || '—'}
              </span>
              {isSelected && (
                <span style={{ fontSize: '9px', color: '#C9963A', fontWeight: 700 }}>✓</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main Calculator ───────────────────────────────────────
export default function Calculator() {
  const [pensionType, setPensionType]           = useState('single');
  const [customAmount, setCustomAmount]         = useState('');
  const [useCustomAmount, setUseCustomAmount]   = useState(false);
  const [selectedCities, setSelectedCities]     = useState(['hua-hin', 'khon-kaen']);
  const [rentOption, setRentOption]             = useState('one-bed');
  const [foodOption, setFoodOption]             = useState('mixed');
  const [lifestyle, setLifestyle]               = useState('comfortable');
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [exchangeRate, setExchangeRate]         = useState(22.0);
  const [rateLoading, setRateLoading]           = useState(true);
  const [rateError, setRateError]               = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('AUD');
  const [allRates, setAllRates]                 = useState({});

  useEffect(() => {
    fetch('/api/exchange-rate')
      .then(r => r.json())
      .then(d => {
        setExchangeRate(d.rate);
        setRateError(d.source === 'fallback');
        if (d.allRates) setAllRates(d.allRates);
      })
      .catch(() => setRateError(true))
      .finally(() => setRateLoading(false));
  }, []);

  // When currency changes — switch to custom if no preset, or pension rate if preset exists
  const handleCurrencySelect = (code) => {
    setSelectedCurrency(code);
    if (pensionRates[code]) {
      setUseCustomAmount(false);
    } else {
      setUseCustomAmount(true);
    }
  };

  // Get the THB rate for the selected currency
  const getCurrencyRate = useCallback(() => {
    const ratio = exchangeRate / 22.0;
    const approx = {
      AUD: exchangeRate,
      CAD: parseFloat((28.10 * ratio).toFixed(2)),
      DKK: parseFloat((4.18 * ratio).toFixed(2)),
      EUR: parseFloat((31.20 * ratio).toFixed(2)),
      GBP: parseFloat((37.85 * ratio).toFixed(2)),
      SGD: parseFloat((26.85 * ratio).toFixed(2)),
      ZAR: parseFloat((1.58 * ratio).toFixed(2)),
      SEK: parseFloat((2.76 * ratio).toFixed(2)),
      USD: parseFloat((32.90 * ratio).toFixed(2)),
    };
    return (Object.keys(allRates).length > 0 ? allRates : approx)[selectedCurrency] || exchangeRate;
  }, [exchangeRate, selectedCurrency, allRates]);

  const weeklyPension = useCallback(() => {
    if (useCustomAmount && customAmount) return parseFloat(customAmount) || 0;
    const rates = pensionRates[selectedCurrency];
    if (rates) {
      return pensionType === 'single' ? rates.single.overseasWeekly : rates.couple.weekly;
    }
    return 0;
  }, [useCustomAmount, customAmount, pensionType, selectedCurrency]);

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
    const currencyRate = getCurrencyRate();

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
    const totalMonthlyAUD = totalMonthlyTHB / currencyRate;
    const totalWeeklyAUD  = totalMonthlyAUD / 4.33;
    const totalWeeklyTHB  = totalMonthlyTHB / 4.33;
    const pensionWeekly   = weeklyPension();
    const surplusWeekly   = pensionWeekly - totalWeeklyAUD;
    const surplusMonthly  = surplusWeekly * 4.33;

    return {
      monthlyTHB, totalMonthlyTHB, totalMonthlyAUD,
      totalWeeklyAUD, totalWeeklyTHB,
      surplusWeekly, surplusMonthly, pensionWeekly,
      canAfford: surplusWeekly >= 0,
      surplusPercent: Math.min(100, Math.max(0, (surplusWeekly / (pensionWeekly || 1)) * 100)),
    };
  }, [lifestyle, rentOption, foodOption, includeInsurance, getCurrencyRate, weeklyPension]);

  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
  const weeklyAmount = weeklyPension();
  const currencyRate = getCurrencyRate();
  const sym = currencySymbols[selectedCurrency] || selectedCurrency;
  const hasPensionPreset = !!pensionRates[selectedCurrency];
  const pensionPreset = hasPensionPreset ? pensionRates[selectedCurrency] : null;
  const currentPreset = pensionPreset
    ? (pensionType === 'single' ? pensionPreset.single : pensionPreset.couple)
    : null;

  // Shared card style
  const icard = {
    background: 'rgba(20,13,4,0.82)',
    border: '1px solid rgba(201,150,58,0.25)',
    borderRadius: '4px',
    padding: '14px',
    backdropFilter: 'blur(6px)',
  };
  const ititle = {
    fontSize: '10px', fontWeight: 500, textTransform: 'uppercase',
    letterSpacing: '0.12em', color: '#C9963A', marginBottom: '10px',
  };
  const seg = (on) => ({
    flex: 1, padding: '7px 4px',
    border: `1px solid ${on ? '#C9963A' : 'rgba(201,150,58,0.25)'}`,
    borderRadius: '3px', fontSize: '11px', textAlign: 'center',
    color: on ? '#0F0A04' : '#7A6040', cursor: 'pointer',
    background: on ? '#C9963A' : 'transparent',
    fontWeight: on ? 600 : 400, fontFamily: 'inherit',
  });
  const ritem = (on) => ({
    padding: '7px 10px',
    border: `1px solid ${on ? '#C9963A' : 'rgba(201,150,58,0.2)'}`,
    borderRadius: '3px', fontSize: '12px',
    color: on ? '#0F0A04' : '#7A6040', cursor: 'pointer',
    background: on ? '#C9963A' : 'transparent',
    fontWeight: on ? 600 : 400, fontFamily: 'inherit',
    textAlign: 'left', width: '100%', marginBottom: '5px',
  });
  const stepLabel = {
    display: 'flex', alignItems: 'center', gap: '10px',
    fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#A08060', marginBottom: '14px',
  };
  const stepNum = {
    width: '22px', height: '22px', borderRadius: '50%',
    background: '#C9963A', color: '#0F0A04', fontSize: '11px',
    fontWeight: 700, display: 'flex', alignItems: 'center',
    justifyContent: 'center', flexShrink: 0,
  };
  const goldDiv = {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(201,150,58,0.4) 30%, rgba(201,150,58,0.7) 50%, rgba(201,150,58,0.4) 70%, transparent)',
    margin: '24px 0',
  };

  return (
    <section id="calculator" style={{ paddingTop: '64px', paddingBottom: '0', position: 'relative', backgroundImage: 'url(/temple.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 20%', backgroundAttachment: 'scroll' }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,6,2,0.58) 0%, rgba(15,10,4,0.52) 50%, rgba(10,6,2,0.58) 100%)', zIndex: 0 }} />

      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px 64px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <h2 style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: '32px', fontWeight: 700, color: '#F5EDD8',
          textAlign: 'center', marginBottom: '8px',
        }}>
          Your Pension Calculator
        </h2>
        <p style={{ fontSize: '14px', color: '#7A6040', textAlign: 'center', marginBottom: '36px', lineHeight: 1.7 }}>
          Adjust the settings below to match your lifestyle and see your weekly budget breakdown.
        </p>

        {/* ── Step 1: Currency card ── */}
        <div style={{ marginBottom: '28px' }}>

          {/* Step label with live indicator right next to it */}
          <div style={{ ...stepLabel, marginBottom: '14px', justifyContent: 'center' }}>
            <div style={stepNum}>1</div>
            Your exchange rate
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '8px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: rateError ? '#F6C90E' : '#4CAF50', display: 'inline-block' }} />
              <span style={{ fontSize: '10px', color: rateError ? '#F6C90E' : '#4CAF50' }}>
                {rateLoading ? 'Loading...' : rateError ? 'Approximate' : 'Live'}
              </span>
            </span>
          </div>

          {/* One card containing all currencies in 2 rows */}
          {(() => {
            const ratio = exchangeRate / 22.0;
            const approxRates = {
              AUD: exchangeRate, USD: parseFloat((32.90 * ratio).toFixed(2)),
              GBP: parseFloat((37.85 * ratio).toFixed(2)), CAD: parseFloat((28.10 * ratio).toFixed(2)),
              DKK: parseFloat((4.18 * ratio).toFixed(2)), EUR: parseFloat((31.20 * ratio).toFixed(2)),
              SGD: parseFloat((26.85 * ratio).toFixed(2)), ZAR: parseFloat((1.58 * ratio).toFixed(2)),
              SEK: parseFloat((2.76 * ratio).toFixed(2)),
            };
            const displayRates = Object.keys(allRates).length > 0 ? allRates : approxRates;

            const row1 = currencies.filter(c => ['AUD','USD','GBP','CAD'].includes(c.code));
            const row2 = currencies.filter(c => ['DKK','EUR','SGD','ZAR','SEK'].includes(c.code));

            const CurrencyItem = ({ c }) => {
              const isSelected = selectedCurrency === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => handleCurrencySelect(c.code)}
                  style={{
                    background: isSelected ? 'rgba(201,150,58,0.15)' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'inherit',
                    transition: 'background 0.15s',
                    flex: 1,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '15px', lineHeight: 1 }}>{c.flag}</span>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: isSelected ? 700 : 400,
                      color: isSelected ? '#C9963A' : '#7A6040',
                    }}>
                      {currencySymbols[c.code] || c.code}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '10px',
                    color: isSelected ? '#F5EDD8' : '#5A4030',
                    fontWeight: isSelected ? 500 : 400,
                  }}>
                    ฿{displayRates[c.code]?.toFixed(2) || '—'}
                  </span>
                </button>
              );
            };

            return (
              <div style={{
                background: 'rgba(20,13,4,0.82)',
                border: '1px solid rgba(201,150,58,0.2)',
                borderRadius: '4px',
                padding: '8px',
                backdropFilter: 'blur(6px)',
                maxWidth: '680px',
                margin: '0 auto',
              }}>
                {/* Row 1 — pension preset currencies */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
                  {row1.map(c => <CurrencyItem key={c.code} c={c} />)}
                </div>
                {/* Subtle divider */}
                <div style={{ height: '1px', background: 'rgba(201,150,58,0.1)', margin: '0 8px 4px' }} />
                {/* Row 2 — custom amount currencies */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {row2.map(c => <CurrencyItem key={c.code} c={c} />)}
                </div>
              </div>
            );
          })()}
        </div>

        {/* ── Main calculator — single column ── */}
        <div>

            {/* Step 2 */}
            <div style={stepLabel}>
              <div style={stepNum}>2</div>
              Your preferences
            </div>

            {/* Row 1: Pension type + Income */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }} className="calc-row1">

              <div style={icard}>
                <div style={ititle}>Pension type</div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button style={seg(pensionType === 'single')} onClick={() => setPensionType('single')}>Single</button>
                  <button style={seg(pensionType === 'couple')} onClick={() => setPensionType('couple')}>Couple</button>
                </div>
              </div>

              <div style={icard}>
                <div style={ititle}>Weekly income</div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {hasPensionPreset && (
                    <button style={{ ...seg(!useCustomAmount), fontSize: '10px' }} onClick={() => setUseCustomAmount(false)}>Pension rate</button>
                  )}
                  <button style={{ ...seg(useCustomAmount || !hasPensionPreset), fontSize: '10px' }} onClick={() => setUseCustomAmount(true)}>Custom amount</button>
                </div>
                {(useCustomAmount || !hasPensionPreset) ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#7A6040' }}>{sym}</span>
                    <input
                      type="number" placeholder="650" value={customAmount}
                      onChange={e => setCustomAmount(e.target.value)} min="0"
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
                  <div style={{ background: 'rgba(201,150,58,0.1)', border: '1px solid rgba(201,150,58,0.2)', borderRadius: '3px', padding: '10px', marginTop: '8px' }}>
                    <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', color: '#C9963A' }}>
                      {sym}{(pensionType === 'single' ? currentPreset?.overseasWeekly : currentPreset?.weekly)?.toFixed(2)}/wk
                    </div>
                    <div style={{ fontSize: '10px', color: '#5A4030', marginTop: '2px' }}>
                      {pensionType === 'single' ? currentPreset?.label : currentPreset?.label}
                    </div>
                    {currentPreset?.note && (
                      <div style={{ fontSize: '9px', color: '#C9963A', marginTop: '2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        {currentPreset.note}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: Accommodation + Diet + Lifestyle */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '10px', marginBottom: '10px' }} className="calc-row2">

              <div style={icard}>
                <div style={ititle}>🏠 Accommodation</div>
                {rentOptions.map(opt => (
                  <button key={opt.id} style={ritem(rentOption === opt.id)} onClick={() => setRentOption(opt.id)}>
                    {opt.label}
                  </button>
                ))}
              </div>

              <div style={icard}>
                <div style={ititle}>🍜 Diet style</div>
                {foodOptions.map(opt => (
                  <button key={opt.id} style={ritem(foodOption === opt.id)} onClick={() => setFoodOption(opt.id)}>
                    {opt.label}
                  </button>
                ))}
              </div>

              <div style={icard}>
                <div style={ititle}>✨ Lifestyle</div>
                {lifestyleOptions.map(opt => (
                  <button key={opt.id} style={ritem(lifestyle === opt.id)} onClick={() => setLifestyle(opt.id)}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Health insurance toggle */}
            <div style={{ ...icard, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ ...ititle, marginBottom: '4px' }}>🏥 Health Insurance</div>
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

            <div style={goldDiv} />

            {/* Step 3 */}
            <div style={stepLabel}>
              <div style={stepNum}>3</div>
              Select cities to compare (up to 3)
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '10px' }} className="calc-city-grid">
              {sortedCities.map(city => (
                <CityCard
                  key={city.id}
                  city={city}
                  selected={selectedCities.includes(city.id)}
                  onToggle={() => toggleCity(city.id)}
                />
              ))}
            </div>

            <div style={goldDiv} />

            {/* Step 4 */}
            <div style={stepLabel}>
              <div style={stepNum}>4</div>
              Your results
            </div>

            {selectedCities.map((cityId, index) => {
              const city = cities.find(c => c.id === cityId);
              if (!city) return null;
              return (
                <ResultsPanel
                  key={cityId}
                  city={city}
                  results={calculateCityCosts(city)}
                  exchangeRate={exchangeRate}
                  selectedCurrency={selectedCurrency}
                  currencyRate={currencyRate}
                  index={index}
                />
              );
            })}

            {/* Disclaimer */}
            <div style={{ fontSize: '11px', color: '#A08060', lineHeight: 1.7, marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(201,150,58,0.15)' }}>
              Cost estimates based on 2025–2026 expat data from Numbeo, ExpatDen and Thailand Insider Guide.
              Actual costs vary. Australian Age Pension rates effective 20 March 2026 —
              verify at <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: '#C9963A' }}>servicesaustralia.gov.au</a>.
              US Social Security average based on SSA April 2026 data.
            </div>

          </div>
      </div>
    </section>
  );
}
