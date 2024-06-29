import { ButtonLink, Gallery, GalleryPagination } from '@/components/ui';

import { GallerySectionProps } from './types';

import data from '@/data/blog.json';

export const GallerySection: React.FC<GallerySectionProps> = ({
  posts,
  page,
  totalPages,
}) => {
  const { title, description, emptyGallery } = data;

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

          {posts && posts?.length > 0 ? (
            <>
              <Gallery posts={posts} />

              <GalleryPagination page={page} totalPages={totalPages} />
            </>
          ) : (
            <div
              className="flex flex-col items-center justify-center rounded-[24px] bg-white 
            px-2 py-20 text-center md:rounded-[32px] xl:rounded-[40px] "
            >
              <p className="mb-8 font-bold">{emptyGallery.label}</p>
              <ButtonLink
                tag="link"
                href={emptyGallery.href}
                styleType="primary"
              >
                {emptyGallery.labelLink}
              </ButtonLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
