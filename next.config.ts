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
    //
    // async redirects() {
    //     return [
    //         {
    //             source: "/",
    //             destination: "/maintenance", // Redirects to the maintenance page
    //             permanent: false, // Set to false for temporary redirects (e.g., during maintenance)
    //         },
    //     ];
    // },
};

export default nextConfig;
