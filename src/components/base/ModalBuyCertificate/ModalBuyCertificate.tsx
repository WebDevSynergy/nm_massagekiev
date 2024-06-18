import Image from 'next/image';

import { BuyMassageForm } from '@/components/base';
import { ModalCard, SectionTitle } from '@/components/ui';

import { ModalBuyCertificateProps } from './types';

import data from '@/data/buyCertificate-form.json';
import { getLabelWithUnits } from '@/utils';

import BuyCertificateImage from '~/images/buyCertificate/buyCertificate@2x.webp';

export const ModalBuyCertificate: React.FC<ModalBuyCertificateProps> = ({
  choosedMassage,
}) => {
  const { title, image, buttonLabel, currency, units, serviceLabel } = data;
  const { massageQuantity, totalCost, promoCost, massageType } = choosedMassage;

  return (
    <ModalCard
      buttonLabel={buttonLabel}
      buttonStyle="primary"
      buttonStyles="mr-0 ml-auto"
    >
      <div className="xl:grid xl:w-[880px] xl:grid-cols-2 xl:gap-6">
        <div className="relative hidden overflow-hidden rounded-5xl xl:block">
          <Image
            className="object-cover"
            src={BuyCertificateImage}
            alt={image.alt}
            fill
          />
        </div>

        <div>
          <SectionTitle className="mb-4">{title}</SectionTitle>

          <p className="label mb-1">{serviceLabel}</p>

          <p className="mb-1 text-sm/[1.2] font-bold uppercase text-brownDark">
            {massageType}
          </p>

          <div className="mb-4 flex items-center justify-between rounded-5xl bg-beige px-4 py-[13.5px] text-sm/[1.2] tracking-[-.02em] text-brownDark">
            <p className="text-brown">
              {getLabelWithUnits(massageQuantity, units)}
            </p>

            <p className="font-semibold">
              <span className="text-red line-through">
                {totalCost + ' ' + currency}
              </span>

              {massageQuantity !== 1 && promoCost && (
                <span className="ml-4 mr-2 xl:ml-6">
                  {promoCost + ' ' + currency}
                </span>
              )}
            </p>
          </div>

          <BuyMassageForm choosedMassage={choosedMassage} />
        </div>
      </div>
    </ModalCard>
  );
};
