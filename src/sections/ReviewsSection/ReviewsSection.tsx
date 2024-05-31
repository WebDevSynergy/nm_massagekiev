import { ReviewForm } from '@/components/base';
import { ReviewCard, SectionTitle } from '@/components/ui';

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
        <SectionTitle>ReviewsSection</SectionTitle>

        {reviews && (
          <ul className="flex flex-wrap gap-4 xl:gap-6 2xl:gap-10">
            {reviews.map(({ _id, author, review }: ReviewsItem) => {
              return (
                <li key={_id}>
                  <ReviewCard author={author} review={review} />
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
