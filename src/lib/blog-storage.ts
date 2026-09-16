// src/lib/blog-storage.ts
import fs from 'fs';
import path from 'path';
import { posts as fallbackPosts, Post, RelatedLink } from '@/data/blog';

export type { Post, RelatedLink };

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'posts.json');

/**
 * Reads all posts from local JSON file (or fallback to static data if file doesn't exist).
 */
export async function getAllBlogPosts(): Promise<Post[]> {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = (await fs.promises.readFile(DATA_FILE_PATH, 'utf-8')).trim();
      if (fileData) {
        const parsed: Post[] = JSON.parse(fileData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch (error) {
    console.error('Error reading posts from JSON file:', error);
  }
  return fallbackPosts;
}

/**
 * Gets a single post by slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<Post | undefined> {
  const allPosts = await getAllBlogPosts();
  return allPosts.find((p) => p.slug === slug);
}

/**
 * Saves or updates a post in the local JSON storage.
 */
export async function saveBlogPost(postData: Partial<Post> & { title: string }): Promise<Post> {
  const allPosts = await getAllBlogPosts();

  // Generate or clean slug
  const baseSlug = (postData.slug || postData.title)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const slug = baseSlug || `post-${Date.now()}`;
  const now = new Date().toISOString().split('T')[0];

  // Calculate read time if not provided
  let readTime = postData.readTime;
  if (!readTime && postData.content) {
    const totalWords = (Array.isArray(postData.content) ? postData.content.join(' ') : String(postData.content))
      .split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(totalWords / 200));
    readTime = `${minutes} min read`;
  }

  // Format content as array of paragraphs
  let contentArray: string[] = [];
  if (Array.isArray(postData.content)) {
    contentArray = postData.content.map((p) => p.trim()).filter(Boolean);
  } else if (typeof postData.content === 'string') {
    contentArray = (postData.content as string)
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);
  }

  const existingIndex = allPosts.findIndex((p) => p.slug === slug || (postData.slug && p.slug === postData.slug));

  const newPost: Post = {
    slug: slug,
    title: postData.title.trim(),
    excerpt: postData.excerpt?.trim() || '',
    date: existingIndex >= 0 ? allPosts[existingIndex].date : (postData.date || now),
    updatedDate: now,
    author: postData.author?.trim() || 'Witqualis Team',
    reviewedBy: postData.reviewedBy?.trim() || 'Reviewed by Witqualis Technical Team',
    readTime: readTime || '5 min read',
    category: postData.category?.trim() || 'Engineering',
    image: postData.image?.trim() || '/images/blog/staff-aug-guide.jpg',
    content: contentArray.length > 0 ? contentArray : [postData.excerpt || ''],
    relatedLinks: postData.relatedLinks || [],
    focusKeyword: postData.focusKeyword?.trim() || '',
    seoTitle: postData.seoTitle?.trim() || '',
    metaDescription: postData.metaDescription?.trim() || ''
  };

  if (existingIndex >= 0) {
    allPosts[existingIndex] = newPost;
  } else {
    allPosts.unshift(newPost); // Prepend new post to the top
  }

  await fs.promises.writeFile(DATA_FILE_PATH, JSON.stringify(allPosts, null, 2), 'utf-8');
  return newPost;
}

/**
 * Deletes a post by slug.
 */
export async function deleteBlogPost(slug: string): Promise<boolean> {
  const allPosts = await getAllBlogPosts();
  const filtered = allPosts.filter((p) => p.slug !== slug);

  if (filtered.length === allPosts.length) {
    return false; // Not found
  }

  await fs.promises.writeFile(DATA_FILE_PATH, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}
