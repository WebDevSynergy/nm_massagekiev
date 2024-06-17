export type ArrowSliderProps = {
  section: 'reviews' | 'masseurs' | 'blog' | 'instagram' | 'certificates';
  wrapClassName?: string;
};

export enum Sections {
  REVIEWS = 'reviews',
  MASSEURS = 'masseurs',
  BLOG = 'blog',
  INSTAGRAM = 'instagram',
  CERTIFICATES = 'certificates',
}
