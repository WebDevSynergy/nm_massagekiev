export type AccordionFAQProps = {
  isOpenFirst: boolean;
  data: {
    id: number;
    title: string;
    description: string;
    faq?: { id: number; title: string; description: string }[];
  }[];
};
