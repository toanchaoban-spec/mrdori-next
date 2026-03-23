import type { MetadataRoute } from 'next';
import { properties } from '@/data/properties';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/properties',
    '/auth',
    '/saved',
    '/post-property',
  ].map((path) => ({
    url: `https://mrdori-next.netlify.app${path}`,
    lastModified: new Date(),
  }));

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((property) => ({
    url: `https://mrdori-next.netlify.app/properties/${property.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...propertyRoutes];
}
