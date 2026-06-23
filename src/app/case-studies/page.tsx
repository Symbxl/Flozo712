import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { PageHeader } from '@/components/PageHeader';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { Footer } from '@/components/sections/Footer';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Case Studies, ${site.brand}`,
  description:
    'Real partnerships, real numbers. See how we turn short-form content into compounding growth across every platform, from American manufacturing to personal brands.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="Our Work"
          title="Case Studies"
          sub="Real partnerships, real numbers. See how we turn content into compounding growth, platform breakdowns, the work itself, and the results it drove."
        />
        <CaseStudy />
      </main>
      <Footer />
    </>
  );
}
