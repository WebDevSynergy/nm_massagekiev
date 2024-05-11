/* eslint-disable @typescript-eslint/no-explicit-any */

export const instagram = {
  name: 'instagram',
  title: 'Instagram ( мінімум 6 )',
  type: 'document',

  validation: (Rule: any) => [
    Rule.required().error('Колекція обовʼзкова'),
    Rule.custom((review: any) =>
      review.length < 6 ? 'Повинно бути від 6-х фото' : true,
    ),
  ],

  fields: [
    {
      name: 'title',
      title: 'Назва (не обовʼязково)',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Зображення',
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
  ],
};
