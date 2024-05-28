import Link from 'next/link';

import { Footer, Header } from '@/layout';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // {/* ////////////////////ВИДАЛИТИ///////////////////////// */}
    <>
      <div className="fixed right-0">
        <Link
          className=" text-accent block  text-[24px] underline"
          href="/admin"
        >
          Go to admin panel.
        </Link>
        <Link className=" text-accent block  text-[24px] underline" href="/">
          Home
        </Link>
        <Link
          className=" text-accent block  text-[24px] underline"
          href="/blog/1"
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
    </>
  );
}
