import { sanityClient } from '@/sanity/lib/client';

export const getInstagramPhotos = async () => {
  try {
    const instagramPhotosData =
      (await sanityClient.fetch(
        '*[_type == "instagram"] | order(_createdAt desc)',
        {},
        { next: { revalidate: 3600 } },
      )) || null;

    return instagramPhotosData;
  } catch (error) {
    return null;
  }
};
