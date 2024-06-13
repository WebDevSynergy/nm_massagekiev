import React from 'react';
import {
  FieldErrors,
  Control,
  Path,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

export type FormFieldProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors;
  } & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>;
