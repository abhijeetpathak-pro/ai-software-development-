import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      fullName,
      email,
      workEmail,
      phone,
      phoneNumber,
      company,
      companyName,
      stack,
      roleNeeded,
      service,
      domain,
      timeline,
      budget,
      budgetRange,
      experienceYears,
      portfolioUrl,
      message,
      projectDetails,
      notes
    } = body as Record<string, string | undefined>;

    const senderName = (name || fullName || '').trim();
    const senderEmail = (email || workEmail || '').trim();
    const senderPhone = (phone || phoneNumber || '').trim();
    const senderCompany = (company || companyName || '').trim();
    const senderRoleOrStack = (stack || roleNeeded || service || domain || '').trim();
    const senderTimeline = (timeline || '').trim();
    const senderBudget = (budget || budgetRange || '').trim();
    const senderExp = (experienceYears || '').trim();
    const senderPortfolio = (portfolioUrl || '').trim();
    const senderMessage = (message || projectDetails || notes || '').trim();

    if (!senderName || !senderEmail) {
      return NextResponse.json({ ok: false, error: 'Name and email are required.' }, { status: 400 });
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(senderEmail)) {
      return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER || 'codewithakhil6@gmail.com';
    const rawPass = process.env.SMTP_PASS || 'iwgj gfxz uwbx tjoq';
    const smtpPass = rawPass.replace(/\s+/g, '');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const recipientList = process.env.CONTACT_TO_EMAIL
      ? process.env.CONTACT_TO_EMAIL.split(',').map((e) => e.trim())
      : ['codewithakhil6@gmail.com', 'aslam@witqualis.com'];

    const subjectTitle = senderRoleOrStack
      ? `[WitQualis Inquiry] ${senderName} — ${senderRoleOrStack}`
      : `[WitQualis Inquiry] New submission from ${senderName}`;

    const textSummary = [
      `Name: ${senderName}`,
      `Email: ${senderEmail}`,
      senderPhone ? `Phone: ${senderPhone}` : null,
      senderCompany ? `Company: ${senderCompany}` : null,
      senderRoleOrStack ? `Requirement / Role: ${senderRoleOrStack}` : null,
      senderBudget ? `Budget Range: ${senderBudget}` : null,
      senderTimeline ? `Timeline: ${senderTimeline}` : null,
      senderExp ? `Experience: ${senderExp}` : null,
      senderPortfolio ? `Portfolio / URL: ${senderPortfolio}` : null,
      '',
      'Message / Project Details:',
      senderMessage || '(No additional message provided)'
    ]
      .filter(Boolean)
      .join('\n');

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #E31E24; padding-bottom: 14px; margin-bottom: 20px;">
          <h2 style="color: #0f172a; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">WitQualis Website Inquiry</h2>
          <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received via WitQualis Digital Portal</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">Full Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 700;">${escapeHtml(senderName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Work Email:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${escapeHtml(senderEmail)}" style="color: #E31E24; text-decoration: none; font-weight: 600;">${escapeHtml(senderEmail)}</a></td>
          </tr>
          ${
            senderPhone
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${escapeHtml(senderPhone)}</td>
          </tr>`
              : ''
          }
          ${
            senderCompany
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Company:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${escapeHtml(senderCompany)}</td>
          </tr>`
              : ''
          }
          ${
            senderRoleOrStack
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Service / Requirement:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;"><span style="display: inline-block; background-color: #fef2f2; color: #E31E24; padding: 2px 8px; border-radius: 6px; font-size: 12px; border: 1px solid #fecaca;">${escapeHtml(senderRoleOrStack)}</span></td>
          </tr>`
              : ''
          }
          ${
            senderBudget
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Budget Range:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${escapeHtml(senderBudget)}</td>
          </tr>`
              : ''
          }
          ${
            senderTimeline
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Target Timeline:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${escapeHtml(senderTimeline)}</td>
          </tr>`
              : ''
          }
          ${
            senderExp
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Experience Level:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${escapeHtml(senderExp)}</td>
          </tr>`
              : ''
          }
          ${
            senderPortfolio
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Portfolio / Profile:</td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="${escapeHtml(senderPortfolio)}" target="_blank" style="color: #2563eb; text-decoration: underline;">${escapeHtml(senderPortfolio)}</a></td>
          </tr>`
              : ''
          }
        </table>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-top: 16px;">
          <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Message / Project Brief:</p>
          <p style="margin: 0; font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(senderMessage || 'No message provided.')}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #f1f5f9; text-align: center; color: #94a3b8; font-size: 11px;">
          WitQualis Software Solutions • Instant Lead Notification
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"WitQualis Portal" <${smtpUser}>`,
      to: recipientList.join(', '),
      replyTo: senderEmail,
      subject: subjectTitle,
      text: textSummary,
      html: htmlContent
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

