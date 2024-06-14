import { getServices } from '@/actions/sanity';

import { Accordion } from '@/components/base';

import { AccordionServiceItem, SectionTitle } from '@/components/ui';

import dataServices from '@/data/services.json';

export const ServicesSection: React.FC = async () => {
  const services = await getServices();

  return (
    <section className="section" id="services">
      <div className="container">
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
