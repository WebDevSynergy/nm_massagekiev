import { TService } from '@/actions/sanity';
import React from 'react';
import {
  FieldErrors,
  Control,
  Path,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

export type FormListboxProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors;

    variants: TService[];
    placeholder: string;
    required: boolean;
    className?: string;
  } & Omit<
      React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >,
      'value' | 'type'
    >;
