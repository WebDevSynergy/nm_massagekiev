'use client';

import { useFetchGoogleRating } from '@/hooks';

export const GoogleRating: React.FC = () => {
  const rating = useFetchGoogleRating();
  return (
    <div>
      <p>GoogleRating: {rating}</p>
    </div>
  );
};
