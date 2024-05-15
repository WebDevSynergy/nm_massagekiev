import Image from 'next/image';
import { Image as SanityImage } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';

import { client } from '@/sanity/lib/client';

type instagramPhoto = {
  _id: string;
  image: SanityImage;
};

export const InstagramSection: React.FC = async () => {
  const instagramPhotosData =
    (await client.fetch('*[_type == "instagram"]')) || null;

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
