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

import { sendMsgTelegram } from '@/actions';
import { makeTgContactMsg } from '@/utils';
import data from '@/data/contact-us.json';

import { TContact, contactSchema } from './schema';
import { TContactFormData } from './types';

export const ContactUsForm: React.FC = () => {
  const {
    formName,
    inputs: [userNameInput, userPhoneInput],
    textarea,
    submitBtn,
  } = data.form as TContactFormData<typeof data.form>;

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
  } = useForm<TContact>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  useFormPersist(formName, {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<TContact> = async data => {
    const msg = makeTgContactMsg(data);
    try {
      await sendMsgTelegram(msg);
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
        <div className="md:mb-4 md:grid md:grid-cols-2 md:gap-4">
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
        </div>

        <FormTextArea
          key={textarea.id}
          className="mb-6 xl:mb-8 2xl:mb-10"
          control={control}
          errors={errors}
          {...textarea}
        />

        <ButtonLink
          type="submit"
          styleType="primary"
          className="mx-auto flex w-full max-w-[336px] xl:inline-flex xl:max-w-[282px] 2xl:max-w-[252px]"
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
