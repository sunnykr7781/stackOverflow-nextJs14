/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// next.config.js
module.exports = nextConfig;