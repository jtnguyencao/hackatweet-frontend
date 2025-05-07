/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  output: 'export', // Required for static S3 hosting
  trailingSlash: true, // Needed for proper S3 path resolution
};

module.exports = nextConfig;
