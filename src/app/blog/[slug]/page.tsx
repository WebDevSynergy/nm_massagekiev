/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlForImage } from '@/sanity/lib/image';
import { client } from '@/utils/client';
import Image from 'next/image';

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateStaticParams() {
  try {
    // const res = await fetch(`${BASE_URL}/api/blog`);
    // const posts = await res.json();

    const posts = (await client.fetch('*[_type == "post"]')) || [];

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
  // const res = await fetch(`${BASE_URL}/api/blog?slug=${slug}`, {
  //   next: { revalidate: 1 },
  // });

  // const data = await res.json();

  const data = (await client.fetch(
    `*[_type=="post" && slug.current=="${slug}"][0]`,
  )) || {
    _id: '1',
    title: '',
    preDescription: '',
    postDescription: '',
    image: '',
  };

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
