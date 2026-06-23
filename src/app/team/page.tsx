import type { Metadata } from 'next';
import { TeamContent } from '@/components/pages/TeamContent';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Team, ${site.brand}`,
  description: 'Meet the Viridian Films crew, storytellers, cinematographers, editors, and photographers.',
};

export default function TeamPage() {
  return <TeamContent />;
}
