import { FieldValues } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { cn } from '@/utils/cn';

import { FormFieldProps } from './types';

import StarIcon from '~/icons/star.svg';

export const FormField = <TFormValues extends FieldValues>({
  name,
  register,
  errors,
  label,
  required,
  className,
  type = 'text',
  ...props
}: FormFieldProps<TFormValues>) => (
  <label className={cn('label', className)}>
    <span className="relative mb-1 inline max-w-fit">
      {label}

      {required && (
        <StarIcon className="absolute -right-3 top-0 size-2 text-red" />
      )}
    </span>

    <input
      className="input"
      type={type}
      aria-invalid={errors[name] ? 'true' : 'false'}
      {...props}
      {...register(name)}
    />

    <FormError name={name} errors={errors} />
  </label>
);
