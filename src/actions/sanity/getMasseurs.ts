import { sanityClient } from '@/sanity/lib/client';

import { MasseursResponse } from './types';

const query = `
*[_type == "masseur"] | order(_createdAt) {
  "image": {
    "src": image.asset->url, 
    "alt": name,
    "lqip": image.asset->metadata.lqip
  }, 
  "id": _id, 
  "certificateArray": certificateArray[] {
    "id": _key,
    "src": asset->url,
    "alt": caption,
    "lqip": asset->metadata.lqip
  },
  "resume": resume, 
  "name": name
}
`;

export const getMasseurs = async (): Promise<MasseursResponse | null> => {
  try {
    const masseurs =
      (await sanityClient.fetch(query, {}, { next: { revalidate: 3600 } })) ||
      null;

    return masseurs;
  } catch (error) {
    return null;
  }
};
