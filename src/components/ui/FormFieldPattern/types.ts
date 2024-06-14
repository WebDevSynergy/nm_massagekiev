import React from 'react';
import {
  FieldErrors,
  Control,
  Path,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

import { TFieldInput } from '@/types';

export type FormFieldPatternProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors;
    type: TFieldInput;
    noValidate?:boolean
  } & Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'value' | 'type'
    >;
