'use client';

import { useState, useEffect } from 'react';

import Arrow from '~/icons/arrow-up.svg';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top group ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <Arrow
        width={12}
        height={14}
        className="h-[14px] w-[12px] transition-all group-hover:scale-125"
      />
    </button>
  );
};
