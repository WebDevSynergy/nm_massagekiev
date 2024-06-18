'use client';

import { TabGroup, TabList } from '@headlessui/react';

import React, { useState } from 'react';

import { cn } from '@/utils';

import { AccordionProps } from './types';

export const Accordion: React.FC<AccordionProps> = ({ children, type }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabGroup
      manual
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      className={cn('xl:max-w-[588px] 2xl:max-w-[808px]', {
        'h-[1015px] sm:h-[880px] md:h-[735px] xl:h-[812px] 2xl:h-[722px]':
          type === 'faq',
        'h-[1460px] sm:h-[1412px] md:h-[1465px] xl:h-[1590px] 2xl:h-[1545px]':
          type === 'services',
      })}
    >
      <TabList as={'ul'}>{children}</TabList>
    </TabGroup>
  );
};
