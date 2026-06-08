import { Playfair_Display, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
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
  metadataBase: new URL('https://www.retirethailand.net'),
  title: 'Retire Thailand | Australian Pension Stretcher',
  description: 'Find out how far your Australian Age Pension goes in Thailand. Compare cities, calculate your weekly budget, and plan your retirement.',
  keywords: ['retire Thailand', 'Australian pension Thailand', 'cost of living Thailand', 'Hua Hin retire', 'Khon Kaen expat', 'age pension overseas'],
  openGraph: {
    title: 'Retire Thailand | Australian Pension Stretcher',
    description: 'See exactly how far your Australian pension goes in Thailand.',
    url: 'https://www.retirethailand.net',
    siteName: 'Retire Thailand',
    type: 'website',
    images: [
      {
        url: '/temple.jpg',
        width: 1200,
        height: 630,
        alt: 'Retire Thailand — Australian Pension Calculator',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.retirethailand.net',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta name="agd-partner-manual-verification" />
      </head>
      <body className="font-body antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1YQCN9EERL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1YQCN9EERL');
          `}
        </Script>
        <Nav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
