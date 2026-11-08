import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://solydos.com/', changeFrequency: 'monthly', priority: 1 }]
}
