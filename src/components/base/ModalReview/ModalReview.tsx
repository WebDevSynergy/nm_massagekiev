import Image from 'next/image';

import { ModalCard, SectionTitle } from '@/components/ui';
import { ReviewForm } from '@/components/base';

import data from '@/data/review-form.json';

import ReviewImage from '~/images/reviews/reviews@2x.webp';

export const ModalReview: React.FC = () => {
  const { title, image, buttonLabel } = data;

  return (
    <ModalCard
      buttonLabel={buttonLabel}
      buttonStyle="secondary"
      buttonStyles="mx-auto"
    >
      <div className="xl:grid xl:w-[880px] xl:grid-cols-2 xl:gap-6">
        <div className="relative hidden overflow-hidden rounded-5xl xl:block">
          <Image
            className="object-cover"
            src={ReviewImage}
            alt={image.alt}
            fill
          />
        </div>

        <div>
          <SectionTitle className="mb-4">{title}</SectionTitle>

          <ReviewForm />
        </div>
      </div>
    </ModalCard>
  );
};
