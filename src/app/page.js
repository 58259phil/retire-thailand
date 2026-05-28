import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import InfoSection from '@/components/InfoSection';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Home() {
  return (
    <main>
      <Hero />
      <Calculator />
      <InfoSection />
      <NewsletterSignup />
    </main>
  );
}
