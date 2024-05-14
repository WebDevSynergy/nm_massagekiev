import { NextResponse } from 'next/server';

import { client } from '@/sanity/lib/client';

export const GET = async () => {
  try {
    const data = await client.fetch('*[_type == "instagram"]');

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(null);
  }
};
