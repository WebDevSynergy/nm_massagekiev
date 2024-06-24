'use client';

import { useRouter } from 'next/navigation';

import { GoBackBtnProps } from './types';

export const GoBackBtn: React.FC<GoBackBtnProps> = ({
  children,
  className,
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button type="button" className={className} onClick={handleBack}>
      {children}
    </button>
  );
};
