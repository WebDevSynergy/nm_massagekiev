export type GalleryPaginationProps = { page: number; totalPages: number };

export type PaginationArrowItemProps = {
  page: number;
  totalPages: number;
  type: 'prev' | 'next';
};

export type PaginationNumberItemProps = {
  children: React.ReactNode;
  href: string;
  current?: boolean;
};
