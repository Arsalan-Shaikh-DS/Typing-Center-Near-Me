# Deploying to Vercel + Setting Up Lead Capture

This covers three things: getting the code onto GitHub, deploying it on
Vercel, and wiring up the three lead forms (Contact, Callback Enquiry,
Newsletter) so every submission both **emails you** and **logs to a
Google Sheet**.

---

## 1. Push the code to GitHub

1. Go to https://github.com/new and create a new repository (e.g.
   `typing-center-near-me`). Keep it private if you like — Vercel works
   with private repos too.
2. In the project folder on your machine:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/typing-center-near-me.git
   git push -u origin main
   ```

## 2. Deploy on Vercel

1. Go to https://vercel.com/new and sign in (GitHub login is easiest).
2. Click **Import** next to the repo you just pushed.
3. Framework preset should auto-detect as **Next.js** — leave build
   settings as default.
4. Before clicking Deploy, add the environment variables from step 4
   below (or add them afterward in **Project Settings → Environment
   Variables** and redeploy).
5. Click **Deploy**. You'll get a live `*.vercel.app` URL; you can attach
   your own domain afterward in **Project Settings → Domains**.

## 3. Create a Gmail App Password (for sending lead emails)

Gmail won't accept your normal password from an app like this — you need
an "App Password."

1. Turn on 2-Step Verification on the Gmail account you want to send
   from, if it isn't already: https://myaccount.google.com/security
2. Go to https://myaccount.google.com/apppasswords
3. Create a new app password (name it e.g. "Typing Center Website").
4. Copy the 16-character password shown — you won't be able to see it
   again.

You now have:
- `GMAIL_USER` = the Gmail address itself
- `GMAIL_APP_PASSWORD` = the 16-character password
- `LEAD_EMAIL_TO` = whichever inbox should receive leads (can be the same
  address, or a different one — e.g. your team distribution list)

## 4. Create the Google Sheet + Apps Script webhook

1. Create a new Google Sheet (or use an existing one) — this is where
   all leads will be logged.
2. In the Sheet, go to **Extensions → Apps Script**.
3. Delete the placeholder code and paste in the contents of
   `google-apps-script/Code.gs` from this project.
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, and approve the permission prompts (it needs access
   to edit the spreadsheet).
6. Copy the **Web app URL** — it ends in `/exec`. This is your
   `GOOGLE_SHEETS_WEBHOOK_URL`.

The script automatically creates a tab for each form ("Contact",
"Enquiry", "Newsletter") with headers on first submission — you don't
need to set up columns manually.

> Re-deploy note: if you ever edit `Code.gs` again, use **Deploy → Manage
> deployments → Edit → New version** so the `/exec` URL keeps working.

## 5. Set the environment variables

Locally, copy `.env.example` to `.env.local` and fill in the real
values:

```bash
cp .env.example .env.local
```

On Vercel, go to **Project Settings → Environment Variables** and add
the same four variables:

| Name | Value |
|---|---|
| `GMAIL_USER` | your Gmail address |
| `GMAIL_APP_PASSWORD` | the 16-character app password |
| `LEAD_EMAIL_TO` | where leads should be emailed |
| `GOOGLE_SHEETS_WEBHOOK_URL` | the Apps Script `/exec` URL |

After adding them, trigger a redeploy (Vercel does this automatically on
your next `git push`, or click **Redeploy** in the dashboard).

## 6. Test it

Once deployed with env vars set, submit each of the three forms on the
live site (Contact page, the "Request Callback" enquiry form, and the
newsletter signup in the footer) and confirm:
- An email arrives at `LEAD_EMAIL_TO`
- A new row appears in the corresponding tab of your Google Sheet

If something doesn't arrive, check **Vercel → your project → Logs** for
errors — the code logs a warning if env vars are missing, and any send
failures are logged there too.
