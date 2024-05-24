import type { Metadata } from 'next';

import { Raleway, Geologica } from 'next/font/google';

import meta from '@/data/meta';

import './globals.css';

export const metadata: Metadata = meta;

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const geologica = Geologica({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-geologica',
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
      <body className={`${raleway.variable} ${geologica.variable}`}>
        {children}
      </body>
    </html>
  );
}
