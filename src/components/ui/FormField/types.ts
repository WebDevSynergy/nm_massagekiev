import React from 'react';
import { FieldErrors, UseFormRegister, Path } from 'react-hook-form';

import { TContact } from '@/components/base/ContactUsForm/schema';
import { TReview } from '@/components/base/ReviewForm/schema';

export type FormFieldProps = {
  label: string;
  name: Path<TContact | TReview>;
  register: UseFormRegister<TContact | TReview>;
  errors: FieldErrors;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;
