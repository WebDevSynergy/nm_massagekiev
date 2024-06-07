import Link from 'next/link';

import { MainLinkProps } from './types';

export const MainLink: React.FC<MainLinkProps> = ({
  path,
  label,
  tel,
  onClose,
}) => {
  return (
    <Link
      className="leading-[1.4] tracking-[-0.32px] text-brownDark transition-colors hover:text-green focus:text-green"
      href={tel ? `tel:${path}` : path}
      target={tel ? '_blank' : '_self'}
      rel={tel ? 'noopener noreferrer nofollow' : 'tag'}
      onClick={onClose}
    >
      {label}
    </Link>
  );
};
