'use client';

import { useEffect } from 'react';

import { Footer, Header } from '@/layout';

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <html lang="uk">
      <body>
        <Header />
        <main className="flex grow flex-col">ПОМИЛКА</main>
        <Footer />
      </body>
    </html>
  );
};

export default GlobalError;
