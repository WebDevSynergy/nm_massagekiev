import { Navigation, Autoplay } from 'swiper/modules';

import { SliderProps } from '@/components/ui/Slider/types';

enum Sections {
  REVIEWS = 'reviews',
  MASSEURS = 'masseurs',
  BLOG = 'blog',
  INSTAGRAM = 'instagram',
  CERTIFICATES = 'certificates',
}

export const makeSliderConfig = ({
  section,
  wrapClassName,
}: Partial<SliderProps>) => {
  const slidesPerViewBase = 1;

  const spaceBetweenBase = 16;
  const autoplayBase =
    section === Sections.INSTAGRAM
      ? { delay: 2000, disableOnInteraction: false }
      : false;

  let loopBase: boolean;

  let spaceBetweenTab: number;
  let slidesPerViewTab: number;

  let slidesPerViewDesk: number;
  let spaceBetweenDesk: number;

  let slidesPerViewBigDesk: number;
  let spaceBetweenBigDesk: number;

  switch (section) {
    case Sections.INSTAGRAM:
      loopBase = false;

      slidesPerViewTab = 3;
      spaceBetweenTab = 16;

      slidesPerViewDesk = 5;
      spaceBetweenDesk = 24;

      slidesPerViewBigDesk = 7;
      spaceBetweenBigDesk = 24;
      break;

    default:
      loopBase = true;

      spaceBetweenTab = 16;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 3;
      spaceBetweenDesk = 24;

      slidesPerViewBigDesk = 3;
      spaceBetweenBigDesk = 40;
  }

  return {
    className: wrapClassName,
    updateOnWindowResize: true,
    wrapperTag: 'ul',
    modules: [Navigation, Autoplay],
    speed: 800,
    lazyPreloadPrevNext: 1,
    navigation: {
      prevEl: `.slider-prev-btn-${section}`,
      nextEl: `.slider-next-btn-${section}`,
    },
    allowTouchMove: true,
    loop: loopBase,
    spaceBetween: spaceBetweenBase,
    slidesPerView: slidesPerViewBase,
    autoplay: autoplayBase,

    breakpoints: {
      768: {
        spaceBetween: spaceBetweenTab,
        slidesPerView: slidesPerViewTab,
      },
      1280: {
        slidesPerView: slidesPerViewDesk,
        spaceBetween: spaceBetweenDesk,
      },
      1920: {
        slidesPerView: slidesPerViewBigDesk,
        spaceBetween: spaceBetweenBigDesk,
      },
    },
  };
};
