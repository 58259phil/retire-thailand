'use client';

const cityEmojis = {
  'khon-kaen': '🏙️',
  'hua-hin': '🏖️',
  'chiang-mai': '⛰️',
  'phuket': '🌴',
  'pattaya': '🌊',
  'bangkok': '🏙️',
};

const tagColors = {
  'Budget Friendly': { bg: '#ECFDF5', color: '#065F46' },
  'Authentic': { bg: '#FFF7ED', color: '#92400E' },
  'University Hospital': { bg: '#EFF6FF', color: '#1E40AF' },
  'Beach': { bg: '#F0FDFA', color: '#065F46' },
  'Golf': { bg: '#F5F3FF', color: '#4C1D95' },
  'Expat Community': { bg: '#FEF2F2', color: '#991B1B' },
  'Cultural': { bg: '#FFFBEB', color: '#78350F' },
  'Cool Climate': { bg: '#EFF6FF', color: '#1E40AF' },
  'Large Expat Scene': { bg: '#FEF2F2', color: '#991B1B' },
  'Island': { bg: '#F0FDFA', color: '#065F46' },
  'International': { bg: '#F5F3FF', color: '#4C1D95' },
  'Budget': { bg: '#ECFDF5', color: '#065F46' },
  'Bangkok Proximity': { bg: '#FFF7ED', color: '#92400E' },
  'City Life': { bg: '#EFF6FF', color: '#1E40AF' },
  'World-Class Hospitals': { bg: '#F5F3FF', color: '#4C1D95' },
  'BTS/MRT': { bg: '#FEF2F2', color: '#991B1B' },
};

export default function CityCard({ city, selected, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`card text-left p-4 cursor-pointer transition-all ${selected ? 'card-selected' : ''}`}
      style={{ background: selected ? '#FFFBEB' : 'white' }}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{cityEmojis[city.id] || '📍'}</span>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          selected ? 'border-yellow-600 bg-yellow-600' : 'border-gray-300'
        }`}>
          {selected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>

      <div className="font-display text-base font-bold mb-0.5" style={{ color: 'var(--color-ink)' }}>
        {city.name}
      </div>
      <div className="text-xs mb-3" style={{ color: 'var(--color-ink-soft)' }}>
        {city.region}
      </div>

      <div className="flex flex-wrap gap-1">
        {city.tags.slice(0, 2).map(tag => {
          const colors = tagColors[tag] || { bg: '#F3F4F6', color: '#374151' };
          return (
            <span
              key={tag}
              className="tag"
              style={{ background: colors.bg, color: colors.color }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </button>
  );
}
