import Image from 'next/image';

import { ButtonLink, GoogleRatingCard, HeroReview } from '@/components/ui';

import data from '@/data/hero.json';

export const HeroSection: React.FC = () => {
  const { title, description, buttons, ratingText, review, image, alt, href } =
    data;

  return (
    <section className="section">
      <div className="container">
        <div className="xl:flex xl:items-center xl:gap-x-6">
          <div className="relative mb-4 h-auto w-full md:mb-6 md:size-[688px] xl:mb-0 xl:size-[588px] 2xl:w-[808px] smOnly:w-full">
            <div
              className="h-auto w-full overflow-hidden rounded-[24px] md:size-[688px] md:rounded-[32px] xl:size-[588px]
          2xl:w-[808px] smOnly:w-full"
            >
              <Image
                src={image}
                width={808}
                height={808}
                alt={alt}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            <GoogleRatingCard
              text={ratingText}
              wrapClassName="absolute top-0 left-0 md:-left-2 xl:-top-10 xl:-left-6"
            />

            <HeroReview
              review={review}
              wrapClassName="absolute bottom-0 right-0 md:-right-2 xl:-bottom-10 xl:-right-6"
            />
          </div>

          <div>
            <h1
              className="mb-1 text-[31px]/[1.2] font-bold tracking-[-0.62px] text-blackLight md:mb-2 md:text-[34px]/[1.2] md:tracking-[-0.68px] xl:text-[46px]/[1.2]
            xl:tracking-[-0.92px] 2xl:text-[56px]/[1.2] 2xl:tracking-[-1.12px]"
            >
              {title.start}
              <span className="text-green">{title.accent}</span>
              {title.end}
            </h1>

            <p
              className="mb-4 text-[16px]/[1.4] tracking-[-0.32px] text-brownDark md:mb-6 xl:mb-8 xl:text-[18px]/[1.4] xl:tracking-[-0.36px] 
            2xl:mb-10 2xl:text-[20px]/[1.4] 2xl:tracking-[-0.4px]"
            >
              {description}
            </p>

            <ul className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-4 2xl:justify-normal">
              <li>
                <ButtonLink
                  tag="link"
                  href={href}
                  styleType="primary"
                  className="md:w-[336px] xl:w-[282px] 2xl:w-[253px]"
                >
                  {buttons.buyBtnLabel}
                </ButtonLink>
              </li>

              <li>
                <ButtonLink
                  tag="link"
                  href="#services"
                  styleType="secondary"
                  className="md:w-[336px] xl:w-[282px] 2xl:w-[253px]"
                >
                  {buttons.servicesBtnLabel}
                </ButtonLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
