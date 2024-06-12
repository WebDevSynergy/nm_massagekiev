/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination } from 'swiper/modules';

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
    <Swiper modules={[Navigation, Pagination]} {...settings}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};
