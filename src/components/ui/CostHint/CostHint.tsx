import React from 'react';

import { CostHintProps } from './types';

export const CostHint: React.FC<CostHintProps> = ({ options, onClick }) => {
  return (
    <ul className="mb-8 flex items-center justify-between gap-4 md:mb-[22px] xl:mb-[25px]">
      {options.map(cost => (
        <li key={cost} className="smOnly:basis-1/3 smOnly:last-of-type:hidden">
          <button
            className="w-full rounded bg-beigeDark py-1 text-base/[1.2] text-brown transition-all hover:bg-green/20 hover:text-blackLight focus:bg-green/20 focus:text-blackLight md:w-[86px]"
            type="button"
            onClick={() => onClick(cost)}
          >
            {cost}
          </button>
        </li>
      ))}
    </ul>
  );
};
