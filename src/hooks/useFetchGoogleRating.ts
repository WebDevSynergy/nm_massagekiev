'use client';

import { useEffect, useState } from 'react';

export const useFetchGoogleRating = () => {
  const [averageRating, setAverageRating] = useState<number>(0);

  const API_KEY = process.env.GOOGLE_MAP_API_KEY as string;
  const PLACE_ID = process.env.PLACE_ID as string;

  const url = `/api/place/details/json?place_id=${PLACE_ID}&fields=name%2Crating%2Cformatted_phone_number&key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, { next: { revalidate: 3600 } });

        const data = await res.json();

        const averageRating = data?.result?.rating;

        setAverageRating(averageRating);
      } catch (e) {
        console.error('Error fetching place details:', e);
        setAverageRating(0);
      }
    };

    fetchData();
  }, [url]);

  return averageRating;
};
