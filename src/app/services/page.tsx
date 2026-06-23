import type { Metadata } from 'next';
import { ServicesContent } from '@/components/pages/ServicesContent';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Services, ${site.brand}`,
  description:
    'Video production, photography, UGC, creative strategy, graphic design, social media management, content creation, and website development, one studio for the whole pipeline.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
