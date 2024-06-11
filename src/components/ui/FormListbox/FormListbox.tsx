'use client';

import { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import {
  Listbox,
  Transition,
  Label,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

import { FormError } from '@/components/ui';

import { FormListboxProps } from './types';

import { cn } from '@/utils/cn';

// import ArrowIcon from '~/icons/arrow-down.svg';
// import CheckIcon from '~/icons/checkmark.svg';
import StarIcon from '~/icons/star.svg';

export const FormListbox: React.FC<FormListboxProps> = ({
  label,
  name,
  placeholder,
  variants,
  control,
  errors,
  required,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={className}>
          <Listbox value={field.value || ''} onChange={field.onChange}>
            {({ open }) => (
              <>
                <Label as="p" className="label">
                  {label}
                  {required && (
                    <StarIcon className="absolute -right-3 top-0 size-2 text-red" />
                  )}
                </Label>

                <div className={cn('relative')}>
                  <ListboxButton
                    className={cn('input', {
                      'border-transparent bg-transparent outline-transparent':
                        open,
                    })}
                  >
                    <span
                      className={cn('text-primaryText block', {
                        'text-greyText': !field.value,
                      })}
                    >
                      {field.value || placeholder}
                    </span>

                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      {/* <ArrowIcon
                        className={cn(
                          'text-primaryText size-4 transition-transform',
                          {
                            '-rotate-180': open,
                          },
                        )}
                        aria-hidden="true"
                      /> */}
                    </span>
                  </ListboxButton>

                  <Transition
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <ListboxOptions className="absolute top-0 z-[1] w-full overflow-auto rounded-[10px] border-[1px] border-black bg-green pt-[58px] focus:outline-none focus-visible:border-green">
                      {variants.map((option, idx) => (
                        <ListboxOption
                          key={idx}
                          className={({ active }) =>
                            cn(
                              'text-primaryText/70 md:hover:bg-selectedBg relative cursor-pointer select-none p-4 text-sm/[1.5] font-light',
                              { 'text-accent': active },
                            )
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={cn('block ', {
                                  'text-accent': selected,
                                })}
                              >
                                {option}
                              </span>

                              {selected ? (
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-green">
                                  {/* <CheckIcon
                                    className="size-4"
                                    aria-hidden="true"
                                  /> */}
                                </span>
                              ) : null}
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </div>

                <FormError name={name} errors={errors} />
              </>
            )}
          </Listbox>
        </div>
      )}
    />
  );
};
