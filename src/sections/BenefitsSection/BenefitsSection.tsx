import { BenefitsList } from '@/components/base';
import { SectionTitle } from '@/components/ui';

import data from '@/data/benefits.json';

export const BenefitsSection: React.FC = () => {
  const { title, id } = data;

  return (
    <section className="section bg-whiteBeige" id={id}>
      <div className="container">
        <SectionTitle className="mb-[16px] md:mb-[24px] xl:mb-[32px] 2xl:mb-[40px]">
          {title}
        </SectionTitle>

        <BenefitsList />
      </div>
    </section>
  );
};
