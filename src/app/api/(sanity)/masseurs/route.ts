import { client } from '@/sanity/lib/client';

import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const masseurs = await client.fetch('*[_type == "masseur"]');

    return NextResponse.json(masseurs);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
