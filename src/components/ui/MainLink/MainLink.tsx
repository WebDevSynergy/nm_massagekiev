import Link from 'next/link';

import { MainLinkProps } from './types';

import { cn } from '@/utils';

import data from '@/data/common.json';

import IconPhone from '~/icons/phone.svg';

export const MainLink: React.FC<MainLinkProps> = ({
  path,
  label,
  tel,
  isHeader,
  onClose,
  className,
}) => {
  const { phoneIconAreaLabel } = data.phone;

  return (
    <div>
      {tel ? (
        <a
          className={cn(
            'leading-[1.4] tracking-[-0.32px] text-brownDark transition-colors hover:text-green focus:text-green',
            className,
          )}
          href={`tel:${path}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {isHeader ? (
            <>
              <span className="hidden xl:block">{label}</span>

              <IconPhone
                className="size-8 p-1 md:size-10 md:p-2 xl:hidden"
                aria-label={phoneIconAreaLabel}
              />
            </>
          ) : (
            label
          )}
        </a>
      ) : (
        <Link
          className={cn(
            'block py-2 leading-[1.4] tracking-[-0.32px] text-brownDark transition-colors hover:text-green focus:text-green',
            className,
          )}
          href={path}
          onClick={onClose}
        >
          {label}
        </Link>
      )}
    </div>
  );
};
