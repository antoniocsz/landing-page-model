import { getPosts } from '@/services/notion'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const slugs = posts.map((post) => ({
    url: `https://www.vemplanejar.com.br/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as any,
    priority: 0.64,
  }))

  return [
    {
      url: 'https://www.vemplanejar.com.br',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.vemplanejar.com.br/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.vemplanejar.com.br/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.vemplanejar.com.br/privacy-of-politics',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.vemplanejar.com.br/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...slugs,
  ]
}
