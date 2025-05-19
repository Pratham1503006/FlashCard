/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build', // Change output directory to avoid conflicts
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add clean option to force clean the output directory
  cleanDistDir: true,
};

module.exports = nextConfig;


