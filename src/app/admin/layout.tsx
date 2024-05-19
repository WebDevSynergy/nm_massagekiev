export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
