import type { MetadataRoute } from 'next';
import { stacks } from '@/data/stacks';
import { getAllBlogPosts } from '@/lib/blog-storage';
import { services, solutions } from '@/data/services';

const BASE = 'https://www.witqualis.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
    'about',
    'services',
    'solutions',
    'portfolio',
    'our-team',
    'contact',
    'careers',
    'staff-augmentation',
    'blog'
  ].map((route) => ({
    url: `${BASE}/${route ? route + '/' : ''}`,
    lastModified: new Date()
  }));

  const hireRoutes = stacks.map((s) => ({
    url: `${BASE}/hire/${s.slug}/`,
    lastModified: new Date()
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}/`,
    lastModified: new Date()
  }));

  const solutionRoutes = solutions.map((s) => ({
    url: `${BASE}/solutions/${s.slug}/`,
    lastModified: new Date()
  }));

  const allPosts = await getAllBlogPosts();
  const blogRoutes = allPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}/`,
    lastModified: p.date ? new Date(p.date) : new Date()
  }));

  return [...staticRoutes, ...hireRoutes, ...serviceRoutes, ...solutionRoutes, ...blogRoutes];
}
