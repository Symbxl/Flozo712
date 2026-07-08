import type { Metadata } from 'next';
import { ServicesContent } from '@/components/pages/ServicesContent';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Capabilities | ${site.brand}`,
  description:
    'Laser welding, MIG & TIG welding, laser and plate cutting, CNC bending, 3D tube profiling, machining, coating, and design engineering, every process under one roof in Katy, Texas.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
