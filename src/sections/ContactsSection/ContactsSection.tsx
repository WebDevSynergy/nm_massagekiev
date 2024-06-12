import { GoogleMaps } from '@/components/base';

export const ContactsSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        ContactsSection
        <div className="aspect-square size-full h-[328px] max-h-[328px] overflow-hidden rounded-3xl md:max-h-[688px] 2xl:max-w-[1048px]">
          <GoogleMaps />
        </div>
      </div>
    </section>
  );
};
