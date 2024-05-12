/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createReview, getPosts } from '@/sanity/requests';

import { urlForImage } from '@/sanity/lib/image';

import { GoogleMaps } from '@/components/base';

import { useFetchGoogleRating } from '@/utils/hooks/useFetchGoogleRating';

export const TestPostSection: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const ratingValue = useFetchGoogleRating(); //якщо 0 - то пишемо що не завантажилось, і крутим лоадер

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // author: data.get('author'),
    // review: data.get('review'),

    const newReview = {
      _type: 'review',
      author: 'Mango',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptas?',
    };

    createReview(newReview);
  };

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
      <h2 className="text-[32px] text-white ">Test Review</h2>
      <form className="flex flex-col items-center gap-5" onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" name="author" className="w-[300px]" />
        </label>

        <label>
          Name
          <textarea name="review" className="w-[300px]" />
        </label>

        <button type="submit" className="block bg-blue-100 p-5">
          Submit
        </button>
      </form>
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
