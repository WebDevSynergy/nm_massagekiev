import { client } from '../lib/client';

const getInstagramPhotosQuery = '*[_type == "instagram"]';

export const getInstagramPhotos = async () => {
  const photos = await client.fetch(getInstagramPhotosQuery);
  return photos;
};
