import { type SchemaTypeDefinition } from 'sanity';
import { review, post, faq, masseur, service } from '@/sanity/schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, post, faq, masseur, service],
};
