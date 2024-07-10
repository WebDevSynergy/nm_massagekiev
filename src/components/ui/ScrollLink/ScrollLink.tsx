'use client';

import { Link } from 'react-scroll';
import { usePathname } from 'next/navigation';

import { ScrollLinkProps } from './types';
import { MainLink } from '../MainLink';

export const ScrollLink: React.FC<ScrollLinkProps> = ({
  path,
  label,
  onClose,
}) => {
  const currentPath = usePathname();

  return (
    <div>
      {currentPath === '/' && label !== 'Блог' ? (
        <Link
          to={path}
          smooth={true}
          duration={500}
          onClick={onClose}
          className="block cursor-pointer py-2 leading-[1.4] tracking-[-0.32px] text-brownDark transition-colors hover:text-green focus:text-green"
        >
          {label}
        </Link>
      ) : (
        <MainLink
          path={label === 'Блог' || label === 'Головна' ? path : `/#${path}`}
          label={label}
          onClose={onClose}
        />
      )}
    </div>
  );
};
