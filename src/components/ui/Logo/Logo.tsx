import Link from 'next/link';

import { LogoProps } from './types';

import { cn } from '@/utils';

import data from '@/data/common.json';

import LogoIcon from '~/icons/logo.svg';

export const Logo: React.FC<LogoProps> = ({ variant, className = '' }) => {
  const { logo } = data;

  return (
    <Link
      className={cn(
        'block h-[22px] w-[186px] flex-shrink-0 text-brownLight transition-colors hover:text-brown focus:text-brown',
        {
          'text-green hover:text-greenDark focus:text-greenDark':
            variant === 'green',
        },
        className,
      )}
      href={logo.path}
      aria-label={logo.ariaLabel}
    >
      <LogoIcon />
    </Link>
  );
};
