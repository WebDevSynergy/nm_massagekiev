'use server';

import { revalidatePath } from 'next/cache';

import { client } from '@/sanity/lib/client';

import { NewReview } from './types';

export const createReviewSanity = async (newReview: NewReview) => {
  revalidatePath('/');
  return await client.create(newReview);
};
