import { ErrorMessage } from '@hookform/error-message';

import { FormErrorProps, TErrorMsg } from './types';

import data from '@/data/common.json';

import ErrorIcon from '~/icons/error.svg';

export const FormError: React.FC<FormErrorProps> = ({ name, errors }) => {
  const { ariaLabel } = data.form.error;

  return (
    <span className="flex h-4 w-full items-center justify-start gap-1 text-red">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }: TErrorMsg) => (
          <>
            <ErrorIcon
              className="inline-block size-4 shrink-0"
              aria-label={ariaLabel}
            />

            <span role="alert" className="!self-center text-xs/4 font-medium">
              {message}
            </span>
          </>
        )}
      />
    </span>
  );
};
