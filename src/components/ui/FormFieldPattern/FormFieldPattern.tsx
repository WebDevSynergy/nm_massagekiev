'use client';

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
}: FormFieldPatternProps<TFormValues>) => {
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
            placeholder={placeholder}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            value={field.value}
          />

          {!noValidate && <FormError name={name} errors={errors} />}
        </label>
      )}
    />
  );
};
