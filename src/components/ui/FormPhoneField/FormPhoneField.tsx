'use client';

import { PatternFormat } from 'react-number-format';
import { Controller, FieldValues } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { FormPhoneFieldProps } from './types';

import { cn } from '@/utils/cn';

import StarIcon from '~/icons/star.svg';

export const FormPhoneField = <TFormValues extends FieldValues>({
  label,
  name,
  control,
  errors,
  required,
  className,
  pattern,
  placeholder,
  defaultValue,
}: FormPhoneFieldProps<TFormValues>) => (
  <Controller<TFormValues>
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      <label className={cn('label', className)}>
        <span className="relative mb-1 inline max-w-fit">
          {label}
          {required && (
            <StarIcon className="absolute -right-3 top-0 size-2 text-red" />
          )}
        </span>

        <PatternFormat
          className="input"
          type="tel"
          aria-invalid={errors[name] ? 'true' : 'false'}
          format={pattern || '+ 38 (###) ### ####'}
          placeholder={placeholder}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          value={field.value}
        />

        <FormError name={name} errors={errors} />
      </label>
    )}
  />
);
