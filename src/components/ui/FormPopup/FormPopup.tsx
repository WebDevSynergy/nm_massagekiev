'use client';

import { Modal } from '@/components/ui';

import { cn } from '@/utils/cn';
import content from '@/data/contactUs-form.json';

// import CrossIcon from '~/icons/cross.svg';
// import SuccessIcon from '~/icons/success.svg';
// import ErrorIcon from '~/icons/error.svg';

import { FormPopupProps } from './types';

export const FormPopup: React.FC<FormPopupProps> = ({
  isOpen,
  onClose,
  isSuccess,
}) => {
  const { onSuccess, onError } = content.popup;

  // const Icon = isSuccess ? SuccessIcon : ErrorIcon;

  const title = isSuccess ? onSuccess.title : onError.title;
  const desc = isSuccess ? onSuccess.desc : onError.desc;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalStyle="relative mx-auto w-full max-w-[324px] rounded-[10px] bg-white px-4 pb-[60px] pt-20 md:max-w-[624px] md:px-[42px] md:pb-20 md:pt-[122px] xl:flex xl:h-[438px] xl:max-w-[802px] xl:items-center xl:justify-center xl:p-0"
      // modalWrapStyle="container flex items-center justify-center"
    >
      <button
        type="button"
        className="absolute right-4 top-4 size-8 text-black md:right-[42px] md:top-[42px] md:size-12 xl:right-8 xl:top-8"
        onClick={onClose}
        // aria-label={closeButtton.aria}
      >
        {/* <CrossIcon className="size-full" /> */}
      </button>

      <div>
        {/* <Icon
          className={cn(
            'mx-auto mb-6 block size-16 md:size-[75px] xl:size-[100px]',
            isSuccess ? 'text-accent' : 'text-red',
          )}
        /> */}

        <h3
          className={cn(
            'font-geologica mb-4 text-center text-base/5 md:text-xl/[1.3] xl:text-[34px]/[1.3]',
            isSuccess ? 'text-accent' : 'text-red',
          )}
        >
          {title}
        </h3>

        <p className="whitespace-pre text-center text-sm/[1.5] text-black md:text-base/[1.5] xl:text-xl/[1.5] smOnly:text-wrap">
          {desc}
        </p>
      </div>
    </Modal>
  );
};
