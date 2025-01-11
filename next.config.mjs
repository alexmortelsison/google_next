/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pngimg.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
