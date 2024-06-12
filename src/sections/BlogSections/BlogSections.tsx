/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { Image as SanityImage, Slug } from 'sanity';
import { urlForImage } from '@/sanity/lib/image';
import { getPostsWithPrioritySort } from '@/actions/sanity';
import { BlogCard } from '@/components/ui/BlogCard/BlogCard';

const SwiperSlider = React.lazy(() =>
  import('@/components/ui/Slider/Slider').then(module => ({
    default: module.SwiperSlider,
  })),
);

export const BlogSections: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPostsWithPrioritySort();
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  const slides = posts.map(
    ({
      _id,
      title,
      description,
      image,
    }: {
      _id: string;
      title: string;
      description: string;
      image: SanityImage;
      slug: Slug;
    }) => {
      const imageUrl = urlForImage(image);
      const alt = image?.caption?.toString() || ' ';

      return {
        content: (
          <div key={_id}>
            <BlogCard
              imageUrl={imageUrl}
              title={title}
              text={description}
              alt={alt}
            />
          </div>
        ),
      };
    },
  );

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-[32px]">Блог</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <SwiperSlider
            slides={slides}
            settings={{
              slidesPerView: 3,
              spaceBetween: 10,
              navigation: true,
            }}
          />
        </Suspense>
      </div>
    </section>
  );
};
