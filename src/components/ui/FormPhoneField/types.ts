import React from 'react';

import { FieldErrors, FieldValues, Control } from 'react-hook-form';

export type FormPhoneFieldProps = {
  label: string;
  name: string;
  control: Control<FieldValues>;
  errors: FieldErrors;
} & React.InputHTMLAttributes<HTMLInputElement>;
