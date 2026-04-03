import { Playfair_Display, DM_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Nav from '@/components/Nav';
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
  description: 'Find out exactly how far your Australian Age Pension goes in Thailand. Compare cities, calculate your weekly budget, and plan your retirement in the Land of Smiles.',
  keywords: ['retire Thailand', 'Australian pension Thailand', 'cost of living Thailand', 'Hua Hin retire', 'Khon Kaen expat', 'age pension overseas'],
  verification: {
    google: 'EzauudxQMjfrH3l9X0ysEyLAcnDCaiY0ZM7dFa0mijQ',
    other: {
      'fo-verify': '7c1ac4ae-195f-45dc-bf35-31d0a8d11f3f',
    },
  },
  openGraph: {
    title: 'Retire Thailand | Australian Pension Stretcher',
    description: 'See exactly how far your Australian pension goes in Thailand.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta name="fo-verify" content="7c1ac4ae-195f-45dc-bf35-31d0a8d11f3f" />
      </head>
      <body className="font-body antialiased">
        <Nav />
        <div className="pt-16">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-2BPTPK7M66" />
    </html>
  );
}