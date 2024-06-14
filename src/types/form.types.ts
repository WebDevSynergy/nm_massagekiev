export type TInput<T, U> = T extends { name: string }
  ? Omit<T, 'name'> & {
      name: Extract<keyof U, T['name']>;
    }
  : T;
