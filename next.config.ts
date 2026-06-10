import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.graft3d.com',
          },
        ],
        destination: 'https://graft3d.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
