import { TMassage } from '@/types';

export type ModalBuyCertificateProps = {
  choosedMassage: Omit<TMassage, 'totalCost'> & { totalCost: number };
};
