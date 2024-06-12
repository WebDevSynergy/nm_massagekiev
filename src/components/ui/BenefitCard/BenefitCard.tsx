import { BenefitCardProps } from './types';

import IconBenefits1 from '~/icons/benefits/benefits-1.svg';
import IconBenefits2 from '~/icons/benefits/benefits-2.svg';
import IconBenefits3 from '~/icons/benefits/benefits-3.svg';
import IconBenefits4 from '~/icons/benefits/benefits-4.svg';

export const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  text,
  idx,
}) => {
  const icons = [IconBenefits1, IconBenefits2, IconBenefits3, IconBenefits4];

  const Icon = icons[idx];

  return (
    <li className="md:w-[332px] xl:w-[282px] 2xl:w-[392px]">
      <Icon
        width={80}
        height={80}
        className="mb-[8px] md:mb-[16px] smOnly:mx-auto"
      />

      <h3
        className="mb-[4px] font-semibold uppercase tracking-[-0.32px] text-brownDark md:mb-[8px] xl:text-[18px] 
                   xl:font-bold 2xl:text-[20px] 2xl:tracking-[-0.4px] "
      >
        {title}
      </h3>

      <p className="text-[14px] tracking-[-0.28px] text-brown xl:text-[16px] xl:tracking-[-0.32px] 2xl:text-[18px]  2xl:tracking-[-0.36px] ">
        {text}
      </p>
    </li>
  );
};
