'use client';

import { useState } from 'react';

import { ButtonLink, Modal } from '@/components/ui';

import { ModalCardProps } from './types';

import { cn } from '@/utils';
import data from '@/data/common.json';

import CloseIcon from '~/icons/close.svg';

export const ModalCard: React.FC<ModalCardProps> = ({
  buttonLabel,
  buttonStyle,
  buttonStyles,
  children,
  backdropStyle,
}) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <ButtonLink
        type="button"
        styleType={buttonStyle}
        onClick={onOpen}
        className={buttonStyles}
      >
        {buttonLabel}
      </ButtonLink>

      <Modal
        isOpen={open}
        onClose={onClose}
        modalStyle="rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-4xl bg-whiteBeige p-6 md:p-10 xl:p-20 relative w-full xl:w-auto max-w-[480px] md:max-w-[688px] xl:max-w-[1040px]"
        backdropStyle={cn('p-4 md:p-10 2xl:p-[140px]', backdropStyle)}
      >
        <>
          <ButtonLink
            type="button"
            styleType="unstyled"
            className="absolute right-2 top-2 size-4 text-grey transition-colors hover:text-blackLight focus:text-blackLight md:right-4 md:top-4 md:size-6 xl:right-8 xl:top-8 xl:size-8 2xl:right-10 2xl:top-10 2xl:size-10"
            onClick={onClose}
            aria-label={data.closeButton.ariaLabel}
          >
            <CloseIcon className="size-full" />
          </ButtonLink>

          {children}
        </>
      </Modal>
    </>
  );
};
