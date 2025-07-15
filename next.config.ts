/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the magic line for static export
  images: {
    unoptimized: true, // Recommended for static export if you're not using a custom image loader
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '',
};

module.exports = nextConfig;