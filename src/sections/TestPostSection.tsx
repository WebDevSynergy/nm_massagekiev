/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { client, createPost } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export const TestPostSection: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    const newReview = {
      _type: 'review',
      // author: data.get('author'),
      // review: data.get('review'),
      author: 'Mango',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptas?',
    };
    console.log(newReview);

    // const url = `https://pmsq873x.api.sanity.io/v2021-06-07/data/mutate/production`;

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newReview),
    // });

    createPost(newReview);
    // const result = client.create(newReview);
  };

  // curl 'https://<project-id>.api.sanity.io/v2021-06-07/data/mutate/<dataset-name>' \
  //   -H 'Authorization: Bearer <token>' \
  //   -H 'Content-Type: application/json' \
  //   --data-binary '{"mutations":[<transactions>]}'

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = "*[_type=='post']{_id, title, description, image, slug}";
        // const query = "*[_type=='post']";

        const fetchedData = await client.fetch(query, {
          // next: {
          //   // revalidate: 3600, // look for updates to revalidate cache every hour
          //   revalidate: 1,
          // },
        });

        console.log('fetchedData', fetchedData);
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
              description,
              image,
              slug,
            }: {
              _id: string;
              title: string;
              description: string;
              image: any;
              slug: any;
            }) => {
              return (
                <li
                  key={_id}
                  className=" flex w-[600px] flex-col items-center justify-between gap-4 border border-solid border-cyan-50 p-4"
                >
                  <h2 className="font-bold">title: {title}</h2>
                  <p>description: {description}</p>
                  <Image
                    src={urlForImage(image)}
                    alt="test"
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
    </>
  );
};
