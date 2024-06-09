/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /src\/components\/content\/*\/*\.json$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
