import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fluigdev.apaebrasil.org.br",
        pathname: "/volume/stream/**",
      },
      new URL("https://apae-cms.s3.us-east-1.amazonaws.com/**"),
    ],
  },
  experimental: {
    globalNotFound: true,
  },
  output: "standalone",
}

export default nextConfig
