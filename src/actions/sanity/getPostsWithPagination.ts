import { sanityClient } from '@/sanity/lib/client';

export const getPostsWithPagination = async (start: number, end: number) => {
  try {
    const data =
      (await sanityClient.fetch(
        `{
      "posts": *[_type == "post"] | order(_createdAt) {
        "image": {
          "src": image.asset->url, 
          "alt": image.caption,
          "lqip": image.asset->metadata.lqip
        }, 
        "id": _id, 
        "title": title, 
        "description": description, 
        "slug": slug
      } [${start}...${end}],
      "total": count(*[_type == "post"])
      }`,
      )) || null;
    return data;
  } catch (error) {
    return null;
  }
};
