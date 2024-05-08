/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export const TestPostSection: React.FC = () => {
  const [posts, setPosts] = useState([]);

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
      <h2 className="text-white">Test Data Sanity</h2>
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
                  className=" w-[600px] border border-solid border-cyan-50 p-4"
                >
                  <p>id: {_id}</p>
                  <p>slug: {slug.current}</p>
                  <p>title: {title}</p>
                  <p>description: {description}</p>
                  <Image
                    src={urlForImage(image)}
                    alt="test"
                    width={300}
                    height={300}
                  />
                </li>
              );
            },
          )}
      </ul>
    </>
  );
};
