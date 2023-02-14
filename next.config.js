/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
