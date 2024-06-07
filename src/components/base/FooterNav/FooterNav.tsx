import { SocialLinks, MainLink } from '@/components/ui';

import data from '@/data/footer.json';
import commonData from '@/data/common.json';

export const FooterNav = () => {
  const { categories } = data;
  const { phone } = commonData;

  return (
    <div className="flex flex-col md:flex-row md:justify-between smOnly:items-center smOnly:gap-[24px] smOnly:text-center">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h3 className="mb-[20px] font-bold uppercase leading-[1.4] tracking-[-0.32px] text-blackLight md:mb-[24px]">
            {category.title}
          </h3>

          {category.links.length === 0 ? (
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              <MainLink path={phone} label={phone} tel />

              <SocialLinks isHeader={false} />
            </div>
          ) : (
            <ul className="flex flex-col gap-[20px] md:gap-[24px]">
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

/* <div>
        <h3 className="uppercase">{categories[0].title}</h3>

        <ul>
          {categories[0].links.map(navLink => (
            <li key={navLink.path}>
              <a href={navLink.path}>{navLink.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="uppercase">{categories[1].title}</h3>

        <ul>
          {categories[1].links.map(navLink => (
            <li key={navLink.path}>
              <a href={navLink.path}>{navLink.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="uppercase">{categories[2].title}</h3>

        <ul>
          {categories[2].links.map(navLink => (
            <li key={navLink.path}>
              <a href={navLink.path}>{navLink.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="uppercase">{categories[3].title}</h3>

        <SocialLinks isHeader={false} />
      </div> */
