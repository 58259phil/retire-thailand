export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://retire-thailand.vercel.app/sitemap.xml',
  };
}