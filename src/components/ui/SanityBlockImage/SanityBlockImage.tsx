import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';

import { SanityBlockImageProps } from './types';

export const SanityBlockImage: React.FC<SanityBlockImageProps> = ({
  value,
}) => {
  const alt = value?.caption?.toString() || ' ';

  return (
    <div className="mx-auto h-[328px] w-full overflow-hidden rounded-[40px] md:my-2 md:size-[688px] xl:my-4 xl:h-[682px] xl:w-[894px] 2xl:my-6 2xl:w-[1086px]">
      <Image
        className="block size-full object-cover object-center"
        src={urlForImage(value)}
        alt={alt}
        priority
        width={1086}
        height={682}
      />
    </div>
  );
};
