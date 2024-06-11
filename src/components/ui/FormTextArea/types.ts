import React from 'react';
import { FieldErrors, Control, Path } from 'react-hook-form';

import { TContact } from '@/components/base/ContactUsForm/schema';
import { TReview } from '@/components/base/ReviewForm/schema';

export type FormFieldProps = {
  label: string;
  name: Path<TContact | TReview>;
  control: Control<TContact | TReview>;
  errors: FieldErrors;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>;
