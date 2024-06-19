import Link from 'next/link';

import { cn } from '@/utils';

import { PaginationArrowItemProps } from './types';

import ArrowIcon from '~/icons/pagination-arrow.svg';

export const PaginationArrowItem: React.FC<PaginationArrowItemProps> = ({
  page,
  totalPages,
  type,
}) => (
  <>
    {(page <= 1 && type === 'prev') ||
    (page >= totalPages && type === 'next') ? (
      <p>
        <ArrowIcon
          className={cn(
            'size-10 text-grey sm320:size-8',
            type === 'next' && 'rotate-180',
          )}
          width={40}
          height={40}
        />
      </p>
    ) : (
      <Link href={type === 'next' ? `/blog/${page + 1}` : `/blog/${page - 1}`}>
        <ArrowIcon
          className={cn(
            'size-10 sm320:size-8',
            type === 'next' && 'rotate-180',
          )}
          width={40}
          height={40}
        />
      </Link>
    )}
  </>
);
