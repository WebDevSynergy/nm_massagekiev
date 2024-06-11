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

import { sendMsgTelegram } from '@/actions';
import { makeTgContactMsg } from '@/utils';

import content from '@/data/contactUs-form.json';

import { TContact, contactSchema } from './schema';

export const ContactUsForm: React.FC = () => {
  const { formName, inputs, textarea, submitBtn } = content.form;

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
          {inputs.map(({ id, name, ...restProps }) => {
            if (restProps.type === 'tel') {
              return (
                <FormPhoneField
                  key={id}
                  name={name as keyof TContact}
                  control={control}
                  errors={errors}
                  {...restProps}
                />
              );
            }
            return (
              <FormField
                key={id}
                name={name as keyof TContact}
                register={register}
                errors={errors}
                {...restProps}
              />
            );
          })}
        </div>

        <FormTextArea
          {...textarea}
          name={textarea.name as keyof TContact}
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
