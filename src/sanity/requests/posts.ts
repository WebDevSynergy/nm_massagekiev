import { client } from '../lib/client';

const getPostsQuery = '*[_type == "post"]';

const getOnePostQuery = (slug: string) =>
  `*[_type=="post" && slug.current=="${slug}"]`;

export const getPosts = async () => {
  const posts = await client.fetch(getPostsQuery);
  return posts;
};

export const getOnePost = async (slug: string) => {
  const posts = await client.fetch(getOnePostQuery(slug));
  return posts;
};
