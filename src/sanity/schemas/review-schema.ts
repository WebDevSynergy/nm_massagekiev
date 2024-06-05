/* eslint-disable @typescript-eslint/no-explicit-any */
export const review = {
  name: 'review',
  title: 'Відгуки ( мінімум 3 )',
  type: 'document',

  validation: (Rule: any) => [
    Rule.required().error('Колекція обовʼязкова'),
    Rule.custom((review: any) =>
      review.length < 3 ? 'Повинно бути від 3-х відгуків' : true,
    ),
  ],

  fields: [
    {
      name: 'author',
      title: 'Імʼя автора відгуку ** | Від 2 до 30 символів',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('Обовʼязкове поле'),
        Rule.max(30).error('Повинно бути не більше 30 символів'),
        Rule.min(2).error('Повинно бути від 2-х символів'),
      ],
    },
    {
      name: 'review',
      title: 'Відгук ** | Від 5 до 400 символів',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('Обовʼязкове поле'),
        Rule.max(400).error('Повинно бути не більше 400 символів'),
        Rule.min(5).error('Повинно бути від 5-ти символів'),
      ],
    },

    {
      name: 'contact',
      title: 'Контакт',
      type: 'text',
    },
  ],
};
