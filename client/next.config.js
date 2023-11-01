/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: "http://localhost:3001",
    },
    images: {
        remotePatterns: [
            {
                // domains: ["localhost"],
                protocol: "http",
                hostname: "**",
                port: "3001",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
