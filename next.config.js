/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_PUBLIC_BACKEND_URL:"http://localhost:9000"
  }
}

module.exports = nextConfig
