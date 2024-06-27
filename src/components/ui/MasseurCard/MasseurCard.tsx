'use client';

import {
  CertificateCard,
  ModalCard,
  SanityImage,
  Slider,
} from '@/components/ui';

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
    <div className="md:w-[336px] xl:w-[384px] 2xl:w-[520px]">
      <div className="relative mb-4 md:mb-6">
        <div className={styles.photo}>
          <SanityImage
            image={image}
            width={504}
            height={504}
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
          buttonStyles="text-green font-bold underline text-[16px]/[1.2] font-semibold tracking-[-0.32px] hover:text-greenDark focus:text-greenDark cursor-pointer transition-all"
        >
          <div className="flex flex-col items-center overflow-hidden rounded-[4px] pt-6 md:rounded-[8px] xl:rounded-[24px]">
            <Slider
              slidesData={certificateArray}
              section="certificates"
              slideComponent={CertificateCard}
              wrapClassName=" mb-4 h-[345px] w-[400px] 
                              md:h-[486px] md:w-[608px] 
                              xl:h-[586px] xl:w-[752px] 
                              sm480:size-full"
            />
          </div>
        </ModalCard>
      )}
    </div>
  );
};
