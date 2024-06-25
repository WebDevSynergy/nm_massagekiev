import type { Metadata } from 'next';

import { ContactUsSections, GallerySection } from '@/sections';

import { getPostsWithPagination, getTotalPosts } from '@/actions/sanity';

import meta from '@/data/meta.json';

export const metadata: Metadata = meta.blog;

const POSTS_PER_PAGE = 6;

export async function generateStaticParams() {
  try {
    const data = await getTotalPosts();

    const total = data.total;
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    const pages = [];

    for (let index = 0; index < totalPages; index++) {
      pages.push({ page: (index + 1).toString() });
    }

    return pages;
  } catch (err) {
    console.log('err', err);
    return [{ page: 1 }];
  }
}

export default async function BlogPage({
  params,
}: {
  params: { page: string };
}) {
  const page = Number(params?.page) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const data = await getPostsWithPagination(start, end);

  const posts = data ? data.posts : null;
  const total = data ? data.total : null;
  const totalPages = total ? Math.ceil(total / POSTS_PER_PAGE) : 0;

  return (
    <>
      <GallerySection posts={posts} page={page} totalPages={totalPages} />

      <ContactUsSections />
    </>
  );
}
