'use client';

import React, { useState } from 'react';

import { Tab } from '@headlessui/react';

import { cn } from '@/utils';

import { QuantitySelectorServices } from '@/components/ui';

import { AccordionServiceItemProps } from './types';

import DownIcon from '~/icons/arrow-down.svg';

import { ModalBuyCertificate } from '@/components/base';
import dataServices from '@/data/services.json';

export const AccordionServiceItem: React.FC<AccordionServiceItemProps> = ({
  data,
}) => {
  const [quantitySelector, setQuantitySelector] = useState<number>(99);
  const [selectedOption, setSelectedOption] = useState('one');
  const [chosenQuantity, setChosenQuantity] = useState<number>(1);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSelectedOption(value);

    if (value === 'one') {
      setChosenQuantity(1);
    } else if (value === 'five') {
      setChosenQuantity(5);
    } else if (value === 'ten') {
      setChosenQuantity(10);
    } else if (value === 'other') {
      setChosenQuantity(quantitySelector);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (selectedOption === 'other') {
      setQuantitySelector(newQuantity);
      setChosenQuantity(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (selectedOption === 'other' && quantitySelector !== 0) {
      setQuantitySelector(quantitySelector - 1);
      setChosenQuantity(quantitySelector - 1);
    }
  };

  const handleIncrement = () => {
    if (selectedOption === 'other' && quantitySelector !== 99) {
      setQuantitySelector(quantitySelector + 1);
      setChosenQuantity(quantitySelector + 1);
    }
  };

  const totalPriceCalculate = (price: string, quantity: number) => {
    const priceStr = parseFloat(price);
    const totalPrice = quantity * priceStr;

    return Math.round(totalPrice);
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

    return Math.round(totalPrice);
  };

  return (
    <>
      {data?.map((item, index) => (
        <Tab
          key={index}
          as={'li'}
          className="list-none border-b border-solid border-brownLight py-4 outline-none first:pt-0"
        >
          {({ selected }) => (
            <>
              <div
                className={cn(
                  'flex cursor-pointer items-center justify-between',
                  {
                    'mb-2': selected,
                  },
                )}
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
                    <label className="flex w-full cursor-pointer items-center justify-between rounded-[40px] bg-white p-2 md:p-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="option"
                          value="one"
                          checked={selectedOption === 'one'}
                          onChange={handleRadioChange}
                        />
                        <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                          {dataServices.oneMassage}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 md:gap-5 xl:gap-10">
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
                          <label className="relative flex w-full cursor-pointer items-center justify-between p-2 md:p-4">
                            <div className="flex items-center gap-1">
                              <input
                                type="radio"
                                name="option"
                                value="five"
                                checked={selectedOption === 'five'}
                                onChange={handleRadioChange}
                              />
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.fiveMassage}
                              </span>
                            </div>
                            <div className="2xl:absolute 2xl:right-[37%] 2xl:translate-x-1/2">
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px] smOnly:hidden mdOnly:hidden xlOnly:hidden">
                                {dataServices.fiveMassage}
                              </span>
                              <span className="absolute right-[55%] top-[50%] -translate-y-1/2 translate-x-1/2 font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown md:right-[28%] xl:right-[45%] xl:text-[14px] xl:tracking-[-0.28px] 2xl:right-[-30%] 2xl:text-[16px] 2xl:tracking-[-0.32px] ">
                                {dataServices.discount5}
                              </span>
                            </div>
                            <div className="flex items-center gap-[14px] xl:gap-9">
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-red line-through xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalPriceCalculate(item.price, 5)}&nbsp;
                                {dataServices.UAH}
                              </span>
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalDiscPriceCalculate(item.price, 5)}&nbsp;
                                {dataServices.UAH}
                              </span>
                            </div>
                          </label>

                          <label className="relative flex w-full cursor-pointer items-center justify-between p-2 md:p-4">
                            <div className="flex items-center gap-1">
                              <input
                                type="radio"
                                name="option"
                                value="ten"
                                checked={selectedOption === 'ten'}
                                onChange={handleRadioChange}
                              />
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.tenMassage}
                              </span>
                            </div>
                            <div className="2xl:absolute 2xl:right-[39%] 2xl:translate-x-1/2">
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px] smOnly:hidden mdOnly:hidden xlOnly:hidden">
                                {dataServices.tenMassage}
                              </span>
                              <span className="absolute right-[55%] top-[50%] -translate-y-1/2 translate-x-1/2 font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown md:right-[28%] xl:right-[45%] xl:text-[14px] xl:tracking-[-0.28px] 2xl:right-[-36%] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.discount10}
                              </span>
                            </div>
                            <div className="flex items-center gap-[14px] xl:gap-9">
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-red line-through xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
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

                          <label className="relative flex w-full cursor-pointer items-center justify-between p-2 md:p-4">
                            <div className="flex items-center gap-1">
                              <input
                                type="radio"
                                name="option"
                                value="other"
                                checked={selectedOption === 'other'}
                                onChange={handleRadioChange}
                              />
                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.other}
                              </span>
                            </div>

                            <QuantitySelectorServices
                              onClickDecrement={handleDecrement}
                              onClickIncrement={handleIncrement}
                              quantity={quantitySelector}
                              onQuantityChange={handleQuantityChange}
                              className="absolute right-[55%] top-[50%] -translate-y-1/2 translate-x-1/2 md:right-[28%] xl:right-[45%] 2xl:right-[34%]"
                            />
                            <div className="flex items-center gap-2 xl:gap-7">
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-red line-through xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
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

                    <ModalBuyCertificate
                      choosedMassage={{
                        massageQuantity: chosenQuantity,
                        massageType: item.title,
                        totalCost: totalPriceCalculate(
                          item.price,
                          chosenQuantity,
                        ),
                        promoCost: totalDiscPriceCalculate(
                          item.price,
                          chosenQuantity,
                        ),
                      }}
                    />
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
