import { sanityClient } from '@/sanity/lib/client';

export const getReviews = async () => {
  try {
    const reviews =
      (await sanityClient.fetch(
        '*[_type == "review"] | order(_createdAt) {_id, author, review}',
        {},
        { cache: 'no-cache' },
      )) || null;

    return reviews;
  } catch (error) {
    return null;
  }
};
