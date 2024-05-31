import { SanityImage } from '@/components/ui';

import { InstagramCardProps } from './types';

export const InstagramCard: React.FC<InstagramCardProps> = ({ image }) => {
  return (
    <div className="h-[448px] w-full max-w-[448px] overflow-hidden rounded-[24px] md:size-[218px] xl:size-[220px]  2xl:size-[213px]">
      <SanityImage
        image={image}
        width={448}
        height={448}
        loading="lazy"
        className="size-full object-cover"
      />
    </div>
  );
};
