import { Image, Slug } from 'sanity';

export type BlogCardProps = {
  image: Image;
  title: string;
  description: string;
  alt: string;
  slug: Slug;
};
