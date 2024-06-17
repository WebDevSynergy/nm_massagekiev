import { TService } from '@/actions/sanity';

import { TCertificate } from './schema';
import { TInput, TabButtonsType } from '@/types';

export type CertificateFormProps = {
  options: TService[] | null;
};

type TButtons<T> = T extends { type: string }
  ? Omit<T, 'type'> & {
      type: Extract<TabButtonsType, T['type']>;
    }
  : T;

export type TCertificateFormData<T> = T extends {
  inputs: (infer I)[];
  commonInputs: (infer V)[];
  select: infer S;
  textarea: infer Q;
  tabButtons: (infer W)[];
}
  ? Omit<
      T,
      'textarea' | 'tabButtons' | 'select' | 'inputs' | 'commonInputs'
    > & {
      inputs: TInput<I, TCertificate>[];
      commonInputs: TInput<V, TCertificate>[];
      select: TInput<S, TCertificate>;
      textarea: TInput<Q, TCertificate>;
      tabButtons: TButtons<W>[];
    }
  : T;
