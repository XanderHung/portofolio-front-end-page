/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = {
  env: {
    SERVER_ADDRESS: process.env.SERVER_ADDRESS,
  },
};
