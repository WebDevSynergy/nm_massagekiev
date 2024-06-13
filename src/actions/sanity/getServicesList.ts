import { sanityClient } from '@/sanity/lib/client';

export type TService = {
  id: string;
  title: string;
  price: number;
};

export const getServicesList = async (): Promise<TService[] | null> => {
  try {
    const servicesList =
      (await sanityClient.fetch<TService[]>(
        '*[_type == "service"]  | order(_createdAt desc) {"id": _id, title, price}',
        {},
        { next: { revalidate: 3600 } },
      )) || null;

    return servicesList;
  } catch (error) {
    return null;
  }
};
