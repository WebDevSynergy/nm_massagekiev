import Link from 'next/link';

import { SanityImage } from '@/components/ui';

import { cn } from '@/utils';

import { GalleryProps } from './types';

import data from '@/data/blog.json';

import styles from './Gallery.module.css';

export const Gallery: React.FC<GalleryProps> = ({ posts }) => {
  const { galleryTitle, labelLink } = data;

  return (
    <>
      <h2 className="visually-hidden">{galleryTitle}</h2>

      {posts && posts?.length > 0 && (
        <ul className="mb-4 md:mb-6 md:flex md:flex-wrap md:gap-4 xl:mb-8 xl:gap-6 2xl:mb-10 2xl:gap-10">
          {posts &&
            posts.map(({ id, title, description, image, slug }) => {
              return (
                <li
                  key={id}
                  className={cn(
                    'mb-4 rounded-[24px] bg-white  transition-all last:mb-0 md:mb-0 md:w-[336px] md:rounded-[32px] xl:w-[384px] xl:rounded-[40px] 2xl:w-[520px]',
                    styles.card,
                  )}
                >
                  <Link href={`post/${slug.current}`} className="block p-6">
                    <div
                      className="mb-4 h-[400px] overflow-hidden rounded-[24px] md:mb-6 md:h-[284px] md:w-[288px]
                    xl:h-[320px] xl:w-[336px] 2xl:h-[344px] 2xl:w-[472px]
                  sm320:h-[240px] smOnly:w-full smOnly:max-w-[400px]"
                    >
                      <SanityImage
                        image={image}
                        width={483}
                        height={344}
                        className="size-full object-cover"
                      />
                    </div>

                    <h3
                      className="mb-2 line-clamp-3 h-[72px] text-[16px]/[1.5] font-bold tracking-[-0.32px] text-brownDark 
                  xl:text-[18px]/[1.33] xl:tracking-[-0.36px] 2xl:line-clamp-2 2xl:h-[56px] 2xl:text-[20px]/[1.4] 2xl:tracking-[-0.4px]"
                    >
                      {title}
                    </h3>

                    <p className="mb-4 line-clamp-4 h-[80px] text-[14px]/[1.43] 2xl:line-clamp-3 2xl:h-[75px] 2xl:text-[18px]/[1.4]">
                      {description}
                    </p>

                    <p
                      className="text-[14px]/[1.71] font-semibold tracking-[-0.28px]
                     text-green transition-all hover:text-greenDark focus:text-greenDark
                    md:text-[16px]/[1.5] md:tracking-[-0.32px]
                    2xl:text-[18px]/[1.4] 2xl:tracking-[-0.36px]"
                    >
                      {labelLink}
                    </p>
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};
