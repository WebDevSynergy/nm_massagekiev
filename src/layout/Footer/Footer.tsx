import { Logo, SocialLinks } from '@/components/ui';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-400">
      <div className="container">
        <Logo variant="green" />
        Footer
        <SocialLinks isHeader={false} />
      </div>
    </footer>
  );
};
