'use client';

export default function ScrollButton() {
  return (
    <button
      onClick={() => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{
        background: '#C9963A', color: '#0F0A04',
        fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em',
        padding: '14px 28px', borderRadius: '3px',
        border: 'none', cursor: 'pointer', fontFamily: 'inherit', lineHeight: 1,
      }}
    >
      How Far Does My Pension Go? ↓
    </button>
  );
}
