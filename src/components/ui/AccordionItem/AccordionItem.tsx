import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  Transition,
} from '@headlessui/react';
import React from 'react';

import { cn } from '@/utils';

import { AccordionItemProps } from './types';

import DownIcon from '~/icons/arrow-down.svg';
import UpIcon from '~/icons/arrow-up.svg';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  isOpenFirst,
  data,
}) => {
  return isOpenFirst ? (
    <Tab
      as={'li'}
      className="border-b border-solid border-brownLight py-4 outline-none first:pt-0"
    >
      {({ selected }) => (
        <>
          <div
            className={cn('flex items-center justify-between', {
              'mb-2': selected,
            })}
          >
            <p className="w-fit font-open-sans text-[16px]/[1.2] font-semibold tracking-[-0.32px] text-brownDark md:text-[18px] md:tracking-[-0.36px] xl:font-bold 2xl:text-[20px] 2xl:tracking-[-0.4px]">
              {title}
            </p>
            {selected ? (
              <UpIcon className="size-5 md:size-6" />
            ) : (
              <DownIcon className="size-5 md:size-6" />
            )}
          </div>
          <p
            className={cn(
              'font-open-sans text-[14px]/[1.2] font-normal tracking-[-0.28px] text-brownDark md:text-[16px] md:tracking-[-0.32px]',
              {
                'h-0 opacity-0 transition-all duration-500 ease-out': !selected,
                'h-auto opacity-100 transition-all duration-500 ease-out':
                  selected,
              },
            )}
          >
            {description}
          </p>
        </>
      )}
    </Tab>
  ) : (
    <Disclosure as="li">
      {({ open }) => (
        <>
          <DisclosureButton>
            {title}
            {open ? (
              <UpIcon className="size-5 md:size-6" />
            ) : (
              <DownIcon className="size-5 md:size-6" />
            )}
          </DisclosureButton>
          <Transition
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-6"
          >
            <DisclosurePanel>
              {description}
              {data?.map(item => (
                <div key={item.id}>
                  <p>
                    {item.title}
                    <span>{item.description}</span>
                  </p>
                </div>
              ))}
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
