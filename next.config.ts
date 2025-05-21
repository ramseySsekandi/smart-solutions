import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // allow any protocol (http, https)
        hostname: '**', // allow any hostname
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't attempt to require these modules on the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "child_process": false,
        "fs": false,
        "net": false,
        "tls": false,
      }
    }
    return config
  },
};

export default withNextVideo(nextConfig);
