import React from 'react';

import { TService } from '@/actions/sanity';

import {
  FieldErrors,
  Control,
  Path,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

import { TFieldInput } from '@/types';

export type FormInputQuantityProps<TFormValues extends FieldValues> =
  UseControllerProps<TFormValues> & {
    label: string;
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors;
    costs: TCosts;
    choosedService: TService | undefined;
    type?: TFieldInput;
    handleQuantity: (type: 'add' | 'minus') => void;
  } & Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'value' | 'type'
    >;

type TCosts = {
  currency: string;
  promoCost: number | undefined;
  totalCost: number | undefined;
};
