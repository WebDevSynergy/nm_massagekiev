import { ImageProps } from 'next/image';

import { TImage } from '@/types/instagram';

type OmittedProps = 'src' | 'alt' | 'blur' | 'blurDataURL';

export type InstagramCardProps = Omit<ImageProps, OmittedProps> & {
  image: TImage;
};
