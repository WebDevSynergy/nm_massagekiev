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

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrow-down.svg';
import CheckIcon from '~/icons/checkmark.svg';

import { FormListboxProps } from './types';

export const FormListbox: React.FC<FormListboxProps> = ({
  label,
  name,
  placeholder,
  variants,
  control,
  errors,
  required = false,
  className = '',
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
                <Label
                  as="p"
                  className="text-sm/[1.3] text-black/70 md:mb-1 md:text-base/[1.6] smOnly:mb-2"
                >
                  {label} {required && <span className="text-black">*</span>}
                </Label>

                <div className={cn('relative')}>
                  <ListboxButton
                    className={cn(
                      'bg-lightBg text-primaryText focus-visible:border-accent relative z-10 w-full cursor-pointer rounded-[10px] border-[1px] border-transparent px-4 py-[17.5px] text-left text-sm/[1.5] font-light outline-transparent transition-all duration-300 focus:outline-none',
                      { 'border-red': errors[name] },
                      {
                        'border-transparent bg-transparent outline-transparent':
                          open,
                      },
                    )}
                  >
                    <span
                      className={cn('text-primaryText block', {
                        'text-greyText': !field.value,
                      })}
                    >
                      {field.value || placeholder}
                    </span>

                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <ArrowIcon
                        className={cn(
                          'text-primaryText size-4 transition-transform',
                          {
                            '-rotate-180': open,
                          },
                        )}
                        aria-hidden="true"
                      />
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
                                  <CheckIcon
                                    className="size-4"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      )}
    />
  );
};
