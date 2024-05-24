import { ReviewForm } from '@/components/base';

import { getReviews } from '@/actions/sanity';

type ReviewsItem = {
  _id: string;
  author: string;
  review: string;
};

export const ReviewsSection: React.FC = async () => {
  const reviews = await getReviews();

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
