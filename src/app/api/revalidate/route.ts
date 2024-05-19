import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

interface RevalidateRequestBody {
  slug?: string;
  updateType: 'post' | 'other';
}

export async function POST(req: NextRequest) {
  try {
    const body: RevalidateRequestBody = await req.json();
    const { slug, updateType } = body;

    if (updateType === 'post' && slug) {
      const pathToRevalidate = `/blog/${slug}`;

      await revalidatePath(pathToRevalidate);

      await revalidatePath('/');

      await revalidatePath('blog');

      return NextResponse.json(
        { revalidated: true, path: pathToRevalidate },
        { status: 200 },
      );
    } else if (updateType !== 'post') {
      await revalidatePath('/');

      await revalidatePath('blog');

      return NextResponse.json(
        { revalidated: true, path: "'/' and 'blog'" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: 'Invalid update type' },
        { status: 400 },
      );
    }
  } catch (err) {
    return NextResponse.json(
      { message: 'Failed to revalidate', err },
      { status: 500 },
    );
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};
