import { ErrorMessage } from '@hookform/error-message';

import { FormErrorProps, TErrorMsg } from './types';

import data from '@/data/common.json';

import StarIcon from '~/icons/star.svg';

export const FormError: React.FC<FormErrorProps> = ({ name, errors }) => {
  const { ariaLabel } = data.form.error;

  return (
    <span className="text-inputRed flex h-[10px] w-full items-center justify-start">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }: TErrorMsg) => (
          <>
            <StarIcon
              className="inline-block size-2 shrink-0"
              aria-label={ariaLabel}
            />

            <span role="alert" className="text-[10px]/[1]">
              {message}
            </span>
          </>
        )}
      />
    </span>
  );
};
