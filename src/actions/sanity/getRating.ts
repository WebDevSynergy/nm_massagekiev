import { sanityClient } from '@/sanity/lib/client';

export const getRating = async () => {
  try {
    const rating =
      (await sanityClient.fetch(
        `*[_type == "rating"][0] {
  value
}`,
        {},

        { next: { revalidate: 60 } },
      )) || null;

    return rating?.value;
  } catch (error) {
    return null;
  }
};
