import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';
import { sanityClient } from '@/sanity/lib/client';

export async function generateStaticParams() {
  try {
    const posts =
      (await sanityClient.fetch(
        '*[_type == "post"]{slug}',
        {},
        { next: { revalidate: 3600 } },
      )) || null;

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
  const data =
    (await sanityClient.fetch(
      `*[_type=="post" && slug.current=="${slug}"][0]`,
      {},
      { next: { revalidate: 3600 } },
    )) || null;

  const { _id, title, preDescription, postDescription, image } = data;

  return (
    <section className="section">
      <div className="container">
        <h1>POST_PAGE</h1>
        <h2 className="font-bold">title: {title}</h2>
        <p>preDescription: {preDescription}</p>
        <Image src={urlForImage(image)} alt="test" width={300} height={300} />
        <p>postDescription: {postDescription}</p>
        <p>id: {_id}</p>
      </div>
    </section>
  );
}
