/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keeps this Next 16 build separate from any previous Next 15 .next cache.
  distDir: '.next-16'
};

module.exports = nextConfig;
