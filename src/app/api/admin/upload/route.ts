// src/app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ADMIN_PIN = process.env.ADMIN_BLOG_PIN || 'witqualis2026';

export async function POST(req: NextRequest) {
  try {
    const headerPin = req.headers.get('x-admin-pin');
    if (headerPin !== ADMIN_PIN) {
      return NextResponse.json({ error: 'Unauthorized: Invalid Passcode' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const ext = path.extname(file.name) || '.jpg';
    const cleanName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '-');
    const filename = `${cleanName}-${Date.now()}${ext}`;

    const uploadDir = path.join(process.cwd(), 'public', 'images', 'blog');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    await fs.promises.writeFile(filePath, buffer);

    const publicUrl = `/images/blog/${filename}`;
    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to upload image' }, { status: 500 });
  }
}
