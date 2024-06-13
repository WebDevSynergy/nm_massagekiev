import { TService } from '@/actions/sanity';

import { TCertificate } from './schema';

export type CertificateFormProps = {
  options: TService[] | null;
};

export type ButtonsType = 'service' | 'price';

export type TabButtonsType = {
  label: string;
  type: ButtonsType;
};

export type TSelect = {
  id: string;
  label: string;
  name: keyof TCertificate;
  placeholder: string;
  required: boolean;
};

type TQuantity = {
  id: string;
  label: string;
  name: keyof TCertificate;
  pattern: string;
  defaultValue: undefined;
  required: boolean;
};
type TCertificateCost = {
  id: string;
  label: string;
  name: keyof TCertificate;
  required: boolean;
};

export type TFormData = {
  tabButtons: TabButtonsType[];
  select: TSelect;
  inputs: (TCertificateCost | TQuantity)[];
};
