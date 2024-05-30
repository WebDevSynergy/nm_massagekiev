import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';

import { InstagramCardProps } from './types';

export const InstagramCard: React.FC<InstagramCardProps> = ({ image }) => {
  const alt = image?.caption?.toString() || 'text';

  return (
    <div className="h-[448px] w-full max-w-[448px] overflow-hidden rounded-[24px] md:size-[218px] xl:size-[220px]  2xl:size-[213px]">
      <Image
        src={urlForImage(image)}
        width={448}
        height={448}
        loading="lazy"
        alt={alt}
        className="size-full object-cover"
      />
    </div>
  );
};
