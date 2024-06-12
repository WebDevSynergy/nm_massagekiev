import Image from 'next/image';

import { SanityImageProps } from './types';

export const SanityImage: React.FC<SanityImageProps> = ({
  image,
  ...imageProps
}) => {
  return (
    <Image
      {...imageProps}
      src={image.src}
      alt={image.alt}
      placeholder="blur"
      blurDataURL={image.lqip}
    />
  );
};
