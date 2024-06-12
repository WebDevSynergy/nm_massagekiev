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
  FormListbox,
} from '@/components/ui';

// import { sendMsgTelegram } from '@/actions';
// import { makeTgContactMsg } from '@/utils';
import { CertificateFormProps, SwitchButtonType } from './types';
import { TCertificate, certificateSchema } from './schema';

import data from '@/data/certificate-form.json';

import { cn } from '@/utils';

export const CertificateForm: React.FC<CertificateFormProps> = ({
  options,
}) => {
  const {
    formName,
    switchButtons,
    priceTipsButtons,
    inputs: [certificatePrice, massageType],
    commonInputs,
    select,
    textarea,
    submitBtn,
  } = data.form;

  const [isCertificatePrice, setIsCertificatePrice] = useState(false);
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
  } = useForm<TCertificate>({
    resolver: zodResolver(certificateSchema),
    mode: 'onBlur',
    // defaultValues: async () => await fetch('/api'),
  });

  useFormPersist(formName, {
    watch,
    setValue,
  });

  const formType: Record<SwitchButtonType, () => void> = {
    ['service']: () => setIsCertificatePrice(false),
    ['price']: () => setIsCertificatePrice(true),
  };

  const onSubmit: SubmitHandler<TCertificate> = async data => {
    // const msg = makeTgContactMsg(data);
    console.log(data);
    try {
      // await sendMsgTelegram(msg);
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
        <ul className="mb-2 grid grid-cols-2 gap-4">
          {switchButtons.map(({ label, type }) => (
            <li key={label}>
              <button
                type="button"
                onClick={formType[type as keyof typeof formType]}
                className={cn(
                  'w-full rounded-2xl bg-white py-[14px] text-sm/[1.2] font-bold uppercase text-greenDark',
                  { '': isCertificatePrice },
                )}
                // disabled={type === 'price' ? }
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {isCertificatePrice ? (
          <>
            <FormField
              key={certificatePrice.id}
              register={register}
              errors={errors}
              {...certificatePrice}
              name={certificatePrice.name as keyof TCertificate}
            />

            <ul className="mb-6 grid grid-cols-3 gap-4">
              {priceTipsButtons.map(priceValue => (
                <li key={priceValue}>
                  <button
                    className="w-full rounded-[4px] bg-beigeDark p-1 text-base/[1.2] text-brown"
                    type="button"
                    onClick={() =>
                      setValue(
                        certificatePrice.name as keyof TCertificate,
                        priceValue,
                        {
                          shouldTouch: true,
                        },
                      )
                    }
                  >
                    {priceValue}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <FormField
              key={massageType.id}
              register={register}
              errors={errors}
              {...massageType}
              name={massageType.name as keyof TCertificate}
            />

            {options && (
              <FormListbox
                control={control}
                {...select}
                name={select.name as keyof TCertificate}
                errors={errors}
                variants={options}
                className="smOnly:mb-6"
              />
            )}
          </>
        )}

        <div className="md:mb-4 md:grid md:grid-cols-2 md:gap-4">
          {commonInputs.map(({ id, name, ...restProps }) => {
            if (restProps.type === 'tel') {
              return (
                <FormPhoneField
                  key={id}
                  name={name as keyof TCertificate}
                  control={control}
                  errors={errors}
                  {...restProps}
                />
              );
            }
            return (
              <FormField
                key={id}
                name={name as keyof TCertificate}
                register={register}
                errors={errors}
                {...restProps}
              />
            );
          })}
        </div>

        <FormTextArea
          {...textarea}
          name={textarea.name as keyof TCertificate}
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
