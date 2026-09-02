import nodemailer from "nodemailer";

type LeadPayload = Record<string, string | undefined>;

/**
 * Sends a lead notification email via Gmail SMTP.
 *
 * Requires these env vars (set in .env.local for dev, and in Vercel
 * project settings for production):
 *   GMAIL_USER          - the Gmail address to send FROM (e.g. leads@yourdomain.com or you@gmail.com)
 *   GMAIL_APP_PASSWORD  - a 16-character Gmail "App Password" (NOT your normal password)
 *   LEAD_EMAIL_TO       - where leads should be delivered (can be same as GMAIL_USER)
 *
 * See README-LEADS.md for step-by-step setup instructions.
 */
export async function sendLeadEmail(subject: string, payload: LeadPayload) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD, LEAD_EMAIL_TO } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !LEAD_EMAIL_TO) {
    console.warn("[lead-notify] Gmail env vars not set — skipping email send.", payload);
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const rows = Object.entries(payload)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#003526;border-bottom:1px solid #eee;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${escapeHtml(String(v))}</td></tr>`,
    )
    .join("");

  await transporter.sendMail({
    from: `"Typing Center Near Me — Website" <${GMAIL_USER}>`,
    to: LEAD_EMAIL_TO,
    replyTo: payload.email,
    subject,
    html: `
      <div style="font-family:sans-serif;max-width:520px;">
        <h2 style="color:#003526;">${escapeHtml(subject)}</h2>
        <table style="border-collapse:collapse;width:100%;">${rows}</table>
      </div>
    `,
  });
}

/**
 * Posts a lead to a Google Sheet via a Google Apps Script Web App webhook.
 *
 * Requires:
 *   GOOGLE_SHEETS_WEBHOOK_URL - the /exec URL you get after deploying the
 *                               Apps Script as a Web App (see README-LEADS.md)
 *
 * This never throws — a Sheets failure should not block the email from
 * being sent or the form from succeeding for the user.
 */
export async function logLeadToSheet(sheetName: string, payload: LeadPayload) {
  const { GOOGLE_SHEETS_WEBHOOK_URL } = process.env;

  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    console.warn("[lead-notify] GOOGLE_SHEETS_WEBHOOK_URL not set — skipping sheet log.", payload);
    return;
  }

  const body = JSON.stringify({
    sheet: sheetName,
    timestamp: new Date().toISOString(),
    ...payload,
  });

  try {
    await postFollowingRedirects(GOOGLE_SHEETS_WEBHOOK_URL, body);
  } catch (err) {
    console.error("[lead-notify] Failed to log lead to Google Sheet:", err);
  }
}

/**
 * Apps Script /exec URLs always respond with a 302 redirect, even for
 * POST requests. The default fetch redirect behavior downgrades POST to
 * GET when following a 301/302/303, which means the payload never
 * actually reaches doPost(). This manually follows the redirect chain
 * while keeping the request as POST with its original body.
 */
async function postFollowingRedirects(url: string, body: string, maxHops = 5) {
  let currentUrl = url;

  for (let i = 0; i < maxHops; i++) {
    const res = await fetch(currentUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      redirect: "manual",
    });

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location) {
        throw new Error(`Redirect response with no Location header (status ${res.status})`);
      }
      currentUrl = location;
      continue;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Sheets webhook returned ${res.status}: ${text.slice(0, 200)}`);
    }

    return res;
  }

  throw new Error("Too many redirects while posting to Google Sheets webhook");
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
