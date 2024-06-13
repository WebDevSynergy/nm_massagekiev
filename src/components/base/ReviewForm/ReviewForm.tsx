'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ButtonLink,
  FormField,
  FormPhoneField,
  FormTextArea,
  FormPopup,
} from '@/components/ui';

import { createReviewSanity, sendMsgTelegram } from '@/actions';
import { makeTgReviewMsg } from '@/utils';

import data from '@/data/review-form.json';

import { TReview, reviewSchema } from './schema';

export const ReviewForm: React.FC = () => {
  const { formName, inputs, textarea, submitBtn } = data.form;

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = () => setIsOpenPopup(true);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<TReview>({
    resolver: zodResolver(reviewSchema),
    mode: 'onBlur',
  });

  useFormPersist(formName, { watch, setValue });

  const onSubmit: SubmitHandler<TReview> = async data => {
    const newReview = {
      _type: 'review',
      author: data.userMessage,
      review: data.userMessage,
      contact: data.phoneNumber,
    };
    const msg = makeTgReviewMsg(data);

    try {
      Promise.all([
        await sendMsgTelegram(msg),
        await createReviewSanity(newReview),
      ]);
      setIsSuccess(true);
      reset();
    } catch {
      setIsSuccess(false);
    }
    openPopup();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id={formName}>
        {inputs.map(({ id, name, ...restProps }) => {
          if (restProps.type === 'tel') {
            return (
              <FormPhoneField<TReview>
                key={id}
                name={name as keyof TReview}
                control={control}
                errors={errors}
                defaultValue=""
                {...restProps}
              />
            );
          }
          return (
            <FormField<TReview>
              key={id}
              name={name as keyof TReview}
              register={register}
              errors={errors}
              {...restProps}
            />
          );
        })}

        <FormTextArea<TReview>
          {...textarea}
          name={textarea.name as keyof TReview}
          control={control}
          errors={errors}
          className="mb-6 xl:mb-8 2xl:mb-10"
        />

        <ButtonLink
          type="submit"
          styleType="primary"
          className="mx-auto flex w-full md:ml-0 md:max-w-[292px] xl:inline-flex xl:max-w-[202px] 2xl:max-w-[252px]"
        >
          {submitBtn.label}
        </ButtonLink>
      </form>

      {isOpenPopup && (
        <FormPopup
          isOpen={isOpenPopup}
          onClose={closePopup}
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};
