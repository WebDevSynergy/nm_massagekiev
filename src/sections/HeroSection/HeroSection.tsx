import { ButtonLink, GoogleRating, SectionTitle } from '@/components/ui';

export const HeroSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        HeroSection
        <div className="flex items-center justify-between gap-2">
          <ButtonLink type="button" styleType="primary">
            Записатися
          </ButtonLink>
          <ButtonLink tag="link" href="#services" styleType="secondary">
            Послуги
          </ButtonLink>
        </div>
        <div className="bg-white">
          <GoogleRating />
        </div>
        <SectionTitle>SectionTitle example</SectionTitle>
      </div>
    </section>
  );
};
