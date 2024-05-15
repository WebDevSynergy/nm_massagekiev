import { NextResponse } from 'next/server';

import { client } from '@/utils/client';

export const GET = async () => {
  try {
    const services = await client.fetch('*[_type == "service"]');

    return NextResponse.json(services);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
