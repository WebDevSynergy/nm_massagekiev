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
        'flex h-7 w-[84px] items-center rounded-lg bg-greenLight p-1 xl:w-[105px]',
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
        className="w-7 bg-greenLight text-center font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:w-[49px] xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]"
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
