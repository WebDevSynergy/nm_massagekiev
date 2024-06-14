/* eslint-disable @typescript-eslint/no-explicit-any */
export type SliderProps = {
  slideComponent: React.FC<any>;
  slidesData: Record<string, any>[] | [];
  section: 'reviews' | 'masseurs' | 'blog' | 'instagram' | 'certificates';
  wrapClassName?: string;
  slideClassName?: string;
};
