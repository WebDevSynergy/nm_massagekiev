'use client';

import { cn } from '@/utils/cn';

import ControlIcon from '~/icons/arrow.svg';

import data from '@/data/common.json';

import { ArrowSliderProps } from './types';

export const ArrowSlider: React.FC<ArrowSliderProps> = ({
  section,
  wrapClassName,
}) => {
  const {
    arrowSlider: {
      prevBtnAriaLabel,
      nextBtnAriaLabel,
      prevIconAriaLabel,
      nextIconAriaLabel,
    },
  } = data;
  return (
    <div
      className={cn(
        'flex justify-between md:w-[120px] xl:w-[130px] 2xl:w-[144px]',
        wrapClassName,
      )}
    >
      <button
        className={cn(`slider-prev-btn-${section}`, 'ctrlSliderBtn')}
        type="button"
        aria-label={prevBtnAriaLabel}
      >
        <ControlIcon
          width={40}
          height={40}
          className={`size-[20px] rotate-180 text-greenDark transition-all hover:text-blackLight md:size-[24px] xl:size-[40px]`}
          aria-label={prevIconAriaLabel}
        />
      </button>

      <button
        className={cn(`slider-next-btn-${section}`, 'ctrlSliderBtn')}
        type="button"
        aria-label={nextBtnAriaLabel}
      >
        <ControlIcon
          width={40}
          height={40}
          className="size-[20px] text-greenDark transition-all hover:text-blackLight md:size-[24px] xl:size-[40px]"
          aria-label={nextIconAriaLabel}
        />
      </button>
    </div>
  );
};
