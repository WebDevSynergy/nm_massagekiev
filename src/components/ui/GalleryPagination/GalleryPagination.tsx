import { PaginationArrowItem } from './PaginationArrowItem';
import { PaginationNumberItem } from './PaginationNumberItem';

import { makePaginationElements } from '@/utils';

import { GalleryPaginationProps } from './types';

export const GalleryPagination: React.FC<GalleryPaginationProps> = ({
  page,
  totalPages,
}) => {
  const [paginationElements] = makePaginationElements(page, totalPages);

  return (
    <>
      <div className="flex items-center justify-center gap-2 text-[14px]/[1.4] font-semibold tracking-[-0.28px] sm480:gap-1 sm480:text-[12px]">
        <PaginationArrowItem type="prev" page={page} totalPages={totalPages} />

        <ul className="flex gap-2 sm320:gap-1">
          {paginationElements &&
            paginationElements.map((number, idx) => (
              <li key={idx}>
                <PaginationNumberItem
                  href={
                    number.toString() === page.toString()
                      ? ''
                      : `/blog/${number}`
                  }
                  current={number.toString() === page.toString()}
                >
                  {number}
                </PaginationNumberItem>
              </li>
            ))}
        </ul>

        <PaginationArrowItem type="next" page={page} totalPages={totalPages} />
      </div>
    </>
  );
};
