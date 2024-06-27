'use client';

import React, { useEffect, useState } from 'react';

import { Tab } from '@headlessui/react';

import { ModalBuyCertificate } from '@/components/base';
import { QuantitySelectorServices } from '@/components/ui';

import { AccordionServiceItemProps } from './types';

import { cn } from '@/utils';

import dataServices from '@/data/services.json';

import ArrowIcon from '~/icons/arrow-down.svg';

const AccordionServiceItem: React.FC<AccordionServiceItemProps> = ({
  data,
}) => {
  const getFromLocStorOrDef = (
    key: string,
    defaultValue: number[] | string[],
  ) => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    }
    return defaultValue;
  };

  const initialQuantitySelector = getFromLocStorOrDef(
    'quantitySelector',
    data.map(() => 15),
  );
  const initialSelectedOption = getFromLocStorOrDef(
    'selectedOption',
    data.map(() => 'one'),
  );
  const initialChosenQuantity = getFromLocStorOrDef(
    'chosenQuantity',
    data.map(() => 1),
  );

  const [quantitySelector, setQuantitySelector] = useState<number[]>(
    initialQuantitySelector,
  );

  const [selectedOption, setSelectedOption] = useState<string[]>(
    initialSelectedOption,
  );

  const [chosenQuantity, setChosenQuantity] = useState<number[]>(
    initialChosenQuantity,
  );

  useEffect(() => {
    localStorage.setItem('quantitySelector', JSON.stringify(quantitySelector));
  }, [quantitySelector]);

  useEffect(() => {
    localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
  }, [selectedOption]);

  useEffect(() => {
    localStorage.setItem('chosenQuantity', JSON.stringify(chosenQuantity));
  }, [chosenQuantity]);

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = event.target.value;

    setSelectedOption(prevState => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });

    if (value === 'one') {
      setChosenQuantity(prevState => {
        const newState = [...prevState];
        newState[index] = 1;
        return newState;
      });
    } else if (value === 'five') {
      setChosenQuantity(prevState => {
        const newState = [...prevState];
        newState[index] = 5;
        return newState;
      });
    } else if (value === 'ten') {
      setChosenQuantity(prevState => {
        const newState = [...prevState];
        newState[index] = 10;
        return newState;
      });
    } else if (value === 'other') {
      setChosenQuantity(prevState => {
        const newState = [...prevState];
        newState[index] = quantitySelector[index];
        return newState;
      });
    }
  };

  const handleQuantityChange = (newQuantity: number, index: number) => {
    if (selectedOption[index] === 'other') {
      setQuantitySelector(prevState => {
        const newState = [...prevState];
        newState[index] = newQuantity;
        return newState;
      });

      setChosenQuantity(prevState => {
        const newState = [...prevState];
        newState[index] = newQuantity;
        return newState;
      });
    }
  };

  const handleDecrement = (index: number) => {
    if (selectedOption[index] === 'other' && quantitySelector[index] !== 0) {
      setQuantitySelector(prevState => {
        const newState = [...prevState];
        newState[index] = prevState[index] - 1;
        return newState;
      });

      setChosenQuantity(prevState => {
        const newState = [...prevState];
        newState[index] = prevState[index] - 1;
        return newState;
      });
    }
  };

  const handleIncrement = (index: number) => {
    if (selectedOption[index] === 'other' && quantitySelector[index] !== 99) {
      setQuantitySelector(prevState => {
        const newState = [...prevState];
        newState[index] = prevState[index] + 1;
        return newState;
      });

      setChosenQuantity(prevState => {
        const newState = [...prevState];
        newState[index] = prevState[index] + 1;
        return newState;
      });
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
                <ArrowIcon
                  className={cn(
                    'size-5 transition-[transform] md:size-6',
                    { 'rotate-0 text-green': !selected },
                    { 'rotate-180 text-orange': selected },
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
                    <label className="flex w-full cursor-pointer items-center justify-between p-2 md:p-4">
                      <div className="custom-radio flex items-center gap-2">
                        <input
                          type="radio"
                          name="option"
                          value="one"
                          checked={selectedOption[index] === 'one'}
                          onChange={event => handleRadioChange(event, index)}
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
                            <div className="custom-radio flex items-center gap-1">
                              <input
                                type="radio"
                                name="option"
                                value="five"
                                checked={selectedOption[index] === 'five'}
                                onChange={event =>
                                  handleRadioChange(event, index)
                                }
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
                            <div className="custom-radio flex items-center gap-1">
                              <input
                                type="radio"
                                name="option"
                                value="ten"
                                checked={selectedOption[index] === 'ten'}
                                onChange={event =>
                                  handleRadioChange(event, index)
                                }
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
                            <span className="custom-radio flex items-center gap-1">
                              <input
                                type="radio"
                                name="option"
                                value="other"
                                checked={selectedOption[index] === 'other'}
                                onChange={event =>
                                  handleRadioChange(event, index)
                                }
                              />

                              <span className="font-open-sans text-[12px]/[1.2] font-normal tracking-[-0.24px] text-brown xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {dataServices.other}
                              </span>
                            </span>

                            <QuantitySelectorServices
                              key={index}
                              onClickDecrement={() => handleDecrement(index)}
                              onClickIncrement={() => handleIncrement(index)}
                              quantity={quantitySelector[index]}
                              onQuantityChange={newQuantity =>
                                handleQuantityChange(newQuantity, index)
                              }
                              className="absolute right-[55%] top-[50%] -translate-y-1/2 translate-x-1/2 md:right-[28%] xl:right-[45%] 2xl:right-[34%]"
                            />

                            <div className="flex items-center gap-2 xl:gap-7">
                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-red line-through xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalPriceCalculate(
                                  item.price,
                                  quantitySelector[index],
                                )}
                                &nbsp;
                                {dataServices.UAH}
                              </span>

                              <span className="font-open-sans text-[12px]/[1.2] font-semibold tracking-[-0.24px] text-brownDark xl:text-[14px] xl:tracking-[-0.28px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
                                {totalDiscPriceCalculate(
                                  item.price,
                                  quantitySelector[index],
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
                        massageQuantity: chosenQuantity[index],
                        massageType: item.title,
                        totalCost: totalPriceCalculate(
                          item.price,
                          chosenQuantity[index],
                        ),
                        promoCost: totalDiscPriceCalculate(
                          item.price,
                          chosenQuantity[index],
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

export default AccordionServiceItem;
