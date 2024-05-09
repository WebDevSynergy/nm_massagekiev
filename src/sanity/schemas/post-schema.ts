/* eslint-disable @typescript-eslint/no-explicit-any */

export const post = {
  name: 'post',
  title: 'Posts (min 3)',
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
      title: 'Title',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(100).error('Може містити до 100 символів'),
        Rule.min(2).error('Повинно містити від 2 символів'),
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.max(5000).error('Може містити до 5000 символів'),
        Rule.min(10).error('Повинно містити від 10 символів'),
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) => Rule.required().error('Поле обовʼязкове'),
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          validation: (Rule: any) => Rule.required().error('Поле обовʼязкове'),
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url',
      validation: (Rule: any) => [
        Rule.required().error(
          'Поле обовʼязкове та повинно бути унікальним та англійською - призначене для генерування slug',
        ),
        Rule.max(200).error('Може містити до 200 символів'),
        Rule.min(5).error('Повинно містити від 5 символів'),
      ],
    },
    {
      title: 'Slug',
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
