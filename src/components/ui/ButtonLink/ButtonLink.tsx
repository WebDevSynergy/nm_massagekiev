'use client';

import Link from 'next/link';

import { ButtonLinkProps } from './types';

import { cn } from '@/utils/cn';

export const ButtonLink: React.FC<ButtonLinkProps> = props => {
  const { className, styleType, children, ...restProps } = props;

  const btnClasses = cn(
    {
      'flex h-11 w-full shrink-0 items-center justify-center rounded-[24px] px-6 py-2 text-base/[1.4] tracking-[-.02em] text-white transition-colors md:max-w-[336px] xl:h-12  xl:max-w-[282px] xl:text-lg/[1.4] 2xl:max-w-[253px] 2xl:text-xl':
        styleType !== 'unstyled',
      'bg-green hover:bg-greenDark focus:bg-greenDark': styleType === 'primary',
      'bg-orange hover:bg-orangeDark focus:bg-orangeDark':
        styleType === 'secondary',
    },
    className,
  );

  if (restProps.tag === 'link') {
    return (
      <Link className={btnClasses} {...restProps}>
        {children}
      </Link>
    );
  } else if (restProps.tag === 'a') {
    return (
      <a
        className={btnClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className={btnClasses} {...restProps}>
        {children}
      </button>
    );
  }
};
