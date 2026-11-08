import type { NextConfig } from 'next'

// Sitio estático: `next build` deja la web en out/ y Amplify publica esa carpeta.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
