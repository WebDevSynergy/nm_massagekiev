/* eslint-disable @typescript-eslint/no-explicit-any */
export const faq = {
  name: 'faq',
  title: 'FAQs (min 3)',
  type: 'document',
  validation: (Rule: any) => [
    Rule.required().error('This collection is required'),
    Rule.custom((review: any) =>
      review.length < 3 ? 'You need at least 3 FAQs' : true,
    ),
  ],
  fields: [
    {
      name: 'name',
      title: 'Author name',
      type: 'string',

      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.max(30).error('This field should be less than 30 characters'),
        Rule.min(2).error('This field should be more than 2 characters'),
      ],
    },
    {
      name: 'review',
      title: 'Review',
      type: 'text',

      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.max(135).error('This field should be less than 135 characters'),
        Rule.min(10).error('This field should be more than 10 characters'),
      ],
    },
  ],
};
