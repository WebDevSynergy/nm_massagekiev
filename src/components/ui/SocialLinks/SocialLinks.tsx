import React from 'react';

import { SocialItem } from '@/components/ui/SocialItem';

import { SocialLinksProps } from './types';

import data from '@/data/common.json';

export const SocialLinks: React.FC<SocialLinksProps> = ({ isHeader }) => {
  const { socialLinksHeader, socialLinksFooter } = data;

  const list = isHeader ? socialLinksHeader : socialLinksFooter;
  return (
    <ul className="flex items-center gap-2">
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
