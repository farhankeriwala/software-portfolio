import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
            {
                protocol: "https",
                hostname: "api.microlink.io",
            },
        ],
    },

    typescript: {
        ignoreBuildErrors: true, // Ignores TypeScript build errors
    },

    eslint: {
        ignoreDuringBuilds: true, // Ignores ESLint build errors
    },

    async redirects() {
      return [
        {
          source: "/",
          destination: "/maintenance",
          permanent: false,
        },
        {
            source: "/about",
            destination: "/maintenance",
            permanent: false,
          },
          {
            source: "/projects/*",
            destination: "/maintenance",
            permanent: false,
          },
          {
            source: "/contact",
            destination: "/maintenance",
            permanent: false,
          },
      ];
    },
};

export default nextConfig;