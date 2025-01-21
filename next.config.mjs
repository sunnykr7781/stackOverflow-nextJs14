/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }, 
      {
        protocol: 'http',
        hostname: '*'
      }, 
    ]
  }
}

// Export the configuration using ES modules syntax
export default nextConfig;