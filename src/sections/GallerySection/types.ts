import { Slug } from 'sanity';

export type GallerySectionProps = {
  posts: {
    id: string;
    title: string;
    description: string;
    image: TImage;
    slug: Slug;
  }[];
  page: number;
  totalPages: number;
};
