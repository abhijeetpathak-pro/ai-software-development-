import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const TO_ADDRESSES = ['aslam@witqualis.com', 'codewithakhil6@gmail.com'];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, stack, message } = body as {
      name?: string;
      email?: string;
      stack?: string;
      message?: string;
    };

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Name and email are required.' }, { status: 400 });
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please provide a valid email.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"WitQualis Website" <${process.env.SMTP_USER}>`,
      to: TO_ADDRESSES.join(', '),
      replyTo: email,
      subject: `New enquiry from ${name} \u2014 WitQualis website`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Stack / role needed: ${stack || 'Not specified'}`,
        '',
        'Message:',
        message || '(no message provided)'
      ].join('\n'),
      html: `
        <div style="font-family: sans-serif; line-height:1.6;">
          <h2>New enquiry from the WitQualis website</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Stack / role needed:</strong> ${escapeHtml(stack || 'Not specified')}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(message || '(no message provided)').replace(/\n/g, '<br/>')}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form email error:', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong sending your message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
