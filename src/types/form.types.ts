export type TFieldInput = 'text' | 'tel' | 'password' | undefined;

export type TInput<T, U> = T extends { name: string; type?: string }
  ? Omit<T, 'name' | 'type'> & {
      name: Extract<keyof U, T['name']>;
      type: TFieldInput;
    }
  : T;

export type TabButtonsType = 'service' | 'price';

export type TMassage = {
  massageQuantity: number;
  totalCost?: number;
  promoCost?: number;
  massageType: string;
};
