'use client';

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
} from '@headlessui/react';

import { MainLink, MainNav, SocialLinks } from '@/components/ui';

import { cn } from '@/utils';

import data from '@/data/common.json';

import MenuIcon from '~/icons/menu.svg';
import CloseIcon from '~/icons/close.svg';

export const MobileMenu: React.FC = () => {
  const {
    phone,
    mobileMenu: { openButton, closeButton },
  } = data;

  return (
    <Popover className="flex items-center justify-center xl:hidden">
      {({ open, close }) => (
        <>
          <PopoverButton
            as="button"
            className={cn('relative size-8 text-blackLight md:size-10', {
              'p-1 md:p-2': open,
            })}
            aria-label={open ? closeButton.ariaLabel : openButton.ariaLabel}
          >
            <CloseIcon
              className={cn(
                'size-full transition-[opacity,transform]',
                { 'rotate-0 opacity-100': open },
                { 'rotate-90 opacity-0': !open },
              )}
            />
            <MenuIcon
              className={cn(
                'absolute inset-0 size-full transition-[opacity,transform]',
                { 'opacity-100': !open },
                { '-rotate-45 opacity-0': open },
              )}
            />
          </PopoverButton>

          <Transition
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <PopoverOverlay className="fixed inset-0 top-12 bg-black/40 backdrop-blur-xs md:top-16" />
          </Transition>

          <Transition
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-2"
            enterTo=" translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <PopoverPanel
              modal
              anchor="bottom"
              className="flex w-full flex-col items-center justify-center gap-6 rounded-b-lg bg-whiteBeige py-8 transition [--anchor-gap:6px] md:rounded-b-2xl"
            >
              <MainNav mobileStyle onClose={close} />

              <MainLink path={phone.path} label={phone.label} tel />

              <SocialLinks isHeader={false} />
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
