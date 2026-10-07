import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cPanel serves the exported site from public_html and runs public/api/*.php.
  output: "export",
  // Emit each route as a folder with index.html (out/facial/index.html)
  // so Apache can serve /facial/ from that directory.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
