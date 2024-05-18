import type { Metadata } from 'next';
import Link from 'next/link';
import { Raleway, Geologica } from 'next/font/google';

import { Footer, Header } from '@/layout';

import meta from '@/data/meta';

import '../globals.css';

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

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={`${raleway.variable} ${geologica.variable}`}>
        {/* ////////////////////ВИДАЛИТИ///////////////////////// */}
        <div className="fixed right-0">
          <Link
            className=" block text-[24px]  text-accent underline"
            href="/admin"
          >
            Go to admin panel.
          </Link>
          <Link className=" block text-[24px]  text-accent underline" href="/">
            Home
          </Link>
          <Link
            className=" block text-[24px]  text-accent underline"
            href="/blog"
          >
            Blog
          </Link>
        </div>
        {/* ////////////////////ВИДАЛИТИ///////////////////////// */}

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
