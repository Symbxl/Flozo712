import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from '@/styles/Providers';
import { site } from '@/data/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.brand}, Video Production & Content | ${site.tagline}`,
  description: site.mission,
  keywords: [
    'video production',
    'content creation',
    'photography',
    'social media management',
    'UGC content',
    'brand films',
    'Viridian Films',
  ],
  openGraph: {
    title: `${site.brand}, ${site.tagline}`,
    description: site.mission,
    type: 'website',
    url: site.url,
    siteName: site.brand,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.brand}, ${site.tagline}`,
    description: site.mission,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${jakarta.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
