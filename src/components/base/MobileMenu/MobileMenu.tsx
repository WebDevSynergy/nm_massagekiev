'use client';

import { useState } from 'react';

import {
  ButtonLink,
  Logo,
  MainLink,
  MainNav,
  Modal,
  SocialLinks,
} from '@/components/ui';

import data from '@/data/common.json';

import MenuIcon from '~/icons/menu.svg';
import CloseIcon from '~/icons/close.svg';

export const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const {
    phone,
    mobileMenu: { openButton, closeButton },
  } = data;

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="flex items-center justify-center xl:hidden">
      <ButtonLink
        type="button"
        styleType="unstyled"
        onClick={onOpen}
        className="size-6 text-blackLight md:size-10"
        aria-label={openButton.ariaLabel}
      >
        <MenuIcon className="size-full" />
      </ButtonLink>

      <Modal
        isOpen={open}
        onClose={onClose}
        animation="translateY"
        modalStyle="rounded-b-lg md:rounded-b-2xl bg-whiteBeige pb-8 pt-0 self-start w-full flex flex-col items-center justify-center gap-6"
      >
        <>
          <div className="container flex w-full items-center justify-between py-[12px] md:py-4">
            <ButtonLink
              type="button"
              styleType="unstyled"
              onClick={onClose}
              className="size-6 text-blackLight md:size-10 md:p-2"
              aria-label={closeButton.ariaLabel}
            >
              <CloseIcon className="size-full" />
            </ButtonLink>

            <Logo variant="brown" />

            <MainLink path={phone} label={phone} tel />
          </div>

          <MainNav mobileStyle onClose={onClose} />

          <MainLink path={phone} label={phone} tel />

          <SocialLinks isHeader={false} />
        </>
      </Modal>
    </div>
  );
};
