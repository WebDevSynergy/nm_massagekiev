import { type SchemaTypeDefinition } from 'sanity';
import {
  review,
  post,
  instagram,
  masseur,
  service,
  rating,
} from '@/sanity/schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, post, instagram, masseur, service, rating],
};
