import { TabButtonsType } from '@/types';

export type FormTabButtonsProps = {
  options: TButton[];
  isCertificateCost: boolean;
  tabType: TabFunc;
};

type TButton = {
  label: string;
  type: TabButtonsType;
};

type TabFunc = {
  [key: string]: () => void;
};
