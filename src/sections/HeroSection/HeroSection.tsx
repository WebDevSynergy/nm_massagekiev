import { ButtonLink, GoogleRating, SectionTitle } from '@/components/ui';

import contactData from '@/data/contactUs-form.json';

export const HeroSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle>HeroSection</SectionTitle>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <ButtonLink tag="link" href={contactData.id} styleType="primary">
            Записатися
          </ButtonLink>
          <ButtonLink tag="link" href="#services" styleType="secondary">
            Послуги
          </ButtonLink>
        </div>
        <div className="bg-white">
          <GoogleRating />
        </div>
      </div>
    </section>
  );
};
