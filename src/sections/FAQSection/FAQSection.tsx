import { cn } from '@/utils';

import { Accordion } from '@/components/base';

import { AccordionFAQItem, SectionTitle } from '@/components/ui';

import styles from './FAQSection.module.css';

import data from '@/data/faq.json';

export const FAQSection: React.FC = () => {
  const { id, titleSection, faq, descriptionSection } = data;

  return (
    <section className="section bg-whiteBeige" id={id}>
      <div className={cn('container xl:flex xl:gap-6', styles.faq_section)}>
        <div className="smOnly:mb-4 mdOnly:mb-6">
          <SectionTitle className="mb-2">{titleSection}</SectionTitle>

          <p className="font-open-sans text-[16px]/[1.4] font-normal tracking-[-0.32px] text-brownDark md:text-[18px] md:tracking-[-0.36px]">
            {descriptionSection}
          </p>
        </div>

        <Accordion type="faq">
          <AccordionFAQItem data={faq} />
        </Accordion>
      </div>
    </section>
  );
};
