import { client } from '../lib/client';

const getServicesQuery = '*[_type == "service"]';

export const getServices = async () => {
  const services = await client.fetch(getServicesQuery);
  return services;
};
