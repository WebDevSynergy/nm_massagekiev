'use client';

import React from 'react';

import { Tab } from '@headlessui/react';

import { cn } from '@/utils';

import { AccordionServiceItemProps } from './types';

import DownIcon from '~/icons/arrow-down.svg';

export const AccordionServiceItem: React.FC<AccordionServiceItemProps> = ({
  data,
}) => {
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
                <p
                  className={cn(
                    'w-fit font-open-sans text-[16px]/[1.2] font-normal uppercase tracking-[-0.32px] text-brownDark xl:text-[18px] xl:font-bold xl:tracking-[-0.36px] 2xl:text-[20px] 2xl:tracking-[-0.4px]',
                    { 'font-bold': selected },
                  )}
                >
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
                <div>
                  <p className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                    {item.description}
                  </p>
                  <p>{item.for}</p>
                  <p>{item.duration}</p>
                  <p>{item.subscription}</p>
                </div>
              )}
            </>
          )}
        </Tab>
      ))}
    </>
  );
};
