import { MobileMenu } from '@/components/base';
import { Logo, MainLink, SocialLinks } from '@/components/ui';

import data from '@/data/common.json';

export const Header: React.FC = () => {
  const { nav, phone } = data;

  return (
    <header className="bg-whiteBeige py-[12px] md:py-4 xl:p-6 2xl:p-8">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center justify-center xl:hidden">
          <MobileMenu />
        </div>

        <Logo variant="brown" />

        <nav className="hidden xl:block">
          <ul className="flex items-center justify-center gap-6">
            {nav.map(({ path, label }) => (
              <li key={path}>
                <MainLink path={path} label={label} />
              </li>
            ))}
          </ul>
        </nav>

        <MainLink path={phone} label={phone} tel isHeader />

        <SocialLinks isHeader={true} />
      </div>
    </header>
  );
};
