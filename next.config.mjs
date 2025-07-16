/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable React Fast Refresh
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Enable Fast Refresh optimizations
    if (dev && !isServer) {
      config.experiments = { ...config.experiments, topLevelAwait: true }
      config.optimization.moduleIds = 'named'
    }
    return config
  },
  // Optimize production build
  swcMinify: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

export default nextConfig
