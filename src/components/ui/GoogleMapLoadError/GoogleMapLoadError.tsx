import Image from 'next/image';

import { ButtonLink } from '@/components/ui';

import { GoogleMapLoadErrorProps } from './types';

import googleMap from '~/images/google/map@2x.webp';

export const GoogleMapLoadError: React.FC<GoogleMapLoadErrorProps> = ({
  errorLoadMap: { msg, locationLink, mapImageAlt, linkLabel },
  containerStyle,
}) => {
  return (
    <div style={containerStyle} className="relative overflow-hidden rounded-lg">
      <Image
        className="object-cover grayscale"
        src={googleMap}
        alt={mapImageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1920px) 688px, 1048px"
      />

      <div className="absolute left-1/2 top-1/2 w-full max-w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white p-6 md:max-w-[416px] md:px-10 xl:p-8 2xl:p-10">
        <p className="mb-2 whitespace-pre text-center text-xs/[1.4] tracking-[-0.02em] text-blackLight md:text-base/[1.4] xl:mb-4 2xl:text-lg/[1.4]">
          {msg}
        </p>

        <ButtonLink
          styleType="secondary"
          className="xl:mx-auto xl:max-w-[282px] 2xl:max-w-64"
          tag="a"
          href={locationLink}
        >
          {linkLabel}
        </ButtonLink>
      </div>
    </div>
  );
};
