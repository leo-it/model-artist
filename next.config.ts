/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.smartresize.com',
        port: '',
        pathname: '/wallpaper/**',
      },
    ],
  },
}

export default nextConfig
