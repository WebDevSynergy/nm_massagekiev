import Image from 'next/image';
import { Image as SanityImage } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';
import { getInstagramPhotos } from '@/actions/sanity';

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
                const alt = image?.caption?.toString() || 'text';

                return (
                  <li key={_id} className="size-[380px]">
                    <Image
                      src={urlForImage(image)}
                      width={380}
                      height={380}
                      loading="lazy"
                      alt={alt}
                      className="size-full object-cover"
                    />
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