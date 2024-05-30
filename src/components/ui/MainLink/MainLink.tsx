import Link from 'next/link';

import { MainLinkProps } from './types';

export const MainLink: React.FC<MainLinkProps> = ({ path, label, tel }) => {
  return (
    <Link
      className="leading-[1.4] text-brownDark transition-colors hover:text-green focus:text-green"
      href={tel ? `tel:${path}` : path}
      target={tel ? '_blank' : '_self'}
      rel={tel ? 'noopener noreferrer nofollow' : 'tag'}
    >
      {label}
    </Link>
  );
};
