/* eslint-disable @typescript-eslint/no-explicit-any */

export const post = {
  name: 'post',
  title: 'Статті ( мінімум 3)',
  type: 'document',

  validation: (Rule: any) => [
    Rule.required().error('Ця колекція обовʼзкова'),
    Rule.custom((review: any) =>
      review.length < 3 ? 'Повинно бути від 3-х постів' : true,
    ),
  ],

  fields: [
    {
      name: 'title',
      title:
        'Заголовок. *** | Обовʼязково! Від 2 до 70 символів | картки постів, мета',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(70).error('Може містити до 70 символів'),
        Rule.min(2).error('Повинно містити від 2 символів'),
      ],
    },

    {
      name: 'description',
      title:
        'Короткий опис. *** | Обовʼязково! Від 10 до 1000 символів | опис картки постів, мета',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(1000).error('Може містити до 1000 символів'),
        Rule.min(10).error('Повинно містити від 10 символів'),
      ],
    },

    {
      name: 'image',
      title: 'Зображення для карток постів',
      type: 'image',
      validation: (Rule: any) => Rule.required().error('Поле обовʼязкове'),
      options: {
        hotspot: true,
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
      name: 'priority',
      title:
        'Пріоритет. --- Упорядковує елементи, найбільше значення - перший елемент. Якщо в даному пості не потрібно змінювати пріоритет то краще залишити значення за замовчуванням 0',
      type: 'number',
      initialValue: 0,

      validation: (Rule: any) => [Rule.required().error('Поле обовʼязкове')],
    },

    {
      name: 'url',
      type: 'string',
      title:
        'Створення адреси сторінки статті. Декілька слів АНГЛІЙСЬКОЮ що відповідають назві статті (Людино-зрозумілі URL). Google орієнтується на них для визначення релевантності сторінки',

      validation: (Rule: any) => [
        Rule.required().error(
          'Поле обовʼязкове та повинно бути унікальним та англійською - призначене для генерування slug',
        ),
        Rule.max(200).error('Може містити до 200 символів'),
        Rule.min(5).error('Повинно містити від 5 символів'),
      ],
    },

    {
      title:
        'Генератор ідентифікатора сторінки. --- Все добре коли зʼявиться строка з англійських слів між якими є дефіси.     !!! Погано коли є незрозумілі символи, щоб вирішити це - потрібно переписати англійськими літерами попереднє поле і згенерувати ще раз',
      name: 'slug',
      type: 'slug',

      validation: (Rule: any) =>
        Rule.required().error('Поле обовʼязкове та повинно бути унікальним'),
      options: {
        source: 'url',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          encodeURI(input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)),
      },
    },

    {
      name: 'body',
      title: 'Редактор контенту',
      type: 'array',
      of: [
        { type: 'block' },
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
