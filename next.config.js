/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: "images.unsplash.com",
};

module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
