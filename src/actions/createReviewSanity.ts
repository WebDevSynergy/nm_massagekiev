import { NewReview } from './types';

export const createReviewSanity = async (newReview: NewReview) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${BASE_URL}/api/reviews`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(newReview),
  });

  return await res.json();
};
