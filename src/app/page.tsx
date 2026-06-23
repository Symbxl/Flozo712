import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { CaseStudyShowcase } from '@/components/sections/CaseStudyShowcase';
import { Feature } from '@/components/sections/Feature';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CaseStudyShowcase />
        <Reviews />
        <Feature />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
