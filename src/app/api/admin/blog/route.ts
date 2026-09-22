// src/app/api/admin/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogPosts, getBlogPostBySlug, saveBlogPost, deleteBlogPost } from '@/lib/blog-storage';
import { isDbConfigured, initDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

const ADMIN_PIN = process.env.ADMIN_BLOG_PIN || 'witqualis2026';

function isAuthorized(req: NextRequest, bodyPin?: string): boolean {
  const headerPin = req.headers.get('x-admin-pin');
  return headerPin === ADMIN_PIN || bodyPin === ADMIN_PIN;
}

// GET: Fetch all posts or single post by slug (or check DB status)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Database connection status check
    const checkDb = searchParams.get('check_db');
    if (checkDb) {
      const configured = isDbConfigured();
      let connected = false;
      if (configured) {
        try {
          connected = await initDb();
        } catch {}
      }
      return NextResponse.json({
        dbConfigured: configured,
        dbConnected: connected,
        engine: connected ? 'PostgreSQL Cloud Database (SQL)' : 'Local JSON Storage'
      });
    }

    const slug = searchParams.get('slug');

    if (slug) {
      const post = await getBlogPostBySlug(slug);
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json({ post });
    }

    const posts = await getAllBlogPosts();
    return NextResponse.json({ posts, count: posts.length });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST: Create or Update post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pin, post } = body;

    if (!isAuthorized(req, pin)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid Passcode' }, { status: 401 });
    }

    if (!post || !post.title) {
      return NextResponse.json({ error: 'Post title is required' }, { status: 400 });
    }

    const savedPost = await saveBlogPost(post);
    return NextResponse.json({ success: true, post: savedPost });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to save post' }, { status: 500 });
  }
}

// DELETE: Delete post by slug
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    const headerPin = req.headers.get('x-admin-pin');

    if (!isAuthorized(req, headerPin || undefined)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid Passcode' }, { status: 401 });
    }

    if (!slug) {
      return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 });
    }

    const deleted = await deleteBlogPost(slug);
    if (!deleted) {
      return NextResponse.json({ error: 'Post not found or could not be deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: `Post "${slug}" deleted successfully` });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to delete post' }, { status: 500 });
  }
}
