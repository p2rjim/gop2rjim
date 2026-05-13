/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'standalone',
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
