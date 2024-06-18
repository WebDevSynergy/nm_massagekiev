'use client';

import React from 'react';

import { Tab } from '@headlessui/react';

import { cn } from '@/utils';

import { AccordionFAQItemProps } from './types';

import DownIcon from '~/icons/arrow-down.svg';

export const AccordionFAQItem: React.FC<AccordionFAQItemProps> = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <Tab
          key={index}
          as={'li'}
          className="cursor-pointer list-none border-b border-solid border-brownLight py-4 outline-none first:pt-0"
        >
          {({ selected }) => (
            <>
              <div
                className={cn('flex items-center justify-between', {
                  'mb-2': selected,
                })}
              >
                <p className="w-fit font-open-sans text-[16px]/[1.2] font-semibold tracking-[-0.32px] text-brownDark md:text-[18px] md:tracking-[-0.36px] xl:font-bold 2xl:text-[20px] 2xl:tracking-[-0.4px]">
                  {item.title}
                </p>
                <DownIcon
                  className={cn(
                    'size-5 transition-[transform] md:size-6',
                    { 'rotate-0 text-orange': selected },
                    { 'rotate-180 text-green': !selected },
                  )}
                />
              </div>
              {selected && (
                <p className="font-open-sans text-[14px]/[1.2] font-normal tracking-[-0.28px] text-brown md:text-[16px] md:tracking-[-0.32px]">
                  {item.description}
                </p>
              )}
            </>
          )}
        </Tab>
      ))}
    </>
  );
};
