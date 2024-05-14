import { ReviewForm } from '@/components/base/ReviewForm';

export const ReviewsSection: React.FC = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${BASE_URL}/api/reviews`, {
    // next: { revalidate: 3600 },
    next: { revalidate: 1 },
  });

  const reviewData = await res.json();

  console.log('reviewData', reviewData);

  return (
    <section className="section">
      <div className="container">
        <p>ReviewsSection</p>
        <ReviewForm />
      </div>
    </section>
  );
};
