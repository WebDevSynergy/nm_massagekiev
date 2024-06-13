'use client';

import { useClose } from '@headlessui/react';

import { Modal, ButtonLink, SocialLinks, MainLink } from '@/components/ui';

import { cn } from '@/utils/cn';
import data from '@/data/common.json';
import commonData from '@/data/form.common.json';

import CloseIcon from '~/icons/close.svg';
import ErrorIcon from '~/icons/error.svg';
import SuccessIcon from '~/icons/check.svg';

import { FormPopupProps } from './types';

export const FormPopup: React.FC<FormPopupProps> = ({
  isOpen,
  onClose,
  isSuccess,
}) => {
  const close = useClose();

  const handleClose = () => {
    onClose && onClose();
    close();
  };

  const { onSuccess, onError, closeButton } = commonData.popup;
  const { schedule, phone } = data;

  const Icon = isSuccess ? SuccessIcon : ErrorIcon;

  const title = isSuccess ? onSuccess.title : onError.title;
  const desc = isSuccess ? onSuccess.desc : onError.desc;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      modalStyle="rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-4xl bg-whiteBeige p-6 md:p-10 xl:p-20 relative w-full md:w-auto"
      backdropStyle="container"
    >
      <>
        <ButtonLink
          type="button"
          styleType="unstyled"
          className="absolute right-2 top-2 size-4 text-grey transition-colors hover:text-blackLight focus:text-blackLight md:right-4 md:top-4 md:size-6 xl:right-8 xl:top-8 xl:size-8 2xl:right-10 2xl:top-10 2xl:size-10"
          onClick={handleClose}
          aria-label={closeButton.ariaLabel}
        >
          <CloseIcon className="size-full" />
        </ButtonLink>

        <div
          className="space-y-2 text-center tracking-[-.02em]"
          role="status"
          aria-live="polite"
        >
          <div
            className={cn('flex w-full items-center justify-center gap-2', {
              'smOnly:flex-col': !isSuccess,
            })}
          >
            <Icon
              className={cn(
                'size-6 stroke-2 md:size-8 xl:size-10 xl:stroke-[4px]',
                isSuccess ? 'text-greenDark' : 'text-red',
              )}
            />
            <h3 className="text-center text-2xl/[1.2] font-bold text-blackLight md:text-nowrap md:text-[32px] xl:text-4xl/[1.2] 2xl:text-[40px] smOnly:whitespace-pre">
              {title}
            </h3>
          </div>

          <p
            className={cn(
              '!mb-4 text-wrap text-base/[1.2] text-brownDark md:!mb-6 md:text-xl/[1.2] xl:!mb-8 xl:text-2xl/[1.2] 2xl:!mb-10',
              {
                'xl:mx-auto xl:max-w-[360px] smOnly:px-4 mdOnly:px-32':
                  !isSuccess,
              },
            )}
          >
            {desc}
          </p>

          <p className="text-sm/[1.4] text-brown md:text-base/[1.4] xl:text-lg/[1.4]">
            {schedule.days + ' ' + schedule.hours}
          </p>

          <MainLink
            path={phone}
            label={phone}
            tel
            className="text-sm/[1.4] text-brown hover:text-brownDark focus:text-brownDark md:text-base/[1.4] xl:text-lg/[1.4]"
          />

          <SocialLinks className="justify-center" />
        </div>
      </>
    </Modal>
  );
};
