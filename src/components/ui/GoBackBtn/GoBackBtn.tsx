import Link from 'next/link';

import { GoBackBtnProps } from './types';

import data from '@/data/post.json';

export const GoBackBtn: React.FC<GoBackBtnProps> = ({
  children,
  className,
}) => {
  const { href } = data;
  return (
    <Link type="button" className={className} href={href}>
      {children}
    </Link>
  );
};
