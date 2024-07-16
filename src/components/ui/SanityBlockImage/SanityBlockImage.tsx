import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@/utils';

import { SanityBlockImageProps } from './types';

import styles from './SanityBlockImage.module.css';

export const SanityBlockImage: React.FC<SanityBlockImageProps> = ({
  value,
}) => {
  const alt = value?.caption?.toString() || ' ';

  return (
    <div
      className={cn(
        'mx-auto my-2 size-full overflow-hidden rounded-[24px] md:my-4 md:size-[688px] md:rounded-[32px] xl:my-6 xl:h-[682px] xl:w-[894px] xl:rounded-[40px] 2xl:my-8 2xl:w-[1086px]',
        styles.img,
      )}
    >
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
