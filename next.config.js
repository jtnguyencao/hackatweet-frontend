/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export mode
  images: {
    loader: 'akamai', // Use static image loader
    path: '',          // No path prefix for images
  },
};