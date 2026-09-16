/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/career/',
        destination: '/careers/',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact/',
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable Webpack pack file cache to prevent RangeError: Failed to allocate memory
      config.cache = false;
    }
    return config;
  }
};

export default nextConfig;
