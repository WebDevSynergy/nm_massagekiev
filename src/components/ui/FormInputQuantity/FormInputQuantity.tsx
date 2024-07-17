'use client';

import { cn } from '@/utils';
import { FormFieldPattern } from '../FormFieldPattern';
import { FormInputQuantityProps } from './types';
import { FieldValues } from 'react-hook-form';

import styles from './FormInputQuantity.module.css';

export const FormInputQuantity = <TFormValues extends FieldValues>({
  handleQuantity,
  type,
  costs,
  choosedService,
  ...props
}: FormInputQuantityProps<TFormValues>) => {
  const btnClasses =
    'absolute top-1/2 z-10 flex size-6 shrink-0 -translate-y-1/2 items-center justify-center rounded bg-white p-1 text-base/[1.2] text-brown';

  return (
    <div
      className={cn(
        'rounded-2xl p-4 md:flex md:items-center md:justify-between md:px-6 md:py-[6px] smOnly:mb-2',
        choosedService ? ' bg-beige' : 'bg-gray-100',
      )}
    >
      <div className="relative w-[106px] smOnly:mx-auto smOnly:mb-4">
        <button
          className={cn(
            btnClasses,
            'left-1',
            !choosedService && 'text-gray-300',
          )}
          disabled={!choosedService}
          type="button"
          onClick={() => handleQuantity('minus')}
        >
          -
        </button>

        <FormFieldPattern
          type={type}
          {...props}
          noValidate
          isDisabled={!choosedService}
          className={cn(
            '!mb-0 [&>span]:hidden',
            !choosedService && styles.inputColor,
          )}
        />

        <button
          className={cn(
            btnClasses,
            'right-1',
            !choosedService && 'text-gray-300',
          )}
          disabled={!choosedService}
          type="button"
          onClick={() => handleQuantity('add')}
        >
          +
        </button>
      </div>

      <ul
        className={cn(
          'flex items-center justify-between text-base/[1.2] font-semibold text-brownDark md:gap-6',
          !choosedService && 'text-gray-300',
        )}
      >
        <li>
          <span
            className={cn(
              ' line-through',
              choosedService ? ' text-red' : 'text-transparent',
            )}
          >
            {`${costs.totalCost ?? 0} ${costs.currency}`}
          </span>
        </li>
        <li>
          <span>{`${costs.promoCost ?? 0} ${costs.currency}`}</span>
        </li>
      </ul>
    </div>
  );
};
