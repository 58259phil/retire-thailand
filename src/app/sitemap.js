export default function sitemap() {
  return [
    {
      url: 'https://retire-thailand.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://retire-thailand.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://retire-thailand.vercel.app/cities',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://retire-thailand.vercel.app/blog/australian-pension-thailand',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://retire-thailand.vercel.app/blog/thai-retirement-visa-australians',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://retire-thailand.vercel.app/blog/cost-of-living-thailand-australians-2026',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://retire-thailand.vercel.app/blog/transfer-australian-pension-thailand',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://retire-thailand.vercel.app/cities/hua-hin',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://retire-thailand.vercel.app/cities/khon-kaen',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://retire-thailand.vercel.app/cities/chiang-mai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}