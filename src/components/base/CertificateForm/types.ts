import { TService } from '@/actions/sanity';

import { TCertificate } from './schema';
import { TInput } from '@/types';

export type CertificateFormProps = {
  options: TService[] | null;
};

type ButtonsType = 'service' | 'price';

type TabButtonsType<T> = T extends { type: string }
  ? Omit<T, 'type'> & {
      type: Extract<ButtonsType, T['type']>;
    }
  : T;

export type TFormData<T> = T extends {
  inputs: (infer I)[];
  commonInputs: (infer V)[];
  select: infer S;
  textarea: infer Q;
  tabButtons: (infer W)[];
}
  ? Omit<T, 'texQrea' | 'tabButtons' | 'select' | 'inputs' | 'commonInputs'> & {
      inputs: TInput<I, TCertificate>[];
      commonInputs: TInput<V, TCertificate>[];
      select: TInput<S, TCertificate>;
      textarea: TInput<Q, TCertificate>;
      tabButtons: TabButtonsType<W>[];
    }
  : T;
