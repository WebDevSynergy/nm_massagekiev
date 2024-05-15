import { client } from '@/utils/client';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  const sortByPriority = searchParams.get('priority');

  const getPostBySlugPostQuery = `*[_type=="post" && slug.current=="${slug}"][0]`;
  const getAllPostsQuery = '*[_type == "post"]';
  const getAllWithSortByPriorityPostsQuery =
    '*[_type == "post"] | order(priority desc)';

  const queryOnePost = getPostBySlugPostQuery;
  const queryManyPosts =
    sortByPriority !== null
      ? getAllWithSortByPriorityPostsQuery
      : getAllPostsQuery;

  const query = slug !== null ? queryOnePost : queryManyPosts;

  try {
    const data = await client.fetch(query);

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
