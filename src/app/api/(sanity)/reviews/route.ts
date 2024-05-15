import { NextResponse } from 'next/server';

import { client } from '@/utils/client';

import { Review } from './types';

export const GET = async () => {
  try {
    const data = await client.fetch(
      '*[_type == "review"]{_id, author, review}',
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(null);
  }
};

export const POST = async (req: Request) => {
  try {
    const review: Review = await req.json();

    await client.create(review);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
