'use client';

import React, { useRef } from 'react';

import { cn } from '@/utils';

import { QuantitySelectorServicesProps } from './types';

export const QuantitySelectorServices: React.FC<
  QuantitySelectorServicesProps
> = ({
  onClickDecrement,
  onClickIncrement,
  quantity,
  onQuantityChange,
  className = '',
}) => {
  const incrementButtonRef = useRef<HTMLButtonElement>(null);
  const decrementButtonRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = parseInt(value, 10);
    console.log(value);

    if (!isNaN(numberValue) && numberValue > 0 && numberValue < 100) {
      onQuantityChange(numberValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      if (event.currentTarget === incrementButtonRef.current) {
        onClickIncrement();
      } else if (event.currentTarget === decrementButtonRef.current) {
        onClickDecrement();
      }
    }
  };

  return (
    <div
      className={cn(
        'flex h-7 w-[84px] items-center rounded-lg bg-greenLight p-1',
        className,
      )}
    >
      <button
        type="button"
        ref={decrementButtonRef}
        onClick={onClickDecrement}
        onKeyDown={handleKeyDown}
        className="flex size-6 cursor-pointer items-center justify-center rounded bg-white p-1"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="w-7 bg-greenLight text-center"
      />
      <button
        type="button"
        ref={incrementButtonRef}
        onClick={onClickIncrement}
        onKeyDown={handleKeyDown}
        className="flex size-6 cursor-pointer items-center justify-center rounded bg-white p-1"
      >
        +
      </button>
    </div>
  );
};
