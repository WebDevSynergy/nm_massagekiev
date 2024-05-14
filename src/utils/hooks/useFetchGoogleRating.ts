'use client';

import { useEffect, useState } from 'react';

export const useFetchGoogleRating = () => {
  const [averageRating, setAverageRating] = useState<number>(0);

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string;
  const PLACE_ID = process.env.NEXT_PUBLIC_PLACE_ID as string;

  const url = `/api/place/details/json?place_id=${PLACE_ID}&fields=name%2Crating%2Cformatted_phone_number&key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        const data = await res.json();

        console.log('data', data);

        const averageRating = data?.result?.rating;

        console.log('data?.result', data?.result);
        console.log('data?.result.rating', data?.result.rating);

        setAverageRating(averageRating);
      } catch (e) {
        console.error('Error fetching place details:', e);
      }
    };

    fetchData();
  }, [url]);

  return averageRating;
};
