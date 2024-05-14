/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getPosts } from '@/sanity/requests';

import { urlForImage } from '@/sanity/lib/image';

import { GoogleMaps } from '@/components/base';

import { useFetchGoogleRating } from '@/utils/hooks';

export const TestPostSection: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const ratingValue = useFetchGoogleRating(); //якщо 0 - то пишемо що не завантажилось, і крутим лоадер

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedData = await getPosts();

        setPosts(fetchedData);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };

    fetchPosts();
  }, []);

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

      <div className="bg-white">
        <p>{ratingValue}</p>
      </div>

      <GoogleMaps width={948} height={686} />
    </>
  );
};
