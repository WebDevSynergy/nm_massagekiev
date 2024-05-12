import { client } from '../lib/client';

const getPostsQuery = '*[_type == "post"]';

const getOnePostQuery = (slug: string) =>
  `*[_type=="post" && slug.current=="${slug}"]`;

const getSortPriorityPostsQuery = '*[_type == "post"] | order(priority desc)';

export const getPosts = async () => {
  const posts = await client.fetch(getPostsQuery);
  return posts;
};

export const getOnePost = async (slug: string) => {
  const posts = await client.fetch(getOnePostQuery(slug));
  return posts;
};

export const getSortPriorityPosts = async () => {
  const posts = await client.fetch(getSortPriorityPostsQuery);
  return posts;
};
