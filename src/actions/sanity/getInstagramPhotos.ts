import { sanityClient } from '@/sanity/lib/client';

import { TInstagramPhotosResponse } from '@/types/instagram';

export const getInstagramPhotos =
  async (): Promise<TInstagramPhotosResponse | null> => {
    try {
      const instagramPhotosData =
        (await sanityClient.fetch(
          '*[_type == "instagram"] | order(_createdAt desc) {"image":{"src":image.asset->url, "alt":image.caption,"lqip":image.asset->metadata.lqip}, "id": _id}',
          {},
          { next: { revalidate: 3600 } },
        )) || null;

      return instagramPhotosData;
    } catch (error) {
      return null;
    }
  };
