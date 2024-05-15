/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    PLACE_ID: process.env.PLACE_ID,
    MAP_ID: process.env.MAP_ID,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    SANITY_SECRET_TOKEN: process.env.SANITY_SECRET_TOKEN,
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  images: {
    deviceSizes: [360, 480, 768, 1024, 1280, 1366, 1440, 1920, 2048],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
  },
};

export default nextConfig;
