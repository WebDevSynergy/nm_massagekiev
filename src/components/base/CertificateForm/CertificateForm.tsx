'use client';

import { useState, useEffect } from 'react';
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
  FormPatternField,
  CostHint,
} from '@/components/ui';

// import { sendMsgTelegram } from '@/actions';
// import { makeTgContactMsg } from '@/utils';
import { CertificateFormProps, TFormData } from './types';
import { TCertificate, certificateSchema } from './schema';

import data from '@/data/certificate-form.json';

import { cn } from '@/utils';
import { TService } from '@/actions/sanity';

const MAX_DISCOUNT = 20;

export const CertificateForm: React.FC<CertificateFormProps> = ({
  options,
}) => {
  const {
    formName,
    currency,
    costHintButtons,
    commonInputs,
    textarea,
    submitBtn,
  } = data.form;

  const {
    inputs: [certificateCost, massageQuantity],
    select,
    tabButtons,
  } = data.form as TFormData;

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
    formState: { errors },
  } = useForm<TCertificate>({
    resolver: zodResolver(certificateSchema),
    mode: 'onBlur',
    shouldUnregister: true,
  });

  const typeMassage = watch(select.name);
  const quantity = watch(massageQuantity.name as keyof TCertificate);

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

  useFormPersist(formName, {
    watch,
    setValue,
  });

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

  const formType = {
    ['service']: () => setIsCertificateCost(false),
    ['price']: () => setIsCertificateCost(true),
  };

  const onSubmit: SubmitHandler<TCertificate> = async data => {
    console.log('SUBMITTED==============>>>>>>>>>>>>>>>>>', data);
    try {
      if (data.massageType) {
        // const msg = makeTgCertificateMassageMsg(data);
      } else {
        // const msg = makeTgCertificateCostMsg(data);
      }
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
        <ul className="mb-2 grid grid-cols-2 gap-4 xl:mb-4 xl:gap-6">
          {tabButtons.map(({ label, type }) => (
            <li key={label}>
              <button
                type="button"
                onClick={formType[type]}
                className={cn(
                  'w-full rounded-2xl bg-white py-[14px] text-sm/[1.2] font-bold uppercase text-grey md:leading-5',
                  {
                    'text-greenDark':
                      (isCertificateCost && type === 'price') ||
                      (!isCertificateCost && type !== 'price'),
                  },
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

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
            <div className="rounded-2xl bg-beige p-4 md:flex md:items-center md:justify-between md:px-6 md:py-[6px] smOnly:mb-2">
              <FormPatternField
                key={massageQuantity.id}
                control={control}
                errors={errors}
                handleQuantity={handleQuantity}
                {...massageQuantity}
              />

              <ul className="flex items-center justify-between text-base/[1.2] font-semibold text-brownDark md:gap-6">
                <li>
                  <span className="text-red line-through">
                    {`${getTotalCost() ?? 0} ${currency}`}
                  </span>
                </li>
                <li>
                  <span>{`${promoCost ?? 0} ${currency}`}</span>
                </li>
              </ul>
            </div>

            {options && (
              <FormListbox
                key={select.id}
                control={control}
                {...select}
                errors={errors}
                variants={options}
                className="smOnly:mb-4"
              />
            )}
          </div>
        )}

        <div className="md:mb-2 md:grid md:grid-cols-2 md:gap-4">
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
