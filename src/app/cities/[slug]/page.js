import Link from 'next/link';
import { cityGuides, getCityGuide } from '@/lib/content/cityGuides';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return cityGuides.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const city = getCityGuide(params.slug);
  if (!city) return {};
  return {
    title: `Retiring in ${city.name}, Thailand | Retire Thailand`,
    description: city.metaDescription,
    openGraph: {
      title: `Retiring in ${city.name}, Thailand`,
      description: city.metaDescription,
      type: 'article',
    },
  };
}

function renderContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="font-display text-2xl md:text-3xl mt-10 mb-4" style={{ color: 'var(--color-ink)' }}>{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="font-display text-xl mt-8 mb-3" style={{ color: 'var(--color-ink)' }}>{line.replace('### ', '')}</h3>);
    } else {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: var(--color-gold-dark); text-decoration: underline; font-weight: 600;">$1</a>');
      elements.push(<p key={i} className="text-base md:text-lg leading-relaxed my-4" style={{ color: 'var(--color-ink-soft)' }} dangerouslySetInnerHTML={{ __html: html }} />);
    }
    i++;
  }
  return elements;
}

export default function CityGuidePage({ params }) {
  const city = getCityGuide(params.slug);
  if (!city) notFound();

  const otherCities = cityGuides.filter(c => c.slug !== city.slug);

  return (
    <main style={{ background: 'var(--color-cream)', minHeight: '100vh' }}>

      {/* Hero */}
      <div className="bg-thai-pattern py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/cities" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            All city guides
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{city.heroEmoji}</span>
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-white leading-tight">{city.name}</h1>
              <p className="text-yellow-400 text-lg mt-1">{city.tagline}</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{city.region}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2">

            {/* Verdict box */}
            <div className="card p-6 mb-6 border-l-4" style={{ borderLeftColor: 'var(--color-gold)' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-gold)' }}>Our Verdict</div>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink)' }}>{city.verdict}</p>
            </div>

            {/* Article */}
            <div className="card p-8 md:p-10">
              {renderContent(city.content)}
            </div>

            {/* CTA */}
            <div className="mt-8 p-8 rounded-2xl text-center" style={{ background: 'var(--color-ink)' }}>
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-display text-2xl text-white mb-2">Calculate Your {city.name} Budget</h3>
              <p className="text-gray-400 mb-5 text-sm">See exactly how your Australian pension stacks up against {city.name}'s costs.</p>
              <Link href="/" className="btn-primary inline-block">Open Pension Calculator</Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            {/* Quick facts */}
            <div className="card p-5">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-ink-soft)' }}>Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div><span className="text-gray-400">Population: </span><span style={{ color: 'var(--color-ink)' }}>{city.population}</span></div>
                <div><span className="text-gray-400">Climate: </span><span style={{ color: 'var(--color-ink)' }}>{city.climate}</span></div>
                <div><span className="text-gray-400">Expat scene: </span><span style={{ color: 'var(--color-ink)' }}>{city.expat.size}</span></div>
              </div>
            </div>

            {/* Monthly budget */}
            <div className="card p-5">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-ink-soft)' }}>Monthly Budget (THB)</h3>
              <div className="space-y-2">
                {[
                  { label: 'Budget', amount: city.monthlyBudget.budget, color: '#065F46', bg: '#ECFDF5' },
                  { label: 'Comfortable', amount: city.monthlyBudget.comfortable, color: '#92400E', bg: '#FFF7ED' },
                  { label: 'Western', amount: city.monthlyBudget.luxury, color: '#1E40AF', bg: '#EFF6FF' },
                ].map(tier => (
                  <div key={tier.label} className="flex justify-between items-center p-2.5 rounded-lg text-sm" style={{ background: tier.bg }}>
                    <span className="font-semibold" style={{ color: tier.color }}>{tier.label}</span>
                    <span className="font-bold" style={{ color: tier.color }}>฿{tier.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="card p-5">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>Highlights</h3>
              <div className="space-y-1.5">
                {city.highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-ink)' }}>
                    <span className="text-green-500">✓</span>{h}
                  </div>
                ))}
              </div>
            </div>

            {/* Watch outs */}
            <div className="card p-5">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>Watch Out For</h3>
              <div className="space-y-1.5">
                {city.lowlights.map(l => (
                  <div key={l} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-ink)' }}>
                    <span className="text-orange-400">!</span>{l}
                  </div>
                ))}
              </div>
            </div>

            {/* Neighbourhoods */}
            <div className="card p-5">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-ink-soft)' }}>Neighbourhoods</h3>
              <div className="space-y-4">
                {city.neighbourhoods.map(n => (
                  <div key={n.name} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="font-semibold text-sm mb-1" style={{ color: 'var(--color-ink)' }}>{n.name}</div>
                    <div className="text-xs text-gray-500 mb-1">{n.description}</div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--color-gold-dark)' }}>{n.rentRange}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospitals */}
            <div className="card p-5">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--color-ink-soft)' }}>Healthcare</h3>
              <p className="text-xs text-gray-500 mb-4">{city.healthcare.summary}</p>
              <div className="space-y-3">
                {city.healthcare.hospitals.map(h => (
                  <div key={h.name} className="text-xs">
                    <div className="font-semibold" style={{ color: 'var(--color-ink)' }}>{h.name}</div>
                    <div className="text-gray-400">{h.type} · {h.notes}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other cities */}
            <div className="card p-5">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--color-ink-soft)' }}>Other City Guides</h3>
              <div className="space-y-2">
                {otherCities.map(c => (
                  <Link key={c.slug} href={`/cities/${c.slug}`} className="flex items-center gap-2 text-sm hover:text-yellow-700 transition-colors" style={{ color: 'var(--color-ink)' }}>
                    <span>{c.heroEmoji}</span>
                    <span className="font-medium">{c.name}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-auto text-gray-400">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
