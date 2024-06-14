'use client';

import React, { useState } from 'react';

import { Tab } from '@headlessui/react';

import { cn } from '@/utils';

import { ButtonLink, QuantitySelectorServices } from '@/components/ui';

import { AccordionServiceItemProps } from './types';

import DownIcon from '~/icons/arrow-down.svg';

import dataServices from '@/data/services.json';

export const AccordionServiceItem: React.FC<AccordionServiceItemProps> = ({
  data,
}) => {
  const [quantitySelector, setQuantitySelector] = useState(99);

  const handleDecrement = () => {
    if (quantitySelector !== 0) {
      setQuantitySelector(quantitySelector - 1);
    }
  };

  const handleIncrement = () => {
    setQuantitySelector(quantitySelector + 1);
  };

  const totalPriceCalculate = (price: string, quantity: number) => {
    const priceStr = parseFloat(price);
    const totalPrice = quantity * priceStr;

    return totalPrice;
  };

  const totalDiscPriceCalculate = (price: string, quantity: number) => {
    const priceStr = parseFloat(price);
    let totalPrice = quantity * priceStr;

    if (quantity >= 2 && quantity <= 19) {
      const discount = quantity;
      const discountAmount = (totalPrice * discount) / 100;
      totalPrice -= discountAmount;
    } else if (quantity >= 20) {
      const discount = 20;
      const discountAmount = (totalPrice * discount) / 100;
      totalPrice -= discountAmount;
    }

    return totalPrice;
  };

  return (
    <>
      {data?.map((item, index) => (
        <Tab
          key={index}
          as={'li'}
          className="cursor-pointer list-none border-b border-solid border-brownLight py-4 outline-none first:pt-0"
        >
          {({ selected }) => (
            <>
              <div
                className={cn('flex items-center justify-between', {
                  'mb-2': selected,
                })}
              >
                <p
                  className={cn(
                    'w-fit font-open-sans text-[16px]/[1.2] font-normal uppercase tracking-[-0.32px] text-brownDark xl:text-[18px] xl:font-bold xl:tracking-[-0.36px] 2xl:text-[20px] 2xl:tracking-[-0.4px]',
                    { 'font-bold': selected },
                  )}
                >
                  {item.title}
                </p>
                <DownIcon
                  className={cn(
                    'size-5 transition-[transform] md:size-6',
                    { 'rotate-0 text-orange': selected },
                    { 'rotate-180 text-green': !selected },
                  )}
                />
              </div>
              {selected && (
                <div>
                  <p className="mb-4 font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                    {item.description}
                  </p>
                  <p className="mb-2 font-open-sans text-[14px]/[1.2] font-semibold tracking-[-0.28px] text-brownDark xl:text-[16px] xl:tracking-[-0.32px] 2xl:text-[18px] 2xl:tracking-[-0.36px] mdOnly:font-bold">
                    {dataServices.for}
                  </p>
                  <p className="mb-4 font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                    {item.for}
                  </p>
                  <p className="font-open-sans text-[14px]/[1.2] font-semibold tracking-[-0.28px] text-brownDark xl:text-[16px] xl:tracking-[-0.32px] 2xl:text-[18px] 2xl:tracking-[-0.36px] mdOnly:font-bold">
                    {dataServices.typeDurationPrice}
                  </p>

                  <form className="mt-2 w-full">
                    <label className="flex w-full items-center justify-between rounded-[40px] bg-white p-2 md:px-4">
                      <div className="flex items-center gap-2">
                        <input type="radio" name="option" value="one" />
                        <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                          {dataServices.oneMassage}
                        </span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                          {item.duration}&nbsp;{dataServices.duration}
                        </span>
                        <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                          {item.price}&nbsp;
                          {dataServices.UAH}
                        </span>
                      </div>
                    </label>
                    {item.subscription && (
                      <>
                        <p className="mb-2 mt-4 font-open-sans text-[14px]/[1.2] font-semibold tracking-[-0.28px] text-brownDark xl:text-[16px] xl:tracking-[-0.32px] 2xl:text-[18px] 2xl:tracking-[-0.36px] mdOnly:font-bold">
                          {dataServices.subscriptions}
                        </p>
                        <div className="mb-4 flex flex-col gap-1">
                          <label className="flex w-full items-center justify-between p-2 md:px-4">
                            <div className="flex items-center gap-1">
                              <input type="radio" name="option" value="five" />
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.fiveMassage}
                              </span>
                            </div>

                            <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                              {dataServices.discount5}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-red xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalPriceCalculate(item.price, 5)}&nbsp;
                                {dataServices.UAH}
                              </span>
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalDiscPriceCalculate(item.price, 5)}&nbsp;
                                {dataServices.UAH}
                              </span>
                            </div>
                          </label>

                          <label className="flex w-full items-center justify-between p-2 md:px-4">
                            <div className="flex items-center gap-1">
                              <input type="radio" name="option" value="ten" />
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.tenMassage}
                              </span>
                            </div>

                            <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                              {dataServices.discount10}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-red xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalPriceCalculate(item.price, 10)}&nbsp;
                                {dataServices.UAH}
                              </span>
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalDiscPriceCalculate(item.price, 10)}
                                &nbsp;
                                {dataServices.UAH}
                              </span>
                            </div>
                          </label>

                          <label className="relative flex w-full items-center justify-between p-2 md:px-4">
                            <div className="flex items-center gap-1">
                              <input type="radio" name="option" value="other" />
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.other}
                              </span>
                            </div>

                            <QuantitySelectorServices
                              onClickDecrement={handleDecrement}
                              onClickIncrement={handleIncrement}
                              quantity={quantitySelector}
                              className="absolute left-[45%] top-0 -translate-x-1/2"
                            />
                            <div className="flex items-center gap-2">
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-red xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalPriceCalculate(
                                  item.price,
                                  quantitySelector,
                                )}
                                &nbsp;
                                {dataServices.UAH}
                              </span>
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalDiscPriceCalculate(
                                  item.price,
                                  quantitySelector,
                                )}
                                &nbsp;
                                {dataServices.UAH}
                              </span>
                            </div>
                          </label>
                        </div>
                      </>
                    )}
                    <ButtonLink type="submit" styleType="primary">
                      {dataServices.btn}
                    </ButtonLink>
                  </form>
                </div>
              )}
            </>
          )}
        </Tab>
      ))}
    </>
  );
};
