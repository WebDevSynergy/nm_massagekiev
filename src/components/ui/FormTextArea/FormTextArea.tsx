'use client';

import { Controller } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { FormFieldProps } from './types';

import { cn } from '@/utils/cn';

import StarIcon from '~/icons/star.svg';

export const FormTextArea: React.FC<FormFieldProps> = ({
  control,
  name,
  label,
  errors,
  maxLength,
  required = false,
  className = '',
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field }) => (
      <label className={cn('label', className)}>
        <span className="relative mb-1 inline max-w-fit">
          {label}
          {required && (
            <StarIcon className="absolute -right-3 top-0 size-2 text-red" />
          )}
        </span>

        <textarea
          className={cn('input h-[168px] resize-none', {
            '!bg-inputRed/20': errors[name],
          })}
          rows={6}
          aria-invalid={errors[name] ? 'true' : 'false'}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          value={field.value}
          {...props}
        />

        {maxLength && (
          <span className="absolute bottom-0 right-0 text-[10px]/[1] text-brownDark">{`${field.value.length || 0}/${maxLength}`}</span>
        )}

        <FormError errors={errors} name={name} />
      </label>
    )}
  />
);
