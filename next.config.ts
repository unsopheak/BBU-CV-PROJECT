/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["i.pravatar.cc"], // Allow external images from i.pravatar.cc
  },
  webpack(config, { dev }) {
      if (!dev) {
        // Disable source maps in production
        config.devtool = false;
      }
      return config;
    }
};

export default nextConfig;

