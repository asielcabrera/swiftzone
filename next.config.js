// Update to ES module syntax
const nextConfig = {
  output: 'export',  // For static export with Netlify
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'], // Add any image domains you're using
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Any other configurations you need
};

export default nextConfig;
