import Link from 'next/link';
import { GalleryPaginationProps } from './types';

export const GalleryPagination: React.FC<GalleryPaginationProps> = ({
  page,
  totalPages,
}) => {
  return (
    <ul className="flex gap-4 text-[18px]">
      <li>{page > 1 && <Link href={`/blog/${page - 1}`}>{page - 1}</Link>}</li>

      <li>
        <p>{page}</p>
      </li>

      <li>
        {page < totalPages && <a href={`/blog/${page + 1}`}>{page + 1}</a>}
      </li>
    </ul>
  );
};
