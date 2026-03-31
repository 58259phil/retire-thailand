export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-ink)' }} className="border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-display text-xl text-white mb-1">
              Retire <span style={{ color: 'var(--color-gold)' }}>Thailand</span>
            </div>
            <div className="text-gray-600 text-sm">
              Helping Australians retire smarter in the Land of Smiles.
            </div>
          </div>
          <div className="text-gray-600 text-xs text-center md:text-right">
            <p>Cost data sourced from Numbeo, ExpatDen & Thailand Insider Guide 2025–2026.</p>
            <p className="mt-1">Not financial advice. Verify all figures with Centrelink and a licensed adviser.</p>
            <p className="mt-1">© {new Date().getFullYear()} Retire Thailand. Built with ❤️ for Aussie retirees.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
