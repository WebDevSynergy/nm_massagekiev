'use client';

import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';
import { ButtonLink } from '../ButtonLink';

import data from '@/data/common.json';

import { BlogCardProps } from './type';

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  alt,
  slug,
}) => {
  const path = slug?.current ? slug?.current : '';
  const { labelLink } = data.blogSection;
  return (
    <div className="rounded-[24px] bg-white p-6">
      <div
        className="mb-4 h-[400px] w-full max-w-[400px] overflow-hidden rounded-[24px] md:mb-6 md:size-[288px] md:max-w-full xl:h-[320px] 
      xl:w-[336px] 2xl:h-[344px] 2xl:w-[472px] sm480:h-[280px]"
      >
        <Image
          src={urlForImage(image)}
          alt={alt}
          width={483}
          height={344}
          className="size-full  object-cover"
        />
      </div>

      <div className="mb-4 h-[160px]">
        <h3
          className="mb-2 line-clamp-3 text-[16px]/[1.5] font-bold tracking-[-0.32px] text-brownDark 
        xl:text-[18px]/[1.33] xl:tracking-[-0.36px] 2xl:line-clamp-2 2xl:text-[20px]/[1.4] 2xl:tracking-[-0.4px]"
        >
          {title}
        </h3>

        <p className="line-clamp-4 text-[14px]/[1.43] text-brown 2xl:text-[18px]/[1.4]">
          {description}
        </p>
      </div>

      <ButtonLink
        href={`/blog/post/${path}`}
        styleType="unstyled"
        tag="link"
        className="text-[14px]/[1.71] font-semibold tracking-[-0.28px] text-greenDark md:text-[16px]/[1.5] md:tracking-[-0.32px]
         2xl:text-[18px]/[1.4] 2xl:tracking-[-0.36px]"
      >
        {labelLink}
      </ButtonLink>
    </div>
  );
};
