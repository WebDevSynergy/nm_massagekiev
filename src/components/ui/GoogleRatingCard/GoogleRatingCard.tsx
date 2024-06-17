'use client';

import { Rating, Star } from '@smastrom/react-rating';

import { useFetchGoogleRating } from '@/hooks';
import { cn } from '@/utils';

import { GoogleRatingCardProps } from './types';

import '@smastrom/react-rating/style.css';

export const GoogleRatingCard: React.FC<GoogleRatingCardProps> = ({
  wrapClassName,
  text,
}) => {
  const rating = useFetchGoogleRating();

  const itemStyles = {
    itemShapes: Star,
    activeFillColor: '#FBBC04',
    inactiveFillColor: '#ffedd5',
  };

  return (
    <>
      {rating && rating > 3 && (
        <div
          className={cn(
            'w-[208px] rounded-[24px] bg-white px-4 py-2 shadow-blackShadow20  md:w-[224px] md:rounded-[32px] md:px-6 md:py-4 xl:w-[270px] xl:rounded-[40px] xl:px-8',
            wrapClassName,
          )}
        >
          <div className="mb-1 flex items-center gap-x-2">
            <p className="text-[16px]/[1.2] font-bold tracking-[-0.32px] text-brownDark md:text-[20px]/[1.2] md:tracking-[-0.4px]">
              {Number.isInteger(rating) ? `${rating}.0` : rating}
            </p>

            <div className="h-[16px] w-[80px] md:h-[24px] md:w-[120px]">
              <Rating value={rating} readOnly itemStyles={itemStyles} />
            </div>
          </div>

          <p className="text-[12px]/[1.2] tracking-[-0.24px] text-brown xl:text-[14px]/[1.2] xl:tracking-[-0.28px]">
            {text}
          </p>
        </div>
      )}
    </>
  );
};
