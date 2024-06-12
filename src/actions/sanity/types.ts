export type MasseursResponse = {
  id: string;
  certificateArray:
    | (TImage & {
        id: string;
      })[]
    | null;
  resume: string;
  image: TImage;
  name: string;
}[];

export type TInstagramPhotosResponse = {
  image: TImage;
  id: string;
}[];
