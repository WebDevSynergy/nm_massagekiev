export const apiVersion = process.env.SANITY_API_VERSION || '2024-05-03';

export const dataset = assertValue(
  process.env.SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

export const token = assertValue(
  process.env.SANITY_SECRET_TOKEN as string,
  'Missing environment variable: SANITY_SECRET_TOKEN',
);

export const useCdn = false;
// export const useCdn = true;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
