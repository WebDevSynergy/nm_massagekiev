import Image from 'next/image';

import { AccordionFAQ } from '@/components/base';
import { SectionTitle } from '@/components/ui';
import FaqDecor from '~/images/faq/faq@2x.webp';

import data from '@/data/faq.json';

export const FAQSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container xl:flex xl:gap-6">
        <div>
          <SectionTitle className="mb-2">{data.titleSection}</SectionTitle>
          <p className="mb-4 font-open-sans text-[16px]/[1.4] font-normal tracking-[-0.32px] text-brownDark md:mb-6 md:text-[18px] md:tracking-[-0.36px] xl:mb-8 2xl:mb-10">
            {data.descriptionSection}
          </p>
          <Image
            src={FaqDecor}
            alt={data.alt}
            className="xl:h-[640px] xl:w-[588px] 2xl:h-[555px] 2xl:w-[808px] smOnly:hidden mdOnly:hidden"
          />
        </div>
        <AccordionFAQ isOpenFirst={true} data={data.faq} />
      </div>
    </section>
  );
};
