import { GoogleMaps } from '@/components/base';
import { ContactCard } from '@/components/ui';

export const ContactsSection: React.FC = () => {
  return (
    <section className="section bg-beige">
      <div className="container">
        <div className="xl:flex xl:items-center xl:justify-between ">
          <ContactCard />

          <div className="aspect-square size-full h-[328px] max-h-[328px] overflow-hidden rounded-3xl md:h-[688px] md:max-h-full xl:h-[686px] xl:w-[608px] 2xl:w-[1048px]">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </section>
  );
};
