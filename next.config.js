/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
