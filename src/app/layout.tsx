export const metadata = {
  title: 'nm_massagekiev',
  description: 'nm_massagekiev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      {children}
    </html>
  );
}
