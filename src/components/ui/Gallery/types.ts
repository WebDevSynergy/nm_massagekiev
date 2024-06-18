import { Slug } from 'sanity';

export type GalleryProps = {
  posts: {
    id: string;
    title: string;
    description: string;
    image: TImage;
    slug: Slug;
  }[];
};
