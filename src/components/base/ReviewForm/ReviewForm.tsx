'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ButtonLink,
  FormField,
  FormTextArea,
  FormPopup,
  FormFieldPattern,
  Spinner,
} from '@/components/ui';

import { createReviewSanity, sendMsgTelegram } from '@/actions';
import { makeTgReviewMsg } from '@/utils';

import { TReview, reviewSchema } from './schema';
import { TReviewFormData } from './types';

import data from '@/data/review-form.json';

export const ReviewForm: React.FC = () => {
  const {
    formName,
    inputs: [userNameInput, userPhoneInput],
    textarea,
    submitBtn,
  } = data.form as TReviewFormData<typeof data.form>;

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
    formState: { errors, isSubmitting },
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
    } finally {
      openPopup();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id={formName}>
        <FormField
          key={userNameInput.id}
          register={register}
          errors={errors}
          {...userNameInput}
        />

        <FormFieldPattern
          key={userPhoneInput.id}
          control={control}
          errors={errors}
          {...userPhoneInput}
        />

        <FormTextArea
          {...textarea}
          control={control}
          errors={errors}
          className="mb-6 xl:mb-8 2xl:mb-10"
        />

        <ButtonLink
          type="submit"
          styleType="primary"
          className="mx-auto flex w-full md:ml-0 md:max-w-[292px] xl:inline-flex xl:max-w-[202px] 2xl:max-w-[252px]"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : submitBtn.label}
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
