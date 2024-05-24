import Image from 'next/image';
import { Image as SanityImage, Slug } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';
import { getPostsWithPrioritySort } from '@/actions/sanity';

export const BlogSections: React.FC = async () => {
  const posts = await getPostsWithPrioritySort();

  return (
    <>
      {posts && (
        <section className="section">
          <div className="container">
            BlogSections
            <h2 className="text-[32px] text-white ">Test Blog Data Sanity</h2>
            <ul className=" flex gap-4 text-white">
              {posts &&
                posts.map(
                  ({
                    _id,
                    title,
                    description,
                    image,
                    slug,
                  }: {
                    _id: string;
                    title: string;
                    description: string;
                    image: SanityImage;
                    slug: Slug;
                  }) => {
                    const alt = image?.caption?.toString() || ' ';

                    return (
                      <li
                        key={_id}
                        className=" flex w-[600px] flex-col items-center justify-between gap-4 border border-solid border-cyan-50 p-4"
                      >
                        <h2 className="font-bold">title: {title}</h2>
                        <p>description: {description}</p>

                        <Image
                          src={urlForImage(image)}
                          alt={alt}
                          width={300}
                          height={300}
                        />

                        <p>id: {_id}</p>
                        <p>slug: {slug.current}</p>
                      </li>
                    );
                  },
                )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
