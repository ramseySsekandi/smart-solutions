import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // allow any protocol (http, https)
        hostname: '**', // allow any hostname
      },
    ],
  },
};

export default withNextVideo(nextConfig);
