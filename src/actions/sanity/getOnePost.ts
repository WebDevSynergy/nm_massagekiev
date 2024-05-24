import { sanityClient } from '@/sanity/lib/client';

export const getOnePost = async (slug: string) => {
  try {
    const post =
      (await sanityClient.fetch(
        `*[_type=="post" && slug.current=="${slug}"][0]`,
        {},
        { next: { revalidate: 3600 } },
      )) || null;

    return post;
  } catch (error) {
    return null;
  }
};
