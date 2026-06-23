import type { Metadata } from 'next';
import { LegalDoc } from '@/components/LegalDoc';
import { termsOfService } from '@/data/legal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Terms of Service, ${site.brand}`,
  description: 'The terms that govern your use of the Viridian Films website.',
};

export default function TermsPage() {
  return <LegalDoc doc={termsOfService} />;
}
