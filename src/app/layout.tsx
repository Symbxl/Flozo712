import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from '@/styles/Providers';
import { site } from '@/data/site';

// Primary UI/display face is Google Sans Flex (loaded via the Google Fonts
// link in <head> — it isn't in next/font's registry), matching carbyn.ai.
// Inter is kept as a close metric fallback to minimise swap shift.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.brand} | ${site.tagline}`,
  description: site.mission,
  keywords: [
    'organic content marketing',
    'local business marketing',
    'social media management',
    'short-form video',
    'content strategy',
    'video production',
    'YouTube channel growth',
    'local SEO',
    'marketing agency',
    'Flozo Media',
  ],
  openGraph: {
    title: `${site.brand} | ${site.tagline}`,
    description: site.mission,
    type: 'website',
    url: site.url,
    siteName: site.brand,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.brand} | ${site.tagline}`,
    description: site.mission,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
