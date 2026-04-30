'use client';

import { useState, useEffect, useCallback } from 'react';
import { cities, pensionRates, lifestyleOptions, rentOptions, foodOptions } from '@/lib/data';
import ResultsPanel from './ResultsPanel';
import CityCard from './CityCard';

export default function Calculator() {
  // User inputs
  const [pensionType, setPensionType] = useState('single'); // single | couple
  const [customAmount, setCustomAmount] = useState('');
  const [useCustomAmount, setUseCustomAmount] = useState(false);
  const [selectedCities, setSelectedCities] = useState(['khon-kaen', 'hua-hin']);
  const [rentOption, setRentOption] = useState('one-bed');
  const [foodOption, setFoodOption] = useState('mixed');
  const [lifestyle, setLifestyle] = useState('comfortable');
  const [includeInsurance, setIncludeInsurance] = useState(true);

  // Exchange rate
  const [exchangeRate, setExchangeRate] = useState(22.0);
  const [rateLoading, setRateLoading] = useState(true);
  const [rateSource, setRateSource] = useState('');
  const [rateError, setRateError] = useState(false);

  // Fetch live exchange rate
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch('/api/exchange-rate');
        const data = await res.json();
        setExchangeRate(data.rate);
        setRateSource(data.source);
        setRateError(data.source === 'fallback');
      } catch {
        setRateError(true);
      } finally {
        setRateLoading(false);
      }
    };
    fetchRate();
  }, []);

  // Calculate weekly pension income in AUD
  const weeklyPensionAUD = useCallback(() => {
    if (useCustomAmount && customAmount) {
      return parseFloat(customAmount) || 0;
    }
    if (pensionType === 'single') {
      return pensionRates.single.overseasWeekly;
    }
    return pensionRates.couple.combined.weekly;
  }, [useCustomAmount, customAmount, pensionType]);

  // Toggle city selection (max 3)
  const toggleCity = (cityId) => {
    setSelectedCities(prev => {
      if (prev.includes(cityId)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(id => id !== cityId);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), cityId]; // Replace oldest
      }
      return [...prev, cityId];
    });
  };

  // Calculate costs for a city
  const calculateCityCosts = useCallback((city) => {
    const lifestyleMultiplier = lifestyleOptions.find(l => l.id === lifestyle)?.multiplier || 1;
    const rentKey = rentOptions.find(r => r.id === rentOption)?.key || 'rentOneBed';
    const foodKey = foodOptions.find(f => f.id === foodOption)?.key || 'foodMixed';

    const monthlyTHB = {
      rent: city.costs[rentKey],
      food: city.costs[foodKey] * lifestyleMultiplier,
      utilities: city.costs.utilities,
      internet: city.costs.internet,
      transport: city.costs.transport * lifestyleMultiplier,
      entertainment: city.costs.entertainment * lifestyleMultiplier,
      insurance: includeInsurance ? city.costs.healthInsurance : 0,
      misc: city.costs.misc * lifestyleMultiplier,
    };

    const totalMonthlyTHB = Object.values(monthlyTHB).reduce((a, b) => a + b, 0);
    const totalMonthlyAUD = totalMonthlyTHB / exchangeRate;
    const totalWeeklyAUD = totalMonthlyAUD / 4.33;
    const totalWeeklyTHB = totalMonthlyTHB / 4.33;

    const pensionWeekly = weeklyPensionAUD();
    const surplusWeekly = pensionWeekly - totalWeeklyAUD;
    const surplusMonthly = surplusWeekly * 4.33;

    return {
      monthlyTHB,
      totalMonthlyTHB,
      totalMonthlyAUD,
      totalWeeklyAUD,
      totalWeeklyTHB,
      surplusWeekly,
      surplusMonthly,
      pensionWeekly,
      canAfford: surplusWeekly >= 0,
      surplusPercent: Math.min(100, Math.max(0, (surplusWeekly / pensionWeekly) * 100)),
    };
  }, [lifestyle, rentOption, foodOption, includeInsurance, exchangeRate, weeklyPensionAUD]);

  const weeklyAUD = weeklyPensionAUD();

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: 'var(--color-ink)' }}>
            Your Pension Calculator
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-ink-soft)' }}>
            Adjust the settings below to match your lifestyle and see your weekly budget breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── LEFT PANEL: Inputs ── */}
          <div className="lg:col-span-1 space-y-6">

            {/* Exchange Rate Banner */}
            <div className="card p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-ink-soft)' }}>
                  Live Exchange Rate
                </span>
                {rateLoading ? (
                  <span className="text-xs text-gray-400">Loading...</span>
                ) : rateError ? (
                  <span className="text-xs text-orange-500">Approximate</span>
                ) : (
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-success)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block pulse-gold" />
                    Live
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl" style={{ color: 'var(--color-gold)' }}>
                  ฿{exchangeRate.toFixed(2)}
                </span>
                <span className="text-sm" style={{ color: 'var(--color-ink-soft)' }}>per A$1.00</span>
              </div>
            </div>

            {/* Pension Type */}
            <div className="card p-5">
              <label className="block text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>
                Pension Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['single', 'couple'].map(type => (
                  <button
                    key={type}
                    onClick={() => setPensionType(type)}
                    className={`py-2.5 px-4 rounded-lg text-sm font-semibold border-2 transition-all ${
                      pensionType === type
                        ? 'border-yellow-600 bg-yellow-50 text-yellow-800'
                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {type === 'single' ? '👤 Single' : '👥 Couple'}
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Income */}
            <div className="card p-5">
              <label className="block text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>
                Weekly Income (AUD)
              </label>

              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => setUseCustomAmount(false)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${
                    !useCustomAmount ? 'border-yellow-600 bg-yellow-50 text-yellow-800 font-semibold' : 'border-gray-200 text-gray-500'
                  }`}
                >
                  Use Pension Rate
                </button>
                <button
                  onClick={() => setUseCustomAmount(true)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${
                    useCustomAmount ? 'border-yellow-600 bg-yellow-50 text-yellow-800 font-semibold' : 'border-gray-200 text-gray-500'
                  }`}
                >
                  Custom Amount
                </button>
              </div>

              {useCustomAmount ? (
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm flex-shrink-0" style={{ color: 'var(--color-ink-soft)' }}>A$</span>
                  <input
                    type="number"
                    className="input-field flex-1"
                    placeholder="650"
                    value={customAmount}
                    onChange={e => setCustomAmount(e.target.value)}
                    min="0"
                  />
                  <span className="text-sm flex-shrink-0" style={{ color: 'var(--color-ink-soft)' }}>/week</span>
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                  <div className="font-display text-2xl" style={{ color: 'var(--color-gold-dark)' }}>
                    A${weeklyAUD.toFixed(2)}/week
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--color-ink-soft)' }}>
                    {pensionType === 'single'
                      ? 'Single pension base rate (overseas, March 2026)'
                      : 'Couple combined base rate (overseas, March 2026)'}
                  </div>
                </div>
              )}
            </div>

            {/* Accommodation */}
            <div className="card p-5">
              <label className="block text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>
                🏠 Accommodation
              </label>
              <div className="space-y-2">
                {rentOptions.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setRentOption(opt.id)}
                    className={`w-full text-left py-2.5 px-4 rounded-lg text-sm border-2 transition-all ${
                      rentOption === opt.id
                        ? 'border-yellow-600 bg-yellow-50 text-yellow-800 font-semibold'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Food */}
            <div className="card p-5">
              <label className="block text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>
                🍜 Diet Style
              </label>
              <div className="space-y-2">
                {foodOptions.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setFoodOption(opt.id)}
                    className={`w-full text-left py-2.5 px-4 rounded-lg text-sm border-2 transition-all ${
                      foodOption === opt.id
                        ? 'border-yellow-600 bg-yellow-50 text-yellow-800 font-semibold'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Lifestyle */}
            <div className="card p-5">
              <label className="block text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>
                ✨ Lifestyle
              </label>
              <div className="space-y-2">
                {lifestyleOptions.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setLifestyle(opt.id)}
                    className={`w-full text-left py-3 px-4 rounded-lg text-sm border-2 transition-all ${
                      lifestyle === opt.id
                        ? 'border-yellow-600 bg-yellow-50 font-semibold'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <div className={lifestyle === opt.id ? 'text-yellow-800' : ''}>{opt.label}</div>
                    <div className="text-xs mt-0.5 text-gray-400 font-normal">{opt.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Insurance toggle */}
            <div className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-ink-soft)' }}>
                    🏥 Health Insurance
                  </div>
                  <div className="text-xs mt-1 text-gray-400">Required for retirement visa</div>
                </div>
                <button
                  onClick={() => setIncludeInsurance(!includeInsurance)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    includeInsurance ? 'bg-yellow-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      includeInsurance ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

          </div>

          {/* ── RIGHT PANEL: City selector + Results ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* City Selector */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-ink-soft)' }}>
                Select Cities to Compare (up to 3)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map(city => (
                  <CityCard
                    key={city.id}
                    city={city}
                    selected={selectedCities.includes(city.id)}
                    onToggle={() => toggleCity(city.id)}
                  />
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {selectedCities.map((cityId, index) => {
                const city = cities.find(c => c.id === cityId);
                if (!city) return null;
                const results = calculateCityCosts(city);
                return (
                  <ResultsPanel
                    key={cityId}
                    city={city}
                    results={results}
                    exchangeRate={exchangeRate}
                    index={index}
                  />
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl border border-amber-100 bg-amber-50 text-xs text-amber-800 leading-relaxed">
              <strong>Note:</strong> Cost estimates are based on 2025–2026 expat data from Numbeo, ExpatDen and Thailand Insider Guide. 
              Actual costs vary based on personal habits, seasonal electricity usage and market changes. 
              Australian Age Pension rates effective 20 March 2026. Always verify current Centrelink rates at{' '}
              <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener noreferrer" className="underline">
                servicesaustralia.gov.au
              </a>.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
