import Image from 'next/image';

import { cn } from '@/utils';

import { HeroReviewProps } from './types';

export const HeroReview: React.FC<HeroReviewProps> = ({
  review,
  wrapClassName,
}) => {
  return (
    <div
      className={cn(
        'flex w-[280px] items-center gap-2 rounded-[24px] bg-white px-4 py-2 shadow-blackShadow20 md:w-[304px] md:rounded-[32px] md:px-6 md:py-4 xl:w-[337px] xl:rounded-[40px] sm320:w-[200px]',
        wrapClassName,
      )}
    >
      <div className="size-10 shrink-0 overflow-hidden rounded-full md:size-12">
        <Image
          src={review.photo}
          width={48}
          height={48}
          priority
          alt={review.reviewOwner}
          className="size-full object-cover"
        />
      </div>

      <div className="text-[12px]/[1.2] tracking-[-0.24px] xl:text-[14px]/[1.2] xl:tracking-[-0.28px] sm320:text-[10px]/[1.2]">
        <p className="mb-1  text-brown ">{review.reviewLabel}</p>

        <p className="font-bold  text-brownDark">{review.reviewOwner}</p>
      </div>
    </div>
  );
};
