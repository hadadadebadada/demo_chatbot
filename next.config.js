const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    // This will disable ESLint checks during the build process
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignores TypeScript errors during the build process
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['assets.aceternity.com'],
  },
});
