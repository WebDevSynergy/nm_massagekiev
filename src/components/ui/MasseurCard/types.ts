export type MasseursCardProps = {
  masseur: {
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
};
