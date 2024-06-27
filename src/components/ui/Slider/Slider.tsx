'use client';

import { SwiperSlide, Swiper } from 'swiper/react';

import { makeSliderConfig } from '@/utils/makeSliderConfig';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderProps } from './types';

export const Slider: React.FC<SliderProps> = ({
  slideClassName,
  slidesData,
  slideComponent: SlideComponent,
  ...restProps
}) => {
  return (
    <Swiper {...makeSliderConfig(restProps)}>
      {slidesData.map((card, idx) => (
        <SwiperSlide
          tag="li"
          className={slideClassName}
          key={card.id ? card.id : idx}
        >
          <SlideComponent {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
