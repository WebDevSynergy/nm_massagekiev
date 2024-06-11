import React from 'react';

import { FieldErrors, FieldValues, Control } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  name: string;
  control: Control<FieldValues>;
  errors: FieldErrors;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
