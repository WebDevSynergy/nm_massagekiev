'use client';

import { useState } from 'react';

import { ButtonLink, MainLink, Modal, SocialLinks } from '@/components/ui';

import { cn } from '@/utils';

import data from '@/data/common.json';

import MenuIcon from '~/icons/menu.svg';
import CloseIcon from '~/icons/close.svg';

export const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const {
    nav,
    phone,
    mobileMenu: { openButton, closeButton },
  } = data;

  const toggleMenu = () => setOpen(!open);
  const onClose = () => setOpen(false);

  const Icon = open ? CloseIcon : MenuIcon;

  return (
    <>
      <ButtonLink
        type="button"
        styleType="unstyled"
        onClick={toggleMenu}
        className={cn('size-6 text-blackLight md:size-10', { 'md:p-2': open })}
        aria-label={open ? openButton.ariaLabel : closeButton.ariaLabel}
      >
        <Icon className="size-full" />
      </ButtonLink>

      <Modal
        isOpen={open}
        onClose={onClose}
        animation="translateX"
        modalStyle="rounded-b-lg md:rounded-b-2xl bg-whiteBeige p-8 md:p-10 self-start w-full flex w-full flex-col items-center justify-center gap-6"
        backdropStyle="top-12 md:top-14"
      >
        <>
          <nav>
            <ul className="flex flex-col items-center justify-center gap-6">
              {nav.map(({ path, label }) => (
                <li key={path}>
                  <MainLink path={path} label={label} />
                </li>
              ))}
            </ul>
          </nav>

          <MainLink path={phone} label={phone} tel />

          <SocialLinks isHeader={false} />
        </>
      </Modal>
    </>
  );
};
