import { ModalReview } from '@/components/base';
import {
  ArrowSlider,
  ButtonLink,
  ReviewCard,
  SectionTitle,
  Slider,
} from '@/components/ui';

import { getReviews } from '@/actions/sanity';

import data from '@/data/common.json';
import LocationIcon from '~/icons/location.svg';
import InstagramIcon from '~/icons/instagram-reviews.svg';

export const ReviewsSection: React.FC = async () => {
  const { title, links, id } = data.reviewsSection;
  const icons = [LocationIcon, InstagramIcon];

  const reviews = await getReviews();

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="md:mb-6 md:flex md:justify-between xl:mb-8 2xl:mb-10">
          <SectionTitle className="mb-4 md:mb-0">{title}</SectionTitle>

          <ul className="mb-4 md:hidden">
            {links &&
              links.map(({ label, href }, idx) => {
                const Icon = icons[idx];

                return (
                  <li key={idx} className="first:mb-2 md:first:mb-0">
                    <ButtonLink
                      tag="a"
                      href={href}
                      styleType="unstyled"
                      className="mx-auto flex items-center justify-center gap-x-2 rounded-[24px] bg-beige py-2 
                      text-[16px]/[1.4] tracking-[-0.32px] text-brownDark transition-all  hover:bg-beigeDark
                       focus:bg-beigeDark"
                    >
                      {label}
                      <Icon width={24} height={24} className="size-[24px]" />
                    </ButtonLink>
                  </li>
                );
              })}
          </ul>

          <ArrowSlider section="reviews" wrapClassName="mb-4 md:mb-0" />
        </div>

        <ul className="mb-4 md:mb-6 md:flex md:justify-between xl:mb-8 2xl:mb-10 smOnly:hidden">
          {links &&
            links.map(({ label, href }, idx) => {
              const Icon = icons[idx];

              return (
                <li key={idx} className="first:mb-2 md:first:mb-0">
                  <ButtonLink
                    tag="a"
                    href={href}
                    styleType="unstyled"
                    className="mx-auto flex items-center justify-center gap-x-2 rounded-[24px] bg-beige py-2 
                      text-[16px]/[1.4] tracking-[-0.32px] text-brownDark transition-all  hover:bg-beigeDark
                       focus:bg-beigeDark
                       md:w-[336px] xl:w-[588px] xl:text-[18px]/[1.4] xl:tracking-[-0.36px] 2xl:w-[808px]"
                  >
                    {label}
                    <Icon width={24} height={24} className="size-[24px]" />
                  </ButtonLink>
                </li>
              );
            })}
        </ul>

        <Slider
          section="reviews"
          slidesData={reviews}
          slideComponent={ReviewCard}
          wrapClassName="mb-4 md:mb-6 xl:mb-8 2xl:mb-10"
        />

        <ModalReview />
      </div>
    </section>
  );
};
