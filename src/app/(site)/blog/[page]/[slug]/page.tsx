import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostSection, BlogSections, ContactUsSections } from '@/sections';

import { getOnePost, getPostsSlug } from '@/actions/sanity';

export async function generateMetadata({
  params: { slug = '' },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getOnePost(slug);
  return {
    title: post?.title,
    description: post?.description,
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getPostsSlug();

    return posts.map(({ current }: { current: string }) => ({
      slug: current,
    }));
  } catch (err) {
    console.log('err', err);
    return [];
  }
}

export default async function PostPage({
  params: { slug = '' },
}: {
  params: { slug: string };
}) {
  const post = await getOnePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PostSection post={post} />

      <BlogSections />

      <ContactUsSections />
    </>
  );
}
