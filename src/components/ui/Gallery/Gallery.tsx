import { GalleryCard } from '@/components/ui';

import { GalleryProps } from './types';

import data from '@/data/blog.json';

export const Gallery: React.FC<GalleryProps> = ({ posts }) => {
  const { galleryTitle, labelLink } = data;

  return (
    <>
      <h2 className="visually-hidden">{galleryTitle}</h2>

      <ul className="mb-4 md:mb-6 md:flex md:flex-wrap md:gap-4 xl:mb-8 xl:gap-6 2xl:mb-10 2xl:gap-10">
        {posts &&
          posts.map(({ id, title, description, image, slug }) => {
            return (
              <li key={id}>
                <GalleryCard
                  title={title}
                  description={description}
                  image={image}
                  slug={slug}
                  labelLink={labelLink}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};
