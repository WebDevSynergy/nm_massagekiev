import Image from 'next/image';
import { Image as SanityImage } from 'sanity';

import { sanityClient } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

type instagramPhoto = {
  _id: string;
  image: SanityImage;
};

export const InstagramSection: React.FC = async () => {
  const instagramPhotosData =
    (await sanityClient.fetch(
      '*[_type == "instagram"]',
      {},
      { next: { revalidate: 3600 } },
    )) || null;

  return (
    <>
      {instagramPhotosData && (
        <section className="section">
          <div className="container">
            InstagramSection
            <ul className="flex gap-8">
              {instagramPhotosData.map(({ _id, image }: instagramPhoto) => {
                const alt = image?.caption?.toString() || 'text';

                return (
                  <li key={_id} className="w-[400px] border border-solid p-8">
                    <Image
                      src={urlForImage(image)}
                      width={400}
                      height={400}
                      alt={alt}
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
