import type { Metadata } from 'next';

import { Open_Sans } from 'next/font/google';

import meta from '@/data/meta';

import './globals.css';

export const metadata: Metadata = meta;

const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={openSans.variable}>{children}</body>
    </html>
  );
}
