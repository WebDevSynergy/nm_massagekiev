import { SocialLinks, MainLink } from '@/components/ui';

import data from '@/data/footer.json';
import commonData from '@/data/common.json';

export const FooterNav = () => {
  const { categories } = data;
  const { phone } = commonData;

  return (
    <div className="flex flex-col md:flex-row md:justify-between xl:grow smOnly:items-center smOnly:gap-[24px] smOnly:text-center">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h3 className="mb-1 py-2 font-bold uppercase leading-[1.4] tracking-[-0.32px] text-blackLight md:mb-2">
            {category.title}
          </h3>

          {category.links.length === 0 ? (
            <div className="flex flex-col gap-1 md:gap-2">
              <MainLink path={phone} label={phone} tel />

              <SocialLinks isHeader={false} />
            </div>
          ) : (
            <ul className="flex flex-col gap-1 md:gap-2">
              {category.links.map(navLink => (
                <MainLink key={navLink.path} {...navLink} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
