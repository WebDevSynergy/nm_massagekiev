export type MasseursCardProps = {
  id: string;
  certificateArray:
    | (TImage & {
        id: string;
      })[]
    | null;
  resume: string;
  image: TImage;
  name: string;
};
