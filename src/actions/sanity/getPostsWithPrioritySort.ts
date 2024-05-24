import { sanityClient } from '@/sanity/lib/client';

export const getPostsWithPrioritySort = async () => {
  try {
    const posts =
      (await sanityClient.fetch(
        '*[_type == "post"] | order(priority desc)',
        {},
        { next: { revalidate: 3600 } },
      )) || null;

    return posts;
  } catch (error) {
    return null;
  }
};
