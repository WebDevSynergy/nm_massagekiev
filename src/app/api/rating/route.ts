import { NextResponse } from 'next/server';

export const GET = async () => {
  const API_KEY = process.env.GOOGLE_MAP_API_KEY as string;
  const PLACE_ID = process.env.PLACE_ID as string;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name%2Crating%2Cformatted_phone_number&key=${API_KEY}`;

  try {
    const res = await fetch(url);

    const data = await res.json();

    const averageRating = data?.result?.rating;

    return NextResponse.json(
      { message: 'Success', data: averageRating },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
