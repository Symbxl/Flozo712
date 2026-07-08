import type { Metadata } from 'next';
import { LegalDoc } from '@/components/LegalDoc';
import { privacyPolicy } from '@/data/legal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.brand}`,
  description: `How ${site.brand} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return <LegalDoc doc={privacyPolicy} />;
}
