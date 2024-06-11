'use client';

import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ButtonLink,
  FormField,
  FormPhoneField,
  FormTextArea,
  FormPopup,
} from '@/components/ui';

// import { createReviewSanity, sendMsgTelegram } from '@/actions';

import content from '@/data/contactUs-form.json';

import { schema } from './schema';

export const ContactUsForm: React.FC = () => {
  const { formName, inputs, textarea, submitBtn } = content.form;

  const [isOpenPopup, setIsOpenPopup] = useState(true);
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
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  useFormPersist(formName, {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    // const newReview = {
    //   _type: 'review',
    //   userName: data.userName,
    //   phoneNumber: data.phoneNumber,
    //   userMessage: data.userMessage,
    // };

    // const msg = makeTgReviewMsg({ userName, phoneNumber, userMessage });

    try {
      //   Promise.all([
      //     await sendMsgTelegram(msg),
      //     await createReviewSanity(newReview),
      //   ]);
      console.log('data', data);
      setIsSuccess(true);
      reset();
    } catch {
      setIsSuccess(false);
    }

    openPopup();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:mb-4 md:grid md:grid-cols-2 md:gap-4">
          {inputs.map(input => {
            if (input.type === 'tel') {
              return (
                <FormPhoneField
                  key={input.id}
                  {...input}
                  control={control}
                  errors={errors}
                />
              );
            }
            return (
              <FormField
                key={input.id}
                {...input}
                register={register}
                errors={errors}
              />
            );
          })}
        </div>

        <FormTextArea
          {...textarea}
          control={control}
          errors={errors}
          className="mb-6 xl:mb-8 2xl:mb-10"
        />

        <ButtonLink
          type="submit"
          styleType="primary"
          className="mx-auto flex w-full max-w-[336px] xl:inline-flex xl:max-w-[282px] 2xl:max-w-[252px]"
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
