/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    SERVER_ADDRESS: process.env.SERVER_ADDRESS,
  },
};
