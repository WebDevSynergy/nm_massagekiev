import { Slug } from 'sanity';

export type GalleryCardProps = {
  slug: Slug;
  image: TImage;
  title: string;
  description: string;
  labelLink: string;
};
