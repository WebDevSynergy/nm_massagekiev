import { Metadata } from 'next';

import { Slug } from 'sanity';

import { ContactUsSections, GallerySection } from '@/sections';

import { getPostsWithPagination, getTotalPosts } from '@/actions/sanity';

import meta from '@/data/meta.json';
import data from '@/data/blog.json';
import commonData from '@/data/common.json';

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
const { title: staticDataTitle, description } = meta.blog;
const { siteName } = commonData;

export const revalidate = 60 * 10;

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = Number(params.page) || 1;

  const title =
    page === 1 ? staticDataTitle : `${staticDataTitle} сторінка ${page}`;

  const canonicalUrl = `${SITE_URL}/blog/${page}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title,
      description,
      siteName,
      locale: 'uk_UA',
      images: [
        {
          url: `${SITE_URL}/meta/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/meta/og-image.jpg`],
    },
  };
}

const POSTS_PER_PAGE = Number(data.postsPerPage) || 1;

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
  const end = start + POSTS_PER_PAGE;

  const data = await getPostsWithPagination(start, end);

  const posts = data ? data.posts : null;
  const total = data ? data.total : null;
  const totalPages = total ? Math.ceil(total / POSTS_PER_PAGE) : 0;

  const blogListLdJson = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: meta.blog.title,
    description: meta.blog.description,
    url: `${SITE_URL}/blog/${page}`,
    blogPost: posts.map(
      (post: {
        id: string;
        title: string;
        description: string;
        image: TImage;
        slug: Slug;
      }) => {
        return {
          '@type': 'BlogPosting',
          headline: post.title,
          url: `${SITE_URL}/blog/post/${post.slug.current}`,
          author: {
            '@type': 'Organization',
            name: siteName,
            url: SITE_URL,
          },
          image: {
            '@type': 'ImageObject',
            url: post.image.src,
            width: 1200,
            height: 630,
          },
        };
      },
    ),
  };

  const breadcrumbLdJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Головна',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Блог',
        item: `${SITE_URL}/blog`,
      },
      ...(page > 1
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: `Сторінка ${page}`,
              item: `${SITE_URL}/blog/${page}`,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListLdJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLdJson) }}
      />

      <GallerySection posts={posts} page={page} totalPages={totalPages} />

      <ContactUsSections />
    </>
  );
}
