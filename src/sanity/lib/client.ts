import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn, token } from '../env';

export const sanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
});
