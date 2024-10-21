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

// Export the configuration using ES modules syntax
export default nextConfig;