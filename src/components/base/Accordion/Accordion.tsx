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
      className={cn({
        'h-[1015px] sm:h-[880px] md:h-[735px] xl:h-[812px] xl:max-w-[588px] 2xl:h-[722px] 2xl:max-w-[808px]':
          type === 'faq',
      })}
    >
      <TabList as={'ul'}>{children}</TabList>
    </TabGroup>
  );
};
