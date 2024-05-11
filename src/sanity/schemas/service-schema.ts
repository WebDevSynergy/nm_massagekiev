/* eslint-disable @typescript-eslint/no-explicit-any */
export const service = {
  name: 'service',
  title: 'Послуги ( Мінімум 3 )',
  type: 'document',

  validation: (Rule: any) => [
    Rule.required().error('Колекція обовʼязкова'),
    Rule.custom((review: any) =>
      review.length < 3 ? 'Повинно бути від 3-х послуг' : true,
    ),
  ],

  fields: [
    {
      name: 'title',
      title: 'Назва послуги',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('Назва послуги обовʼязкове поле'),
        Rule.max(55).error('Повинно бути не більше 55 символів'),
        Rule.min(2).error('Повинно бути від 2-х символів'),
      ],
    },

    {
      name: 'description',
      title: 'Опис послуги',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('Опис послуги обовʼзковий'),
        Rule.max(400).error('Повинно бути не більше 400 символів'),
        Rule.min(2).error('Повинно бути від 2-х символів'),
      ],
    },

    {
      name: 'for',
      title: 'Для кого призначена ця послуга?',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('Обовʼзкове поле'),
        Rule.max(70).error('Повинно бути не більше 70 символів'),
        Rule.min(4).error('Повинно бути від 4-х символів'),
      ],
    },

    {
      name: 'duration',
      title: 'Тривалість сеансу, в хвилинах',
      type: 'number',

      validation: (Rule: any) => [Rule.required().error('Обовʼзкове поле')],
    },

    {
      name: 'price',
      title: 'Вартість сеансу, в гривнях',
      type: 'number',

      validation: (Rule: any) => [Rule.required().error('Обовʼзкове поле')],
    },

    {
      name: 'subscription',
      title: 'Абонемент',
      type: 'boolean',
      initialValue: true,

      validation: (Rule: any) => [Rule.required().error('Обовʼзкове поле')],
    },
  ],
};
