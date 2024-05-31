import { Logo, MainLink, SocialLinks } from '@/components/ui';

export const Header: React.FC = () => {
  return (
    <header className="bg-emerald-400">
      <div className="container">
        <Logo variant="brown" />
        Header
        <div>
          <MainLink path="#services" label="Послуги" />
        </div>
        <SocialLinks isHeader={true} />
      </div>
    </header>
  );
};
