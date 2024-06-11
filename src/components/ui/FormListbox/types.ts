import { FieldErrors, FieldValues, Control } from 'react-hook-form';

export type FormListboxProps = {
  label: string;
  placeholder: string;
  variants: string[];
  name: string;
  control: Control<FieldValues>;
  errors: FieldErrors;
  required: boolean;
  className?: string;
};
