'use client';

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-thai-pattern min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-yellow-600/10" />
        <div className="absolute top-20 left-20 w-44 h-44 rounded-full border border-yellow-600/10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-teal-600/10" />
        <div className="absolute bottom-10 right-20 w-52 h-52 rounded-full border border-teal-600/10" />
        {/* Thai-inspired geometric ornament */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-yellow-600/5 opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-yellow-600/5 opacity-30" />
      </div>

      {/* Flag emoji as subtle watermark */}
      <div className="absolute top-8 right-8 text-6xl opacity-10 select-none">🇹🇭</div>
      <div className="absolute bottom-8 left-8 text-4xl opacity-10 select-none">🇦🇺</div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-yellow-600/30 bg-yellow-600/10">
          <span className="pulse-gold w-2 h-2 rounded-full bg-yellow-400 inline-block" />
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
            Australian Pension Stretcher
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">
          How Far Does Your{' '}
          <span className="text-gold-gradient">Pension Go</span>
          <br />in Thailand?
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Enter your Australian Age Pension and see exactly how much you have left 
          each week in Hua Hin, Chiang Mai, Khon Kaen and more — with live exchange rates.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToCalculator}
          className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3"
        >
          Calculate My Budget
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✓</span>
            Live AUD/THB rates
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✓</span>
            6 Thai cities compared
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✓</span>
            March 2026 pension rates
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✓</span>
            Free, no signup needed
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
