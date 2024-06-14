import { TInput } from '@/types';

import { TReview } from './schema';

export type TReviewFormData<T> = T extends {
  inputs: (infer I)[];
  textarea: infer Q;
}
  ? Omit<T, 'textrea' | 'inputs' | 'commonInputs'> & {
      inputs: TInput<I, TReview>[];
      textarea: TInput<Q, TReview>;
    }
  : T;

export type ReviewFormInputs = {
  _type: string;
  author: string;
  review: string;
  contact: string;
};
