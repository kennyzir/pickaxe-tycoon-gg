import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

const routes = [
  { path: '', priority: 1.0, changefreq: 'daily' },
  { path: '/codes', priority: 0.9, changefreq: 'daily' },
  { path: '/tier-list', priority: 0.9, changefreq: 'weekly' },
  { path: '/calculator', priority: 0.8, changefreq: 'weekly' },
  { path: '/beginner-guide', priority: 0.8, changefreq: 'weekly' },
  { path: '/updates', priority: 0.7, changefreq: 'weekly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pickaxetycoon.gg';
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changefreq as any,
    priority: r.priority,
  }));
}
