import Image from 'next/image';
import { Key } from 'react';
import { Image as SanityImg } from 'sanity';

import { sanityClient } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

type MasseursItem = {
  _id: string;
  certificateArray: SanityImg[];
  resume: string;
  image: SanityImg;
  name: string;
};

export const MasseursSection: React.FC = async () => {
  const masseurs =
    (await sanityClient.fetch(
      '*[_type == "masseur"]',
      {},
      { next: { revalidate: 3600 } },
    )) || null;

  return (
    <>
      {masseurs && (
        <section className="section">
          <div className="container">
            MasseursSection
            <ul className="flex gap-8">
              {masseurs.map(
                ({
                  _id,
                  certificateArray,
                  resume,
                  image,
                  name,
                }: MasseursItem) => {
                  return (
                    <li key={_id} className="w-[400px] border border-solid p-8">
                      <Image
                        src={urlForImage(image)}
                        width={400}
                        height={400}
                        alt={name}
                      />
                      <p>name: {name}</p>
                      <p>resume: {resume}</p>
                      <ul>
                        {certificateArray.map(
                          (el: SanityImg, idx: Key | null | undefined) => (
                            <li key={idx}>
                              <Image
                                src={urlForImage(el)}
                                width={400}
                                height={400}
                                alt={name}
                              />
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
