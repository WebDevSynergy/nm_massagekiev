import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn, token } from '../env';

console.log('token', token);

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
});

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

type Post = {
  _type: string;
  author: string | null;
  review: string | null;
};

export async function createPost(post: Post) {
  const result = client.create(post);
  return result;
}
