'use client';

import { PatternFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { FormPhoneFieldProps } from './types';

import { cn } from '@/utils/cn';

import StarIcon from '~/icons/star.svg';

export const FormPhoneField: React.FC<FormPhoneFieldProps> = ({
  label,
  name,
  control,
  errors,
  placeholder,
  required,
  className,
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

        <PatternFormat
          className="input"
          type="tel"
          aria-invalid={errors[name] ? 'true' : 'false'}
          placeholder={placeholder}
          format="+ 38 (###) ### ####"
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
