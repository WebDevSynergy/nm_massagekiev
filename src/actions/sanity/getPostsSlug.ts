import { sanityClient } from '@/sanity/lib/client';

export const getPostsSlug = async () => {
  try {
    const posts =
      (await sanityClient.fetch(
        '*[_type == "post"]{slug}',
        {},
        { next: { revalidate: 3600 } },
      )) || null;

    return posts;
  } catch (error) {
    return null;
  }
};
