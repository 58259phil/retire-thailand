import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import InfoSection from '@/components/InfoSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Calculator />
      <InfoSection />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
