import { PostSection, BlogSections, ContactUsSections } from '@/sections';

import { getOnePost, getPostsSlug } from '@/actions/sanity';

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

  return (
    <>
      <PostSection post={post} />
      <BlogSections />
      <ContactUsSections />
    </>
  );
}
