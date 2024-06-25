import { getServices } from '@/actions/sanity';

import { cn } from '@/utils';

import { Accordion } from '@/components/base';

import { AccordionServiceItem, SectionTitle } from '@/components/ui';

import styles from './ServicesSection.module.css';

import dataServices from '@/data/services.json';

export const ServicesSection: React.FC = async () => {
  const services = await getServices();

  return (
    <section className="section bg-beige" id="services">
      <div className={cn('container', styles.services_section)}>
        <SectionTitle className="mb-4 md:mb-6 xl:mb-8 2xl:mb-10">
          {dataServices.serviceTitle}
        </SectionTitle>

        <Accordion type="services">
          <AccordionServiceItem data={services} />
        </Accordion>
      </div>
    </section>
  );
};
