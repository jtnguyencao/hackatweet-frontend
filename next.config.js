/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  transpilePackages: [
    '@ant-design/icons-svg',
    '@ant-design/icons',
    'antd',
    'rc-util',
    'rc-pagination',
    'rc-picker'
  ]
};

module.exports = nextConfig;