import { MobileMenu } from '@/components/base';
import { Logo, MainLink, MainNav, SocialLinks } from '@/components/ui';

import data from '@/data/common.json';

export const Header: React.FC = () => {
  const { phone } = data;

  return (
    <header className="bg-whiteBeige py-2 xl:py-4 2xl:py-6">
      <div className="container mx-auto flex items-center justify-between 2xl:px-[262px]">
        <MobileMenu />

        <Logo variant="brown" />

        <MainNav />

        <div className="flex items-center justify-center xl:gap-4 2xl:gap-8">
          <MainLink path={phone} label={phone} tel isHeader />

          <SocialLinks isHeader={true} />
        </div>
      </div>
    </header>
  );
};
