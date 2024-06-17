import Image from 'next/image';

import { SectionTitle } from '@/components/ui';

import data from '@/data/cosmeceuticals.json';

import cosmeceuticalsImage from '~/images/cosmeceuticals/cosmeceuticals.webp';

export const CosmeceuticalsSection: React.FC = () => {
  const { title, description, subtitle, results, alt } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="xl:flex xl:items-center xl:gap-x-6">
          <div>
            <SectionTitle className="mb-2">{title}</SectionTitle>

            <p className="mb-4 text-[16px]/[1.4] tracking-[-0.32px] text-brownDark md:mb-6 xl:mb-8 xl:text-[18px]/[1.4] xl:tracking-[-0.36px]">
              {description}
            </p>

            <h3 className="mb-2 text-[16px]/[1.4] font-semibold tracking-[-0.32px] text-brownDark xl:text-[18px]/[1.4] xl:font-bold xl:tracking-[-0.36px] 2xl:mb-10">
              {subtitle}
            </h3>

            <ul className="mb-4 md:mb-6 xl:mb-0">
              {results &&
                results.map((el, idx) => (
                  <li key={idx}>
                    <p className="text-[14px]/[1.4] tracking-[-0.28px] text-brown xl:text-[18px]/[1.4] xl:tracking-[-0.36px]">
                      &#xb7; {el}
                    </p>
                  </li>
                ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[32px] md:size-[688px] md:rounded-[40px] xl:size-[588px] xl:shrink-0 xl:rounded-[40px] 2xl:size-[686px]">
            <Image
              src={cosmeceuticalsImage.src}
              alt={alt}
              width={686}
              height={686}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
