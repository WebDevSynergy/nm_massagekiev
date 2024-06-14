import React from 'react';

import { FormTabButtonsProps } from './types';

import { cn } from '@/utils';

export const FormTabButtons: React.FC<FormTabButtonsProps> = ({
  options,
  isCertificateCost,
  tabType,
}) => {
  return (
    <ul className="mb-2 grid grid-cols-2 gap-4 xl:mb-4 xl:gap-6">
      {options.map(({ label, type }) => (
        <li key={label}>
          <button
            type="button"
            onClick={tabType[type]}
            className={cn(
              'w-full rounded-2xl bg-white py-[14px] text-sm/[1.2] font-bold uppercase text-grey md:leading-5',
              {
                'text-greenDark':
                  (isCertificateCost && type === 'price') ||
                  (!isCertificateCost && type !== 'price'),
              },
            )}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
