import { FormError } from '@/components/ui';

import { cn } from '@/utils/cn';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  name,
  register,
  errors,
  label,
  required,
  className,
  type = 'text',
  ...restInputProps
}) => (
  <label
    className={cn(
      'text-primaryText/70 relative flex flex-col text-sm/[1.3] md:text-base/[1.6]',
      className,
    )}
  >
    <span className="block md:mb-1 smOnly:mb-2">
      {label} {required && <span className="text-black">*</span>}
    </span>

    <input
      className={cn(
        'bg-lightBg text-primaryText placeholder:text-greyText focus-visible:border-accent relative mb-2 w-full rounded-[10px] border-[1px] border-transparent px-4 py-[17.5px] text-left text-sm/[1.5] font-light transition placeholder:text-sm/[1.5] focus:outline-none smOnly:focus-visible:py-4 smOnly:focus-visible:text-base/[1.5]',
        { 'border-red': errors[name] },
      )}
      type={type}
      {...restInputProps}
      // placeholder={placeholder}
      aria-invalid={errors[name] ? 'true' : 'false'}
      {...register(name)}
    />

    <FormError name={name} errors={errors} />
  </label>
);
