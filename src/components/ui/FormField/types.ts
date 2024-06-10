import React from 'react';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
