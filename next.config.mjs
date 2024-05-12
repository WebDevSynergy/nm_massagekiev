/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://maps.googleapis.com/maps/api/:path*', // проксируем запросы к Google Places API
      },
    ];
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
