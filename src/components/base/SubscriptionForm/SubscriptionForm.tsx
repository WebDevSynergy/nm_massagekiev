'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';

import { ButtonLink, Spinner } from '@/components/ui';

import data from '@/data/footer.json';

import Star from '~/icons/star.svg';

import { FormData } from './types';
import { schema } from './schema';

export const SubscriptionForm: React.FC = () => {
  const { placeholder, btn } = data.subscription.form;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useFormPersist('subscriptionForm', { watch, setValue });

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      console.log(data);
      reset();
    } catch {
      console.log(errors);
    }
  };

  return (
    <form
      className="relative flex items-center md:grow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="h-[44px] w-[100%] rounded-[24px] bg-beige pl-6 pr-[135px] text-[14px] leading-[1.4] tracking-[-0.28px] text-brownDark 
                   outline-none xl:pr-[145px] 2xl:pr-[155px]"
        placeholder={placeholder}
        {...register('email')}
      />

      {errors.email && (
        <p className="absolute -bottom-4 left-4 flex w-full text-[10px]">
          <Star width={8} height={8} />

          {errors.email?.message}
        </p>
      )}

      <ButtonLink
        className="absolute right-0 w-[130px] text-[14px] xl:w-[141px] 2xl:w-[153px]"
        tag="button"
        styleType="secondary"
        type="submit"
        disabled={isSubmitting ? true : false}
      >
        {isSubmitting ? <Spinner /> : btn}
      </ButtonLink>
    </form>
  );
};
