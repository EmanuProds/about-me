import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: '/about-me',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
