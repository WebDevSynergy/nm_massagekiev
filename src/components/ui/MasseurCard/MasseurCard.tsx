'use client';

import {
  ArrowSlider,
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
          <div className="flex flex-col items-center xl:relative xl:px-16 ">
            <Slider
              slidesData={certificateArray}
              section="certificates"
              slideComponent={CertificateCard}
              wrapClassName=" mb-4 h-[305px] w-[400px] overflow-hidden rounded-[4px] 
                              md:h-[429px] md:w-[608px] md:rounded-[8px] 
                              xl:h-[530px] xl:w-[752px] xl:rounded-[24px]
                              sm480:size-full shadow-blackShadow"
            />

            <ArrowSlider
              section="certificates"
              wrapClassName="w-full xl:absolute xl:z-[999] xl:w-full xl:top-1/2 xl:-translate-y-1/2 2xl:z-[99999] 2xl:w-full 2xl:top-1/2 2xl:-translate-y-1/2"
            />
          </div>
        </ModalCard>
      )}
    </div>
  );
};
