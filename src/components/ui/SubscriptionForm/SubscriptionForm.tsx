'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormData } from './types';
import { schema } from './schema';
import { ButtonLink } from '../ButtonLink';

export const SubscriptionForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    // mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      console.log(data);
      reset();
    } catch {
      console.log(errors);
    }
  };

  console.log(errors);
  return (
    <form
      className="relative flex items-center md:grow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="h-[44px] w-[100%] rounded-[24px] bg-beige pl-6 pr-[135px] outline-none xl:pr-[145px]"
        {...register('email')}
      />
      <p className="absolute -bottom-4">{errors.email?.message}</p>

      {isSubmitting ? (
        <p>Відправка...</p>
      ) : (
        <ButtonLink
          className="absolute right-0 w-[130px] text-[14px] xl:w-[141px]"
          tag="button"
          styleType="secondary"
          type="submit"
        >
          Підписатися
        </ButtonLink>
      )}
    </form>
  );
};
