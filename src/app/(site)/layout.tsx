import { Footer, Header } from '@/layout';
import { ScrollToTopButton } from '@/components/ui';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
