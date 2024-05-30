import { cn } from '@/utils';

import { SectionTitleProps } from './types';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = '',
  isCentered = false,
}) => {
  return (
    <h2
      className={cn(
        'font-open-sans text-[24px]/[1.2] font-bold tracking-[-0.02em] text-blackLight md:text-[32px] xl:text-[36px] 2xl:text-[40px]',
        {
          'text-center': isCentered,
        },
        className,
      )}
    >
      {children}
    </h2>
  );
};
