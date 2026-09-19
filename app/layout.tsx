import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://megzaaat.github.io'),
  title: 'Ahmed Magdy Asker — Senior Mobile Application Developer',
  description: 'Senior Mobile Application Developer with 7+ years of experience in Flutter, Dart, native iOS and Android, mobile architecture, technical leadership, and production delivery.',
  keywords: ['Ahmed Magdy Asker', 'Senior Mobile Application Developer', 'Senior Flutter Developer', 'Mobile Team Lead', 'Flutter Developer Egypt', 'Dart', 'iOS', 'Android'],
  authors: [{ name: 'Ahmed Magdy Asker', url: 'https://github.com/megzaaat' }],
  creator: 'Ahmed Magdy Asker',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Ahmed Magdy Asker — Senior Mobile Application Developer',
    description: 'Flutter expertise, native mobile knowledge, scalable architecture, leadership, and complete production delivery.',
    siteName: 'Ahmed Magdy Asker',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ahmed Magdy Asker — Senior Flutter Developer and Mobile Team Lead' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Magdy Asker — Senior Mobile Application Developer',
    description: 'Flutter expertise, native mobile knowledge, scalable architecture, leadership, and complete production delivery.',
    images: ['/og.png'],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
