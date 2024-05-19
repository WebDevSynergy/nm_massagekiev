export const metadata = {
  title: 'admin | nm_massagekiev',
  description: 'nm_massagekiev_admin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
