/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';

import { client } from '@/sanity/lib/client';

export async function generateStaticParams() {
  try {
    const posts = (await client.fetch('*[_type == "post"]')) || null;

    return posts.map((e: any) => ({ slug: e.slug.current }));
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
    (await client.fetch(`*[_type=="post" && slug.current=="${slug}"][0]`)) ||
    null;

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
