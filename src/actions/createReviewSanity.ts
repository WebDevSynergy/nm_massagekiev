'use server';

import { revalidatePath } from 'next/cache';

import { sanityClient } from '@/sanity/lib/client';

import { NewReview } from './types';

export const createReviewSanity = async (newReview: NewReview) => {
  revalidatePath('/');
  return await sanityClient.create(newReview);
};
