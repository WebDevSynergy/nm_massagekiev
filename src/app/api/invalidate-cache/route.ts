import { NextResponse } from 'next/server';

export async function POST() {
  const projectId = process.env.VERCEL_TOKEN;
  const vercelToken = process.env.VERCEL_TOKEN;

  const response = await fetch(
    `https://api.vercel.com/v2/projects/${projectId}/cache`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
    },
  );

  if (response.ok) {
    return NextResponse.json(
      { message: 'Cache invalidated successfully' },
      { status: 200 },
    );
  } else {
    const errorData = await response.json();
    return NextResponse.json({ error: errorData }, { status: response.status });
  }
}
