'use client';

import { cn } from '@/utils';
import { FormFieldPattern } from '../FormFieldPattern/FormFieldPattern';
import { FormInputQuantityProps } from './types';
import { FieldValues } from 'react-hook-form';

export const FormInputQuantity = <TFormValues extends FieldValues>({
  handleQuantity,
  type,
  costs,
  ...props
}: FormInputQuantityProps<TFormValues>) => {
  const btnClasses =
    'absolute top-1/2 z-10 flex size-6 shrink-0 -translate-y-1/2 items-center justify-center rounded bg-white p-1 text-base/[1.2] text-brown';

  return (
    <div className="rounded-2xl bg-beige p-4 md:flex md:items-center md:justify-between md:px-6 md:py-[6px] smOnly:mb-2">
      <div className="relative w-[106px] smOnly:mx-auto smOnly:mb-4">
        <button
          className={cn(btnClasses, 'left-1')}
          type="button"
          onClick={() => handleQuantity('minus')}
        >
          -
        </button>

        <FormFieldPattern
          type={type}
          {...props}
          noValidate
          className="!mb-0 [&>span]:hidden"
        />

        <button
          className={cn(btnClasses, 'right-1')}
          type="button"
          onClick={() => handleQuantity('add')}
        >
          +
        </button>
      </div>

      <ul className="flex items-center justify-between text-base/[1.2] font-semibold text-brownDark md:gap-6">
        <li>
          <span className="text-red line-through">
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
