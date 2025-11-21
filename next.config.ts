/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // This sets the root for Turbopack and removes the warning.
    root: __dirname,
  },
};

module.exports = nextConfig;
