import { sanityClient } from '@/sanity/lib/client';

export const getServices = async () => {
  try {
    const services =
      (await sanityClient.fetch(
        '*[_type == "service"]  | order(_createdAt desc)',
        {},
        { next: { revalidate: 3600 } },
      )) || null;

    return services;
  } catch (error) {
    return null;
  }
};
