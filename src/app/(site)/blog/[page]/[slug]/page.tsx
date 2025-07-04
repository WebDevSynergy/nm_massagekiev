import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { format } from 'date-fns-tz';

import { PostSection, BlogSections, ContactUsSections } from '@/sections';

import { getOnePost, getPostsSlug } from '@/actions/sanity';
import { urlForImage } from '@/sanity/lib/image';
import { getShortDescription } from '@/utils';

import staticData from '@/data/post.json';
import commonData from '@/data/common.json';

export const revalidate = 60 * 10;

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
const DEFAULT_OG_IMAGE = '/images/meta/og-image.jpg';
const { meta } = staticData;
const { siteName } = commonData;

const transformDate = (date: string) => {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ssXXX", {
    timeZone: 'Europe/Kyiv',
  });
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = await getOnePost(slug);

  if (!post) return {};

  const title = post.title || meta.title;
  const description =
    getShortDescription(post.description || '') || meta.description;
  const imageUrl = post.image ? urlForImage(post.image) : DEFAULT_OG_IMAGE;
  const canonicalUrl = `${SITE_URL}/blog/post/${slug}`;
  const publishedTime = transformDate(post._createdAt);
  const modifiedTime = transformDate(post._updatedAt);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title,
      description,
      siteName,
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: [siteName],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'uk_UA',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    metadataBase: new URL(SITE_URL),
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getPostsSlug();

    return posts.map(({ current }: { current: string }) => ({
      slug: current,
    }));
  } catch (err) {
    console.log('err', err);
    return [];
  }
}

export default async function PostPage({
  params: { slug = '' },
}: {
  params: { slug: string };
}) {
  const post = await getOnePost(slug);

  if (!post) {
    notFound();
  }

  const ldjson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description:
      getShortDescription(post.description || '') || meta.description,
    url: `${SITE_URL}/blog/post/${slug}`,
    image: post.image ? urlForImage(post.image) : DEFAULT_OG_IMAGE,
    author: { '@type': 'Organization', name: siteName, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icons/logo.svg`,
        width: 187,
        height: 22,
      },
    },
    datePublished: transformDate(post._createdAt),
    dateModified: transformDate(post._updatedAt),
  };

  const breadcrumbJsonLd = {
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
        item: `${SITE_URL}/blog/1`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/post/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjson) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PostSection post={post} />

      <BlogSections />

      <ContactUsSections />
    </>
  );
}
