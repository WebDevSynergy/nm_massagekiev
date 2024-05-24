import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';

import { SanityBlockImageProps } from './types';

export const SanityBlockImage: React.FC<SanityBlockImageProps> = ({
  value,
}) => {
  const alt = value?.caption?.toString() || ' ';

  return (
    <div className="m-auto h-[682px] w-[1020px]">
      <Image
        src={urlForImage(value)}
        alt={alt}
        priority
        width={1020}
        height={682}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};
