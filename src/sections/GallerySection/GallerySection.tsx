import { Gallery, GalleryPagination } from '@/components/ui';

import { GallerySectionProps } from './types';

import data from '@/data/blog.json';

export const GallerySection: React.FC<GallerySectionProps> = ({
  posts,
  page,
  totalPages,
}) => {
  const { title, description } = data;

  return (
    <>
      <section className="section">
        <div className="container">
          <h1
            className="mb-2 text-[24px]/[1.4] font-semibold tracking-[-0.48px] text-blackLight md:text-[36px]/[1.4] 
          md:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:text-[40px]/[1.4] 2xl:tracking-[-0.8px]"
          >
            {title}
          </h1>

          <p className="mb-4 text-[16px]/[1.4] tracking-[-0.32px] text-brownDark md:mb-6 xl:mb-8 xl:w-[690px] 2xl:mb-10">
            {description}
          </p>

          <Gallery posts={posts} />

          <GalleryPagination page={page} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
};
