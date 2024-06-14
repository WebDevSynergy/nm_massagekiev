'use client';

import { CertificateCard, ModalCard, SanityImage } from '@/components/ui';

import { MasseursCardProps } from './types';

import data from '@/data/common.json';

import styles from './MasseurCard.module.css';

export const MasseurCard: React.FC<MasseursCardProps> = ({
  name,
  resume,
  certificateArray,
  image,
}) => {
  const { buttonLabel } = data.masseursSection;

  return (
    <div className="md:w-[332px] xl:w-[384px] 2xl:w-[520px]">
      <div className="relative mb-4 md:mb-6">
        <div className={styles.photo}>
          <SanityImage
            image={image}
            width={520}
            height={520}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
      </div>

      <p className="mb-2 text-[24px]/[1.2] font-bold uppercase tracking-[-0.48px] text-brownDark xl:mb-4">
        {name}
      </p>

      <p className="mb-4 text-[16px]/[1.4] tracking-[-0.32px] text-brown md:h-[330px] xl:mb-6 xl:h-[274px] xl:leading-[1.2] 2xl:h-[190px]">
        {resume}
      </p>

      {certificateArray && (
        <ModalCard
          buttonLabel={buttonLabel}
          buttonStyle="unstyled"
          buttonStyles="text-green font-bold underline text-[16px]/[1.2] font-semibold tracking-[-0.32px]"
        >
          <ul className="flex gap-8">
            {/* {certificateArray.map(certificate => ( */}
            {/* slice!!! */}
            {certificateArray.slice(0, 1).map(certificate => (
              <li key={certificate.id}>
                <CertificateCard certificate={certificate} />
              </li>
            ))}
          </ul>
        </ModalCard>
      )}
    </div>
  );
};
