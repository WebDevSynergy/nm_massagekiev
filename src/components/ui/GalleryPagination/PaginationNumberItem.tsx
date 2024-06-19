import Link from 'next/link';

import { cn } from '@/utils';

import { PaginationNumberItemProps } from './types';

export const PaginationNumberItem: React.FC<PaginationNumberItemProps> = ({
  children,
  href,
  current,
}) => (
  <>
    {href !== '' ? (
      <Link
        className="flex size-10 items-center justify-center rounded-full sm480:size-8"
        href={href}
      >
        {children}
      </Link>
    ) : (
      <p
        className={cn(
          'flex size-10 items-center justify-center rounded-full sm480:size-8',
          current && ' bg-green text-white',
        )}
      >
        {children}
      </p>
    )}
  </>
);
