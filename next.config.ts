import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables lint errors from breaking builds
  },};

export default nextConfig;
