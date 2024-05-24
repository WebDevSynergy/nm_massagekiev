import { sanityClient } from '@/sanity/lib/client';

export const getTotalPosts = async () => {
  try {
    const data =
      (await sanityClient.fetch(`{"total": count(*[_type == "post"])}`)) ||
      null;
    return data;
  } catch (error) {
    return new Error();
  }
};
