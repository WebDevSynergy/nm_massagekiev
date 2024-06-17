import { TInput } from '@/types';

import { TContact } from './schema';

export type TContactFormData<T> = T extends {
  inputs: (infer I)[];
  textarea: infer Q;
}
  ? Omit<T, 'textarea' | 'inputs' | 'commonInputs'> & {
      inputs: TInput<I, TContact>[];
      textarea: TInput<Q, TContact>;
    }
  : T;
