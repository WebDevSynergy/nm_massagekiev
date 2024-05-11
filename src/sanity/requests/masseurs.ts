import { client } from '../lib/client';

const getMasseursQuery = '*[_type == "masseur"]';

export const getMasseurs = async () => {
  const masseurs = await client.fetch(getMasseursQuery);
  return masseurs;
};
