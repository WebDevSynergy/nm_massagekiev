import Image from 'next/image';
import Link from 'next/link';
import { Slug } from 'sanity';
import { type ImageAsset } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';
import { getPostsWithPagination, getTotalPosts } from '@/actions/sanity';

const POSTS_PER_PAGE = 2;

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
  const end = start + 2;

  const data = await getPostsWithPagination(start, end);

  const posts = data ? data.posts : null;
  const total = data ? data.total : null;
  const totalPages = total ? Math.ceil(total / POSTS_PER_PAGE) : 0;

  return (
    <>
      {posts && (
        <section className="section">
          <div className="container">
            <h1>BlogPage</h1>
            <h2 className="text-[32px]">Test Blog Data Sanity</h2>

            <ul className=" flex flex-wrap gap-4">
              {posts &&
                posts.map(
                  ({
                    _id,
                    title,
                    preDescription,
                    // postDescription,
                    image,
                    slug,
                  }: {
                    _id: string;
                    title: string;
                    preDescription: string;
                    postDescription: string;
                    image: ImageAsset;
                    slug: Slug;
                  }) => {
                    const alt = image?.caption?.toString() || ' ';

                    return (
                      <li
                        key={_id}
                        className=" flex w-[380px] flex-col items-center justify-between gap-4 border border-solid border-cyan-50 p-4"
                      >
                        <Link href={`post/${slug.current}`}>
                          <h2 className="font-bold">title: {title}</h2>
                          <p className=" line-clamp-2">
                            preDescription: {preDescription}
                          </p>
                          <Image
                            src={urlForImage(image)}
                            alt={alt}
                            width={300}
                            height={300}
                          />
                          {/* <p>postDescription: {postDescription}</p> */}
                          <p>id: {_id}</p>
                          <p>slug: {slug.current}</p>
                        </Link>
                      </li>
                    );
                  },
                )}
            </ul>

            <ul className="flex gap-4 text-[18px]">
              <li>
                {page > 1 && <Link href={`/blog/${page - 1}`}>{page - 1}</Link>}
              </li>
              <li>
                <p>{page}</p>
              </li>
              <li>
                {page < totalPages && (
                  <a href={`/blog/${page + 1}`}>{page + 1}</a>
                )}
              </li>
            </ul>

            <div></div>
          </div>
        </section>
      )}
    </>
  );
}
