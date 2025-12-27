/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for S3 static hosting
  output: 'export',

  // Fix EXIF orientation error
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
