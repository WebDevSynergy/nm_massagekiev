import React from 'react';
import {
  FieldErrors,
  UseFormRegister,
  Path,
  FieldValues,
} from 'react-hook-form';

export type FormFieldProps<TFormValues extends FieldValues> = {
  label: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;
