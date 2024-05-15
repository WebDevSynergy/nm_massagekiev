import { GoogleRating } from '@/components/ui';

export const HeroSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        HeroSection
        <div className="bg-white">
          <GoogleRating />
        </div>
      </div>
    </section>
  );
};
