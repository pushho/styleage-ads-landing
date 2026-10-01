import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cPanel serves the exported site from public_html and runs public/api/*.php.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
