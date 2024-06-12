import { ImageProps } from 'next/image';

type OmittedProps = 'src' | 'alt' | 'blur' | 'blurDataURL';

export type SanityImageProps = Omit<ImageProps, OmittedProps> & {
  image: TImage;
};
