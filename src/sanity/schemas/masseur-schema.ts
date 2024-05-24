/* eslint-disable @typescript-eslint/no-explicit-any */
export const masseur = {
  name: 'masseur',
  title: 'Масажисти ( мінімум 2 )',
  type: 'document',

  validation: (Rule: any) => [
    Rule.required().error('Колекція обовʼязкова'),
    Rule.custom((review: any) =>
      review.length < 3 ? 'Повинно бути мінімум 2 масажиста' : true,
    ),
  ],

  fields: [
    {
      name: 'image',
      title: 'Фото',
      type: 'image',

      validation: (Rule: any) => Rule.required().error('Поле обовʼязкове'),
      options: {
        hotspot: true, // <-- Defaults to false
      },

      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Альтернативний текст та для скрінрідера. Що зображено?',
          validation: (Rule: any) => Rule.required().error('Поле обовʼязкове'),
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution (заповнювати не потрібно)',
        },
      ],
    },

    {
      name: 'name',
      title: 'Імʼя ** || Від 2 до 30 символів',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(30).error('Повинно бути не більше 30 символів'),
        Rule.min(2).error('Повинно бути від 2-х символів'),
      ],
    },

    {
      name: 'resume',
      title: 'Резюме масажиста ** || Від 500 до 600 символів',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(600).error('Повинно бути не більше 900 символів'),
        Rule.min(500).error('Повинно бути від 500 символів'),
      ],
    },

    {
      name: 'certificateArray',
      title: 'Сертифікати',
      type: 'array',
      of: [
        {
          name: 'certificate',
          title: 'Сертифікат',
          type: 'image',

          validation: (Rule: any) => Rule.required().error('Поле обовʼязкове'),
          options: {
            hotspot: true, // <-- Defaults to false
          },

          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Альтернативний текст та для скрінрідера. Що зображено?',

              validation: (Rule: any) =>
                Rule.required().error('Поле обовʼязкове'),
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution (заповнювати не потрібно)',
            },
          ],
        },
      ],
    },
  ],
};
