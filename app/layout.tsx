import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://megzaaat.github.io'),
  title: 'Ahmed Magdy Asker — Mobile Engineer',
  description:
    'Mobile Engineer with 7+ years of experience in Flutter, Dart, native iOS and Android, mobile architecture, technical leadership, and production delivery.',
  keywords: [
    'Ahmed Magdy Asker',
    'Mobile Engineer',
    'Senior Flutter Developer',
    'Mobile Team Lead',
    'Flutter Developer Egypt',
    'Dart',
    'iOS',
    'Android',
  ],
  authors: [{ name: 'Ahmed Magdy Asker', url: 'https://github.com/megzaaat' }],
  creator: 'Ahmed Magdy Asker',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Ahmed Magdy Asker — Mobile Engineer',
    description:
      'iOS and Android engineering, clean architecture, native integrations, leadership, and production delivery.',
    siteName: 'Ahmed Magdy Asker',
    images: [
      {
        url: '/og-mobile-engineer.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed Magdy — Mobile Engineer. Mobile apps built with purpose, for iOS and Android.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Magdy Asker — Mobile Engineer',
    description:
      'iOS and Android engineering, clean architecture, native integrations, leadership, and production delivery.',
    images: ['/og-mobile-engineer.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
