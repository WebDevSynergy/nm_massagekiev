import { Image as SanityImage } from 'sanity';

import { getInstagramPhotos } from '@/actions/sanity';
import { InstagramCard } from '@/components/ui';

type instagramPhoto = {
  _id: string;
  image: SanityImage;
};

export const InstagramSection: React.FC = async () => {
  const instagramPhotosData = await getInstagramPhotos();

  return (
    <>
      {instagramPhotosData && (
        <section className="section">
          <div className="container">
            InstagramSection
            <ul className="flex flex-wrap gap-8">
              {instagramPhotosData.map(({ _id, image }: instagramPhoto) => {
                return (
                  <li key={_id}>
                    <InstagramCard image={image} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
