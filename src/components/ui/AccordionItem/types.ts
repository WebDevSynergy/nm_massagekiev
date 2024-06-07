export type AccordionItemProps = {
  title: string;
  description: string;
  isOpenFirst: boolean;
  data?: { id: number; title: string; description: string }[];
};
