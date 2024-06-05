import { ImageProps } from 'next/image';

type OmittedProps = 'src' | 'alt' | 'blur' | 'blurDataURL';

export type InstagramCardProps = Omit<ImageProps, OmittedProps> & {
  image: TImage;
};
