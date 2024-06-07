import React from 'react';

import { MainLink } from '@/components/ui';

import { MainNavProps } from './types';

import data from '@/data/common.json';
import { cn } from '@/utils';

export const MainNav: React.FC<MainNavProps> = ({ mobileStyle, onClose }) => {
  const { nav } = data;

  return (
    <nav className={cn({ 'hidden xl:block': !mobileStyle })}>
      <ul
        className={cn('flex items-center justify-center gap-6', {
          'flex-col': mobileStyle,
        })}
      >
        {nav.map(({ path, label }) => (
          <li key={path}>
            <MainLink path={path} label={label} onClose={onClose} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
