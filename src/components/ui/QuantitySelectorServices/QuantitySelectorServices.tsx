import React from 'react';

import { cn } from '@/utils';

import { QuantitySelectorServicesProps } from './types';

export const QuantitySelectorServices: React.FC<
  QuantitySelectorServicesProps
> = ({ onClickDecrement, onClickIncrement, quantity, className = '' }) => {
  return (
    <div
      className={cn(
        'flex h-7 w-[84px] items-center rounded-lg bg-greenLight p-1',
        className,
      )}
    >
      <button
        type="button"
        onClick={onClickDecrement}
        className="flex size-6 cursor-pointer items-center justify-center rounded bg-white p-1"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        className="w-7 bg-greenLight text-center"
      />
      <button
        type="button"
        onClick={onClickIncrement}
        className="flex size-6 cursor-pointer items-center justify-center rounded bg-white p-1"
      >
        +
      </button>
    </div>
  );
};
