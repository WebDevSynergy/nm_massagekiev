import { MobileMenu } from '@/components/base';
import { Logo, MainLink, MainNav, SocialLinks } from '@/components/ui';

import data from '@/data/common.json';

export const Header: React.FC = () => {
  const { path, label } = data.phone;

  return (
    <header className="bg-whiteBeige py-2 xl:py-4 2xl:py-6">
      <div className="container mx-auto flex items-center justify-between">
        <MobileMenu />

        <Logo variant="brown" />

        <MainNav />

        <div className="flex items-center justify-center xl:gap-4 2xl:gap-8">
          <MainLink path={path} label={label} tel isHeader />

          <SocialLinks isHeader={true} />
        </div>
      </div>
    </header>
  );
};
