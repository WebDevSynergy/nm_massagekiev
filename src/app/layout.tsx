import type { Metadata } from 'next';

import { Roboto, Open_Sans } from 'next/font/google';

import meta from '@/data/meta';

import './globals.css';

export const metadata: Metadata = meta;

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '600'],
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
      <body className={`${roboto.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
