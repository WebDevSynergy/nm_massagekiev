/* eslint-disable @typescript-eslint/no-explicit-any */
export const post = {
  name: 'post',
  title: 'Posts (min 3)',
  type: 'document',
  validation: (Rule: any) => [
    Rule.required().error('This collection is required'),
    Rule.custom((review: any) =>
      review.length < 3 ? 'You need at least 3 posts' : true,
    ),
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.max(100).error('This field should be less than 100 characters'),
        Rule.min(2).error('This field should be more than 2 characters'),
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.max(5000).error('This field should be less than 5000 characters'),
        Rule.min(10).error('This field should be more than 10 characters'),
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) =>
        Rule.required().error('This field is required'),
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule: any) =>
        Rule.required().error('This field is required'),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
};
