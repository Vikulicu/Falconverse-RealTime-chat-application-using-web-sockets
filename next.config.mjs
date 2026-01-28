/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows production builds to successfully complete 
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // If you also have TypeScript errors, add this:
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
