/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_PUBLIC_BACKEND_URL:"http://localhost:9000"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-2c55e2ff64f541759b0b060c0c90e9bb.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
