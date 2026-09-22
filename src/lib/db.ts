// src/lib/db.ts
import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { Post, posts as fallbackPosts } from '@/data/blog';

const { Pool } = pg;

let pool: pg.Pool | null = null;
let isInitialized = false;

/**
 * Returns the effective PostgreSQL connection string from environment variables.
 */
export function getDatabaseUrl(): string | undefined {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.SUPABASE_DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.NEON_DATABASE_URL
  )?.trim();
}

/**
 * Checks if a database connection URL is configured.
 */
export function isDbConfigured(): boolean {
  const url = getDatabaseUrl();
  return Boolean(url && url.startsWith('postgres'));
}

/**
 * Gets or initializes the PostgreSQL connection pool.
 */
export function getPool(): pg.Pool | null {
  const connectionString = getDatabaseUrl();
  if (!connectionString || !connectionString.startsWith('postgres')) {
    return null;
  }

  if (!pool) {
    const isCloudDb = !connectionString.includes('localhost') && !connectionString.includes('127.0.0.1');

    pool = new Pool({
      connectionString,
      ssl: isCloudDb ? { rejectUnauthorized: false } : false,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });

    pool.on('error', (err) => {
      console.error('Unexpected PostgreSQL client error in idle pool:', err);
    });
  }

  return pool;
}

/**
 * Automatically creates the blog_posts table and seeds initial posts if empty.
 */
export async function initDb(): Promise<boolean> {
  if (isInitialized) return true;

  const db = getPool();
  if (!db) return false;

  try {
    // 1. Create table if it doesn't exist
    await db.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title TEXT NOT NULL,
        excerpt TEXT,
        date VARCHAR(50),
        updated_date VARCHAR(50),
        author VARCHAR(150),
        reviewed_by VARCHAR(200),
        read_time VARCHAR(50),
        category VARCHAR(100),
        image TEXT,
        content JSONB NOT NULL,
        related_links JSONB,
        focus_keyword VARCHAR(255),
        seo_title VARCHAR(255),
        meta_description TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
      CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
    `);

    // 2. Check if table has data; if empty, seed existing posts from posts.json
    const countRes = await db.query('SELECT COUNT(*) as count FROM blog_posts;');
    const count = parseInt(countRes.rows[0]?.count || '0', 10);

    if (count === 0) {
      console.log('Seeding initial blog posts into PostgreSQL database...');
      let seedPosts: Post[] = fallbackPosts;
      const dataFilePath = path.join(process.cwd(), 'src', 'data', 'posts.json');

      if (fs.existsSync(dataFilePath)) {
        try {
          const raw = fs.readFileSync(dataFilePath, 'utf-8');
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            seedPosts = parsed;
          }
        } catch (e) {
          console.warn('Could not read posts.json for initial seed, using static blog data:', e);
        }
      }

      for (const p of seedPosts) {
        const contentArr = Array.isArray(p.content) ? p.content : [String(p.content || '')];
        const linksArr = p.relatedLinks || [];

        await db.query(
          `
          INSERT INTO blog_posts (
            slug, title, excerpt, date, updated_date, author, reviewed_by,
            read_time, category, image, content, related_links, focus_keyword,
            seo_title, meta_description
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
          ON CONFLICT (slug) DO NOTHING;
          `,
          [
            p.slug,
            p.title,
            p.excerpt || '',
            p.date || new Date().toISOString().split('T')[0],
            p.updatedDate || p.date || new Date().toISOString().split('T')[0],
            p.author || 'Witqualis Team',
            p.reviewedBy || 'Reviewed by Witqualis Technical Team',
            p.readTime || '5 min read',
            p.category || 'Engineering',
            p.image || '/images/blog/staff-aug-guide.jpg',
            JSON.stringify(contentArr),
            JSON.stringify(linksArr),
            p.focusKeyword || '',
            p.seoTitle || '',
            p.metaDescription || '',
          ]
        );
      }
      console.log(`Successfully seeded ${seedPosts.length} posts into SQL database.`);
    }

    isInitialized = true;
    return true;
  } catch (error) {
    console.error('PostgreSQL Database Initialization Error:', error);
    return false;
  }
}

/**
 * Executes a SQL query with parameter binding.
 */
export async function query<T extends pg.QueryResultRow = any>(text: string, params?: any[]): Promise<pg.QueryResult<T>> {
  const db = getPool();
  if (!db) {
    throw new Error('Database connection URL is not configured. Set DATABASE_URL in .env.local or Vercel.');
  }

  await initDb();
  return db.query<T>(text, params);
}
