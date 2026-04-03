'use client';

const steps = [
  {
    number: '01',
    title: 'Work until 67 in Australia',
    body: 'Keep building your super. The pension age is 67. You must be physically in Australia to claim.',
    icon: '🇦🇺',
  },
  {
    number: '02',
    title: 'Claim & live 2 years in Australia',
    body: 'After being granted the pension, you must live in Australia for 2 years before taking it overseas (portability requirement).',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Apply for Thai Retirement Visa',
    body: 'The Non-Immigrant O-A visa requires 800,000 THB in a Thai bank OR 65,000 THB/month income. You\'ll also need health insurance.',
    icon: '🛂',
  },
  {
    number: '04',
    title: 'Move to Thailand',
    body: 'Your pension is paid every 4 weeks into your nominated bank account. You\'ll receive the base rate — supplements stop after 6 weeks abroad.',
    icon: '✈️',
  },
];

const affiliateLinks = [
  {
    category: 'Currency Transfer',
    description: 'Send your pension to Thailand with the best exchange rate. Save hundreds per year vs. your bank.',
    providers: [
      { name: 'Wise', url: 'https://wise.prf.hn/click/camref:1011l5FiPJ', badge: 'Best Rates', note: 'Mid-market rate, low fees' },
      { name: 'OFX', url: 'https://ofx.com', badge: 'No Transfer Fee', note: 'Great for regular transfers' },
    ],
  },
  {
    category: 'Health Insurance',
    description: 'Required for your retirement visa. Compare plans from top Thai insurers before you move.',
    providers: [
      { name: 'Pacific Prime', url: 'https://www.pacificprime.com', badge: 'Most Popular', note: 'Compare 50,000+ plans' },
      { name: 'Cigna Global', url: 'https://www.cigna.com', badge: 'International Cover', note: 'Covers you globally' },
    ],
  },
];

export default function InfoSection() {
  return (
    <section className="py-20 px-4" style={{ background: 'var(--color-ink)' }}>
      <div className="max-w-6xl mx-auto">

        {/* How it works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-white mb-4">
              How to Make It Happen
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The path from working in Australia to retiring in Thailand — step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div
                  className="font-display text-5xl font-bold mb-3 opacity-20"
                  style={{ color: 'var(--color-gold)' }}
                >
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-white mb-4">
              Tools to Help You Move
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Services we recommend to Australian retirees heading to Thailand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {affiliateLinks.map((section, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-bold text-lg mb-1">{section.category}</h3>
                <p className="text-gray-400 text-sm mb-5">{section.description}</p>
                <div className="space-y-3">
                  {section.providers.map((provider, j) => (
                    <a
                      key={j}
                      href={provider.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-600/50 hover:bg-yellow-600/5 transition-all group"
                    >
                      <div>
                        <div className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {provider.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{provider.note}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-yellow-600/20 text-yellow-400 font-semibold">
                          {provider.badge}
                        </span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 group-hover:text-yellow-400 transition-colors">
                          <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            * Some links above may be affiliate links. We may earn a commission at no cost to you.
          </p>
        </div>
      </div>
    </section>
  );
}
