import Image from 'next/image';

import { ButtonLink, Logo } from '@/components/ui';

import { GoogleMapInfoCardProps } from './types';

import data from '@/data/common.json';
import CloseIcon from '~/icons/close.svg';
import googleImage from '~/images/google/info-window@2x.webp';

export const GoogleMapInfoCard: React.FC<GoogleMapInfoCardProps> = ({
  onClick,
}) => {
  const {
    schedule,
    googleMaps: { title },
  } = data;
  const { ariaLabel } = data.closeButton;

  return (
    <div className="relative flex flex-col gap-4 px-4 py-6 font-open-sans sm:p-6 md:flex-row xl:gap-6 xl:p-8 2xl:p-10">
      <Image
        className="h-[93px] w-[186px] rounded-lg object-cover md:w-[126px]"
        src={googleImage}
        alt={title}
        width="186"
        height="93"
        loading="lazy"
        sizes="(max-width: 767px) 186px, (min-width: 768px) 126px"
      />

      <div className="text-center font-normal tracking-[-0.02em] md:flex md:flex-col md:items-center md:justify-center">
        <Logo variant="green" />

        <p className=" text-xs/[1.4] text-blackLight md:text-base/[1.4] 2xl:text-lg/[1.4]">
          {schedule.days}
        </p>

        <p className=" text-[10px]/[1.4] text-brownDark md:text-sm/[1.4] 2xl:text-base/[1.4]">
          {schedule.hours}
        </p>
      </div>

      <ButtonLink
        styleType="unstyled"
        className="absolute right-[2px] top-1 size-5 text-grey transition-colors hover:text-blackLight focus:text-blackLight sm:right-1 sm:size-6 md:right-2 md:top-2 2xl:right-4 2xl:top-4"
        onClick={onClick}
        type="button"
        aria-label={ariaLabel}
      >
        <CloseIcon className="size-full" />
      </ButtonLink>
    </div>
  );
};
