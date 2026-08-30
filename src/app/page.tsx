import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Industries } from '@/components/sections/Industries';
import { Feature } from '@/components/sections/Feature';
import { Reviews } from '@/components/sections/Reviews';
import { BookCall } from '@/components/sections/BookCall';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Process />
        <BookCall />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
