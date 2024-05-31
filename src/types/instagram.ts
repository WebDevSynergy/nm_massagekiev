export type TInstagramPhotosResponse = {
  image: TImage;
  id: string;
}[];

export type TImage = {
  src: string;
  alt: string;
  lqip: string;
};
