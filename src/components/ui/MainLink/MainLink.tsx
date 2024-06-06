import Link from 'next/link';

import IconPhone from '~/icons/phone.svg';

import { MainLinkProps } from './types';

export const MainLink: React.FC<MainLinkProps> = ({
  path,
  label,
  tel,
  isHeader,
  onClose,
}) => {
  return (
    <div>
      {tel ? (
        <a
          className="leading-[1.4] tracking-[-0.32px] text-brownDark transition-colors hover:text-green focus:text-green"
          href={`tel:${path}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {isHeader ? (
            <>
              <span className="hidden xl:block">{label}</span>

              <IconPhone width={24} height={24} className="xl:hidden" />
            </>
          ) : (
            label
          )}
        </a>
      ) : (
        <Link
          className="leading-[1.4] tracking-[-0.32px] text-brownDark transition-colors hover:text-green focus:text-green"
          href={path}
          onClick={onClose}
        >
          {label}
        </Link>
      )}
    </div>
  );
};
