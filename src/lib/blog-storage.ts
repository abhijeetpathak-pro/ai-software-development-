// src/lib/blog-storage.ts
import fs from 'fs';
import path from 'path';
import { posts as fallbackPosts, Post, RelatedLink } from '@/data/blog';
import { query, isDbConfigured } from '@/lib/db';

export type { Post, RelatedLink };

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'posts.json');

function mapDbRowToPost(row: any): Post {
  let content = row.content;
  if (typeof content === 'string') {
    try {
      content = JSON.parse(content);
    } catch {
      content = [content];
    }
  }
  if (!Array.isArray(content)) {
    content = [String(content || '')];
  }

  let relatedLinks = row.related_links;
  if (typeof relatedLinks === 'string') {
    try {
      relatedLinks = JSON.parse(relatedLinks);
    } catch {
      relatedLinks = [];
    }
  }
  if (!Array.isArray(relatedLinks)) {
    relatedLinks = [];
  }

  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || '',
    date: row.date || '',
    updatedDate: row.updated_date || row.date || '',
    author: row.author || 'Witqualis Team',
    reviewedBy: row.reviewed_by || 'Reviewed by Witqualis Technical Team',
    readTime: row.read_time || '5 min read',
    category: row.category || 'Engineering',
    image: row.image || '/images/blog/staff-aug-guide.jpg',
    content: content,
    relatedLinks: relatedLinks,
    focusKeyword: row.focus_keyword || '',
    seoTitle: row.seo_title || '',
    metaDescription: row.meta_description || ''
  };
}

/**
 * Reads all posts from PostgreSQL SQL Database (or fallback to local JSON/static data).
 */
export async function getAllBlogPosts(): Promise<Post[]> {
  if (isDbConfigured()) {
    try {
      const res = await query(
        'SELECT * FROM blog_posts ORDER BY id DESC;'
      );
      if (res && res.rows && res.rows.length > 0) {
        return res.rows.map(mapDbRowToPost);
      }
    } catch (error) {
      console.warn('PostgreSQL query error, falling back to local storage:', error);
    }
  }

  // Fallback to local JSON file
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
 * Gets a single post by slug from PostgreSQL (or fallback).
 */
export async function getBlogPostBySlug(slug: string): Promise<Post | undefined> {
  if (isDbConfigured()) {
    try {
      const res = await query(
        'SELECT * FROM blog_posts WHERE slug = $1 LIMIT 1;',
        [slug]
      );
      if (res && res.rows && res.rows.length > 0) {
        return mapDbRowToPost(res.rows[0]);
      }
    } catch (error) {
      console.warn(`PostgreSQL query error for slug "${slug}":`, error);
    }
  }

  const allPosts = await getAllBlogPosts();
  return allPosts.find((p) => p.slug === slug);
}

/**
 * Saves or updates a post in PostgreSQL SQL Database (and updates local JSON storage).
 */
export async function saveBlogPost(postData: Partial<Post> & { title: string }): Promise<Post> {
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

  const newPost: Post = {
    slug: slug,
    title: postData.title.trim(),
    excerpt: postData.excerpt?.trim() || '',
    date: postData.date || now,
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

  // 1. Save to PostgreSQL if configured
  if (isDbConfigured()) {
    try {
      const res = await query(
        `
        INSERT INTO blog_posts (
          slug, title, excerpt, date, updated_date, author, reviewed_by,
          read_time, category, image, content, related_links, focus_keyword,
          seo_title, meta_description, updated_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, CURRENT_TIMESTAMP)
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          excerpt = EXCLUDED.excerpt,
          updated_date = EXCLUDED.updated_date,
          author = EXCLUDED.author,
          reviewed_by = EXCLUDED.reviewed_by,
          read_time = EXCLUDED.read_time,
          category = EXCLUDED.category,
          image = EXCLUDED.image,
          content = EXCLUDED.content,
          related_links = EXCLUDED.related_links,
          focus_keyword = EXCLUDED.focus_keyword,
          seo_title = EXCLUDED.seo_title,
          meta_description = EXCLUDED.meta_description,
          updated_at = CURRENT_TIMESTAMP
        RETURNING *;
        `,
        [
          newPost.slug,
          newPost.title,
          newPost.excerpt,
          newPost.date,
          newPost.updatedDate,
          newPost.author,
          newPost.reviewedBy,
          newPost.readTime,
          newPost.category,
          newPost.image,
          JSON.stringify(newPost.content),
          JSON.stringify(newPost.relatedLinks),
          newPost.focusKeyword,
          newPost.seoTitle,
          newPost.metaDescription
        ]
      );

      if (res && res.rows && res.rows.length > 0) {
        // Also update local JSON if writable
        try {
          if (fs.existsSync(path.dirname(DATA_FILE_PATH))) {
            const allPosts = await getAllBlogPosts();
            const existingIdx = allPosts.findIndex((p) => p.slug === slug);
            if (existingIdx >= 0) allPosts[existingIdx] = newPost;
            else allPosts.unshift(newPost);
            await fs.promises.writeFile(DATA_FILE_PATH, JSON.stringify(allPosts, null, 2), 'utf-8');
          }
        } catch {}

        return mapDbRowToPost(res.rows[0]);
      }
    } catch (error) {
      console.error('PostgreSQL saveBlogPost error, attempting local fallback:', error);
    }
  }

  // 2. Fallback to local JSON storage
  try {
    let allPosts: Post[] = [];
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = (await fs.promises.readFile(DATA_FILE_PATH, 'utf-8')).trim();
      if (fileData) allPosts = JSON.parse(fileData);
    }

    const existingIndex = allPosts.findIndex((p) => p.slug === slug || (postData.slug && p.slug === postData.slug));
    if (existingIndex >= 0) {
      newPost.date = allPosts[existingIndex].date || newPost.date;
      allPosts[existingIndex] = newPost;
    } else {
      allPosts.unshift(newPost);
    }

    await fs.promises.writeFile(DATA_FILE_PATH, JSON.stringify(allPosts, null, 2), 'utf-8');
  } catch (err) {
    console.error('Local JSON save error:', err);
  }

  return newPost;
}

/**
 * Deletes a post by slug from PostgreSQL and local JSON storage.
 */
export async function deleteBlogPost(slug: string): Promise<boolean> {
  let deleted = false;

  // 1. Delete from PostgreSQL
  if (isDbConfigured()) {
    try {
      const res = await query(
        'DELETE FROM blog_posts WHERE slug = $1 RETURNING id;',
        [slug]
      );
      deleted = Boolean(res && res.rowCount && res.rowCount > 0);
    } catch (error) {
      console.error('PostgreSQL deleteBlogPost error:', error);
    }
  }

  // 2. Also delete from local JSON storage
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = (await fs.promises.readFile(DATA_FILE_PATH, 'utf-8')).trim();
      if (fileData) {
        const allPosts: Post[] = JSON.parse(fileData);
        const filtered = allPosts.filter((p) => p.slug !== slug);
        if (filtered.length !== allPosts.length) {
          await fs.promises.writeFile(DATA_FILE_PATH, JSON.stringify(filtered, null, 2), 'utf-8');
          deleted = true;
        }
      }
    }
  } catch (err) {
    console.error('Local JSON delete error:', err);
  }

  return deleted;
}
