'use client';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment } from 'react';

import { ModalProps } from './types';

import { cn } from '@/utils/cn';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalStyle,
  backdropStyle,
  animation = 'opacity',
}) => {
  const transitionType = {
    opacity: {
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
    translateX: {
      enterFrom: '-translate-x-full',
      enterTo: 'translate-x-0',
      leaveFrom: 'translate-x-0',
      leaveTo: '-translate-x-full',
    },
    scale: {
      enterFrom: 'transform-[scale(95%)]',
      enterTo: 'transform-[scale(100%)]',
      leaveFrom: 'transform-[scale(100%)]',
      leaveTo: 'transform-[scale(95%)]',
    },
  };

  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      leave="ease-in duration-300"
      {...transitionType.opacity}
    >
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
      >
        <div
          className={cn(
            'fixed inset-0 z-10 flex w-screen items-center justify-center overflow-y-auto bg-black/40 backdrop-blur-sm',
            backdropStyle,
          )}
        >
          <TransitionChild
            enter="ease-out duration-300"
            leave="ease-in duration-300"
            {...transitionType[animation]}
          >
            <DialogPanel className={modalStyle}>{children}</DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};
