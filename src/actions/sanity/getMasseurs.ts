import { sanityClient } from '@/sanity/lib/client';

export const getMasseurs = async () => {
  try {
    const masseurs =
      (await sanityClient.fetch(
        '*[_type == "masseur"] | order(_createdAt)',
        {},
        { next: { revalidate: 3600 } },
      )) || null;

    return masseurs;
  } catch (error) {
    return null;
  }
};
