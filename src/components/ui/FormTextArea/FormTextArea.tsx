'use client';

import { Controller, FieldValues } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { FormFieldProps } from './types';

import { cn } from '@/utils/cn';

import StarIcon from '~/icons/star.svg';

export const FormTextArea = <TFormValues extends FieldValues>({
  control,
  name,
  label,
  errors,
  maxLength,
  className,
  required,
  defaultValue,
  ...props
}: FormFieldProps<TFormValues>) => (
  <Controller
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

        <textarea
          className="input h-[168px] resize-none"
          rows={6}
          aria-invalid={errors[name] ? 'true' : 'false'}
          {...field}
          {...props}
        />

        {maxLength && (
          <span className="absolute bottom-0 right-0 text-[10px]/[1] text-brownDark">{`${field.value?.length || 0}/${maxLength}`}</span>
        )}

        <FormError errors={errors} name={name} />
      </label>
    )}
  />
);
