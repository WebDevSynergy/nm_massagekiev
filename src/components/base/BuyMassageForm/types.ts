import { TBuyCertificate } from './schema';
import { TInput, TMassage } from '@/types';

export type BuyMassageFormProps = {
  choosedMassage: Omit<TMassage, 'totalCost'> & { totalCost: number };
};

export type TBuyMassageFormData<T> = T extends {
  inputs: (infer I)[];
  textarea: infer Q;
}
  ? Omit<T, 'textarea' | 'inputs'> & {
      inputs: TInput<I, TBuyCertificate>[];
      textarea: TInput<Q, TBuyCertificate>;
    }
  : T;
