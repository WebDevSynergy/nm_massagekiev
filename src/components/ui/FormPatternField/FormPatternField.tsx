'use client';

import { PatternFormat } from 'react-number-format';
import { Controller, FieldValues } from 'react-hook-form';

import { FormPatternFieldProps } from './types';

export const FormPatternField = <TFormValues extends FieldValues>({
  name,
  control,
  errors,
  pattern,
  placeholder,
  defaultValue,
  type,
  handleQuantity,
}: FormPatternFieldProps<TFormValues>) => (
  <Controller<TFormValues>
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      <div className="relative w-[106px] smOnly:mx-auto smOnly:mb-4">
        <button
          className="absolute left-1 top-1/2 z-10 flex size-6 shrink-0 -translate-y-1/2 items-center justify-center rounded bg-white p-1 text-base/[1.2] text-brown
          "
          type="button"
          onClick={() => handleQuantity('minus')}
        >
          -
        </button>

        <PatternFormat
          className="input !mb-0 min-h-fit w-[106px] !rounded-lg !px-8 !py-[6.5px] !text-center smOnly:mx-auto smOnly:focus-visible:!py-[5px]
          "
          type={type}
          aria-invalid={errors[name] ? 'true' : 'false'}
          format={pattern || '##'}
          placeholder={placeholder}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          value={field.value}
        />

        <button
          className="absolute right-1 top-1/2 z-10 flex size-6 shrink-0 -translate-y-1/2 items-center justify-center rounded bg-white p-1 text-base/[1.2] text-brown "
          type="button"
          onClick={() => handleQuantity('add')}
        >
          +
        </button>
      </div>
    )}
  />
);
