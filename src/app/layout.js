import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Retire Thailand | Australian Pension Stretcher',
  description:
    'Find out exactly how far your Australian Age Pension goes in Thailand. Compare cities, calculate your weekly budget, and plan your retirement in the Land of Smiles.',
  keywords: [
    'retire Thailand',
    'Australian pension Thailand',
    'cost of living Thailand',
    'Hua Hin retire',
    'Khon Kaen expat',
    'age pension overseas',
  ],
  openGraph: {
    title: 'Retire Thailand | Australian Pension Stretcher',
    description: 'See exactly how far your Australian pension goes in Thailand.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
