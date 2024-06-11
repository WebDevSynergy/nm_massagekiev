import { FieldErrors } from 'react-hook-form';

export type FormErrorProps = {
  name: string;
  errors: FieldErrors;
};

export type TErrorMsg = {
  message: string;
};
