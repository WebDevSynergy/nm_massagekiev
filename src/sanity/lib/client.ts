import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn, token } from '../env';

console.log('token', token);

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
});
