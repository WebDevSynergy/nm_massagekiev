export const HeroSection: React.FC = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${BASE_URL}/api/rating`);

  const { data } = await res.json();

  const ratingValue = data | 0;

  return (
    <section className="section">
      <div className="container">
        HeroSection
        <div className="bg-white">
          <p>{ratingValue}</p>
        </div>
      </div>
    </section>
  );
};
