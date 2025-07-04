import { MetadataRoute } from 'next';

import data from '@/data/blog.json';
import { getPostsSlug, getTotalPosts } from '@/actions/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const POSTS_PER_PAGE = Number(data.postsPerPage) || 1;

  const getBlogPages = async () => {
    try {
      const data = await getTotalPosts();

      const total = data.total;
      const totalPages = Math.ceil(total / POSTS_PER_PAGE);

      const pages = [];

      for (let index = 0; index < totalPages; index++) {
        pages.push({ page: (index + 1).toString() });
      }

      const blogEntries: MetadataRoute.Sitemap = pages.map(el => ({
        url: `${BASE_URL}/blog/${el.page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      }));
      return blogEntries;
    } catch (err) {
      console.log('err', err);
      return [];
    }
  };

  const getPostPages = async () => {
    try {
      const posts = await getPostsSlug();

      const postsEntries: MetadataRoute.Sitemap = posts.map(
        ({ slug: { current } }: { slug: { current: string } }) => ({
          url: `${BASE_URL}/blog/post/${current}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        }),
      );

      return postsEntries;
    } catch (err) {
      console.log('err', err);
      return [];
    }
  };

  const blogEntries: MetadataRoute.Sitemap = await getBlogPages();
  const postsEntries: MetadataRoute.Sitemap = await getPostPages();

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/terms-of-service-privacy-policy`,
      lastModified: '2025-17-04', // або актуальна дата останньої зміни документа
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    ...blogEntries,
    ...postsEntries,
  ];
}
