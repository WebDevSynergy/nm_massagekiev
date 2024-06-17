'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ButtonLink,
  FormField,
  FormTextArea,
  FormPopup,
  FormListbox,
  CostHint,
  FormInputQuantity,
  FormTabButtons,
  FormFieldPattern,
  Spinner,
} from '@/components/ui';

import { TService } from '@/actions/sanity';
import { CertificateFormProps, TCertificateFormData } from './types';
import { TCertificate, certificateSchema } from './schema';

import { sendMsgTelegram } from '@/actions';
import { makeTgCertificateMsg, makeTgOrderMsg } from '@/utils';
import data from '@/data/certificate-form.json';

const MAX_DISCOUNT = 20;

export const CertificateForm: React.FC<CertificateFormProps> = ({
  options,
}) => {
  const {
    formName,
    currency,
    tabButtons,
    costHintButtons,
    submitBtn,
    select,
    textarea,
    inputs: [certificateCost, massageQuantity],
    commonInputs: [userNameInput, userPhoneInput],
  } = data.form as TCertificateFormData<typeof data.form>;

  const [isCertificateCost, setIsCertificateCost] = useState(false);
  const [promoCost, setPromoCost] = useState<number | undefined>();
  const [choosedService, setChoosedService] = useState<TService | undefined>();
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
  } = useForm<TCertificate>({
    resolver: zodResolver(certificateSchema),
    mode: 'onBlur',
    shouldUnregister: true,
  });

  useFormPersist(formName, {
    watch,
    setValue,
    exclude: [certificateCost.name, massageQuantity.name, select.name],
  });

  const typeMassage = watch(select.name);
  const quantity = watch(massageQuantity.name);

  useEffect(() => {
    const service = options?.find(({ title }) => title === typeMassage);

    if (service && quantity) {
      const potentialDiscount = parseInt(
        Math.round((service.price * Number(quantity)) / 1000).toFixed(),
      );

      const discount =
        potentialDiscount > MAX_DISCOUNT ? MAX_DISCOUNT : potentialDiscount;
      const promoCost =
        (service.price - service.price * (discount / 100)) * Number(quantity);

      setPromoCost(promoCost);
      setChoosedService(service);
    }
  }, [typeMassage, quantity, options]);

  useEffect(() => {
    if (!typeMassage) {
      setPromoCost(0), setChoosedService(undefined);
    }
  }, [typeMassage]);

  const getTotalCost = () => {
    if (!quantity) {
      return choosedService?.price;
    }
    if (choosedService && choosedService.price) {
      return choosedService.price * Number(quantity);
    }
    return 0;
  };

  const setCertificateCost = (cost: number) =>
    setValue(certificateCost.name, cost, {
      shouldValidate: true,
    });

  const handleQuantity = (type: 'add' | 'minus') => {
    const currentValue = Number(quantity) || 1;
    const count = type === 'add' ? currentValue + 1 : currentValue - 1;
    const value = count < 100 && count > 0 ? count : currentValue;
    setValue(massageQuantity.name, value);
  };

  const tabType = {
    service: () => setIsCertificateCost(false),
    price: () => setIsCertificateCost(true),
  };

  const onSubmit: SubmitHandler<TCertificate> = async data => {
    let msg = '';
    if (data.massageType) {
      msg = makeTgCertificateMsg({
        ...data,
        promoCost,
        totalCost: getTotalCost(),
      });
    }
    if (data.certificateCost) {
      msg = makeTgOrderMsg(data);
    }

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
        <FormTabButtons
          options={tabButtons}
          isCertificateCost={isCertificateCost}
          tabType={tabType}
        />

        {isCertificateCost ? (
          <>
            <FormField
              key={certificateCost.id}
              register={register}
              errors={errors}
              {...certificateCost}
              className="mb-4 md:mb-5 xl:mb-6"
            />
            <CostHint options={costHintButtons} onClick={setCertificateCost} />
          </>
        ) : (
          <div className="md:mb-4 md:flex md:flex-col-reverse md:gap-2 xl:gap-4">
            <FormInputQuantity
              key={massageQuantity.id}
              control={control}
              errors={errors}
              handleQuantity={handleQuantity}
              costs={{ currency, promoCost, totalCost: getTotalCost() }}
              {...massageQuantity}
            />

            {options && (
              <FormListbox
                key={select.id}
                className="smOnly:mb-4"
                control={control}
                errors={errors}
                variants={options}
                {...select}
              />
            )}
          </div>
        )}

        <div className="md:mb-2 md:grid md:grid-cols-2 md:gap-4">
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
