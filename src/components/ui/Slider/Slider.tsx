/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

type Slide = {
  content: React.ReactNode;
};

type SwiperSliderProps = {
  slides: Slide[];
  settings: any;
};

export const SwiperSlider: React.FC<SwiperSliderProps> = ({
  slides,
  settings,
}) => {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} {...settings}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};
