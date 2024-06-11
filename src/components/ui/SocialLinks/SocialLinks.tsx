import React from 'react';

import { SocialItem } from '@/components/ui/SocialItem';

import { SocialLinksProps } from './types';

import { cn } from '@/utils';

import data from '@/data/common.json';

export const SocialLinks: React.FC<SocialLinksProps> = ({
  isHeader,
  className,
}) => {
  const { socialLinksHeader, socialLinksFooter } = data;

  const list = isHeader ? socialLinksHeader : socialLinksFooter;
  return (
    <ul
      className={cn(
        'flex items-center gap-2',
        { 'hidden xl:flex': isHeader },
        className,
      )}
    >
      {list.map(item => (
        <SocialItem
          key={item.name}
          href={item.path}
          ariaLabel={item.ariaLabel}
          name={item.name as 'facebook' | 'instagram' | 'telegram' | 'viber'}
        />
      ))}
    </ul>
  );
};
