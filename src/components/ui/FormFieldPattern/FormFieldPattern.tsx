'use client';

import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { Controller, FieldValues } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { FormFieldPatternProps } from './types';
import data from '@/data/certificate-form.json';
import { cn } from '@/utils/cn';

import StarIcon from '~/icons/star.svg';

export const FormFieldPattern = <TFormValues extends FieldValues>({
  label,
  name,
  control,
  errors,
  required,
  className,
  placeholder,
  defaultValue,
  pattern,
  type = 'text',
  noValidate,
  isDisabled,
}: FormFieldPatternProps<TFormValues>) => {
  const [format, setFormat] = useState(false);
  const quantityInputName = data.form.inputs[1].name;

  return (
    <Controller<TFormValues>
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <label className={cn({ label: label }, className)}>
          {label && (
            <span className="relative mb-1 inline max-w-fit">
              {label}
              {required && (
                <StarIcon className="absolute -right-3 top-0 size-2 text-red" />
              )}
            </span>
          )}

          <PatternFormat
            className={cn('input', {
              '!mb-0 min-h-fit w-[106px] !rounded-lg !px-8 !py-[6.5px] !text-center smOnly:mx-auto smOnly:focus-visible:!py-[5px]':
                name === quantityInputName,
            })}
            type={type}
            aria-invalid={errors[name] ? 'true' : 'false'}
            format={pattern || '+ 38 (###) ### ####'}
            disabled={isDisabled !== undefined ? isDisabled : false}
            placeholder={placeholder}
            allowEmptyFormatting={format}
            onFocus={() => setFormat(true)}
            onChange={field.onChange}
            onBlur={() => {
              field.value && setFormat(false);
              name === quantityInputName && field.onChange(field.value);
              field.onBlur();
            }}
            name={field.name}
            value={field.value}
          />

          {!noValidate && <FormError name={name} errors={errors} />}
        </label>
      )}
    />
  );
};
