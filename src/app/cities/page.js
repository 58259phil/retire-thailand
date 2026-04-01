import Link from 'next/link';
import { cityGuides } from '@/lib/content/cityGuides';

export const metadata = {
  title: 'City Guides | Retire Thailand — Where to Retire in Thailand',
  description: 'In-depth guides to the best cities to retire in Thailand as an Australian. Real costs, neighbourhoods, healthcare and honest assessments of Hua Hin, Khon Kaen, Chiang Mai and more.',
};

export default function CitiesPage() {
  return (
    <main style={{ background: 'var(--color-cream)', minHeight: '100vh' }}>

      {/* Header */}
      <div className="bg-thai-pattern py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-yellow-600/30 bg-yellow-600/10">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">City Guides</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
            Where Should You Retire in Thailand?
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Honest, detailed guides to Thailand's top retirement cities — written for Australians living on a pension.
          </p>
        </div>
      </div>

      {/* City cards */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {cityGuides.map((city) => (
            <Link key={city.slug} href={`/cities/${city.slug}`}>
              <article className="card p-6 md:p-8 cursor-pointer group">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="text-5xl flex-shrink-0">{city.heroEmoji}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="font-display text-2xl md:text-3xl group-hover:text-yellow-700 transition-colors" style={{ color: 'var(--color-ink)' }}>
                        {city.name}
                      </h2>
                      <span className="text-sm text-gray-400">{city.region}</span>
                    </div>
                    <p className="text-base font-semibold mb-3" style={{ color: 'var(--color-gold-dark)' }}>
                      {city.tagline}
                    </p>
                    <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-soft)' }}>
                      {city.verdict}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {city.highlights.slice(0, 4).map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-medium">
                          ✓ {h}
                        </span>
                      ))}
                    </div>

                    {/* Budget summary */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Budget: </span>
                        <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                          ฿{city.monthlyBudget.budget.toLocaleString()}/mo
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400">Comfortable: </span>
                        <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                          ฿{city.monthlyBudget.comfortable.toLocaleString()}/mo
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-semibold text-sm mt-4" style={{ color: 'var(--color-gold-dark)' }}>
                      Read full guide
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Compare Cities in the Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}
