import Image from 'next/image';

import { SectionTitle } from '@/components/ui';
import { ContactUsForm } from '@/components/base';

import data from '@/data/contact-us.json';

import ContactUsImage from '~/images/contactUs/contactUs@2x.webp';

export const ContactUsSections: React.FC = () => {
  const { id, image, title } = data;

  return (
    <section className="section" id={id}>
      <div className="container xl:grid xl:grid-cols-2 xl:items-center xl:gap-6">
        <div className="relative mx-auto mb-4 aspect-square w-full overflow-hidden rounded-3xl md:rounded-4xl xl:aspect-auto xl:h-[588px] xl:max-w-[894px] xl:rounded-5xl 2xl:h-[808px] 2xl:max-w-[1084px]">
          <Image
            className="object-cover"
            src={ContactUsImage}
            alt={image.alt}
            fill
          />
        </div>

        <div>
          <SectionTitle className="mb-6 md:mb-4">{title}</SectionTitle>

          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};
