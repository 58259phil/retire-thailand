'use client';

import { useState } from 'react';

const formatAUD = (amount) => `A$${Math.abs(amount).toFixed(0)}`;
const formatTHB = (amount) => `฿${Math.abs(Math.round(amount)).toLocaleString()}`;

const lineItems = [
  { key: 'rent', label: 'Rent', emoji: '🏠' },
  { key: 'food', label: 'Food', emoji: '🍜' },
  { key: 'utilities', label: 'Utilities', emoji: '💡' },
  { key: 'internet', label: 'Internet', emoji: '📶' },
  { key: 'transport', label: 'Transport', emoji: '🛵' },
  { key: 'entertainment', label: 'Entertainment', emoji: '🎉' },
  { key: 'insurance', label: 'Health Insurance', emoji: '🏥' },
  { key: 'misc', label: 'Miscellaneous', emoji: '🛍️' },
];

export default function ResultsPanel({ city, results, exchangeRate, index }) {
  const [expanded, setExpanded] = useState(index === 0);
  const [view, setView] = useState('weekly'); // weekly | monthly

  const multiplier = view === 'weekly' ? 1 / 4.33 : 1;
  const surplusLabel = view === 'weekly' ? results.surplusWeekly : results.surplusMonthly;

  const isGood = results.surplusWeekly > 100;
  const isOk = results.surplusWeekly >= 0 && results.surplusWeekly <= 100;
  const isTight = results.surplusWeekly < 0;

  const statusColor = isGood
    ? 'var(--color-success)'
    : isOk
    ? 'var(--color-warning)'
    : 'var(--color-danger)';

  const statusBg = isGood ? '#ECFDF5' : isOk ? '#FFF7ED' : '#FEF2F2';
  const statusBorder = isGood ? '#A7F3D0' : isOk ? '#FDE68A' : '#FECACA';

  const statusLabel = isGood
    ? '✅ Comfortably affordable'
    : isOk
    ? '⚠️ Tight but workable'
    : '❌ Exceeds pension';

  const barWidth = Math.min(100, Math.max(5, results.surplusPercent));

  return (
    <div
      className="card overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      {/* Header */}
      <button
        className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <div className="text-left">
            <div className="font-display text-xl font-bold" style={{ color: 'var(--color-ink)' }}>
              {city.name}
            </div>
            <div className="text-sm" style={{ color: 'var(--color-ink-soft)' }}>
              {city.region}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Quick summary */}
          <div className="text-right hidden sm:block">
            <div className="font-display text-xl" style={{ color: statusColor }}>
              {isTight ? '-' : '+'}{formatAUD(Math.abs(results.surplusWeekly))}/wk
            </div>
            <div className="text-xs text-gray-400">
              {isTight ? 'over budget' : 'surplus'}
            </div>
          </div>

          {/* Expand arrow */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: 'var(--color-ink-soft)', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </button>

      {/* Surplus bar */}
      <div className="px-5 pb-2">
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="surplus-bar"
            style={{
              width: `${barWidth}%`,
              background: isGood
                ? 'linear-gradient(90deg, #34D399, #059669)'
                : isOk
                ? 'linear-gradient(90deg, #FCD34D, #D97706)'
                : 'linear-gradient(90deg, #F87171, #DC2626)',
            }}
          />
        </div>
      </div>

      {/* Status badge */}
      <div className="px-5 pb-4">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: statusBg, color: statusColor, border: `1px solid ${statusBorder}` }}
        >
          {statusLabel}
        </span>
      </div>

      {/* Expanded breakdown */}
      {expanded && (
        <div className="border-t border-gray-100">

          {/* View toggle */}
          <div className="px-5 pt-4 pb-2 flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-ink-soft)' }}>
              Budget Breakdown
            </span>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {['weekly', 'monthly'].map(v => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-all capitalize ${
                    view === v ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Line items */}
          <div className="px-5 pb-2">
            {lineItems.map(item => {
              const monthlyTHB = results.monthlyTHB[item.key];
              if (!monthlyTHB && item.key === 'insurance') return null;
              if (!monthlyTHB) return null;
              const displayTHB = monthlyTHB * multiplier;
              const displayAUD = (monthlyTHB / exchangeRate) * multiplier;

              return (
                <div
                  key={item.key}
                  className="flex items-center justify-between py-2.5 border-b border-gray-50"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{item.emoji}</span>
                    <span className="text-sm" style={{ color: 'var(--color-ink)' }}>{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
                      {formatAUD(displayAUD)}
                    </div>
                    <div className="text-xs text-gray-400">{formatTHB(displayTHB)}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Totals */}
          <div className="mx-5 mb-5 mt-2 rounded-xl overflow-hidden border border-gray-100">
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50">
              <span className="font-bold text-sm" style={{ color: 'var(--color-ink)' }}>
                Total Expenses
              </span>
              <div className="text-right">
                <div className="font-bold" style={{ color: 'var(--color-ink)' }}>
                  {view === 'weekly'
                    ? formatAUD(results.totalWeeklyAUD)
                    : formatAUD(results.totalMonthlyAUD)}
                </div>
                <div className="text-xs text-gray-400">
                  {view === 'weekly'
                    ? formatTHB(results.totalWeeklyTHB)
                    : formatTHB(results.totalMonthlyTHB)}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-100">
              <span className="font-bold text-sm" style={{ color: 'var(--color-ink)' }}>
                Your Pension Income
              </span>
              <div className="font-bold" style={{ color: 'var(--color-ink)' }}>
                {view === 'weekly'
                  ? formatAUD(results.pensionWeekly)
                  : formatAUD(results.pensionWeekly * 4.33)}
              </div>
            </div>
            <div
              className="flex justify-between items-center px-4 py-3"
              style={{ background: isGood ? '#ECFDF5' : isOk ? '#FFFBEB' : '#FEF2F2' }}
            >
              <span className="font-bold text-sm" style={{ color: statusColor }}>
                {isTight ? 'Shortfall' : 'Weekly Surplus'}
              </span>
              <div className="font-display text-xl font-bold" style={{ color: statusColor }}>
                {isTight ? '-' : '+'}{formatAUD(Math.abs(surplusLabel))}
                <span className="text-xs font-normal ml-1">/{view === 'weekly' ? 'wk' : 'mo'}</span>
              </div>
            </div>
          </div>

          {/* City info strip */}
          <div className="px-5 pb-5 flex flex-wrap gap-4 text-xs text-gray-500">
            <span>📍 {city.distanceBangkok !== '—' ? city.distanceBangkok + ' from Bangkok' : 'Bangkok'}</span>
            <span>👥 {city.expatCommunity} expat community</span>
            {city.beachAccess && <span>🏖️ Beach access</span>}
          </div>
        </div>
      )}
    </div>
  );
}
