import { client } from '../lib/client';

import { Review } from './types';

const getReviewsQuery = '*[_type == "review"]';

export const createReview = async (review: Review) => {
  const result = client.create(review);
  return result;
};

export const getReviews = async () => {
  const reviews = await client.fetch(getReviewsQuery);
  return reviews;
};
