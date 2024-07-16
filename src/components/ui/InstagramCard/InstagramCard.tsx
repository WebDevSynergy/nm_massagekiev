'use client';

import { SanityImage } from '@/components/ui';

import { cn } from '@/utils';

import { InstagramCardProps } from './types';

import styles from './InstagramCard.module.css';

export const InstagramCard: React.FC<InstagramCardProps> = ({ image }) => {
  return (
    <div
      className={cn(
        'h-[448px] w-full max-w-[448px] overflow-hidden rounded-[24px] md:size-[218px] xl:size-[220px]  2xl:size-[213px]',
        styles.img,
      )}
    >
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
