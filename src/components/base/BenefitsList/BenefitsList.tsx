import { BenefitCard } from '@/components/ui';

import data from '@/data/benefits.json';

export const BenefitsList: React.FC = () => {
  const { benefits } = data;

  return (
    <ul className="flex flex-col gap-[16px] md:flex-row xl:gap-[24px] mdOnly:flex-wrap">
      {benefits.map((benefit, idx) => (
        <BenefitCard key={idx} idx={idx} {...benefit} />
      ))}
    </ul>
  );
};
