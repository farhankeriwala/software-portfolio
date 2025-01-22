import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
            }
        ],

    },

    // async redirects() {
    //     return [
    //         {
    //             source: "/",
    //             destination: "/maintenance",
    //             permanent: false,
    //         },
    //     ];
    // },
};

export default nextConfig;
