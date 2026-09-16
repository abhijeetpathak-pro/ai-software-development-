import { posts as staticPosts, Post as StaticPost } from '@/data/blog';
import { getAllBlogPosts, getBlogPostBySlug as getStoredPostBySlug } from '@/lib/blog-storage';

export async function getMergedPosts(): Promise<StaticPost[]> {
  try {
    const storedPosts = await getAllBlogPosts();
    if (storedPosts && storedPosts.length > 0) {
      return storedPosts;
    }
  } catch (err) {
    console.warn('Local blog storage read error (falling back to static blog data):', err);
  }
  return staticPosts;
}

export async function getPostBySlug(slug: string): Promise<StaticPost | undefined> {
  try {
    const post = await getStoredPostBySlug(slug);
    if (post) {
      return post;
    }
  } catch (err) {
    console.warn(`Local blog storage read error for slug "${slug}":`, err);
  }
  return staticPosts.find((p) => p.slug === slug);
}

