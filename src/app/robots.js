export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/static/',
    },
    sitemap: 'https://www.retirethailand.net/sitemap.xml',
    host: 'https://www.retirethailand.net',
  };
}
