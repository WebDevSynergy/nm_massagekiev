import { ReviewForm } from '@/components/base/ReviewForm';

type ReviewsItem = {
  _id: string;
  author: string;
  review: string;
};

export const ReviewsSection: React.FC = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${BASE_URL}/api/reviews`, {
    // next: { revalidate: 3600 },
    next: { revalidate: 1 },
  });

  const reviews = await res.json();

  return (
    <section className="section">
      <div className="container">
        <p>ReviewsSection</p>

        {reviews && (
          <ul className="flex gap-8">
            {reviews.map(({ _id, author, review }: ReviewsItem) => {
              return (
                <li key={_id} className="border border-solid p-8">
                  <p>author: {author}</p>
                  <p>review: {review}</p>
                </li>
              );
            })}
          </ul>
        )}

        <ReviewForm />
      </div>
    </section>
  );
};
