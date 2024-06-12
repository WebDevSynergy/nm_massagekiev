'use client';

import { Fragment } from 'react';
import { Controller, FieldValues } from 'react-hook-form';

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

import ArrowIcon from '~/icons/arrow-left.svg';
import ChevronDownIcon from '~/icons/check.svg';
import StarIcon from '~/icons/star.svg';

export const FormListbox = <TFormValues extends FieldValues>({
  label,
  name,
  placeholder,
  variants,
  control,
  errors,
  required,
  className,
}: FormListboxProps<TFormValues>) => {
  return (
    <Controller<TFormValues>
      name={name}
      control={control}
      render={({ field }) => (
        <div className={className}>
          <Listbox value={field.value || ''} onChange={field.onChange}>
            <Label as="p" className="label relative !mb-1 inline max-w-fit">
              {label}
              {required && (
                <StarIcon className="absolute -right-3 top-0 size-2 text-red" />
              )}
            </Label>

            <div className={cn('relative')}>
              <ListboxButton className="input !pr-12">
                <span
                  className={cn('block text-brownDark', {
                    'text-grey': !field.value,
                  })}
                >
                  {field.value || placeholder}
                </span>

                <ArrowIcon
                  className="pointer-events-none absolute right-4 top-1/2 size-6 -translate-y-1/2 items-center text-greenDark"
                  aria-hidden="true"
                />
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
                <ListboxOptions
                  anchor="bottom"
                  as="ul"
                  className="z-10 h-[312px] w-[var(--button-width)] list-none overflow-hidden rounded-2xl bg-greenLight [--anchor-gap:6px] focus:outline-none"
                >
                  {variants.map(option => (
                    <ListboxOption
                      as="li"
                      key={option.id}
                      className="md:hover:bg-inputActive/20 md:focus:bg-inputActive/20 group relative flex cursor-pointer select-none items-center gap-4 p-4 text-sm/[1.4] text-brownDark  data-[focus]:text-blackLight"
                      value={option.title}
                    >
                      <ChevronDownIcon
                        className="invisible inset-y-0 right-0 flex size-4 items-center text-greenDark group-data-[selected]:visible"
                        aria-hidden="true"
                      />

                      <p className="block group-data-[selected]:text-brown">
                        {option.title}
                      </p>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>

            <FormError name={name} errors={errors} />
          </Listbox>
        </div>
      )}
    />
  );
};
