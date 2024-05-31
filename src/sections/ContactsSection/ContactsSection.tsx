import { GoogleMaps } from '@/components/base';

export const ContactsSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        ContactsSection
        <div className="aspect-square w-full overflow-hidden rounded-3xl xl:h-full">
          <GoogleMaps />
        </div>
      </div>
    </section>
  );
};
