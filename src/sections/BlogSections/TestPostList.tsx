/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';

type Props = {
  posts: any;
};

export const TestPostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <h2 className="text-[32px] text-white ">Test Blog Data Sanity</h2>
      <ul className=" flex gap-4 text-white">
        {posts &&
          posts.map(
            ({
              _id,
              title,
              preDescription,
              postDescription,
              image,
              slug,
            }: {
              _id: string;
              title: string;
              preDescription: string;
              postDescription: string;
              image: any;
              slug: any;
            }) => {
              return (
                <li
                  key={_id}
                  className=" flex w-[600px] flex-col items-center justify-between gap-4 border border-solid border-cyan-50 p-4"
                >
                  <h2 className="font-bold">title: {title}</h2>
                  <p>preDescription: {preDescription}</p>
                  <Image
                    src={urlForImage(image)}
                    alt="test"
                    width={300}
                    height={300}
                  />
                  <p>postDescription: {postDescription}</p>
                  <p>id: {_id}</p>
                  <p>slug: {slug.current}</p>
                </li>
              );
            },
          )}
      </ul>
    </>
  );
};
