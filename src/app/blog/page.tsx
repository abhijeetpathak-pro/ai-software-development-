// src/app/blog/page.tsx
import type { Metadata } from 'next';
import { getMergedPosts } from '@/lib/sanity/queries';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
  title: 'Witqualis Engineering Insights — Architecture, Scaling & Squad Hiring',
  description: 'Practical technical writing from our senior architects, AI researchers, and engineering leads. Rigorous, field-tested, and built for production teams.',
  alternates: { canonical: '/blog/' }
};

export const revalidate = 60; // ISR revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getMergedPosts();
  return <BlogClientPage initialPosts={posts} />;
}
