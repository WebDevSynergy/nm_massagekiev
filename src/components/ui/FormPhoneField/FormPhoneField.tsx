'use client';

import { PatternFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { cn } from '@/utils/cn';

import { FormPhoneFieldProps } from './types';

export const FormPhoneField: React.FC<FormPhoneFieldProps> = ({
  label,
  name,
  control,
  errors,
  placeholder,
  required = false,
  className = '',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <label
          className={cn(
            'text-primaryText/70 relative flex flex-col text-sm/[1.3] md:text-base/[1.6]',
            className,
          )}
        >
          <span className="block md:mb-1 smOnly:mb-2">
            {label} {required && <span className="text-green">*</span>}
          </span>

          <PatternFormat
            type="tel"
            className={cn(
              'bg-lightBg text-primaryText placeholder:text-greyText focus-visible:border-accent relative mb-2 w-full rounded-[10px] border-[1px] border-transparent p-4 py-[17.5px] text-left text-sm/[1.5] font-light transition placeholder:text-sm/[1.5] focus:outline-none smOnly:focus-visible:py-4 smOnly:focus-visible:text-base/[1.5]',
              { 'border-red': errors[name] },
            )}
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
};
