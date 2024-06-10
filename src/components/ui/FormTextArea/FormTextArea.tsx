'use client';

import { FormError } from '@/components/ui';

import { FormFieldProps } from './types';

import { cn } from '@/utils/cn';

export const FormTextArea: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  name,
  register,
  errors,
  required = false,
  className = '',
}) => (
  <label
    className={cn(
      'text-primaryText/70 relative flex flex-col text-sm/[1.3] md:text-base/[1.6]',
      className,
    )}
  >
    <span className="block text-green/70 md:mb-1 smOnly:mb-2">
      {label} {required && <span className="text-green">*</span>}
    </span>

    <textarea
      className={cn(
        'bg-lightBg text-primaryText placeholder:text-greyText focus-visible:border-accent mb-2 h-[150px] w-full resize-none rounded-[10px] border-[1px] border-transparent p-4 text-sm/[1.5] font-light transition placeholder:text-sm/[1.5] focus:outline-none smOnly:focus-visible:text-base/[1.5]',
        { 'border-red': errors[name] },
      )}
      rows={5}
      placeholder={placeholder}
      aria-invalid={errors[name] ? 'true' : 'false'}
      {...register(name)}
    />

    <FormError errors={errors} name={name} />
  </label>
);
