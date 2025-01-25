/* eslint-disable @typescript-eslint/no-explicit-any */

export const rating = {
  name: 'rating',
  title: 'Рейтинг Google',
  type: 'document',

  validation: (Rule: any) => [Rule.required().error('Колекція обовʼзкова')],

  fields: [
    {
      name: 'value',
      title: 'Число від 0 до 5, можливе не ціле число, наприклад 4.9',
      type: 'number',
    },
  ],
};
