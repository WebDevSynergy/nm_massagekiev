'use client';

import { AccordionItem } from '@/components/ui/AccordionItem';
import { TabGroup, TabList } from '@headlessui/react';
import React, { useState } from 'react';

import { AccordionFAQProps } from './types';

export const AccordionFAQ: React.FC<AccordionFAQProps> = ({
  isOpenFirst,
  data,
}) => {
  const [selected, setSelected] = useState(0);

  return isOpenFirst ? (
    <TabGroup manual selectedIndex={selected} onChange={setSelected}>
      <TabList as={'ul'} className="xl:w-[588px] 2xl:w-[808px]">
        {data.map(item => (
          <AccordionItem
            key={item.id}
            title={item.title}
            description={item.description}
            isOpenFirst={isOpenFirst}
          />
        ))}
      </TabList>
    </TabGroup>
  ) : (
    <ul>
      {data.map(item => (
        <AccordionItem
          key={item.id}
          title={item.title}
          description={item.description}
          data={item.faq}
          isOpenFirst={isOpenFirst}
        />
      ))}
    </ul>
  );
};
