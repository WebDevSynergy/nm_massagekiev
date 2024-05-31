import { Logo, SocialLinks } from '@/components/ui';

export const Header: React.FC = () => {
  return (
    <header className="bg-emerald-400">
      <div className="container">
        <Logo variant="brown" />
        Header
        <SocialLinks isHeader={true} />
      </div>
    </header>
  );
};
