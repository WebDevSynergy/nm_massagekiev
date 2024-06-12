import React from 'react';
import {
  FieldErrors,
  Control,
  Path,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

export type FormPhoneFieldProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors;
  } & Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'value' | 'type'
    >;
