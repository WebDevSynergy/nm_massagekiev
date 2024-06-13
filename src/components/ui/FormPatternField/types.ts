import React from 'react';
import {
  FieldErrors,
  Control,
  Path,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

export type FormPatternFieldProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors;
    type?: 'text' | 'tel' | 'password' | undefined;
    handleQuantity: (type: 'add' | 'minus') => void;
  } & Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'value' | 'type'
    >;
