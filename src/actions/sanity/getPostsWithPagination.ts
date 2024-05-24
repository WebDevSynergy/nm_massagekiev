import { sanityClient } from '@/sanity/lib/client';

export const getPostsWithPagination = async (start: number, end: number) => {
  try {
    const data =
      (await sanityClient.fetch(
        `{
      "posts": *[_type == "post"] | order(_createdAt) [${start}...${end}],
      "total": count(*[_type == "post"])
      }`,
      )) || null;
    return data;
  } catch (error) {
    return null;
  }
};
