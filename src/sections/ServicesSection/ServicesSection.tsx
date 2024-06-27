import { getServices } from '@/actions/sanity';

import { cn } from '@/utils';

import { Accordion } from '@/components/base';

import { SectionTitle } from '@/components/ui';

const AccordionServiceItem = dynamic(
  () => import('@/components/ui/AccordionServiceItem/AccordionServiceItem'),
  {
    ssr: false,
  },
);

import styles from './ServicesSection.module.css';

import dataServices from '@/data/services.json';
import dynamic from 'next/dynamic';

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
