# Typing Center Near Me

A bilingual (English / Arabic) marketing website for a UAE typing center,
built with Next.js. It covers Emirates ID, visa, Golden Visa, medical
typing, and business-setup services, with three working lead-capture
forms (Contact, Enquiry/Callback, Newsletter) that email you and log to
a Google Sheet on every submission.

## Tech stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **next-intl** for the English/Arabic bilingual routing (`/` for English, `/ar` for Arabic)
- **Tailwind CSS 4**
- **react-hook-form + zod** for form validation
- **nodemailer** for lead email notifications
- **framer-motion** for animations

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/[locale]/        # pages (home, services, locations, blog, contact, etc.)
  app/actions/         # server actions that handle form submissions (contact.ts, enquiry.ts)
  components/          # UI components (header, footer, forms, sections, etc.)
  lib/data/            # site content: services, locations, blog posts, FAQs, reviews
  lib/site-config.ts   # business info (name, phone, address, map link, etc.)
  lib/lead-notify.ts   # sends lead emails + logs to Google Sheets
  lib/validations/     # zod schemas for the contact & enquiry forms
  messages/            # en.json / ar.json translation strings
  i18n/                # next-intl routing/config
public/
  images/, videos/     # site media (hero video, service photos, review avatars, etc.)
google-apps-script/
  Code.gs              # Apps Script that logs leads to a Google Sheet
```

## Setting up lead capture (email + Google Sheets)

Every submission from the Contact page, the "Request Callback" enquiry
form, and the newsletter signup both **emails you** and **logs a row to
a Google Sheet**. Here's how to wire that up.

### 1. Create a Gmail App Password (for sending lead emails)

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

### 2. Create the Google Sheet + Apps Script webhook

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

### 3. Set the environment variables

Locally, copy `.env.example` to `.env.local` and fill in the real
values:

```bash
cp .env.example .env.local
```

| Name | Value |
|---|---|
| `GMAIL_USER` | your Gmail address |
| `GMAIL_APP_PASSWORD` | the 16-character app password |
| `LEAD_EMAIL_TO` | where leads should be emailed |
| `GOOGLE_SHEETS_WEBHOOK_URL` | the Apps Script `/exec` URL |

On your hosting provider (e.g. Vercel), add the same four variables
under the project's environment variable settings, then redeploy.

### 4. Test it

Once deployed with env vars set, submit each of the three forms on the
live site (Contact page, the "Request Callback" enquiry form, and the
newsletter signup in the footer) and confirm:
- An email arrives at `LEAD_EMAIL_TO`
- A new row appears in the corresponding tab of your Google Sheet

If something doesn't arrive, check your hosting provider's logs for
errors — the code logs a warning if env vars are missing, and any send
failures are logged there too.

## Performance notes

The background videos are the heaviest assets on the site by far, so:

- Keep `hero-video.mp4` and `how-it-works-bg.mp4` around **2-5 MB each** (1920×1080, 30fps, H.264, CRF 26-30, no audio). See `public/videos/README.txt` for the exact ffmpeg command. Exports straight from a phone or stock footage site are often 15-20+ MB at 60fps/4K — always re-encode before dropping a new clip in.
- The Hero video shows `public/images/hero-poster.jpg` as an instant still frame while it streams in, so replace that poster if you replace the video.
- The "How It Works" video only starts loading once the visitor scrolls near it, so it never competes with the Hero video for bandwidth on first load — no setup needed, that's automatic.
- Any other photo used in a page (services, blog, reviews, etc.) should go through the Next.js `<Image>` component, not a raw `<img>` tag — that gets it automatically resized and served as WebP by Vercel.

## Deploying

1. Push this project to a GitHub repository.
2. Import it into your hosting provider (e.g. [Vercel](https://vercel.com/new)) — it auto-detects Next.js, so the default build settings work.
3. Add the four environment variables from the table above before or after the first deploy, then redeploy.
4. Attach your domain in the provider's domain settings.

## Domain redirects

`next.config.ts` redirects the old `.com` domain (apex + `www`) to the
canonical `.ae` domain, preserving path and query string, to keep old
links working while consolidating SEO onto one domain. Update or remove
this if your domain setup differs.
