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
      title: 'Заголовок',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(100).error('Може містити до 100 символів'),
        Rule.min(2).error('Повинно містити від 2 символів'),
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
      name: 'preDescription',
      title: 'Текст статті (до зображення)',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(5000).error('Може містити до 5000 символів'),
        Rule.min(10).error('Повинно містити від 10 символів'),
      ],
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

    {
      name: 'postDescription',
      title: 'Текст статті (після зображення)',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(5000).error('Може містити до 5000 символів'),
        Rule.min(10).error('Повинно містити від 10 символів'),
      ],
    },

    {
      name: 'url',
      type: 'string',
      title:
        'Створення адреси сторінки статті. Декілька слів АНГЛІЙСЬКОЮ що відповідають назві статті',

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
  ],
};
